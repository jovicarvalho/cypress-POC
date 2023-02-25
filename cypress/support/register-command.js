Cypress.Commands.add('registroNavegate',()=>{
    cy.get('span[id="nav-link-accountList-nav-line-1"]').click();
    cy.contains('a','Criar sua conta da Amazon').click();
})

Cypress.Commands.add('registrar',(name,email,password,passwordAgain)=>{
    cy.contains('input','Nome e Sobrenome').type(name);
    cy.contains('input','').type(email);
})
    