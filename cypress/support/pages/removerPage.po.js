class removerUsuarioPage {
    mokeDeletar() {
        cy.intercept("DELETE", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 204,
        body: { 
        "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
        "name": "Pimpo Go", 
        "email": "pimpo2@g.com", 
        "updatedAt": "2022-05-08T03:45:04.379Z", 
        "createdAt": "2022-05-08T03:45:04.379Z" } 
    })
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 200,
            body: [{ 
            "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
            "name": "Pimpo Go", 
            "email": "pimpo3@h.com", 
            "updatedAt": "2022-05-08T03:45:04.379Z", 
            "createdAt": "2022-05-08T03:45:04.379Z" }] 
        })
    }
    visitarHome() {
        cy.visit("");
    }
    buscarUsuario(nome) {
        //cy.get("input[autocomplete='off']").type(nome);
    }
    clicarEmDeletar() {
        cy.get("button[data-test='userDataDelete']").click();
    }
    mensagemConfirmacao() {
        cy.contains("Deseja realmente remover este usuário ?").should("be.visible");
    }
    confirmarExcluirUsuario() {
        cy.contains("button", "Confirmar").should("be.visible");
    }
}

export const removerUsuario = new removerUsuarioPage()