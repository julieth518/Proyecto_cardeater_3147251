/*
  Warnings:

  - Added the required column `traveler_id` to the `lugares_turisticos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lugares_turisticos` ADD COLUMN `traveler_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `lugares_turisticos` ADD CONSTRAINT `lugares_turisticos_traveler_id_fkey` FOREIGN KEY (`traveler_id`) REFERENCES `travelers`(`id_travelers`) ON DELETE RESTRICT ON UPDATE CASCADE;
