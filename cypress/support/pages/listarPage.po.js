class listarUsuario {
    visitarPagina() {
        cy.visit("");
    }
    pesquisarUsuario() {
        cy.get("input");
    }
    proximoUsuario() {  
        cy.contains("button", "Próxima").click({ force: true });
    }
    anteriorUsuario() {
        cy.contains("button", "Anterior").click({ force: true });
    }
}

export const listarUsuarioPage = new listarUsuario();
