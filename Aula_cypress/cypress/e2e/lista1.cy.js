/// <reference = cypress>

describe('Testes de cadastro e login no site de uma empresa de serviços aéreos',()=>{
    it('Teste de login sem senha',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('button[type="submit"]').click();
        cy.get('span[class*="error-message"]').should('have.text','Required');

    }),
    it('Teste de login sem username',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('span[class*="error-message"]').should('have.text','Required');

    }),
    it('Teste de login vazio',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('button[type="submit"]').click();
        cy.get('span[class*="error-message"]').should('be.visible');

    }),
    it('Teste de login válido',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('h6[class*="topbar"]').should('have.text','Dashboard');
        
    }),
    it('Teste de recuperação de senha sem username',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
        cy.get('button[type="submit"]').click();
        cy.get('span[class*="error-message"]').should('have.text','Required');
    }),
    it('Teste de recuperação de senha válido',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
        cy.get('input[name="username"]').type('Admin');
        cy.get('button[type="submit"]').click();
        cy.get('h6[class*="forgot-password"]').should('have.text','Reset Password link sent successfully');
    })
})