-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2018 at 03:52 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_whatsapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contactos`
--

CREATE TABLE `tbl_contactos` (
  `codigo_usuario` int(11) NOT NULL,
  `codigo_usuario_contacto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_contactos`
--

INSERT INTO `tbl_contactos` (`codigo_usuario`, `codigo_usuario_contacto`) VALUES
(1, 2),
(1, 3),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 1),
(3, 1),
(1, 18),
(9, 9),
(2, 11),
(1, 1),
(1, 7),
(1, 17),
(2, 22);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mensajes`
--

CREATE TABLE `tbl_mensajes` (
  `codigo_mensaje` int(11) NOT NULL,
  `codigo_usuario_emisor` int(11) NOT NULL,
  `codigo_usuario_receptor` int(11) NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  `hora_mensaje` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mensajes`
--

INSERT INTO `tbl_mensajes` (`codigo_mensaje`, `codigo_usuario_emisor`, `codigo_usuario_receptor`, `mensaje`, `hora_mensaje`) VALUES
(1, 1, 2, 'Hola', '18:18'),
(2, 2, 1, 'Hola que tal?', '18:19'),
(3, 1, 2, 'Todo bien', '18:19'),
(4, 1, 2, 'y tu que tal?', '18:20'),
(5, 4, 6, 'Hola', '11:11'),
(6, 1, 2, 'Todo bien de neuvo', 'hora'),
(7, 1, 2, 'Otro mensaje', '0'),
(8, 1, 2, 'Lorem ipsum dolor...', '66:66'),
(9, 1, 2, 'Soy pura felicidad', '66:66'),
(10, 1, 2, 'Otro nuevo mensaje de patricio', '66:66'),
(11, 2, 1, 'Hola que tal como estas patricio?', '66:66'),
(12, 1, 2, 'Todo bien :) |**|', '66:66'),
(13, 1, 2, 'Este es un mensaje desde postman', '66:66'),
(14, 1, 2, 'Hola, este es un mensaje desde  POSTMAN 2', '66:66'),
(15, 3, 4, 'Hola 18 :*', '66:66'),
(16, 3, 4, 'Hello, contesta beiby corazoooon', '66:66'),
(17, 4, 3, 'Deja de molestarme pofavor, ya te dije que quiero a Krilin, lo nuestro ya es pasado', '66:66'),
(18, 4, 3, 'aunque...', '66:66'),
(19, 3, 4, 'aunquejQuery1124030838113584421456_1542667153315??', '66:66'),
(20, 3, 4, 'aunquejQuery1124030838113584421456_1542667153315??', '66:66'),
(21, 3, 4, 'aunquejQuery1124030838113584421456_1542667153315??', '66:66'),
(22, 3, 4, 'mmmm..', '66:66'),
(23, 3, 4, 'mmmjQuery1124030838113584421456_1542667153315??', '66:66'),
(24, 4, 3, 'whaaaaa, que romantico', '66:66'),
(25, 4, 3, 'á\'báé', '66:66'),
(26, 4, 3, '', '66:66'),
(27, 4, 3, 'jQuery1124030838113584421456_1542667153315', '66:66'),
(28, 1, 2, 'Que ondas', '66:66'),
(29, 1, 2, 'Prueba de set interval', '66:66'),
(30, 1, 2, 'Otra vez pues!!!!', '66:66');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `codigo_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(100) NOT NULL,
  `correo` varchar(300) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `url_imagen_perfil` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`codigo_usuario`, `nombre_usuario`, `correo`, `contrasena`, `url_imagen_perfil`) VALUES
