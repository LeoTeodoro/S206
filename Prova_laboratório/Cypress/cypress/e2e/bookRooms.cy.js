beforeEach(() => {
  cy.visit('https://automationintesting.online/');
})

describe('Testes de envio de mensagem', () => {
  it('Teste de checagem de filtros obrigatórios', () => {
    cy.get('#submitContact').click();
    cy.get('div[class*="alert"]').should('be.visible');
  }),
  it('Teste de envio de mensagem válido',()=>{
    cy.get('#name').type('Name test');
    cy.get('#email').type('email@test.com');
    cy.get('#phone').type('035987654321');
    cy.get('#subject').type('subject@test.com');
    cy.get('#description').type('message test, with more 20 characters');
    cy.get('#submitContact').click()
    cy.contains('Thanks for getting in touch ').should('be.visible')
  }),
  it('Teste de reserva de quarto sem data',()=>{
    cy.get('button[class*="primary float-right openBooking"]').click();
    //função criada
    cy.bookRoom('test','bookRoom','bookRoom@test.com','035123456789');
    cy.get('button[class*="primary float-right book-room"]').click();
    cy.contains('não deve ser nulo').should('be.visible');
  })  
})