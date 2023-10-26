-- CreateTable
CREATE TABLE "HomePageContent" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "homeTitle" TEXT NOT NULL,
    "pageTitle" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "HomePageContent_pkey" PRIMARY KEY ("id")
);
