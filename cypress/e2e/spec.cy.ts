describe('Home Page', () => {
  it('displays product on the home page', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="search-text"]').type('test').submit();
  });
});
