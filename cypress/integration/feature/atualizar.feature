Feature: Atualizar usuário 
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Scenario: Atualizar usuário cadastrado
        Given que retornei a página inicial
        When busco meu usuário
        |  nome   |  Pimpo Go      | 
        And vou no campo de editar
        | novoNome  | Pimpo        |
        | novoEmail | pimpo3@h.com |
        Then vizualizo a mensagem
