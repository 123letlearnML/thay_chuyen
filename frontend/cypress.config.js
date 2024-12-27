import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'tests/e2e/**/*.spec.js',
    
    // Nếu bạn có một ứng dụng backend (ví dụ: Spring Boot), có thể muốn cấu hình baseUrl
    baseUrl: 'https://doubleshop.linkpc.net',
    
    // Cấu hình thời gian chờ (timeout) cho các yêu cầu hoặc hành động
    defaultCommandTimeout: 8000,
    
    // Khác (tùy chọn)
    video: false,  // Tắt quay video khi chạy test
    screenshotOnRunFailure: true,  // Chụp màn hình khi test thất bại
  },
});
