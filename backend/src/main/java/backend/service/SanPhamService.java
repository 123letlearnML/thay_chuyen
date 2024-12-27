package backend.service;

import backend.domain.SanPham;
import backend.repository.SanPhamRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.File;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class SanPhamService {
    @Autowired
    SanPhamRepository sanPhamRepository;
    @Value("${images.location}")
    private String imagesLocation;
    public Page<SanPham> getAllSanPhams(int page, int size) {
        return sanPhamRepository.findAll(PageRequest.of(page, size, Sort.by("tenSanPham")));
    }

    public SanPham getSanPham(String id) {
        return sanPhamRepository.findById(id).orElseThrow(() -> new RuntimeException("SanPham not found"));
    }

    public SanPham createSanPham(SanPham contact) {
        return sanPhamRepository.save(contact);
    }

    public SanPham putSanPham( String id, SanPham sanPham){
        Optional<SanPham> sanPham1 = sanPhamRepository.findById(id);
       if(sanPham1.isPresent()){
           SanPham updatedSanPham = sanPham1.get();
           updatedSanPham.setTenSanPham(sanPham.getTenSanPham());
           updatedSanPham.setMoTa(sanPham.getMoTa());
           updatedSanPham.setSoLuong(sanPham.getSoLuong());
           updatedSanPham.setThuongHieu(sanPham.getThuongHieu());
           updatedSanPham.setHinhAnhUrl(sanPham.getHinhAnhUrl());
           updatedSanPham.setGia(sanPham.getGia());
           updatedSanPham.setSoLuongThat(sanPham.getSoLuongThat());
           updatedSanPham.setLinkYoutube(sanPham.getLinkYoutube());

           return sanPhamRepository.save(updatedSanPham);
       }else {
           throw new RuntimeException("sai o put sanphamService voi id la" + id);
       }
    }



    public List<SanPham> getSanPhamByThuongHieu(String thuongHieu){
        List<SanPham> sanPhams = sanPhamRepository.getSanPhamByThuongHieu(thuongHieu);
        if (sanPhams.isEmpty()) {
            throw new RuntimeException("No products found for the given brand: " + thuongHieu);
        }
return sanPhams;

    }
    // Lấy danh sách sản phẩm sắp xếp theo thương hiệu
    public List<SanPham> getAllSanPhamGroupedByThuongHieu() {
        return sanPhamRepository.findAllByOrderByThuongHieuAsc();
    }




    public void deleteSanPham(SanPham contact) {
        // Assignment
    }

//    public String uploadPhoto(String id, MultipartFile file) {
//        log.info("Saving picture for user ID: {}", id);
//        SanPham contact = getSanPham(id);
//        String photoUrl = photoFunction.apply(id, file);
//        contact.setHinhAnhUrl(contact.getHinhAnhUrl());
//        sanPhamRepository.save(contact);
//        return photoUrl;
//    }
//
//    private final Function<String, String> fileExtension = filename -> Optional.of(filename).filter(name -> name.contains("."))
//            .map(name -> "." + name.substring(filename.lastIndexOf(".") + 1)).orElse(".png");
//
//    private final BiFunction<String, MultipartFile, String> photoFunction = (id, image) -> {
//        String filename = id + fileExtension.apply(image.getOriginalFilename());
//        try {
//            Path fileStorageLocation = Paths.get(PHOTO_DIRECTORY).toAbsolutePath().normalize();
//            if(!Files.exists(fileStorageLocation)) { Files.createDirectories(fileStorageLocation); }
//            Files.copy(image.getInputStream(), fileStorageLocation.resolve(filename), REPLACE_EXISTING);
//            return ServletUriComponentsBuilder
//                    .fromCurrentContextPath()
//                    .path("/SanPham/image/" + filename).toUriString();
//        }catch (Exception exception) {
//            throw new RuntimeException("Unable to save image");
//        }
//    };





        public File getImageFile(String imageName) {

            File imageFile = new File(imagesLocation + imageName);
            // Kiểm tra nếu file tồn tại
            if (imageFile.exists()) {
                return imageFile;
            } else {
                return null; // File không tồn tại
            }
        }
    public List<SanPham> searchSanPhamByKeyword(String keyword) {
        return sanPhamRepository.searchByKeyword(keyword);
    }


}
