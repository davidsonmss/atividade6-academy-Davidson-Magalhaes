import { listarUsuarioPage } from "../pages/listarPage.po"

Given("que acessei a página", () => {
    listarUsuarioPage.visitarPagina();
});

When("clico no campo próxima vizualizo outros usuários", () => {
    listarUsuarioPage.proximoUsuario();
});

Then("vou para outra página", () => {
    listarUsuarioPage.anteriorUsuario();
});

