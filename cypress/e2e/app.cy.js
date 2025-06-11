describe('Page principale', () => {
  it('trouve le bouton', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=mon-bouton]')
      .should('exist')
      .and('contain', 'Clique-moi');
  });
});
