/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `HomePageContent` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HomePageContent_type_key" ON "HomePageContent"("type");
