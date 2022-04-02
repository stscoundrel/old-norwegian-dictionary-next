describe('Word pages', () => {
  it('Loads Bindandismaðr', () => {
    cy.visit('/word/bindandismadr')
  })

  it('Loads Élligr', () => {
    cy.visit('/word/elligr')
  })

  it('Loads Ólafsminni', () => {
    cy.visit('/word/olafsminni')
  })

  it('Loads Þrályndi', () => {
    cy.visit('/word/thralyndi')
  })
})
