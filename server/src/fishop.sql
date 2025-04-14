-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-02-2024 a las 10:35:21
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fishop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

DROP TABLE IF EXISTS `administrador`;
CREATE TABLE IF NOT EXISTS `administrador` (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `nombre_admin` text NOT NULL,
  `correo_admin` text NOT NULL,
  `contrasena_admin` text NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id_admin`, `nombre_admin`, `correo_admin`, `contrasena_admin`) VALUES
(1, 'Mario Ramos', 'Mariora@gmail.com', '12345M'),
(2, 'Enrique Ramos', 'Enriquera@gmail.com', '506060');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

DROP TABLE IF EXISTS `carrito`;
CREATE TABLE IF NOT EXISTS `carrito` (
  `id_carrito` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` text NOT NULL,
  `estado_carrito` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `precio_total` float NOT NULL,
  PRIMARY KEY (`id_carrito`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `id_usuario`, `id_producto`, `cantidad`, `estado_carrito`, `precio_total`) VALUES
(2, 2, 15, '2', 'entregado', 313.2),
(3, 1, 15, '2', 'en proceso de entrega', 313.2),
(4, 2, 14, '1', 'pendiente', 50),
(5, 2, 42, '1', 'pendiente', 12),
(21, 1, 15, '5', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL,
  `marca` text NOT NULL,
  `cantidad` int NOT NULL,
  `categoria` text NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `descripcion`, `precio`, `marca`, `cantidad`, `categoria`) VALUES
(15, 'Linea de monofilamento', 'Linea especial para lider de pesca de 200m 14lb 0.22mm', 260, 'Calema', 5, 'Lineas de pesca'),
(14, 'Popper', 'Popper para lobina 8cm de 20gm', 65, 'Savage', 5, 'Señuelo de agua dulce'),
(16, 'Linea de fluorocarbono', 'Linea especial para lider de pesca de 100m 12lb 0.5mm', 150, 'Sufix', 1, 'Lineas de pesca'),
(66, 'Caña 7 pies', 'Caña para pesca en rios y lagunas de 7 pies ', 1200, 'Daiwa', 10, 'Combos agua dulce'),
(60, 'Caña 7 pies', 'Caña de 7 pies fibra de vidrio para pesca en laguna', 1700, 'Blue Fox', 23, 'Combos agua dulce'),
(19, 'Señuelo paseante', 'señuelo media agua de 10gr para lobina', 200, 'Vulkan', 20, 'Señuelo agua dulce'),
(42, 'Señuelo minow', 'Señuelo media agua para pesca e lobina 10gr', 250, 'Rapala', 15, 'Señuelo agua dulce'),
(74, 'Caña Rapala', 'Caña de fibra de vidrio para pesca en laguna o pesca ligera en mar desde muelle 7 pies', 2300, 'Rapala', 10, 'Combos agua dulce'),
(70, 'Anzuelo wide cap', 'Anzuelo para arreglo de pesca, texas, right 4/0', 50, 'Bold', 50, 'Accesorios de pesca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_us` text NOT NULL,
  `correo_us` text NOT NULL,
  `contrasena_us` text NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre_us`, `correo_us`, `contrasena_us`) VALUES
(1, 'Jose Perez', 'Josep@gmail.com', '123456Jpe'),
(3, 'Raul Ortiz', 'Raulo@gmail.com', 'R2122'),
(6, 'Jesus Perez', 'Jesprz@gmail.com', '12345*');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

DROP TABLE IF EXISTS `venta`;
CREATE TABLE IF NOT EXISTS `venta` (
  `id_venta` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_carrito` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio_unitario` float NOT NULL,
  `fecha` text NOT NULL,
  PRIMARY KEY (`id_venta`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id_venta`, `id_usuario`, `id_carrito`, `cantidad`, `precio_unitario`, `fecha`) VALUES
(4, 2, 4, 3, 50, '2023-12-16');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
