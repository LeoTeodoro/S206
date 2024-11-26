Cypress.Commands.add('bookRoom', (firstName,lastName,email,phone)=>{
    cy.get('input[name="firstname"]').type(firstName);
    cy.get('input[name="lastname"]').type(lastName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="phone"]').type(phone);
})