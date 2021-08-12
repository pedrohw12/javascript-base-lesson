Assumindo que já instalamos com sucesso o
Teste Runner e já abrimos o App do Cypress, agora é
hora de escrevermos nosso primeiro teste.

Para instalar - yarn add cypress
Para rodar - yarn run cypress open

Vamos:
1 - Criar um arquivo chamado sample_spec.js
2 - Ver o Cypress atualizar a lista de specs
3 - Iniciar o Cypress Test Runner

Vamos criar um novo arquivo chamado 'sample_spec.js' em:
cypress/integration

Depois de criar este arquivo, devemos conseguir enxergar ele na lista do Cypress Test Runner

O Cypress monitora seus arquivos spec, procurando por mudanças e automaticamente mostra qualquer atualização destes.

Mesmo que não tenhamos escrito nenhum teste ainda - tudo bem - vamos clicar no sample_spec.js e ver o Cypress iniciar no navegador.

Nós estamos agora oficialmente no Cypress Test Runner. Aqui é onde vamos passar a maior parte do tempo.

Escrevendo o primeiro teste:

1 - Escrever o nosso primeiro teste de sucesso
2 - Escrever o nosso primeiro teste de falha
3 - Ver o Cypress recarregar em real time

Ao salvar o nosso arquivo, podemos ver o auto carregamento do navegador

O primeiro teste:

describe('My First Test', () => {
it('Does not do much!', () => {
expect(true).to.equal(true)
})
})

Mesmo que esse teste não faça nada de muito útil, este é o nosso primeiro teste de sucesso.

Agora vamos escrever o primeiro teste de falha:

describe('My First Test', () => {
it('Does not do much!', () => {
expect(true).to.equal(false)
})
})

O Cypress vai mostrar a falha em vermelho, desde que
true não é igual a false.

As funções 'describe' e 'it' vem do Mocha (framework de testes)

E 'expect' vem do Chai (lib)

Escrevendo um teste real

Um teste sólido geralmente cobre 3 fases:

1 - Configura o estado da aplicação
2 - Toma uma ação
3 - Faz uma asserção sobre o resultado do estado da aplicação

Podemos ler estas 3 fases como - 'Given, When, Then'

Mas a ideia é - primeiro você coloca a aplicação em um estado específico, então você executa uma ação que causa mudança na aplicação, e finalmente você checa o resultado do estado dessa apliação.

Hoje vamos fazer o seguinte:

1 - Visitar uma página web
2 - Selecionar um elemento nesta página
3 - Interagir com este elemento
4 - Dizer o que esperamos que aconteça

Passo 1 - Visitar a página web

describe('My First Test', () => {
it('Visits the Kitchen Sink', () => {
cy.visit('https://example.cypress.io')
})
})

Você pode notar algumas coisas no Command Log:

1 - Mostra a ação VISIT
2 - O site apareceu no painel App Preview
3 - O teste está verde, embora não tenhamos feito nenhuma assertiva
4 - o VISIT fica azul até a página ser carregada

- Se a página tivesse retornado status 404 ou 500, ou tivesse algum erro de javascript na aplicação, o teste teria falhado.

\*\* Teste apenas aplicações suas

Passo 2 - Selecionando um elemento

Vamos selecionar um link de nome 'type'

Para achar este elemento através do conteúdo dele. usamos cy.contains()

describe('My First Test', () => {
it('finds the content "type"', () => {
cy.visit('https://example.cypress.io')

    cy.contains('type')

})
})

O teste deve agora mostrar CONTAINS no Command Log e permanecer verde.

Vamos trocar 'type' por 'hype' para ver o teste falhar, porque ele não encontrará nenhum link na página, no qual o conteúdo é 'hype'.

Notamos uma demora no resultado do teste (de 4s) porque o teste falhou e ele faz novas tentativas

Passo 3 - Clicando o elemento

Basta adicionar um .click() no elemento encontrado

describe('My First Test', () => {
it('clicks the link "type"', () => {
cy.visit('https://example.cypress.io')

    cy.contains('type').click()

})
})

Você pode ler o teste quase como se fosse uma história e isso se chama 'chaining'.

Observe também que, após o clique, a página é alterada. Agora podemos fazer uma nova assertiva sobre esta nova página.

Passo 4 - Faça uma asserção

Vamos verificar se a nova URL é a URL esperada.

Podemos fazer isso observando a URL e atribuindo uma asserção a ela - .should()

describe('My First Test', () => {
it('clicking "type" navigates to a new url', () => {
cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

})
})

Agora iremos fazer mais asserções.

Usaremos o cy.get() para selecionar um elemento, tomando como referência a classe de CSS.

Então podemos usar o .type() para adicionar um texto neste elemento selecionado (que é um input)

Finalmente, podemos verificar se o texto foi realmente inserido no input. - .should()

describe('My First Test', () => {
it('Gets, types and asserts', () => {
cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

})
})

Pronto, teste criado.

Se lermos em voz alta, seria algo como:

1 - Visite: https://example.cypress.io
2 - Encontre o elemento com conteúdo: type
3 - Clique nele
4 - Pegue a URL
5 - Verifique se inclui: /commands/actions
6 - Pegue o input com classe .action-email
7 - Escreva `fake@email.com` no input
8 - Verifique se o input registrou o valor digitado

Neste teste nós navegamos por duas diferentes páginas:

1 - A inicial - cy.visit()
2 - E no .click() uma nova página

O Cypress automaticamente detecta coisas como eventos de transição entre páginas e vai automaticamente segurar a execução dos comandos nesta nova página, até ela ser carregada.

Debugging

O Cypress vem com várias ferramentas de debugging:

Time travel:

Ao passar o mouse por cima de cada ponto no Command Log, ele mostra o que estava acontecendo nesta hora

Snapshots

Clique no -CLICK
ELe mostra em vermelho quem foi clicado, e um before e after. Isso mostra como estava a aplicação antes do clique e depois do clique. Se sua página demorou muito a carregar, permanecerá na mesma página ou uma página em branco, se foi rápido, mostrará a página seguinte

Clicando no TYPE, e usando o before e after, podemos ver o input ser preenchido com o texto, no after, e vazio,no before
