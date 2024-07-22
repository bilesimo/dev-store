/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      searchByQuery: (query: string) => void
    }
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')
  cy.get('input[name=q]').type(query).parent('form').submit()
})
