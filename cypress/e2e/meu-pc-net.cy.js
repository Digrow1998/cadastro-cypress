describe('Testando Meu PC.net', () => {
  it('Validando cadastro', () => {
    // Entrando no website escolhido meu pc net
    
    cy.visit('https://meupc.net/')

    
    
    
    

  
// Esperando 1 segundo
    cy.wait(1000)
 // Clicando no botao de menu pela classe .navbar-burger
    cy.get('.navbar-burger').click()



    cy.wait(100)

    // Clicando no botao de cadastro
    cy.get('ul.menu-list') //pegando a ul com a classe .menu-list
    .children('li') //pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]') // pegando o filho que tem o href com o valor https://meupc.net/cadastro
    .click()
    
    
    // Preenchendo o campo nome do cadastro cp, vaçpr juliano teste
    cy.get('input[name="nome"]').type('juliano teste')
    // Preenchendo o campo email do cadastro com o valor digrow.cardoso@gmail.com
    cy.get('input[name=email]').type('digrow.cardoso@gmail.com')
    // preenchendo o campo senha do cadastro com valor 12345678
   cy.get('input[placeholder="Defina uma senha"]').type('12345678')
    // Clicando no checkbox de aceitar os termos
   cy.get('input[type="checkbox"]').check({ force:true })
   // clica no botao 'cadastrar'
   cy.contains('Cadastrar-se').click()

   // Verificando se chegamos na tela final do cadastro
   cy.contains('Escolha seu nome de usuário').should('be.visible')
  
  
  
  })

})