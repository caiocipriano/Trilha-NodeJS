-- CreateTable
CREATE TABLE "Categorie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "Id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "categorieID" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_name_key" ON "Categorie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_categorieID_fkey" FOREIGN KEY ("categorieID") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
