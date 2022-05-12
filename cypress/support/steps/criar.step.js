import { criarUsuarioPage } from "../pages/criarPage.po"

Given("que acessei a página novo", () => {
    criarUsuarioPage.visitarPaginaCadastro();
});

When("informo nome e email", (tabela) => {
    var dados = tabela.rowsHash();
    criarUsuarioPage.interceptCadastroSucesso();
    criarUsuarioPage.clicarNovoUsuario(dados.nome, dados.email);
});

Then("vizualizo a mensagem de sucesso", () => {
    criarUsuarioPage.mensagemComSucesso();
});

When("informo nome e email já cadastrado", (tabela) => {
    var dados = tabela.rowsHash();
    criarUsuarioPage.mockUsuarioExistente()
    criarUsuarioPage.clicarNovoUsuario(dados.nome, dados.email);
});

Then("vizualizo uma mensagem de erro", () => {
    criarUsuarioPage.mensagemSemSucesso();
});
