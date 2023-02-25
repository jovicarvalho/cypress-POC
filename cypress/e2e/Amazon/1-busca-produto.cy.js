describe('Teste de busca de produto',()=>{
    beforeEach(()=>{
        cy.visit('/')
    });

    const produto = require('../../fixtures/produto-busca.json')

    it('Verifica se o produto pesquisado é exibido',()=>{
        cy.buscar(produto.name);
        cy.get('span[class="a-size-base-plus a-color-base a-text-normal"]')
            .should('contain', produto.result);
    })

    it('Verifica se é exibida sugestões de busca para o produto digitado',()=>{
        cy.get('input[id="twotabsearchtextbox"]').type(produto.name);
        cy.get(`div[aria-label="${produto.sugestion}"]`)
            .should('be.visible');
    })

    //Criar busca baseado no filtro de estrelas de clientes
    //Criar busca com filtro de marca

})