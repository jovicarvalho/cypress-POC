describe('Teste de Registro de Usuário',()=>{
    beforeEach(()=>{
        cy.visit('/')
    });

    const user = require('../../fixtures/userRegister.json');

    it("Verifica se as mensagens de validação ao deixar os campos em branco são exibidas",()=>{
        cy.registroNavegate();
        cy.get('span[id="auth-continue"]').click();
        cy.get('div[id="auth-customerName-missing-alert"]').should('be.visible');
        cy.get('div[id="auth-email-missing-alert"]').should('be.visible');
        cy.get('div[id="auth-password-missing-alert"]').should('be.visible');

    })

    it("Verifica a mensagem de validação para as senhas iguais",()=>{
        cy.registroNavegate();
        cy.registrar(user.name,user.email,user.password,user.wrongPassword);
        cy.get('div[id="auth-password-missing-alert"]').should('be.visible');
    })

})