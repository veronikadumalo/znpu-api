-- CreateTable
CREATE TABLE "PageInfo" (
    "id" TEXT NOT NULL,
    "uaAddress" TEXT NOT NULL,
    "plAddress" TEXT NOT NULL,
    "phoneNuber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "additionalEmail" TEXT NOT NULL,
    "facebookLink" TEXT NOT NULL,
    "uaPageTitle" TEXT NOT NULL,
    "plPageTitle" TEXT NOT NULL,

    CONSTRAINT "PageInfo_pkey" PRIMARY KEY ("id")
);
