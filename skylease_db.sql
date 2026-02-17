-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 17, 2026 at 06:26 PM
-- Server version: 8.0.35
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skylease_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `helicopter_id` int NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `helicopter_id`, `content`, `created_at`) VALUES
(1, 2, 1, 'Too small', '2026-02-17 17:05:01'),
(2, 2, 1, 'Me gusta', '2026-02-17 17:06:42'),
(3, 2, 1, 'Perfecto para mi', '2026-02-17 17:10:48');

-- --------------------------------------------------------

--
-- Table structure for table `helicopters`
--

CREATE TABLE `helicopters` (
  `id` int NOT NULL,
  `brand` varchar(50) NOT NULL,
  `model` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `capacity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  `features` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `helicopters`
--

INSERT INTO `helicopters` (`id`, `brand`, `model`, `image`, `capacity`, `price`, `description`, `features`) VALUES
(1, 'Robinson', 'R44 Raven II', '/images/helicopters/r44.webp', 3, 450.00, 'El helicóptero más popular del mundo para vuelos privados. Ideal para tours cortos y fotografía aérea gracias a su excelente visibilidad.', '[\"Velocidad Máxima: 240 km/h\", \"Autonomía: 550 km\", \"Perfecto para vuelos turísticos y fotografía.\", \"Motor de pistón Lycoming de alta fiabilidad.\"]'),
(2, 'Bell', '206 JetRanger', '/images/helicopters/bell206.webp', 4, 850.00, 'Un clásico de la aviación, conocido por su fiabilidad y seguridad. Perfecto para traslados ejecutivos de media distancia.', '[\"Velocidad Máxima: 224 km/h\", \"Autonomía: 693 km\", \"Ideal para traslados corporativos eficientes.\", \"Suspensión suave líder en su clase.\"]'),
(3, 'Airbus', 'H125 Écureuil', '/images/helicopters/h125.webp', 5, 1200.00, 'Reconocido por su potencia y versatilidad en entornos de alta montaña. Ofrece una cabina espaciosa y climatizada.', '[\"Velocidad Máxima: 287 km/h\", \"Autonomía: 662 km\", \"Rendimiento superior en grandes alturas.\", \"Piso plano para carga fácil de equipaje.\"]'),
(4, 'AgustaWestland', 'AW109 Power', '/images/helicopters/aw109.webp', 6, 2100.00, 'Sinónimo de elegancia y velocidad. Este bimotor es la opción preferida para transporte VIP corporativo rápido.', '[\"Velocidad Máxima: 311 km/h\", \"Autonomía: 932 km\", \"La opción más rápida para transporte VIP.\", \"Tren de aterrizaje retráctil aerodinámico.\"]'),
(5, 'Robinson', 'R66 Turbine', '/images/helicopters/r66.webp', 4, 650.00, 'La evolución del R44 con motor de turbina. Ofrece mayor potencia, suavidad en el vuelo y un compartimento de equipaje amplio.', '[\"Velocidad Máxima: 260 km/h\", \"Autonomía: 600 km\", \"Vuelo suave gracias a su motor de turbina.\", \"Maletero dedicado de gran volumen (130 kg).\"]'),
(6, 'Eurocopter', 'EC135', '/images/helicopters/ec135.webp', 6, 2300.00, 'Famoso por su bajo nivel de ruido y seguridad bimotor. Ampliamente utilizado para servicios médicos y transporte de lujo.', '[\"Velocidad Máxima: 254 km/h\", \"Autonomía: 635 km\", \"Operación extremadamente silenciosa.\", \"Rotor de cola Fenestron para mayor seguridad.\"]'),
(7, 'Sikorsky', 'S-76D', '/images/helicopters/s76.webp', 8, 3500.00, 'El estándar de oro en transporte ejecutivo. Una cabina silenciosa y lujosa comparable a un jet privado.', '[\"Velocidad Máxima: 287 km/h\", \"Autonomía: 760 km\", \"Experiencia de lujo comparable a un jet privado.\", \"Tecnología de reducción de vibraciones activas.\"]'),
(8, 'Bell', '407 GXi', '/images/helicopters/bell407.webp', 6, 1500.00, 'Combina velocidad, rendimiento y maniobrabilidad. Cuenta con una cabina configurada tipo club para reuniones en vuelo.', '[\"Velocidad Máxima: 246 km/h\", \"Autonomía: 624 km\", \"Asientos configurados \'Club\' para reuniones.\", \"Aviónica Garmin G1000H NXi de última generación.\"]'),
(9, 'MD Helicopters', 'MD 500E', '/images/helicopters/md500.webp', 3, 900.00, 'Compacto, ágil y muy rápido. Ideal para ejecutivos que necesitan moverse rápidamente entre helipuertos urbanos.', '[\"Velocidad Máxima: 282 km/h\", \"Autonomía: 430 km\", \"Agilidad inigualable en entornos urbanos.\", \"Diseño de rotor de 5 palas para estabilidad.\"]'),
(10, 'Airbus', 'H130', '/images/helicopters/h130.webp', 6, 1350.00, 'Diseñado específicamente para el turismo y vuelos panorámicos. Posee la cabina más ancha de su categoría.', '[\"Velocidad Máxima: 237 km/h\", \"Autonomía: 610 km\", \"La mejor visibilidad panorámica del mercado.\", \"Cabina extra ancha y sistema antivibración.\"]'),
(11, 'Leonardo', 'AW139', '/images/helicopters/aw139.webp', 12, 4200.00, 'Un helicóptero de tamaño medio líder en el mercado. Capacidad superior para grupos grandes sin sacrificar el lujo.', '[\"Velocidad Máxima: 306 km/h\", \"Autonomía: 1061 km\", \"Ideal para grupos grandes y largas distancias.\", \"Certificación de seguridad Categoría A.\"]'),
(12, 'Bell', '429 GlobalRanger', '/images/helicopters/bell429.webp', 7, 2800.00, 'Bimotor ligero con una cabina de vidrio excepcional. Ofrece un vuelo excepcionalmente suave y tecnología de punta.', '[\"Velocidad Máxima: 287 km/h\", \"Autonomía: 722 km\", \"Puertas traseras tipo almeja (opcionales).\", \"Cabina de cristal totalmente integrada.\"]'),
(13, 'Guimbal', 'Cabri G2', '/images/helicopters/cabri.webp', 1, 350.00, 'Pequeño, moderno y eficiente. Perfecto para vuelos individuales, entrenamiento o desplazamientos muy cortos.', '[\"Velocidad Máxima: 185 km/h\", \"Autonomía: 700 km\", \"Económico para vuelos individuales.\", \"Estructura de cabina antichoque de alta seguridad.\"]'),
(14, 'Airbus', 'H145', '/images/helicopters/h145.webp', 9, 3100.00, 'Versatilidad compacta con dos motores. Su diseño de rotor trasero fenestron garantiza seguridad en tierra y vuelo silencioso.', '[\"Velocidad Máxima: 240 km/h\", \"Autonomía: 680 km\", \"Acceso trasero fácil para carga y equipaje.\", \"Huella acústica reducida para zonas sensibles.\"]'),
(15, 'Sikorsky', 'S-92', '/images/helicopters/s92.webp', 19, 6500.00, 'El gigante del transporte civil. Ofrece comodidades de baño completo y cabina de pie para grupos numerosos.', '[\"Velocidad Máxima: 306 km/h\", \"Autonomía: 998 km\", \"Altura de cabina suficiente para estar de pie.\", \"Incluye baño completo y rampa de carga.\"]');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `helicopter_id` int NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `flight_date` date NOT NULL,
  `flight_time` time NOT NULL,
  `comments` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `user_id`, `helicopter_id`, `full_name`, `email`, `phone`, `flight_date`, `flight_time`, `comments`, `created_at`) VALUES
(1, 2, 1, 'user1', 'user1@email.com', '', '2026-03-01', '12:00:00', '', '2026-02-17 17:46:01'),
(2, 2, 2, 'user1', 'user1@email.com', '+1234567', '2026-12-12', '15:00:00', 'Voy a necesitar champañ', '2026-02-17 17:50:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'admin', 'admin@skylease.com', '$2b$10$X7V.j.123456HASH_FAKE_SOLO_EJEMPLO', 'admin', '2026-02-17 09:41:01'),
(2, 'user1', 'user1@email.com', '$2b$10$vCPiLkxg/XkbnuWSOy/Y.OMF4jAojL5RrZmDpcA1a2UFml98bY6Fu', 'user', '2026-02-17 16:37:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `helicopter_id` (`helicopter_id`);

--
-- Indexes for table `helicopters`
--
ALTER TABLE `helicopters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `helicopter_id` (`helicopter_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `helicopters`
--
ALTER TABLE `helicopters`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`helicopter_id`) REFERENCES `helicopters` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`helicopter_id`) REFERENCES `helicopters` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
