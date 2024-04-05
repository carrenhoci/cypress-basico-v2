Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Cinthia')
  cy.get('#lastName').type('Carrenho')
  cy.get('#email').type('cinthiav@eldorado.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click()

})


