Feature: Criar usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Cadastro de usuário     
        Given que acessei a página novo

        Scenario: Cadastrar usuário com sucesso
             When informo nome e email
            |  nome   |  Pimpo Go      |
            |  email  |  pimpo2@g.com  |
            Then vizualizo a mensagem de sucesso
            

        Scenario: Cadastro de usuário sem sucesso
            When informo nome e email já cadastrado 
            |  nome  |  Pimpo Go       |
            |  email |  pimpo2@g.com   |
            Then vizualizo uma mensagem de erro
        