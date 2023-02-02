CREATE DATABASE buskerbuskerData;
USE buskerbuskerData;

--
-- Table structure for table `userData`
--
  
CREATE TABLE `userData` (
  `num` int(11) AUTO_INCREMENT,
  `id` varchar(20) NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `Q_Answer` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`num`)
);

--
-- Dumping data for table `userData`
--

INSERT INTO `userData` VALUES (1,'HONG','hong','sjan');
INSERT INTO `userData` VALUES (2,'DUCK','duck','djfu');
INSERT INTO `userData` VALUES (3,'HWA','hwa','dnjdy');

--
-- Table structure for table `noticeData`
--

CREATE TABLE `noticeData` (
    `num` int(11) AUTO_INCREMENT,
    `author` varchar(20) NOT NULL,
    `title` varchar(20) NOT NULL,
    `text` text NOT NULL,
    `created` datetime NOT NULL,
    PRIMARY KEY (`num`)
);

--
-- Dumping data for table `noticeData`
--

INSERT INTO `noticeData` VALUES (NULL,'HONG','HELLO','my name is hong', now());
INSERT INTO `noticeData` VALUES (NULL,'DUCK','NODEJS','my name is duck', now());
INSERT INTO `noticeData` VALUES (NULL,'HWA','HARD','my name is hwa', now());

--
-- Table structure for table `commentData`
--

CREATE TABLE `commentData` (
    `num` int(11) AUTO_INCREMENT,
    `author` varchar(20) NOT NULL,
    `noticeTitle` varchar(20) NOT NULL,
    `text` text NOT NULL,
    `created` datetime NOT NULL,
    PRIMARY KEY (`num`)
);

--
-- Dumping data for table `commentData`
--

INSERT INTO `commentData` VALUES (NULL,'HONG','HELLO','nice to meet you', now());
INSERT INTO `commentData` VALUES (NULL,'DUCK','NODEJS','this is test', now());
INSERT INTO `commentData` VALUES (NULL,'HWA','HARD','너무 어려웡', now());

/* 참고용 주석
--
-- Table structure for table `topic`
--
  
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
  
--
-- Dumping data for table `topic`
--
  
INSERT INTO `topic` VALUES (1,'MySQL','MySQL is...','2018-01-01 12:10:11',1);
INSERT INTO `topic` VALUES (2,'Oracle','Oracle is ...','2018-01-03 13:01:10',1);
INSERT INTO `topic` VALUES (3,'SQL Server','SQL Server is ...','2018-01-20 11:01:10',2);
INSERT INTO `topic` VALUES (4,'PostgreSQL','PostgreSQL is ...','2018-01-23 01:03:03',3);
INSERT INTO `topic` VALUES (5,'MongoDB','MongoDB is ...','2018-01-30 12:31:03',1);
*/