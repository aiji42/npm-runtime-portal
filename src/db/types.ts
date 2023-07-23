import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type RuntimeSupportReport = {
    id: Generated<number>;
    packageName: string;
    userId: string;
    node: boolean | null;
    browser: boolean | null;
    workerd: boolean | null;
    edgeLight: boolean | null;
    deno: boolean | null;
    bun: boolean | null;
};
export type DB = {
    RuntimeSupportReport: RuntimeSupportReport;
};
