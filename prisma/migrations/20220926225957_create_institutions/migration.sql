-- CreateTable
CREATE TABLE "Instituitions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "abreviation" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Instituitions_name_key" ON "Instituitions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Instituitions_abreviation_key" ON "Instituitions"("abreviation");
