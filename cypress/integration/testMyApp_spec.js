describe("Test my page", () => {
  it("verify paragraphs", () => {
    cy.visit("../../index.html");

    cy.get("[data-cy=btn]").click();

    cy.get("[data-cy=myP]").contains("um novo parágrafo");
  });
});
