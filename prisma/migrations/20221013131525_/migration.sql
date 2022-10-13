/*
  Warnings:

  - Added the required column `institutionAssociatedID` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "institutionAssociatedID" TEXT NOT NULL,
    CONSTRAINT "Users_institutionAssociatedID_fkey" FOREIGN KEY ("institutionAssociatedID") REFERENCES "Instituitions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("email", "id", "username") SELECT "email", "id", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
