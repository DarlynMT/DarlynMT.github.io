SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `dbBDatos` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `dbBDatos`;

CREATE TABLE `reg_user` (
  `id` int(12) NOT NULL,
  `nombre` varchar(10) NOT NULL,
  `apellido` varchar(10) NOT NULL,
  `edad` varchar(10) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `Direccion` varchar(10) NOT NULL,
  `correo` varchar(20) NOT NULL,
  `telefono` int(11) NOT NULL,
  `cctegoria` varchar(20) NOT NULL,
  `alergico` varchar(20) NOT NULL,
  `gruposan` varchar(10) NOT NULL,
  `observaciones` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `reg_user` (`id`, `nombre`, `apellido`, `edad`, `sexo`, `Direccion`, `correo`, `telefono`, `cctegoria`, `alergico`, `gruposan`, `observaciones`) VALUES
(1, 'Aliz', 'Perez', '45', 'Mujer', 'Santo Domingo Este', 'AlizP10@gmai;.com', 8095576695, 'Carro', 'Otros', 'A+', 'Prueba1'),
(2, 'Oscar', 'Tapia', '32', 'Hombre', 'Santo Domingo Norte','Oscar01@gmail.com', 8298882233, 'Carro', 'Otros', 'AB+', 'Prueba2');

ALTER TABLE `reg_user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `reg_user`
MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;