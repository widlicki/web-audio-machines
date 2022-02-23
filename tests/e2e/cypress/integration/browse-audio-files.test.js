describe('Browse Audio Files View', () => {
  beforeEach(() => {
    cy.exec('yarn db:create:test && yarn db:migrate:test && yarn db:seed:test')
  })

  it('displays audio categories by default', () => {
    cy.visit('/library')
    cy.get('li').should('have.length', 7)
  })

  afterEach(() => {
    cy.exec('yarn db:drop:test')
  })
})
