class criarUsuario {

    visitarPaginaCadastro() {
        cy.visit("/novo");
    }
    clicarNovoUsuario(nome, email) {
        cy.get("input[name='name']").type(nome);
        cy.get("input[name='email']").type(email);
        cy.contains("button", "Salvar").click();
    }
    mensagemComSucesso() {
        cy.contains("Usuário salvo com sucesso!").should("be.visible");
   }
    mensagemSemSucesso() {
        cy.contains("Este e-mail já é utilizado por outro usuário.").should("be.visible");
        cy.contains("button", "Cancelar").should("be.visible");
        cy.contains("button", "x").should("be.visible");
   }
   cadastroErroNome(nomeErro, emailErro) {
        cy.get("input[name='name']").type(nomeErro);
        cy.get("input[name='email']").type(emailErro);
        cy.contains("button", "Salvar").click();
   }
   nomeMensagemErro(nomeErro, email) {
        cy.contains("Informe no máximo 100 caracteres para o nome").should("be.visible");

    }
   interceptCadastroSucesso() {
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        body: { 
        "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
        "name": "Pimpo Go", 
        "email": "pimpo2@g.com", 
        "updatedAt": "2022-05-08T03:45:04.379Z", 
        "createdAt": "2022-05-08T03:45:04.379Z" } 
    })   
}
    mockUsuarioExistente() {
        cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 422,
            body: {"error":"User already exists."}
    })
    }

}


export const criarUsuarioPage = new criarUsuario();