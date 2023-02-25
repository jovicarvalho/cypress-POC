Cypress.Commands.add('buscar',(nome)=>{
    cy.get('input[id="twotabsearchtextbox"]').type(nome);
    cy.get('input[id="nav-search-submit-button"]').click();
})