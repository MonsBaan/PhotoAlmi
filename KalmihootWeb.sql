-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-05-2021 a las 14:12:39
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
CREATE DATABASE `KalmihootWeb`
--
-- Estructura de tabla para la tabla `puestos`
--

CREATE TABLE `puestos` (
  `id_puesto` int NOT NULL,
  `descripcion` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `puestos`
--

INSERT INTO `puestos` (`id_puesto`, `descripcion`) VALUES
(1, 'Presidente'),
(2, 'Vice Presidente Ejecutivo'),
(3, 'Vice Presidente'),
(4, 'Manager'),
(5, 'Trabajador'),
(6, 'SuperUser');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `id_trabajador` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `apellido1` varchar(50) COLLATE utf8_bin NOT NULL,
  `apellido2` varchar(50) COLLATE utf8_bin NOT NULL,
  `dni` varchar(9) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `direccion` varchar(50) COLLATE utf8_bin NOT NULL,
  `telefono` int NOT NULL,
  `contrasena` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `imagen` varchar(300) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'source/image/StaleMans.png',
  `puesto` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`id_trabajador`, `nombre`, `apellido1`, `apellido2`, `dni`, `direccion`, `telefono`, `contrasena`, `imagen`, `puesto`) VALUES
(1, 'Roberto', 'Pereda', 'Almi', '12345678R', '', 0, '', 'source/image/StaleMans.png', 1),
(2, 'Ander', 'Goimendi', 'Almi', '98765432A', 'Almi 1º A', 234567891, 'Almi123', 'source/image/StaleMans.png', 2),
(3, 'Iker', 'Karraka', 'Almi', '45612398I', 'Almi 1º I', 345678912, 'Almi123', 'source/image/StaleMans.png', 3),
(4, 'Virginia', 'Inglish', 'Almi', '65478912V', 'Almi 1º V', 456789123, 'Almi123', 'source/image/StaleMans.png', 4),
(5, 'Sergio', 'Jacerman', 'Almi', '55467842S', 'Almi 1º S', 567891234, 'Almi123', 'source/image/StaleMans.png', 5),
(6, 'Aitor', 'Tilla', 'Almi', '56848978A', 'Almi', 142412414, 'Almi123', 'source/image/StaleMans.png', 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `puestos`
--
ALTER TABLE `puestos`
  ADD PRIMARY KEY (`id_puesto`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`id_trabajador`),
  ADD KEY `puesto` (`puesto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `puestos`
--
ALTER TABLE `puestos`
  MODIFY `id_puesto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `id_trabajador` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
