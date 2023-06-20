describe("Login", () => {
  it("authenticate with email and password", () => {
    cy.visit("/");

    cy.get("h2").should("contain", "Entrar na sua conta");

    const email = cy.get("input[name=email]");
    email.clear();
    email.type("lucio.caetano@al.infnet.edu.br");

    const password = cy.get("input[name=password]");
    password.clear();
    password.type("123456");

    cy.get("button[type=submit]").click();

    cy.get("h3").should("contain", "Dados pessoais");
  });
});
