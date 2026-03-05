DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `sub_food`;
DROP TABLE IF EXISTS `food`;
DROP TABLE IF EXISTS `food_type`;
DROP TABLE IF EXISTS `like_res`;
DROP TABLE IF EXISTS `rate_res`;
DROP TABLE IF EXISTS `restaurant`;
DROP TABLE IF EXISTS `user`;

-- USER
CREATE TABLE `user`(
`user_id` INT PRIMARY KEY AUTO_INCREMENT,
`full_name` VARCHAR(255),
`email` VARCHAR(255),
`password` VARCHAR(255)
);

-- RESTAURANT
CREATE TABLE `restaurant`(
`res_id` INT PRIMARY KEY AUTO_INCREMENT,
`res_name` VARCHAR(255),
`image` VARCHAR(255),
`desc` VARCHAR(255)
);

-- LIKE RESTAURANT (toggle like)
CREATE TABLE `like_res`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`user_id` INT,
`res_id` INT,
`create_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
`isLike` BOOLEAN DEFAULT TRUE,
FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`),
FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`)
);

-- RATE RESTAURANT
CREATE TABLE `rate_res`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`user_id` INT,
`res_id` INT,
`create_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
`isRated` BOOLEAN DEFAULT TRUE,
FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`),
FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`)
);

-- FOOD TYPE
CREATE TABLE `food_type`(
`type_id` INT PRIMARY KEY AUTO_INCREMENT,
`type_name` VARCHAR(255)
);

-- FOOD
CREATE TABLE `food` (
`food_id` INT PRIMARY KEY AUTO_INCREMENT,
`food_name` VARCHAR(255),
`image` VARCHAR(255),
`price` FLOAT,
`desc` VARCHAR(255),
`type_id` INT,
FOREIGN KEY (`type_id`) REFERENCES `food_type`(`type_id`)
);

-- SUB FOOD
CREATE TABLE `sub_food`(
`sub_id` INT PRIMARY KEY AUTO_INCREMENT,
`sub_name` VARCHAR(255),
`sub_price` FLOAT,
`food_id` INT,
FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`)
);

-- ORDER FOOD
CREATE TABLE `order`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`user_id` INT,
`food_id` INT,
`amount` INT,
`code` VARCHAR(255),
`arr_sub_id` VARCHAR(255),
FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`),
FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`)
);

-- USER DATA
INSERT INTO `user` (`full_name`,`email`,`password`) VALUES
('Nguyễn Văn A','nguyenvana@gmail.com','123456'),
('Trần Thị B','tranthib@gmail.com','abcdef'),
('Lê Văn C','levanc@gmail.com','password1'),
('Phạm Thị D','phamthid@gmail.com','pass123'),
('Hoàng Văn E','hoangvane@gmail.com','qwerty'),
('Võ Thị F','vothif@gmail.com','111111'),
('Đặng Văn G','dangvang@gmail.com','222222'),
('Bùi Thị H','buithih@gmail.com','333333'),
('Ngô Văn I','ngovani@gmail.com','444444'),
('Phan Thị K','phanthik@gmail.com','555555');

-- RESTAURANT DATA
INSERT INTO `restaurant` (`res_name`,`image`,`desc`) VALUES
('Phở 24','pho24.jpg','Chuyên các món phở truyền thống Việt Nam'),
('KFC','kfc.jpg','Chuỗi thức ăn nhanh nổi tiếng với gà rán'),
('Pizza Hut','pizzahut.jpg','Nhà hàng pizza phong cách châu Âu'),
('Lotteria','lotteria.jpg','Thức ăn nhanh phù hợp giới trẻ'),
('Highlands Coffee','highlands.jpg','Quán cà phê và đồ uống phổ biến');

-- FOOD TYPE
INSERT INTO `food_type` (`type_name`) VALUES
('Món nước'),
('Đồ chiên'),
('Pizza'),
('Đồ uống'),
('Món khác');

-- FOOD
INSERT INTO `food` (`food_name`,`image`,`price`,`desc`,`type_id`) VALUES
('Phở bò','phobo.jpg',45000,'Phở bò truyền thống',1),
('Gà rán','garan.jpg',55000,'Gà rán giòn cay',2),
('Pizza hải sản','pizza.jpg',120000,'Pizza phô mai hải sản',3),
('Burger bò','burger.jpg',40000,'Burger bò kèm rau',2),
('Cà phê sữa','caphe.jpg',30000,'Cà phê sữa đá',4);

-- SUB FOOD
INSERT INTO `sub_food` (`sub_name`,`sub_price`,`food_id`) VALUES
('Trứng gà',10000,1),
('Thêm gà',20000,2),
('Phô mai',15000,3),
('Khoai tây chiên',12000,4),
('Sữa đặc',8000,5);