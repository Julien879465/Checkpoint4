-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema checkpoint4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema checkpoint4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `checkpoint4` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `checkpoint4` ;

-- -----------------------------------------------------
-- Table `checkpoint4`.`exercice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkpoint4`.`exercice` (
  `idexercice` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `url` LONGTEXT NOT NULL,
  PRIMARY KEY (`idexercice`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `checkpoint4`.`exercice` (`idexercice`, `name`, `description`, `url`) VALUES ('1', 'Développé couché', 'Le développé couché (bench press en anglais) est l’exercice de référence pour la musculation des pectoraux. Cet exercice poly-articulaire permet de se muscler l’ensemble des muscles de la poitrine et plus particulièrement le muscle grand pectoral. Le développé couché qui fait partie des trois mouvement de force athlétique est très efficace pour prendre de la masse musculaire car il permet de travailler avec des charges lourdes.', 'https://www.espace-musculation.com/uploads/2013/06/bench-press.jpg');
INSERT INTO `checkpoint4`.`exercice` (`idexercice`, `name`, `description`, `url`) VALUES ('2', 'Squat', 'Bien plus complet que la presse à cuisses, le squat permet de travailler de nombreux muscles, en particulier ceux des jambes et des fessiers. Tu peux faire ce mouvement au poids de corps, on parle dans ce cas d’air squat mais pour augmenter l’intensité et donc l’efficacité, tu auras juste besoin d’une barre avec des poids pour réaliser ce mouvement de flexion naturelle. Par ailleurs, une cage à squat peut être utile pour reposer la barre.', 'https://www.espace-musculation.com/uploads/2015/03/flexion-des-jambes.jpg');
INSERT INTO `checkpoint4`.`exercice` (`idexercice`, `name`, `description`, `url`) VALUES ('3', 'Soulevé de terre', 'Le soulevé de terre jambes tendues très important pour développer et définir l’arrière de la cuisse et les fessiers. Quand il est fait en amplitude complète, le soulevé de terre jambes tendues améliore la statique du corps. C’est un exercice important pour les ischio-jambiers car il permet de ressentir la contraction musculaire au niveau de l’articulation de la hanche. La plupart des autres exercices, comme le leg curl permettent de ressentir la contraction des ischios davantage au niveau du genou.', 'https://wp-test-dev.s3.amazonaws.com/public/uploads/2020/11/Romaniandeadlift_skynesher.jpg');
INSERT INTO `checkpoint4`.`exercice` (`idexercice`, `name`, `description`, `url`) VALUES ('4', 'Rowing', 'Le rowing barre buste penché est un exercice de musculation polyarticulaire important pour le développement des muscles grand dorsal et des muscles du milieu du dos. Cet exercice permet aussi de travailler la partie postérieure des deltoïdes.', 'https://medias.toutelanutrition.com/blog/2020/07/rowing-banner.jpg');
INSERT INTO `checkpoint4`.`exercice` (`idexercice`, `name`, `description`, `url`) VALUES ('5', 'Curl', 'Pour augmenter le volume musculaire de vos bras, réalisez ces mouvements au début de votre entraînement de musculation, quand vous avez le plus de force pour prendre lourd ! Si vous avez des douleurs au niveau des poignets avec une barre droite, préférez la barre coudée aussi appelée barre EZ pour ne pas traumatiser vos articulations.', 'https://www.lesdessousdusport.fr/wp-content/uploads/2023/03/curl-barre.jpg.webp');



-- -----------------------------------------------------
-- Table `checkpoint4`.`format`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkpoint4`.`format` (
  `idformat` INT NOT NULL AUTO_INCREMENT,
  `repetitions` INT NOT NULL,
  `series` INT NOT NULL,
  `weight` INT NOT NULL,
  PRIMARY KEY (`idformat`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkpoint4`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkpoint4`.`user` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(45) NULL DEFAULT 'user',
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkpoint4`.`workout`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkpoint4`.`workout` (
  `idworkout` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `duration` TIME NULL DEFAULT NULL,
  `user_idUser` INT NOT NULL,
  PRIMARY KEY (`idworkout`, `user_idUser`),
  INDEX `fk_workout_user1_idx` (`user_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_workout_user1`
    FOREIGN KEY (`user_idUser`)
    REFERENCES `checkpoint4`.`user` (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkpoint4`.`workout_has_exercice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkpoint4`.`workout_has_exercice` (
  `workout_idworkout` INT NOT NULL,
  `exercice_idexercice` INT NOT NULL,
  PRIMARY KEY (`workout_idworkout`, `exercice_idexercice`),
  INDEX `fk_workout_has_exercice_exercice1_idx` (`exercice_idexercice` ASC) VISIBLE,
  INDEX `fk_workout_has_exercice_workout_idx` (`workout_idworkout` ASC) VISIBLE,
  CONSTRAINT `fk_workout_has_exercice_exercice1`
    FOREIGN KEY (`exercice_idexercice`)
    REFERENCES `checkpoint4`.`exercice` (`idexercice`),
  CONSTRAINT `fk_workout_has_exercice_workout`
    FOREIGN KEY (`workout_idworkout`)
    REFERENCES `checkpoint4`.`workout` (`idworkout`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
