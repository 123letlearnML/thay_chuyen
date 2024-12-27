const { faker } = require('@faker-js/faker');  // Đưa faker vào test

describe('Login Form', () => {
    it('should log in with valid credentials', () => {
        // Tạo tên người dùng và email ngẫu nhiên
        const randomUsername = faker.internet.userName();
        const randomEmail = faker.internet.email();
        const randomPassword = 'doai123';

        cy.visit('/Signup');
        cy.get('input[name="username"]').type(randomUsername);
        cy.wait(1000);
        cy.get('input[name="email"]').type(randomEmail);
        cy.wait(1000);
        cy.get('input[name="password"]').type(randomPassword);
        cy.wait(1000);
        cy.get('input[name="confirmPassword"]').type(randomPassword);
        cy.wait(1000);
        cy.get('button[type="submit"]').click();

        // Chờ đợi một thời gian ngắn sau khi nhấn submit
        cy.wait(2000);

        cy.get('input[name="username"]').type(randomUsername);
        cy.wait(1000);
        cy.get('input[name="password"]').type(randomPassword);
        cy.wait(1000);
        cy.get('button[type="submit"]').click();

        // Kiểm tra sau khi đăng nhập có chuyển đến trang chủ không
        cy.contains('Trang Chủ').wait(3000);
        cy.get('.logout-btn').wait(3000);


    });
});
