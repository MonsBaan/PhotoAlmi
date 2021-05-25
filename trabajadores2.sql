-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-05-2021 a las 12:25:12
-- Versión del servidor: 8.0.25-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `KalmihootWeb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `id_trabajador` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `apellido1` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `apellido2` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `dni` char(9) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  CONSTRAINT chk_dni CHECK (dni REGEXP '^[0-9]{8}[^IÑOU]$'),
  `direccion` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `telefono` int NOT NULL,
  CONSTRAINT chk_telefono CHECK (telefono REGEXP '^[0-9]{9}'),
  `contrasena` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `imagen` varchar(300) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'source/image/StaleMans.png',
  `puesto` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`id_trabajador`, `nombre`, `apellido1`, `apellido2`, `dni`, `direccion`, `telefono`, `contrasena`, `imagen`, `puesto`) VALUES
(19, 'Roberto', 'Pereda', 'Almi', '12345678A', 'Almi 1º R', 679487554, 'Almi123', 'source/image/StaleMans.png', 1),
(20, 'Ander', 'Goimendi', 'Almi', '98765432D', 'Almi 1º A', 234567891, 'Almi123', 'source/image/StaleMans.png', 2),
(28, 'Iker', 'Karraka', 'Almi', '45612398D', 'Almi 1º I', 345678912, 'Almi123', 'source/image/StaleMans.png', 3),
(29, 'Virginia', 'Inglish', 'Almi', '65478912L', 'Almi 1º V', 456789123, 'Almi123', 'source/image/StaleMans.png', 4),
(30, 'Sergio', 'HombreOrdenador', 'Almi', '55467842A', 'Almi 1º S', 567891234, 'Almi123', 'source/image/StaleMans.png', 5),
(48, 'Aitor', 'Tilla', 'Almi', '56848978S', 'Almi20', 555, 'Almi123', 'source/image/StaleMans.png', 6),
(49, 'Richard', 'Linux', 'Staleman', '44455577S', 'Bahia Linux 3º Izq', 444555777, 'linuxmola', 'source/image/StaleMans.png', 7),
(50, 'Ibai', 'Vení', 'Fuí', '22757828H', 'Ibai casa @ casa.es', 666444754, 'Almi123', 'source/image/StaleMans.png', 6),
(51, 'Cristian', 'EsteEsConH', 'Rojas', '78954231W', 'Cris Tian Stale Man 1-3-B-A-C-130', 255645787, 'Almi123', 'source/image/StaleMans.png', 6),
(52, 'Joni', 'Toco', 'Calle', '46371002N', 'Calle Jon 3ºD \'Console.Log(\'Hola\')\'', 654785413, 'aaa', 'source/image/StaleMans.png', 6),
(87, 'Albertito', 'El', 'Bonito', '97845121Ñ', 'uWu', 555555555, 'TUMADRE', 'source/image/StaleMans.png', 4),
(91, 'Antonio', 'asdas', 'asd', '97845123T', 'Algun lugar', 987654321, 'Almi123', 'source/image/StaleMans.png', 2),
(92, 'Pedro', 'asd', 'asd', '97845121T', 'Algun lugar', 987654321, 'Almi123', 'source/image/StaleMans.png', 2),
(93, 'Antonio', 'asdas', 'asd', '97843121', 'Algun lugar', 987654, 'Almi123', 'source/image/StaleMans.png', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`id_trabajador`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `trabajadores_ibfk_1` (`puesto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `id_trabajador` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD CONSTRAINT `trabajadores_ibfk_1` FOREIGN KEY (`puesto`) REFERENCES `puestos` (`id_puesto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
