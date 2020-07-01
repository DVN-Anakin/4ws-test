-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 01, 2020 at 11:57 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4ws-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(255) NOT NULL,
  `cat_descr` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_name`, `cat_descr`) VALUES
(1, 'Taco', 'A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.'),
(2, 'Sandwich', 'Two or more slices of bread with vegetables, sliced cheese and meat, placed on or between.'),
(3, 'Burger', 'A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.'),
(4, 'Pizza', 'A savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.'),
(5, 'Burrito', 'A lightly grilled tortilla wrapped into a sealed cylindrical shape around various ingredients.');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `prod_id` int(11) NOT NULL,
  `prod_name` varchar(355) NOT NULL,
  `prod_descr` text NOT NULL,
  `prod_price` decimal(10,2) NOT NULL,
  `prod_cat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prod_id`, `prod_name`, `prod_descr`, `prod_price`, `prod_cat`) VALUES
(1, 'Al pastor', 'Warm tortilla with marinated pork shoulder, flavored with various chiles, pineapple, onion, garlic and cinnamon.', '1.20', 1),
(2, 'Cheeseburger', 'Mustard, ketchup, onions, one slice of pickle, one slice of cheese and one beef patty.', '0.70', 3),
(3, 'Hamburger', 'Mustard, ketchup, onions, one slice of pickle, one slice of beef patty.', '0.50', 3),
(4, 'Hawaii 14\"', 'Topped with tomato sauce, cheese, pineapple, ham.', '3.50', 4),
(5, 'Margherita 15\"', 'Topped with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.', '3.80', 4),
(6, 'Neapolitan 15\"', 'Topped with San Marzano tomatoes and mozzarella cheese', '2.60', 4),
(50, 'Test item 03', 'Testing item 03', '1.20', 5),
(51, 'Test item 02', 'item 05 test', '0.60', 2),
(52, 'Test item 07', '', '3.10', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `FOREIGN` (`prod_cat`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_cat` FOREIGN KEY (`prod_cat`) REFERENCES `categories` (`cat_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
