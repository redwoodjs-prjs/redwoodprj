-- CreateTable
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "done" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample.email_unique" ON "UserExample"("email");
