-- CreateTable
CREATE TABLE "NewsletterUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterUsers_email_key" ON "NewsletterUsers"("email");
