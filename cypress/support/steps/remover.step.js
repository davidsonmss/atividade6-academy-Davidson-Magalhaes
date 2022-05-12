import { removerUsuario } from "../pages/removerPage.po"

Given("que estou na tela inicial", () => {
    removerUsuario.mokeDeletar();
    removerUsuario.visitarHome();
});

When("busco pelo meu usuário", (tabela) => {
    var dados = tabela.rowsHash();
    removerUsuario.buscarUsuario(dados.nome);
});

When("clico no campo deletar", () => {
    removerUsuario.clicarEmDeletar()
});

Then("vizualizo uma mensagem", () => {
    removerUsuario.mensagemConfirmacao();
});

Then("clico no botão confirmar", () => {
    removerUsuario.confirmarExcluirUsuario();
});
