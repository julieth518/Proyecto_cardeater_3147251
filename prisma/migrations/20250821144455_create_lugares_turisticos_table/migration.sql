-- CreateTable
CREATE TABLE `lugares_turisticos` (
    `id_luegares_turisticos` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `release_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_avaliable` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id_luegares_turisticos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
