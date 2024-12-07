-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 07, 2024 at 07:24 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cima`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Action', 'High-energy films with intense sequences, fights, and stunts', '2024-12-07 15:06:10', '2024-12-07 15:06:10'),
(2, 'Adventure', 'Stories of exploration and epic journeys', '2024-12-07 15:06:31', '2024-12-07 15:06:31'),
(3, 'Comedy', 'Light-hearted films designed to entertain and make you laugh', '2024-12-07 15:06:53', '2024-12-07 15:06:53'),
(4, 'Drama', 'Emotional, character-driven narratives', '2024-12-07 15:07:09', '2024-12-07 15:07:09');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2024_12_03_135758_create_shows_table', 1),
(7, '2024_12_04_230033_create_categories_table', 1),
(8, '2024_12_04_230045_create_movies_table', 1),
(9, '2024_12_06_195857_create_show_tvs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` double(8,2) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `description`, `rate`, `image`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Deadpool 3', 'The fan-favorite anti-hero, Deadpool, returns in a chaotic and action-packed adventure filled with humor, violence, and unpredictable twists as he faces new threats and allies.', 9.00, '6754731c918f6.jpg', 1, '2024-12-07 15:09:00', '2024-12-07 15:09:00'),
(2, 'Mad Max: The Wasteland', 'In a post-apocalyptic world where survival is a brutal challenge, Mad Max embarks on a dangerous journey through the desolate wasteland, encountering new allies and enemies in a fight for survival.', 9.50, '6754735867f1c.jpg', 1, '2024-12-07 15:10:00', '2024-12-07 15:10:00'),
(3, 'The Fall Guy', 'A stuntman gets caught in a dangerous conspiracy when a movie set accident turns into a deadly game of cat and mouse, forcing him to fight for his life and uncover the truth.', 7.00, '675473814bf8d.jpg', 1, '2024-12-07 15:10:41', '2024-12-07 15:10:41'),
(4, 'Mission: Impossible – Dead Reckoning Part One', 'Ethan Hunt faces his most dangerous mission yet, embarking on a global chase to stop a deadly force that threatens world stability, with high stakes, thrilling action, and heart-pounding stunts.', 7.00, '675473bb48a1e.jpg', 1, '2024-12-07 15:11:39', '2024-12-07 15:11:39'),
(5, 'Indiana Jones and the Dial of Destiny', 'Indiana Jones returns for one last adventure, uncovering ancient secrets and facing off against formidable enemies as he races against time to find a powerful artifact.', 8.00, '675475872fe88.jfif', 2, '2024-12-07 15:19:19', '2024-12-07 15:19:19'),
(6, 'Vacation Friends 2', 'The hilarious sequel follows two wild couples as they try to navigate their differences and create new memories during a vacation, leading to chaos and laughs along the way.', 8.00, '675475c573f87.jfif', 3, '2024-12-07 15:20:21', '2024-12-07 15:20:21'),
(7, 'The Color Purple', 'A musical drama based on the iconic novel, following the life of Celie as she navigates personal struggles, relationships, and her own journey of self-discovery and empowerment.', 10.00, '6754760605da7.jfif', 4, '2024-12-07 15:21:26', '2024-12-07 15:21:26');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 4, 'YourAppName', '761f38a91fa7ebadaee8946306bee8b637aa847dd3757dc5fb5b25e7991ad46e', '[\"*\"]', NULL, NULL, '2024-12-07 11:09:55', '2024-12-07 11:09:55'),
(2, 'App\\Models\\User', 2, 'YourAppName', '0d847f271aaf9473a4ca04fc37b82b21965eafb6f1477a595e585b56e4be8f6d', '[\"*\"]', NULL, NULL, '2024-12-07 11:10:57', '2024-12-07 11:10:57'),
(3, 'App\\Models\\User', 3, 'Cima', 'd5732106d5ffc41965c38694cf1435b413fc0ba2cda10e6a7a3f0d4a14cb3436', '[\"*\"]', NULL, NULL, '2024-12-07 11:27:58', '2024-12-07 11:27:58'),
(4, 'App\\Models\\User', 3, 'Cima', '49af6f36c17e492f031a256c0fe01f8f178f0c8a7385d2a10e379c4bdf60285c', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:02', '2024-12-07 11:28:02'),
(5, 'App\\Models\\User', 3, 'Cima', 'c4b2aee4142095269052a7e953690a02b499bc50b82185bb8cd23a023e665ed2', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:14', '2024-12-07 11:28:14'),
(6, 'App\\Models\\User', 3, 'Cima', '71d71ec3d6bd3cda3abaae469d2b1de85248cdbe71de08ec4c6b974ab2bcf770', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:17', '2024-12-07 11:28:17'),
(7, 'App\\Models\\User', 3, 'Cima', '8b7d5d776a4dea08c851ff70a74909d16dfd14060d614ea976c48ad5661ac50b', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:18', '2024-12-07 11:28:18'),
(8, 'App\\Models\\User', 3, 'Cima', '201ab8164c678425793b2e3a72eafc42317f9224d4b2abb3f6b1eb7a673eeb45', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:18', '2024-12-07 11:28:18'),
(9, 'App\\Models\\User', 3, 'Cima', '8857e0bed4598e26d82ae2dc6d3bf8d7f08e10c116cbea221b042af9f78aa8b6', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:19', '2024-12-07 11:28:19'),
(10, 'App\\Models\\User', 3, 'Cima', 'c5da15eeb27d9c9cc152193c4cc19061198532f2480ef53666243fdad3214cb1', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:20', '2024-12-07 11:28:20'),
(11, 'App\\Models\\User', 3, 'Cima', '426f1cb07f43a7f8d046629817b2b632ae39de51a92885351d835acd1569cd0b', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:21', '2024-12-07 11:28:21'),
(12, 'App\\Models\\User', 3, 'Cima', 'dd9880ea92bd26eb0f0b5b2144e8679e76e6dacbe6c1920f068ff25cd3323647', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:21', '2024-12-07 11:28:21'),
(13, 'App\\Models\\User', 3, 'Cima', 'a699459db1d0ae54e7250d7828eef05b2eb8ecab13efeb9e9ef8177f716e7759', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:22', '2024-12-07 11:28:22'),
(14, 'App\\Models\\User', 2, 'Cima', '8e0e66db9b50e649833b6963cb01268d2acf6cb28dd06ea1d0099a31e367c5fe', '[\"*\"]', NULL, NULL, '2024-12-07 11:28:40', '2024-12-07 11:28:40'),
(15, 'App\\Models\\User', 5, 'Cima', '03c567cad6fb28b57448a01eb8fbebfd924bfc364ed3ad4aa92e091fb277a660', '[\"*\"]', NULL, NULL, '2024-12-07 11:32:37', '2024-12-07 11:32:37'),
(16, 'App\\Models\\User', 5, 'Cima', 'f60717aaaf12a184ea2bd22d61955f90904f9c2e92ee33b0150731fe964c8d58', '[\"*\"]', NULL, NULL, '2024-12-07 11:35:52', '2024-12-07 11:35:52'),
(17, 'App\\Models\\User', 5, 'Cima', '623084ca82f47a3c5c44778defc692711923aa1028e40c227b9cff237b185ff6', '[\"*\"]', NULL, NULL, '2024-12-07 11:41:56', '2024-12-07 11:41:56'),
(18, 'App\\Models\\User', 5, 'Cima', 'dbcb302c719182330e6ed171be9aeadcc5fd29958cd230701f7a55542e713678', '[\"*\"]', NULL, NULL, '2024-12-07 11:41:58', '2024-12-07 11:41:58'),
(19, 'App\\Models\\User', 5, 'Cima', 'f4f1c248f72357326ded89851459bde14639480d3b7b2e02f320379de63406bf', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:04', '2024-12-07 11:44:04'),
(20, 'App\\Models\\User', 5, 'Cima', 'cada379abd94500dccb79589314893e65521a0eb58a4b554c05bc884d980573f', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:11', '2024-12-07 11:44:11'),
(21, 'App\\Models\\User', 5, 'Cima', 'a446546f8567e23c9f00f9ea28500e310975689dfeae48de96fb4edfd77a3268', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:12', '2024-12-07 11:44:12'),
(22, 'App\\Models\\User', 5, 'Cima', '98277d2ca3cddda6c33646c306c98f262d70306df346bd1db3cd6abe58b27afc', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:12', '2024-12-07 11:44:12'),
(23, 'App\\Models\\User', 5, 'Cima', '2952b3e447c6eab604d89ac914d09d334f2fea1a53e7f3492ac59040231f6487', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:12', '2024-12-07 11:44:12'),
(24, 'App\\Models\\User', 5, 'Cima', '80811ecdcf835994d2b0be0d6b9bb3f830dce27a3f3a5e23761a20fdd80989bd', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:13', '2024-12-07 11:44:13'),
(25, 'App\\Models\\User', 5, 'Cima', '68c9f9eed2209425c65908ca7633189f7c9e5c349bb3da8952129dd3544da7a0', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:14', '2024-12-07 11:44:14'),
(26, 'App\\Models\\User', 5, 'Cima', 'a798f7e9940e950a91b6673720ed53b90b746e1ca3572f8360089039392683d1', '[\"*\"]', NULL, NULL, '2024-12-07 11:44:14', '2024-12-07 11:44:14'),
(27, 'App\\Models\\User', 5, 'Cima', 'b479254fb2e0fa4ad5e7f0ed9b26d37f050efeea8af121e32871860483c5d13c', '[\"*\"]', NULL, NULL, '2024-12-07 11:46:27', '2024-12-07 11:46:27'),
(28, 'App\\Models\\User', 5, 'Cima', 'dbb5d845775989e1db6046532150bd46fbe03acf4b217278a1a84b2a501aefe2', '[\"*\"]', NULL, NULL, '2024-12-07 11:46:36', '2024-12-07 11:46:36'),
(29, 'App\\Models\\User', 2, 'Cima', '90c64071c5c3bf568890c2220bccecb2ca41a2c52422dec4f946fd70c3bcf4f0', '[\"*\"]', NULL, NULL, '2024-12-07 12:03:06', '2024-12-07 12:03:06'),
(30, 'App\\Models\\User', 5, 'Cima', '6cf94a9c7ef1dd2b33dc869a5d94e7399d95abe6b982c59ea3631991c5a0fbf5', '[\"*\"]', NULL, NULL, '2024-12-07 12:05:35', '2024-12-07 12:05:35'),
(31, 'App\\Models\\User', 5, 'Cima', '4cdd15a12679dbe13a482268e6a1bfca5a5a228fe5e93f5e21d9918acb700637', '[\"*\"]', NULL, NULL, '2024-12-07 12:05:41', '2024-12-07 12:05:41'),
(32, 'App\\Models\\User', 5, 'Cima', 'd25f1e1a84a6571d884cb69b68776f1546e123ab79b5c101d87a074cea19b6f7', '[\"*\"]', NULL, NULL, '2024-12-07 12:05:43', '2024-12-07 12:05:43'),
(33, 'App\\Models\\User', 6, 'Cima', 'a6f5844bb5f6dd790f4bf2afdb5027d197ff6135def43033f19b6ae668b58120', '[\"*\"]', NULL, NULL, '2024-12-07 12:22:51', '2024-12-07 12:22:51'),
(34, 'App\\Models\\User', 6, 'Cima', '530a942443aaea5442b57676fb0a1963b672906bbf90f8629ee214177b73a008', '[\"*\"]', NULL, NULL, '2024-12-07 12:23:00', '2024-12-07 12:23:00'),
(35, 'App\\Models\\User', 6, 'Cima', '81237a7ab6ade14266ef5b8b169e93399bef190ee1efc40ae2e77ff51144af70', '[\"*\"]', NULL, NULL, '2024-12-07 12:27:15', '2024-12-07 12:27:15'),
(36, 'App\\Models\\User', 2, 'Cima', 'b7c22b4f6c404bfbf29325b9b9eb631b8b42c30c3f52b29473ab968aa6f5d2f3', '[\"*\"]', NULL, NULL, '2024-12-07 12:41:31', '2024-12-07 12:41:31'),
(37, 'App\\Models\\User', 6, 'Cima', '320b4ef99b757fc6ba4f599873b13b7b0bd093aaf5a364b654ad43bb0bd18c74', '[\"*\"]', NULL, NULL, '2024-12-07 12:42:39', '2024-12-07 12:42:39'),
(38, 'App\\Models\\User', 6, 'Cima', '5751b8909bff72c04a3695e4026e69deabdd047dc1b303916d0ba98bb552c8fa', '[\"*\"]', NULL, NULL, '2024-12-07 12:45:46', '2024-12-07 12:45:46'),
(39, 'App\\Models\\User', 6, 'Cima', 'aac0c72167c61ed04add37c1d0a99fbbae05f01a6f4fe1f0070c9a6c9abdcdf2', '[\"*\"]', NULL, NULL, '2024-12-07 12:45:57', '2024-12-07 12:45:57'),
(40, 'App\\Models\\User', 6, 'Cima', '10b27fbb2971cafa03c2834f77c5ca16bb11d6e9b167c90d5d21e590bd8b6712', '[\"*\"]', NULL, NULL, '2024-12-07 12:46:02', '2024-12-07 12:46:02'),
(41, 'App\\Models\\User', 6, 'Cima', '6c50fb107be8583fb6332b1748ac51f38d9e72256f3bd224ec0aec9f2698dff7', '[\"*\"]', NULL, NULL, '2024-12-07 12:46:15', '2024-12-07 12:46:15'),
(42, 'App\\Models\\User', 6, 'Cima', 'df8f1ffd68b245edcae584f692887e17b55114a7a5459b31bd81180a4cbf929e', '[\"*\"]', NULL, NULL, '2024-12-07 12:48:22', '2024-12-07 12:48:22'),
(43, 'App\\Models\\User', 6, 'Cima', '7f9c2d323bd8709ced6601cf80001193e7353c84c08f75d3c14ca5e1486005f9', '[\"*\"]', NULL, NULL, '2024-12-07 12:49:39', '2024-12-07 12:49:39'),
(44, 'App\\Models\\User', 6, 'Cima', 'c62173818a3c96ebe5db06fbcc58fe48c2a1969413ede200edf2fe2fcdfb9d26', '[\"*\"]', NULL, NULL, '2024-12-07 12:50:52', '2024-12-07 12:50:52'),
(45, 'App\\Models\\User', 6, 'Cima', 'ffce27d2c406a8a5df4fdf84d9f9e8d266bddd835f9052b5b1296a37733fbf5e', '[\"*\"]', NULL, NULL, '2024-12-07 12:52:27', '2024-12-07 12:52:27'),
(46, 'App\\Models\\User', 6, 'Cima', 'af1fb2cb91e8cee7b5e143a719f25a5db4f4908d7e2a68ff5cbaaef507a92f4a', '[\"*\"]', NULL, NULL, '2024-12-07 12:53:56', '2024-12-07 12:53:56'),
(47, 'App\\Models\\User', 6, 'Cima', '9f1c5f69494223cecd176236b0c667ef96ff6946b067a4d18f0786239d1269dd', '[\"*\"]', NULL, NULL, '2024-12-07 12:55:01', '2024-12-07 12:55:01'),
(48, 'App\\Models\\User', 6, 'Cima', '0faaaf1df69c9d7c82b5e0c04a8e67dca9c9d3ff939d21acb2e816395dc9233c', '[\"*\"]', NULL, NULL, '2024-12-07 12:57:59', '2024-12-07 12:57:59'),
(49, 'App\\Models\\User', 6, 'Cima', 'd5fe2b86f50d4cfea9a8b6e16d8e865472697f496997b6b953a58da04dc010b6', '[\"*\"]', NULL, NULL, '2024-12-07 13:01:14', '2024-12-07 13:01:14'),
(50, 'App\\Models\\User', 6, 'Cima', 'b911afc923261cbdf6fd7330629b94cda5ebd0258c89f8112e4ceab48db1286c', '[\"*\"]', NULL, NULL, '2024-12-07 13:04:08', '2024-12-07 13:04:08'),
(51, 'App\\Models\\User', 6, 'Cima', 'd4f658128b7a6944aec2e6aeb5487149b33083bc125dcd4be142095b97c33db3', '[\"*\"]', NULL, NULL, '2024-12-07 13:49:45', '2024-12-07 13:49:45'),
(52, 'App\\Models\\User', 2, 'Cima', '685b6d5df58c92ceb40e152504910e06bafad5b69de86721d417e7ff458d1aa2', '[\"*\"]', NULL, NULL, '2024-12-07 14:06:08', '2024-12-07 14:06:08'),
(53, 'App\\Models\\User', 2, 'Cima', 'cbc98971a61fab3e9c024e63b94efdf94057ffa9f4d2b1ef9b3651813b5ecb96', '[\"*\"]', NULL, NULL, '2024-12-07 14:18:36', '2024-12-07 14:18:36'),
(54, 'App\\Models\\User', 2, 'Cima', 'ead380dabfaaf7069b568007a660aff17663a6f2fe46ea93d47da999f60b4173', '[\"*\"]', NULL, NULL, '2024-12-07 14:22:05', '2024-12-07 14:22:05'),
(55, 'App\\Models\\User', 6, 'Cima', '261b9d91baede439c377156a0d7d18f90c21986d2943aac23611e0e11c27ba2a', '[\"*\"]', NULL, NULL, '2024-12-07 14:23:07', '2024-12-07 14:23:07'),
(56, 'App\\Models\\User', 2, 'Cima', 'ba8a337fee1c6f2f1e88c36c0d9ff59d90fab44e4cb00b204df467264cfb400f', '[\"*\"]', NULL, NULL, '2024-12-07 14:23:55', '2024-12-07 14:23:55'),
(57, 'App\\Models\\User', 2, 'Cima', '09b66f8a986bfb1b0c79fd7e9e89f1259549ec78618ddcb72043e4a68a8c5faf', '[\"*\"]', NULL, NULL, '2024-12-07 14:24:48', '2024-12-07 14:24:48'),
(58, 'App\\Models\\User', 2, 'Cima', '217eca5276a934aebacb00f0b5bd406f8414397c9e9a4768c9fde09a36ef5d2a', '[\"*\"]', NULL, NULL, '2024-12-07 14:27:28', '2024-12-07 14:27:28'),
(59, 'App\\Models\\User', 6, 'Cima', '1b621dc216e25894e89252688fd808368684eb518410a74f28f0b6a0de2cf870', '[\"*\"]', NULL, NULL, '2024-12-07 14:27:51', '2024-12-07 14:27:51'),
(60, 'App\\Models\\User', 6, 'Cima', 'e3f5d9f469f53497b3bb18e5c9abcadeb2119aaae90f0927a48407524aaf1fa9', '[\"*\"]', NULL, NULL, '2024-12-07 14:32:10', '2024-12-07 14:32:10'),
(61, 'App\\Models\\User', 6, 'Cima', 'acb35b16a23d7cd80a1e184c19451c3200a72b20850569884c3bda688a9eab56', '[\"*\"]', NULL, NULL, '2024-12-07 14:39:19', '2024-12-07 14:39:19'),
(62, 'App\\Models\\User', 2, 'Cima', '84f90425d090937aef651211c227525043fe40841c99d4c017006b47e90797d5', '[\"*\"]', NULL, NULL, '2024-12-07 14:39:45', '2024-12-07 14:39:45'),
(63, 'App\\Models\\User', 6, 'Cima', 'f44436581da7098712ec6f7980a531fbd70cc63630874483e44a7dfd1f228520', '[\"*\"]', NULL, NULL, '2024-12-07 16:02:52', '2024-12-07 16:02:52'),
(64, 'App\\Models\\User', 2, 'Cima', '081cc9aa6c77d9de4e1f8ce29c241c6bb09c11a745b6b5b8440c156e027c30fc', '[\"*\"]', NULL, NULL, '2024-12-07 17:31:22', '2024-12-07 17:31:22'),
(65, 'App\\Models\\User', 6, 'Cima', '2a28959102e4d321c594485d4878e6901a033489b45d3932ceec7775f2304f7d', '[\"*\"]', NULL, NULL, '2024-12-07 17:32:22', '2024-12-07 17:32:22');

-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

CREATE TABLE `shows` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shows`
--

INSERT INTO `shows` (`id`, `title`, `image`, `description`, `created_at`, `updated_at`) VALUES
(1, 'The Once Who Lives', '67546d14010c5.jpg', '\"The Ones Who Live\" is a post-apocalyptic drama exploring survival, connection, and the pursuit of hope in a world overrun by the undead.', '2024-12-07 14:43:16', '2024-12-07 14:43:16'),
(3, 'Breaking Bad', '67546d7c57242.jpg', '\"Breaking Bad\" is a gripping crime drama about a high school chemistry teacher turned methamphetamine kingpin, navigating moral dilemmas and dangerous criminal underworlds.', '2024-12-07 14:45:00', '2024-12-07 14:45:00'),
(4, 'Peaky Blinders', '67546db18642a.jpg', '\"Peaky Blinders\" is a stylish period crime drama following the ruthless Shelby family as they build a powerful gang empire in post-World War I Birmingham.', '2024-12-07 14:45:53', '2024-12-07 14:45:53'),
(6, 'Form 3', '6754722e1d741.png', '\"Form 3\" explores the complex lives and challenges of a tight-knit group as they navigate personal struggles, relationships, and unexpected conflicts within their community.', '2024-12-07 15:05:02', '2024-12-07 15:05:02');

-- --------------------------------------------------------

--
-- Table structure for table `show_tvs`
--

CREATE TABLE `show_tvs` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` double(8,2) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `show_tvs`
--

INSERT INTO `show_tvs` (`id`, `name`, `description`, `rate`, `image`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Supacell (Season 1)', 'This series delves into a world where ordinary individuals are granted superpowers, leading to intense battles and moral dilemmas. As the characters navigate their newfound abilities, they must decide whether to use their powers for good or evil in a high-stakes setting.', 8.50, '675476816393a.jpg', 1, '2024-12-07 15:23:29', '2024-12-07 15:23:29'),
(2, 'Shōgun: Limited Series', 'Set in feudal Japan, this action-packed drama brings the story of a British navigator shipwrecked on Japan\'s shores. The show explores his struggle to adapt to the Samurai code and the power struggles within the Japanese clans.', 9.00, '675476b9e4dba.jpg', 1, '2024-12-07 15:24:25', '2024-12-07 15:24:25'),
(3, 'Justice League: Crisis on Infinite Earths (Part 1)', 'A thrilling animated adventure where the Justice League must confront a multiverse-scale crisis. This high-energy series is packed with action and features numerous DC superheroes coming together to save their universe from collapse. The stakes have never been higher as heroes must work together in ways they never have before.', 8.70, '6754770f4926b.jpg', 2, '2024-12-07 15:25:51', '2024-12-07 15:25:51'),
(5, 'Rebel Moon: Part II', 'The next installment of Zack Snyder\'s epic space saga continues on Netflix in April 2024. In this adventure, a group of rebels must navigate a galaxy at war, fighting against an oppressive empire. With high stakes and breathtaking visuals, this series takes viewers on an action-packed journey across distant worlds as the rebels struggle to bring hope to a divided galaxy.', 8.70, '67547744ea22a.jpg', 2, '2024-12-07 15:26:44', '2024-12-07 15:26:44'),
(6, 'The Sticky', 'This dark comedy revolves around the real-life Great Canadian Maple Syrup Heist, where a farmer steals millions of dollars worth of syrup to save her livelihood. The series blends humor with crime and features an all-star cast, including Margo Martindale and Jamie Lee Curtis, for a quirky, satirical look at the syrup industry.', 9.80, '6754778879397.jfif', 3, '2024-12-07 15:27:52', '2024-12-07 15:27:52'),
(7, 'No Good Deed', 'A hilarious sitcom where multiple families believe a single house will solve all their problems. However, they soon discover that the grand 1920s home isn’t what it appears to be. Starring Linda Cardellini, Lisa Kudrow, and O-T Fagbenle, the show promises plenty of comedic moments filled with absurd situations.', 8.00, '675477bff1f27.jfif', 3, '2024-12-07 15:28:48', '2024-12-07 15:28:48'),
(8, 'Black Doves', 'Set against a London Christmas backdrop, this thriller follows Helen, the wife of a politician who secretly doubles as a spy. After her lover\'s assassination, she must navigate a dangerous world of secrets and survival, starring Keira Knightley and Ben Whishaw', 7.80, '675477fa799df.jpg', 4, '2024-12-07 15:29:46', '2024-12-07 15:29:46'),
(9, 'Virgin River Season', 'In a heartwarming continuation, Mel and Jack finally get married, but their happiness is tested by family drama. The small town faces loss, love, and growing connections', 8.50, '675478434dc9f.jfif', 4, '2024-12-07 15:30:59', '2024-12-07 15:30:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'ghazi', 'ghazi@gmail.com', 'user', NULL, '$2y$12$rrukCCHFOPRcrK2yu5eOueiLjnOImsttI1w.JCer4HtaVbDz5nfVq', NULL, '2024-12-07 10:18:32', '2024-12-07 10:18:32'),
(2, 'Admin User', 'admin@example.com', 'admin', NULL, '$2y$12$8.LuMyo7IYkUHKBbVH4yeuPLauQ87WPrOGN7xZ.v2gruMekTXaade', NULL, '2024-12-07 10:22:15', '2024-12-07 10:22:15'),
(3, 'test', 'test@gmail.com', 'user', NULL, '$2y$12$sg1xqDEFVVTWQoZaMlTrnOg6Yoxwrhrqq1ZCWbVelj4oVVjG8nsku', NULL, '2024-12-07 11:02:32', '2024-12-07 11:02:32'),
(4, 'ghazi rabeh', 'ghazirabeh@gmail.com', 'user', NULL, '$2y$12$GWzqEGG9sZ6VRWrwZYte2OcCFdlQtIbQ9mkqv7KCf1sgac/rlbirO', NULL, '2024-12-07 11:09:41', '2024-12-07 11:09:41'),
(5, 'ghazi', 'ghazi1@gmail.com', 'user', NULL, '$2y$12$oUHPBe5.x/9r.OiZJjqcUOJM12VGIfiX4WQ4LuIJJgbqguvYrG5Pm', NULL, '2024-12-07 11:32:20', '2024-12-07 11:32:20'),
(6, 'nassim', 'nassim@gmail.com', 'user', NULL, '$2y$12$8qGK75IMuQXxPoHSk/jzPeIe4HLFS3bUuR9Cavg0CqwLIKmp4O59.', NULL, '2024-12-07 12:22:33', '2024-12-07 12:22:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movies_category_id_foreign` (`category_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `show_tvs`
--
ALTER TABLE `show_tvs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `show_tvs_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `shows`
--
ALTER TABLE `shows`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `show_tvs`
--
ALTER TABLE `show_tvs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `show_tvs`
--
ALTER TABLE `show_tvs`
  ADD CONSTRAINT `show_tvs_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
