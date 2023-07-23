-- CreateEnum
CREATE TYPE "Runtime" AS ENUM ('node', 'browser', 'workerd', 'edgeLight', 'deno', 'bun');

-- CreateTable
CREATE TABLE "RuntimeSuport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isSupported" BOOLEAN NOT NULL,
    "type" "Runtime" NOT NULL,
    "user" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RuntimeSuport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RuntimeSuport_name_idx" ON "RuntimeSuport"("name");

-- CreateIndex
CREATE INDEX "RuntimeSuport_name_type_idx" ON "RuntimeSuport"("name", "type");

-- CreateIndex
CREATE INDEX "RuntimeSuport_name_user_idx" ON "RuntimeSuport"("name", "user");
