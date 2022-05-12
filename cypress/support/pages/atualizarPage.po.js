class atualizarUsuario {
    mokeAtualizar() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users/1a8a17f9-25f1-488c-a6dd-6a1022332cc5", {
            statusCode: 200,
            body: { 
            "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
            "name": "Pimpo Go", 
            "email": "pimpo3@h.com", 
            "updatedAt": "2022-05-08T03:45:04.379Z", 
            "createdAt": "2022-05-08T03:45:04.379Z" } 
        })
        cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/1a8a17f9-25f1-488c-a6dd-6a1022332cc5", {
            statusCode: 200,
            body: { 
            "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
            "name": "Pimpo Go", 
            "email": "pimpo3@h.com", 
            "updatedAt": "2022-05-08T03:45:04.379Z", 
            "createdAt": "2022-05-08T03:45:04.379Z" } 
        })
    }
    visitarHome() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 200,
            body: [{ 
            "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
            "name": "Pimpo Go", 
            "email": "pimpo3@h.com", 
            "updatedAt": "2022-05-08T03:45:04.379Z", 
            "createdAt": "2022-05-08T03:45:04.379Z" }]
        })
        cy.visit("");
    }
    buscarMeuUsuario(nome) {
        cy.contains("a", "Ver detalhes").click();
    }
    editarUsuario(novoNome, novoEmail) {
        cy.contains("button", "Editar").click();
        cy.get("input[name='name']").clear().type(novoNome);
        cy.get("input[name='email']").clear().type(novoEmail);
        cy.contains("button", "Salvar").click();
    }
    mensagemComSucesso() {
        cy.contains("Informações atualizadas com sucesso!").should("be.visible");
    }
}

export const atualizarUsuarioPage = new atualizarUsuario()