(1, 'Patricio', 'patricio@gmail.com', 'asd.456', 'img/profile-pics/patricio.jpg'),
(2, 'Vegeta', 'vegeta@gmail.com', 'bcdcb29ed2aab16d48c11485264df665e906bdd9', 'img/profile-pics/vegeta.jpg'),
(3, '16', '16@gmail.com', 'asd.456', 'img/profile-pics/androide_16.jpg'),
(4, '18', '18@gmail.com', 'asd.456', 'img/profile-pics/androide_18.jpg'),
(5, '19', '19@gmail.com', 'asd.456', 'img/profile-pics/androide_19.jpg'),
(6, 'Baby', 'baby@gmail.com', 'asd.456', 'img/profile-pics/baby.jpg'),
(7, 'Bulma', 'bulma@gmail.com', 'asd.456', 'img/profile-pics/bulma.jpg'),
(8, 'Cell', 'cell@gmail.com', 'asd.456', 'img/profile-pics/cell.jpg'),
(9, 'Chaozu', 'chaozu@gmail.com', 'asd.456', 'img/profile-pics/chaozu.jpg'),
(10, 'Dende', 'dende@gmail.com', 'asd.456', 'img/profile-pics/dende.jpg'),
(11, 'Dodoria', 'dodoria@gmail.com', 'asd.456', 'img/profile-pics/dodoria.jpg'),
(12, 'Freezer', 'freezer@gmail.com', 'asd.456', 'img/profile-pics/freezer.jpg'),
(13, 'Gohan', 'gohan@gmail.com', 'asd.456', 'img/profile-pics/gohan.jpg'),
(14, 'Goku', 'goku@gmail.com', 'asd.456', 'img/profile-pics/goku.jpg'),
(15, 'Goten', 'goten@gmail.com', 'asd.456', 'img/profile-pics/goten.png'),
(16, 'Kami', 'kami@gmail.com', 'asd.456', 'img/profile-pics/kami.jpg'),
(17, 'Kibito', 'kibito@gmail.com', 'asd.456', 'img/profile-pics/kibito.jpg'),
(18, 'Krilin', 'krilin@gmail.com', 'asd.456', 'img/profile-pics/krilin.jpg'),
(19, 'Majinboo', 'majinboo@gmail.com', 'asd.456', 'img/profile-pics/majinboo.jpg'),
(20, 'MrSatan', 'mr_satan@gmail.com', 'asd.456', 'img/profile-pics/mr_satan.jpg'),
(21, 'Nappa', 'nappa@gmail.com', 'asd.456', 'img/profile-pics/nappa.jpg'),
(22, 'Oolong', 'oolong@gmail.com', 'asd.456', 'img/profile-pics/oolong.jpg'),
(23, 'Pan', 'pan@gmail.com', 'asd.456', 'img/profile-pics/pan.png'),
(24, 'Shenlong', 'shenlong@gmail.com', 'asd.456', 'img/profile-pics/shenlong.jpg'),
(25, 'Picoro', 'picoro@gmail.com', 'asd.456', 'img/profile-pics/picoro.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_contactos`
--
ALTER TABLE `tbl_contactos`
  ADD KEY `fk_tbl_amigos_tbl_usuarios_idx` (`codigo_usuario`),
  ADD KEY `fk_tbl_amigos_tbl_usuarios1_idx` (`codigo_usuario_contacto`);

--
-- Indexes for table `tbl_mensajes`
--
ALTER TABLE `tbl_mensajes`
  ADD PRIMARY KEY (`codigo_mensaje`),
  ADD KEY `fk_tbl_comentarios_tbl_usuarios1_idx` (`codigo_usuario_emisor`),
  ADD KEY `fk_tbl_mensajes_tbl_usuarios1_idx` (`codigo_usuario_receptor`);

--
-- Indexes for table `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`codigo_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_mensajes`
--
ALTER TABLE `tbl_mensajes`
  MODIFY `codigo_mensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `codigo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_contactos`
--
ALTER TABLE `tbl_contactos`
  ADD CONSTRAINT `fk_tbl_amigos_tbl_usuarios` FOREIGN KEY (`codigo_usuario`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_amigos_tbl_usuarios1` FOREIGN KEY (`codigo_usuario_contacto`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tbl_mensajes`
--
ALTER TABLE `tbl_mensajes`
  ADD CONSTRAINT `fk_tbl_comentarios_tbl_usuarios1` FOREIGN KEY (`codigo_usuario_emisor`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_mensajes_tbl_usuarios1` FOREIGN KEY (`codigo_usuario_receptor`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
