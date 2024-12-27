describe('Homepage', () => {
    it('should load the homepage correctly', () => {
        // Truy cập vào trang chủ
        cy.visit('/');
        // Kiểm tra tiêu đề trang
        cy.title().should('include', 'DOUBLE SHOP');
        cy.wait(2000);
        cy.contains('iPhone 12 128GB').scrollIntoView().should('be.visible').click();
        cy.wait(2000);
        cy.contains('Mua Ngay').scrollIntoView().should('be.visible').click();
    });
});
