/*
  Warnings:

  - You are about to drop the `RuntimeSuport` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RuntimeSuport";

-- CreateTable
CREATE TABLE "RuntimeSupport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isSupported" BOOLEAN NOT NULL,
    "type" "Runtime" NOT NULL,
    "user" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RuntimeSupport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RuntimeSupport_name_idx" ON "RuntimeSupport"("name");

-- CreateIndex
CREATE INDEX "RuntimeSupport_name_type_idx" ON "RuntimeSupport"("name", "type");

-- CreateIndex
CREATE INDEX "RuntimeSupport_name_user_idx" ON "RuntimeSupport"("name", "user");
