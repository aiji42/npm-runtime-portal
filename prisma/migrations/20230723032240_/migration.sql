/*
  Warnings:

  - You are about to drop the column `createdAt` on the `RuntimeSupport` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `RuntimeSupport` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `RuntimeSupport` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `RuntimeSupport` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `RuntimeSupport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[packageName,userId]` on the table `RuntimeSupport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `packageName` to the `RuntimeSupport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `RuntimeSupport` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "RuntimeSupport_name_idx";

-- DropIndex
DROP INDEX "RuntimeSupport_name_type_idx";

-- DropIndex
DROP INDEX "RuntimeSupport_name_user_idx";

-- AlterTable
ALTER TABLE "RuntimeSupport" DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "type",
DROP COLUMN "updatedAt",
DROP COLUMN "user",
ADD COLUMN     "isSupportBrowser" BOOLEAN,
ADD COLUMN     "isSupportBun" BOOLEAN,
ADD COLUMN     "isSupportDeno" BOOLEAN,
ADD COLUMN     "isSupportEdgeLight" BOOLEAN,
ADD COLUMN     "isSupportNode" BOOLEAN,
ADD COLUMN     "isSupportWorkerd" BOOLEAN,
ADD COLUMN     "packageName" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "isSupported" DROP NOT NULL;

-- DropEnum
DROP TYPE "Runtime";

-- CreateIndex
CREATE UNIQUE INDEX "RuntimeSupport_packageName_userId_key" ON "RuntimeSupport"("packageName", "userId");
