import { createKysely } from "@vercel/postgres-kysely";
import { DB } from "./types";
import { InsertObject, sql } from "kysely";

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
          .sum<number>(
            sql`cast(${eb
              .case("node")
              .when(true)
              .then(1)
              .else(0)
              .end()} as int)`,
          )
          .as("supportsNodeCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("browser")
              .when(true)
              .then(1)
              .else(0)
              .end()} as int)`,
          )
          .as("supportsBrowserCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("workerd")
              .when(true)
              .then(1)
              .else(0)
              .end()} as int)`,
          )
          .as("supportsWorkerdCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("edgeLight")
              .when(true)
              .then(1)
              .else(0)
              .end()} as int)`,
          )
          .as("supportsEdgeLightCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("deno")
              .when(true)
              .then(1)
              .else(0)
              .end()} as int)`,
          )
          .as("supportsDenoCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("bun")
              .when(true)
              .then(1)
              .else(0)
              .end()} as int)`,
          )
          .as("supportsBunCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("node")
              .when(null)
              .then(0)
              .else(1)
              .end()} as int)`,
          )
          .as("totalReportNodeCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("browser")
              .when(null)
              .then(0)
              .else(1)
              .end()} as int)`,
          )
          .as("totalReportBrowserCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("workerd")
              .when(null)
              .then(0)
              .else(1)
              .end()} as int)`,
          )
          .as("totalReportWorkerdCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("edgeLight")
              .when(null)
              .then(0)
              .else(1)
              .end()} as int)`,
          )
          .as("totalReportEdgeLightCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("deno")
              .when(null)
              .then(0)
              .else(1)
              .end()} as int)`,
          )
          .as("totalReportDenoCnt"),
        eb.fn
          .sum<number>(
            sql`cast(${eb
              .case("bun")
              .when(null)
              .then(0)
              .else(1)
              .end()} as int)`,
          )
          .as("totalReportBunCnt"),
      ];
    })
    .where("packageName", "=", packageName)
    .groupBy("packageName")
    .executeTakeFirst();
};
