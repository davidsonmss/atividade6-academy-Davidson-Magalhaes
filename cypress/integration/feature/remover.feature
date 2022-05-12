Feature: Remover usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Scenario: Deletando usuário cadastrado
        Given que estou na tela inicial
        When busco pelo meu usuário
        | nome | pimpo Go |  
        And clico no campo deletar
        Then vizualizo uma mensagem
        And clico no botão confirmar
