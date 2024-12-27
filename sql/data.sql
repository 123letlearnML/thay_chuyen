-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: thuc_tap_1
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hang`
--
USE btl_web;
DROP TABLE IF EXISTS `hang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hang` (
  `ma_don_hang` bigint NOT NULL AUTO_INCREMENT,
  `ghi_chu` varchar(255) DEFAULT NULL,
  `ma_giao_dich` varchar(255) DEFAULT NULL,
  `ngay_dat_hang` varchar(255) DEFAULT NULL,
  `ngay_giao_hang` varchar(255) DEFAULT NULL,
  `phuong_thuc_thanh_toan` varchar(255) DEFAULT NULL,
  `tong_gia_tri` double NOT NULL,
  `trang_thai` varchar(255) DEFAULT NULL,
  `ma_khach_hang` bigint DEFAULT NULL,
  PRIMARY KEY (`ma_don_hang`),
  KEY `FKeyg32ompqbuunx41qhqx0qu7b` (`ma_khach_hang`),
  CONSTRAINT `FKeyg32ompqbuunx41qhqx0qu7b` FOREIGN KEY (`ma_khach_hang`) REFERENCES `khach_hang` (`ma_khach_hang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hang`
--

LOCK TABLES `hang` WRITE;
/*!40000 ALTER TABLE `hang` DISABLE KEYS */;
/*!40000 ALTER TABLE `hang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khach_hang`
--

DROP TABLE IF EXISTS `khach_hang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khach_hang` (
  `ma_khach_hang` bigint NOT NULL AUTO_INCREMENT,
  `dia_chi_giao_hang` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `so_dien_thoai` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `ten` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ma_khach_hang`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khach_hang`
--

LOCK TABLES `khach_hang` WRITE;
/*!40000 ALTER TABLE `khach_hang` DISABLE KEYS */;
-- INSERT INTO `khach_hang` VALUES (1,NULL,'maytinhdongdo362@gmail.com','$2a$10$QmPefa7vbVA2dz01OaOu9.lG4PxNEwXvBfoAvG7I5zNiPCGF5IUXC',NULL,'Nguyen Van A'),(2,NULL,'duongsanemi@gmail.com','$2a$10$O9luJE93tHbmBYPseOtE8.QXSZgEbVAvD2JnPc6vKVqlccEUflzXy',NULL,'le');
/*!40000 ALTER TABLE `khach_hang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `id` varchar(255) NOT NULL,
  `gia` bigint DEFAULT NULL,
  `hinh_anh_url` varchar(255) DEFAULT NULL,
  `mo_ta` text,
  `so_luong` int DEFAULT NULL,
  `ten_san_pham` varchar(255) DEFAULT NULL,
  `thuong_hieu` varchar(255) DEFAULT NULL,
  `ma_don_hang` bigint DEFAULT NULL,
  `link_youtube` varchar(255) DEFAULT NULL,
  `so_luong_that` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7ntqaq533ymfbk6pnjytprn1` (`ma_don_hang`),
  CONSTRAINT `FK7ntqaq533ymfbk6pnjytprn1` FOREIGN KEY (`ma_don_hang`) REFERENCES `hang` (`ma_don_hang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES ('1d70d6dd-0b23-42ba-af7a-883696c403f8',12999000,'iphone13pro.webp','Máy mới 100%, chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam. iPhone sử dụng iOS 18, đi kèm cáp sạc USB‑C (1m) và tài liệu. Chính sách 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng do nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn (xem chi tiết). Giá sản phẩm đã bao gồm VAT.',10,'iPhone 13 pro 512GB ','iphone',NULL,'https://youtu.be/aXI5B8UH7m8?si=vvG2L9g9_iTE-g94',80),('1e9372da-a783-4460-8e51-82ea685d1516',20999000,'iphone-16.webp','Máy mới 100%, chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam. iPhone sử dụng iOS 18, đi kèm cáp sạc USB‑C (1m) và tài liệu. Chính sách 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng do nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn (xem chi tiết). Giá sản phẩm đã bao gồm VAT.',10,'iPhone 16 128GB','iphone',NULL,'https://youtu.be/vylUgx7I-sg?si=lG6RmPDtrMdd2iPp',100),('306a10a4-6ddd-4540-8b6e-32e3be4d0364',13000000,'vivov25pro.png','Thời gian bảo hành: \nBH Thường 12 Tháng\n(Xem chi tiết)\n\nGiao hàng tận nơi miễn phí trong 30 phút (Tìm hiểu thêm)\nTặng: Miễn phí BHV lần thứ 5, khi đã mua BHV lần thứ 4.',50,'Vivo V25 Pro 5G 128GB','vivo',NULL,'https://youtu.be/nj8HOMpwE10?si=Z5XCq7y32zX4NcLs',26),('34088458-fbb0-4c1c-a598-6348c8fc7d29',39999000,'iphone15vang.jpg','Máy mới 100%, chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam. iPhone sử dụng iOS 18, đi kèm cáp sạc USB‑C (1m) và tài liệu. Chính sách 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng do nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn (xem chi tiết). Giá sản phẩm đã bao gồm VAT.',20,'iPhone 15 Max 512GB ','iphone',NULL,'https://youtu.be/mRdYzyfZpzw?si=pIhlzn3Ebf3AeQch',50),('444db8ab-9832-4750-8bc4-e5b64a6387ef',6250000,'xiaomi14pro.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',10,'Redmi Note 14 Pro 5G','xiaomi',NULL,'https://youtu.be/BpI6gFKm4HA?si=KhBnMfOYPLP9DBwb',80),('539e42ea-88f0-4c7a-9539-84fefeff68fc',9450000,'vivoneo9s.webp','Thời gian bảo hành: \nBH Thường 12 Tháng\n(Xem chi tiết)\n\nGiao hàng tận nơi miễn phí trong 30 phút (Tìm hiểu thêm)\nTặng: Miễn phí BHV lần thứ 5, khi đã mua BHV lần thứ 4.',20,'Vivo Neo 9S Pro Plus 5G','vivo',NULL,'https://youtu.be/lV5SsuO0okc?si=1O39fQUvz6Ehma0n',20),('596fc333-dd50-4d2f-b518-6a5b2b10e68a',8490000,'vivov23e.webp','Thời gian bảo hành: \nBH Thường 12 Tháng\n(Xem chi tiết)\n\nGiao hàng tận nơi miễn phí trong 30 phút (Tìm hiểu thêm)\nTặng: Miễn phí BHV lần thứ 5, khi đã mua BHV lần thứ 4.',30,'Vivo V23e 128GB','vivo',NULL,'https://youtu.be/Puf6iSZZMYs?si=ZSGramcZm_4XoBeq',20),('6104f108-0db2-4d15-b109-2f7a954d7054',4150000,'redmi125g.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',25,'Redmi Note 12 5G','redmi',NULL,'https://youtu.be/MAOyeEejOl4?si=dPDL5YeAr04-uQ3v',65),('6edb36e6-b64f-46e8-93b2-1806dd288a7d',6650000,'xiaominote11pro.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',10,'Redmi Note 11 Pro+','xiaomi',NULL,'https://youtu.be/Jw3z12jvenA?si=N4rQhaDnRNFvcaik',20),('8315bf43-2c9d-4fb0-84a3-f5871eb3600d',24540000,'xiaomi14utra.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',10,'Xiaomi 14 Ultra','xiaomi',NULL,'https://youtu.be/TqOkyndItBI?si=KjO6EH6qZawKsJti',97),('86f26490-6dfb-46b9-aa81-ddae5d220d14',5000000,'vivoz913.webp','Thời gian bảo hành: \nBH Thường 12 Tháng\n(Xem chi tiết)\n\nGiao hàng tận nơi miễn phí trong 30 phút (Tìm hiểu thêm)\nTặng: Miễn phí BHV lần thứ 5, khi đã mua BHV lần thứ 4.',31,'Vivo Z9 13 Chính hãng  ','vivo',NULL,'https://youtu.be/Zqz5k8XW3ps?si=YNDMtpn-Jvaz4LY1',45),('a397c9ef-b6d2-4eb9-824e-7c1a38fb5613',8150000,'redmi14pro.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',30,'Redmi Note 15 Pro 5G','redmi',NULL,'https://youtu.be/dMh2Gggpm9w?si=QwZ7lglSRek7vI-o',100),('aa4c1ff6-2c9d-4d6e-8f1f-e12722723ff8',18450000,'xiaomi15.png','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',7,'Xiaomi 15','xiaomi',NULL,'https://youtu.be/Ki-Q4ew7Soc?si=AfShsrNuHGxilkMD',10),('c437b4c7-47e9-4664-8ed4-22393bbdc6bf',24000000,'xiaomimixflip.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',NULL,'Xiaomi Mix Flip','xiaomi',NULL,'https://youtu.be/4baLgA5inQw?si=WtgTH7dxclwAIQO_',20),('c46d59be-21a7-4e56-8846-f43953299eb7',25000000,'iphone14.webp','Máy mới 100%, chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam. iPhone sử dụng iOS 18, đi kèm cáp sạc USB‑C (1m) và tài liệu. Chính sách 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng do nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn (xem chi tiết). Giá sản phẩm đã bao gồm VAT.',10,'iPhone 14 pro 128GB ','iphone',NULL,'https://youtu.be/p_ZlsVKGh44?si=Qn6zZLyRjSuHZ1WQ',100),('c5621518-4b2f-4103-b3e2-0064a7bcdbca',31950000,'xiaomimixfold.png','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',15,'Xiaomi Mix Fold','xiaomi',NULL,'https://youtu.be/aEw22ThUYTg?si=OSaCBLBjA9GarrDl',77),('ccd73e14-ef14-4792-97d7-6db6b5631ab2',6550000,'vivoz9turbo.webp','Thời gian bảo hành: \nBH Thường 12 Tháng\n(Xem chi tiết)\n\nGiao hàng tận nơi miễn phí trong 30 phút (Tìm hiểu thêm)\nTặng: Miễn phí BHV lần thứ 5, khi đã mua BHV lần thứ 4.',30,'Vivo iQOO Z9 Turbo 5G','vivo',NULL,'https://youtu.be/6bb2I_BK55o?si=Ohs--KOah8d1Evpo',200),('d0524d99-54a5-4099-b335-eacbba353a3c',4450000,'redmipadse.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',20,'Redmi Pad SE','redmi',NULL,'https://youtu.be/4-AshGojkPg?si=mfdGV_CQ2-G0pa6X',25),('e8b6eefb-2d4a-417b-a334-3562990e76d2',110000000,'iphone12.jpg','Máy mới 100%, chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam. iPhone sử dụng iOS 18, đi kèm cáp sạc USB‑C (1m) và tài liệu. Chính sách 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng do nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn (xem chi tiết). Giá sản phẩm đã bao gồm VAT.',15,'iPhone 12 128GB ','iphone',NULL,'https://youtu.be/5PF2JPwBoxc?si=5-9DWo1gXze4h5Na',10),('f7c66a31-77d0-4f9b-b73a-3fa2f3ebfee5',9050000,'xiaominote11pro.webp','✓ Nhập khẩu chính hãng Xiaomi (Bắc Kinh)\n\n✓ Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày đầu tiên.\n\n✓ Giảm thêm 30% phí sửa chữa dịch vụ (sau bảo hành)\n\n✓ Mới 100% Fullbox nguyên seal',25,'Xiaomi Note 11 Pro 5G','redmi',NULL,'https://youtu.be/XR4KK4JBTzE?si=jjvgAnylY9gv3Pfb',34);
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-26 23:40:04
