import { createKysely } from "@vercel/postgres-kysely";
import { DB } from "./types";
import { InsertObject } from "kysely";

const db = createKysely<DB>();

export const upsertRuntimeSupportReport = (
  data: InsertObject<DB, "RuntimeSupportReport">,
) => {
  return db
    .insertInto("RuntimeSupportReport")
    .values(data)
    .onConflict((oc) =>
      oc.columns(["packageName", "userId"]).doUpdateSet({
        node: (eb) => eb.ref("excluded.node"),
        browser: (eb) => eb.ref("excluded.browser"),
        workerd: (eb) => eb.ref("excluded.workerd"),
        edgeLight: (eb) => eb.ref("excluded.edgeLight"),
        deno: (eb) => eb.ref("excluded.deno"),
        bun: (eb) => eb.ref("excluded.bun"),
      }),
    )
    .execute();
};

export const findRuntimeSupportReport = ({
  packageName,
  userId,
}: {
  packageName: string;
  userId: string;
}) => {
  return db
    .selectFrom("RuntimeSupportReport")
    .select([
      "id",
      "packageName",
      "node",
      "browser",
      "workerd",
      "edgeLight",
      "deno",
      "bun",
    ])
    .where("packageName", "=", packageName)
    .where("userId", "=", userId)
    .executeTakeFirst();
};

export const aggregateRuntimeSupportStatus = (packageName: string) => {
  return db
    .selectFrom("RuntimeSupportReport")
    .select((eb) => {
      return [
        "packageName",
        eb.fn
          .sum(eb.case("node").when(true).then(1).else(0).end())
          .as("supportsNodeCnt"),
        eb.fn
          .sum(eb.case("browser").when(true).then(1).else(0).end())
          .as("supportsBrowserCnt"),
        eb.fn
          .sum(eb.case("workerd").when(true).then(1).else(0).end())
          .as("supportsWorkerdCnt"),
        eb.fn
          .sum(eb.case("edgeLight").when(true).then(1).else(0).end())
          .as("supportsEdgeLightCnt"),
        eb.fn
          .sum(eb.case("deno").when(true).then(1).else(0).end())
          .as("supportsDenoCnt"),
        eb.fn
          .sum(eb.case("bun").when(true).then(1).else(0).end())
          .as("supportsBunCnt"),
        eb.fn
          .sum(eb.case("node").when(null).then(0).else(1).end())
          .as("totalReportNodeCnt"),
        eb.fn
          .sum(eb.case("browser").when(null).then(0).else(1).end())
          .as("totalReportBrowserCnt"),
        eb.fn
          .sum(eb.case("workerd").when(null).then(0).else(1).end())
          .as("totalReportWorkerdCnt"),
        eb.fn
          .sum(eb.case("edgeLight").when(null).then(0).else(1).end())
          .as("totalReportEdgeLightCnt"),
        eb.fn
          .sum(eb.case("deno").when(null).then(0).else(1).end())
          .as("totalReportDenoCnt"),
        eb.fn
          .sum(eb.case("bun").when(null).then(0).else(1).end())
          .as("totalReportBunCnt"),
      ];
    })
    .where("packageName", "=", packageName)
    .executeTakeFirst();
};
