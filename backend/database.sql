-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: checkpoint4
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercice`
--

DROP TABLE IF EXISTS `exercice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercice` (
  `idexercice` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `url` longtext NOT NULL,
  PRIMARY KEY (`idexercice`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercice`
--

LOCK TABLES `exercice` WRITE;
/*!40000 ALTER TABLE `exercice` DISABLE KEYS */;
INSERT INTO `exercice` VALUES (1,'Développé couché','Le développé couché (bench press en anglais) est l’exercice de référence pour la musculation des pectoraux. Cet exercice poly-articulaire permet de se muscler l’ensemble des muscles de la poitrine et plus particulièrement le muscle grand pectoral. Le développé couché qui fait partie des trois mouvement de force athlétique est très efficace pour prendre de la masse musculaire car il permet de travailler avec des charges lourdes.','https://www.espace-musculation.com/uploads/2013/06/bench-press.jpg'),(2,'Squat','Bien plus complet que la presse à cuisses, le squat permet de travailler de nombreux muscles, en particulier ceux des jambes et des fessiers. Tu peux faire ce mouvement au poids de corps, on parle dans ce cas d’air squat mais pour augmenter l’intensité et donc l’efficacité, tu auras juste besoin d’une barre avec des poids pour réaliser ce mouvement de flexion naturelle. Par ailleurs, une cage à squat peut être utile pour reposer la barre.','https://www.espace-musculation.com/uploads/2015/03/flexion-des-jambes.jpg'),(3,'Soulevé de terre','Le soulevé de terre jambes tendues très important pour développer et définir l’arrière de la cuisse et les fessiers. Quand il est fait en amplitude complète, le soulevé de terre jambes tendues améliore la statique du corps. C’est un exercice important pour les ischio-jambiers car il permet de ressentir la contraction musculaire au niveau de l’articulation de la hanche. La plupart des autres exercices, comme le leg curl permettent de ressentir la contraction des ischios davantage au niveau du genou.','https://wp-test-dev.s3.amazonaws.com/public/uploads/2020/11/Romaniandeadlift_skynesher.jpg'),(4,'Rowing','Le rowing barre buste penché est un exercice de musculation polyarticulaire important pour le développement des muscles grand dorsal et des muscles du milieu du dos. Cet exercice permet aussi de travailler la partie postérieure des deltoïdes.','https://medias.toutelanutrition.com/blog/2020/07/rowing-banner.jpg'),(5,'Curl','Pour augmenter le volume musculaire de vos bras, réalisez ces mouvements au début de votre entraînement de musculation, quand vous avez le plus de force pour prendre lourd ! Si vous avez des douleurs au niveau des poignets avec une barre droite, préférez la barre coudée aussi appelée barre EZ pour ne pas traumatiser vos articulations.','https://www.lesdessousdusport.fr/wp-content/uploads/2023/03/curl-barre.jpg.webp');
/*!40000 ALTER TABLE `exercice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(45) DEFAULT 'user',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Julien','jbeillonnet@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$Wzu9FGYjJRaSsFEjAsiADQ$MVtGscUyyHQFk/3a8aeIm94XSlxDWYINz6gNnu5DmWg','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout`
--

DROP TABLE IF EXISTS `workout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout` (
  `idworkout` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `serie1` int DEFAULT NULL,
  `serie2` int DEFAULT NULL,
  `serie3` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `user_idUser` int NOT NULL,
  PRIMARY KEY (`idworkout`,`user_idUser`),
  KEY `fk_workout_user1_idx` (`user_idUser`),
  CONSTRAINT `fk_workout_user1` FOREIGN KEY (`user_idUser`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout`
--

LOCK TABLES `workout` WRITE;
/*!40000 ALTER TABLE `workout` DISABLE KEYS */;
/*!40000 ALTER TABLE `workout` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 22:29:07
