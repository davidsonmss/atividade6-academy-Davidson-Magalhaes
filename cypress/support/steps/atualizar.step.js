import { atualizarUsuarioPage } from "../pages/atualizarPage.po"

Given("que retornei a página inicial", () => {
    atualizarUsuarioPage.mokeAtualizar();
    atualizarUsuarioPage.visitarHome();
});

When("busco meu usuário", (tabela) => {
    var dados = tabela.rowsHash();
    atualizarUsuarioPage.buscarMeuUsuario(dados.nome);
});

When("vou no campo de editar", (tabela) => {
    var dados = tabela.rowsHash();
    atualizarUsuarioPage.editarUsuario(dados.novoNome, dados.novoEmail);
});

Then("vizualizo a mensagem", () => {
    atualizarUsuarioPage.mensagemComSucesso();
});