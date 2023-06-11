-- Adminer 4.8.1 MySQL 8.0.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `country`;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `embassy_link` varchar(255) NOT NULL,
  `flag_picture` varchar(255) NOT NULL,
  `country_picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `country` (`id`, `name`, `description`, `embassy_link`, `flag_picture`, `country_picture`) VALUES
(1,	'France',	'test',	'',	'',	'');

DROP TABLE IF EXISTS `journey`;
CREATE TABLE `journey` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `max_people` int NOT NULL,
  `budget` int NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `journey` (`id`, `name`, `date_start`, `date_end`, `max_people`, `budget`, `description`) VALUES
(1,	'Voyage été',	'2023-05-07 00:00:00',	'2023-05-25 00:00:00',	10,	1000,	'test'),
(2,	'Voyage hiver',	'2023-12-07 00:00:00',	'2023-12-25 00:00:00',	12,	750,	'test test');

DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `country_id` int NOT NULL,
  `primary_language` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_language_country1_idx` (`country_id`),
  CONSTRAINT `fk_language_country1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `language` (`id`, `name`, `country_id`, `primary_language`) VALUES
(1,	'français',	1,	1);

DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `timestamp` datetime NOT NULL,
  `sender_id` int NOT NULL,
  `journey_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_message_user1_idx` (`sender_id`),
  KEY `fk_message_journey1_idx` (`journey_id`),
  CONSTRAINT `fk_message_journey1` FOREIGN KEY (`journey_id`) REFERENCES `journey` (`id`),
  CONSTRAINT `fk_message_user1` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


DROP TABLE IF EXISTS `nationalities`;
CREATE TABLE `nationalities` (
  `user_id` int NOT NULL,
  `country_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`country_id`),
  KEY `fk_user_has_country_country1_idx` (`country_id`),
  KEY `fk_user_has_country_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_country_country1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  CONSTRAINT `fk_user_has_country_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stars` tinyint(1) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `validate` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_review_user_idx` (`user_id`),
  CONSTRAINT `fk_review_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


DROP TABLE IF EXISTS `step`;
CREATE TABLE `step` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `country_id` int NOT NULL,
  `journey_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_step_country1_idx` (`country_id`),
  KEY `fk_step_journey1_idx` (`journey_id`),
  CONSTRAINT `fk_step_country1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  CONSTRAINT `fk_step_journey1` FOREIGN KEY (`journey_id`) REFERENCES `journey` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(255) NOT NULL,
  `password` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `age` int DEFAULT NULL,
  `gender` enum('male','female','non-binary','unspecified') NOT NULL,
  `phone` varchar(10) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `user` (`id`, `mail`, `password`, `lastname`, `firstname`, `age`, `gender`, `phone`, `city`, `description`, `profile_picture`, `create_time`) VALUES
(1,	'foo.bar@gmail.com',	'secret',	'bar',	'foo',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-02 09:55:51'),
(2,	'test.test@gmail.com',	'secret',	'bar',	'foo',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-05 03:18:09'),
(4,	'oki.test@gmail.com',	'$2a$10$dJBd6Lo.wDLCkOiL0vyCYeallR6feNuGwsk1trqL2O94WX8xvAczW',	'bar',	'bi',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-06 16:33:57'),
(6,	'ba.bar@gmail.com',	'$2a$10$1hYVKKJS90AvBLmVTjELjusTmehxOi5cG3RbP450OntNi/FhxMDfu',	'bar',	'ba',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-06 20:09:38'),
(15,	'toti@tata.fr',	'$2a$10$jeOit6MVkgFaVWlJU3VwvujRvSpvwt9YqOuB0BBOfQCMutyHXxgdK',	'tata',	'toto',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-14 04:02:16'),
(16,	'bou.bar@gmail.com',	'$2a$10$PFigJ6NqMSwzcraX4ffX/ehJkIg4AomPrkKxbGkdOCjmbg.BYGzku',	'bar',	'bou',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-17 01:01:52'),
(17,	'boo.test@gmail.com',	'$2a$10$gF9xTu9HLUVbxwgZjRJLxuGkOgDwmapBcxsALPYB9afvLDmqu/HNS',	'bar',	'foo',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-17 01:02:41'),
(19,	'toto@tata.fr',	'$2a$10$UJ4Insz9dyx1ZqX1sLQs/.YzFkWjCV7rX1MeV5oc0mveoWysyauKC',	'tata',	'toto',	18,	'female',	'0102030405',	'Cancun',	'test',	NULL,	'2023-05-17 01:08:47');

DROP TABLE IF EXISTS `user_journey`;
CREATE TABLE `user_journey` (
  `user_id` int NOT NULL,
  `journey_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`journey_id`),
  KEY `fk_user_has_journey_journey1_idx` (`journey_id`),
  KEY `fk_user_has_journey_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_journey_journey1` FOREIGN KEY (`journey_id`) REFERENCES `journey` (`id`),
  CONSTRAINT `fk_user_has_journey_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


DROP TABLE IF EXISTS `user_language`;
CREATE TABLE `user_language` (
  `user_id` int NOT NULL,
  `user_language_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`user_language_id`),
  KEY `fk_user_has_user_language_user_language1_idx` (`user_language_id`),
  KEY `fk_user_has_user_language_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_user_language_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_user_has_user_language_user_language1` FOREIGN KEY (`user_language_id`) REFERENCES `language` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


-- 2023-05-19 13:34:38