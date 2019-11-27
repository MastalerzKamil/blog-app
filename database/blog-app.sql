CREATE TABLE `Users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `username` varchar(255),
  `email` varchar(255),
  `phone` varchar(255),
  `website` varchar(255),
  `adress` int,
  `geo` int,
  `company` int
);

CREATE TABLE `Adresses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `suite` varchar(255),
  `city` varchar(255),
  `zipcode` varchar(255)
);

CREATE TABLE `Geolocations` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `lat` varchar(255),
  `lng` varchar(255)
);

CREATE TABLE `Companies` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `catchPhrase` varchar(255),
  `bs` varchar(255)
);

CREATE TABLE `Posts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int,
  `title` varchar(255),
  `body` varchar(255)
);

CREATE TABLE `Comments` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(255),
  `body` varchar(255),
  `postId` int
);

ALTER TABLE `Users` ADD FOREIGN KEY (`adress`) REFERENCES `Adresses` (`id`);

ALTER TABLE `Users` ADD FOREIGN KEY (`geo`) REFERENCES `Geolocations` (`id`);

ALTER TABLE `Users` ADD FOREIGN KEY (`company`) REFERENCES `Companies` (`id`);

ALTER TABLE `Posts` ADD FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

ALTER TABLE `Comments` ADD FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`);
