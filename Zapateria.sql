-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2020 a las 13:05:05
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `musicalmfl`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tdisco`
--

CREATE TABLE `tzapato` (
  `CodZapato` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Marca` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Precio` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Formatouno` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Formatodos` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Formatotres` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Estado` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Imagen` text COLLATE utf8_unicode_ci NOT NULL,
  `Borrado` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `tdisco`
--

INSERT INTO `tzapato` (`CodZapato`, `Marca`, `Nombre`, `Precio`, `Formatouno`, `Formatodos`, `Formatotres`, `Estado`, `Imagen`, `Borrado`) VALUES
('cod002', 'Nike', 'Air Force', '119,0', 'N/A', 'N/A', 'Cuero', 'Disponible', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-zapatillas-GjGXSP.png', '0'),
('cod003', 'Adidas', 'GAZELLE', '100,0', 'Piel', 'Goma', 'N/A', 'Agotado', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a1724ae2b78414f99bdaf1d01047f7f_9366/Zapatilla_Gazelle_Verde_BB5487_01_standard.jpg', '0'),
('cod004', 'Adidas', 'SUPERSTAR', '110,0', 'N/A', 'Goma', 'Cuero', 'Disponible', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a87081faf3e4c8b9b92ae2f003ea516_9366/Zapatilla_Superstar_Beige_GZ4831_01_standard.jpg', '0'),
('cod005', 'Vans', 'SK8-HI 38 DX', '115,0', 'Piel', 'Goma', 'N/A', 'Disponible', 'https://images.vans.com/is/image/VansEU/VN0A5KRTBM8-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0', '0'),
('cod006', 'Vans', 'ERA', '70,0', 'Piel', 'Goma', 'N/A', 'Disponible', 'https://images.vans.com/is/image/VansEU/VN000QFKBKA-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0', '0'),
('cod007', 'Nike', 'Legend Essential 2', '59,99', 'N/A', 'Goma', 'N/A', 'Agotado', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eacd9775-1eef-4187-b98d-969022e361f2/legend-essential-2-zapatillas-de-entrenamiento-k0VHTF.png', '0');




-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tfactura`
--

CREATE TABLE `tfactura` (
  `CodFactura` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `Cliente` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `FechaFactura` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Borrado` varchar(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tfactura`
--

INSERT INTO `tfactura` (`CodFactura`, `Cliente`, `FechaFactura`, `Borrado`) VALUES
('cod001', 'user', '02/03/2020', '0'),
('cod002', 'user', '02/03/2020', '0'),
('cod003', 'user', '02/03/2020', '0'),
('cod004', 'user', '04/03/2020', '0'),
('cod005', 'user', '04/03/2020', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tlineafactura`
--

CREATE TABLE `tlineafactura` (
  `CodFactura` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `Zapato` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Cantidad` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Total` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tlineafactura`
--

INSERT INTO `tlineafactura` (`CodFactura`, `Zapato`, `Cantidad`, `Total`) VALUES
('cod001', 'cod012', '1', '13.99'),
('cod001', 'cod015', '1', '13.95'),
('cod001', 'cod026', '1', '5.99'),
('cod002', 'cod026', '1', '5.99'),
('cod003', 'cod026', '1', '5.99'),
('cod004', 'cod004', '1', '16.50'),
('cod004', 'cod005', '1', '8.90'),
('cod004', 'cod006', '1', '11.95'),
('cod004', 'cod007', '1', '19.50'),
('cod005', 'cod004', '1', '16.50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tusuario`
--

CREATE TABLE `tusuario` (
  `CodUsuario` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `Nick` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Pass` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Rol` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `tusuario`
--

INSERT INTO `tusuario` (`CodUsuario`, `Nick`, `Pass`, `Rol`) VALUES
('cod001', 'admin', 'admin', 'admin'),
('cod002', 'user', 'user', 'user'),
('cod005', 'Luis Manuel', 'contraseña', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tdisco`
--
ALTER TABLE `tzapato`
  ADD PRIMARY KEY (`CodZapato`);

--
-- Indices de la tabla `tfactura`
--
ALTER TABLE `tfactura`
  ADD PRIMARY KEY (`CodFactura`),
  ADD KEY `usuario` (`Cliente`);

--
-- Indices de la tabla `tlineafactura`
--
ALTER TABLE `tlineafactura`
  ADD PRIMARY KEY (`CodFactura`,`Zapato`);

--
-- Indices de la tabla `tusuario`
--
ALTER TABLE `tusuario`
  ADD PRIMARY KEY (`CodUsuario`),
  ADD UNIQUE KEY `nick` (`Nick`),
  ADD KEY `nick_2` (`Nick`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
