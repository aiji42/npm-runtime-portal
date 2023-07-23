/*
  Warnings:

  - You are about to drop the `RuntimeSupport` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RuntimeSupport";

-- CreateTable
CREATE TABLE "RuntimeSupportReport" (
    "id" SERIAL NOT NULL,
    "packageName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "node" BOOLEAN,
    "browser" BOOLEAN,
    "workerd" BOOLEAN,
    "edgeLight" BOOLEAN,
    "deno" BOOLEAN,
    "bun" BOOLEAN,

    CONSTRAINT "RuntimeSupportReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RuntimeSupportReport_packageName_userId_key" ON "RuntimeSupportReport"("packageName", "userId");
