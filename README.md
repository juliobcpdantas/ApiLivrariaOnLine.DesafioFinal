Teimoso estudando e testando de novo!

# API Livraria On-Line
## Projeto Desafio Final Bootcamp IGTI BackEnd NODE.JS

### <strong>Objetivos</strong>

* Exercitar os conceitos trabalhados no Curso para a criação de uma API em Node.js com 
Express, organizada em camadas, com autenticação, persistência em bancos de dados 
SQL, NoSQL e testes.<br/>

1. Criação do banco de dados relacional: <br/>
    > - Criação de uma instância do PostgreSQL no ElephantSQL - [:heavy_check_mark:]
    >> - Tabelas criadas conforme:<br/>
    <img src="/img/DB.relacional.jpg"><br/>
    >> - Inserts de cliente, autores, livros e vendas conforme "inserts.txt" - [:heavy_check_mark:]
    <br/>
    > - Integrar Node.js ao PostgreSQL - [ ]
2. Criação do banco de dados NoSQL: <br/>
    > - Criação de uma instância do MongoDB no MongoDB Atlas - [ ]
    >> - criar uma collection chamada “livroInfo” para armazenar info dos livros - [ ]
    > - Integrar Node.js ao MondoDB - [ ]
3. Desenvolvimento dos endpoints: <br/>
    > - Criar projeto "livraria-api" em Node.js - [:heavy_check_mark:]
    > - Criação de projeto base - [:heavy_check_mark:]
    >> - a) Configurações iniciais - [:heavy_check_mark:]
    >> - b) Criação de rotas - [ ]
    >> - c) Tratamento de erros - [:heavy_check_mark:]
    >> - d) Gravação de logs - [:heavy_check_mark:]
    >> - e) Organização do projeto em:
    >>> - * Route - [:heavy_check_mark:]
    >>> - * Controller - [:heavy_check_mark:]
    >>> - * Service - [:heavy_check_mark:]
    >>> - * Repository - [:heavy_check_mark:]
    > - Criar endpoints pelo Express - [ ]
    >> - Endpoints de Clientes:
    >>> - a) Cadastro de um cliente: POST - [:heavy_check_mark:]
    >>> - b) Atualização de um cliente: PUT - [ ]
    >>> - c) Exclusão de um cliente: DELETE - [ ]
    >>> - d) Constultar clientes cadastrados: GET - [ ]
    >>> - e) Consultar cliente especifico por Id: GET - [ ]
    >> - Parametrizar Regra de negócio por Endpoit/Clientes:
    >>> - * a) - [ ] 
    >>> - * b) - [ ]
    >>> - * c) bloquear exclusão se houver venda cadastrado em seu nome - [ ]
    >>> - * d) retornar todos cliente e suas informações, exceto a senha - [ ]
    >>> - * e) retornar o cliente e suas informações, exceto a senha - [ ]
    >> - Endpoints de Autores:
    >>> - a) Cadastro de um autor: POST - [ ]
    >>> - b) Atualização de um autor: PUT - [ ]
    >>> - c) Exclusão de um autor: DELETE - [ ]
    >>> - d) Constultar autores cadastrados: GET - [ ]
    >>> - e) Consultar autor especifico por Id: GET - [ ]
    >> - Parametrizar Regra de negócio por Endpoit/Autores:
    >>> - * a) - [ ]
    >>> - * b) - [ ] 
    >>> - * c) bloquear exclusão se houver livro seu cadastrado - [ ]
    >>> - * d) - [ ]
    >>> - * e) - [ ]
    >> - Endpoints de Livros:
    >>> - a) Cadastro de um livro: POST - [ ]
    >>> - b) Atualização de um livro: PUT - [ ]
    >>> - c) Exclusão de um livro: DELETE - [ ]
    >>> - d) Constultar livros cadastrados: GET - [ ]
    >>> - e) Consultar livro especifico por Id: GET - [ ]
    >>> - f) Consultar livro especifico por Id de Autor: GET - [ ]
    >>> - g) Consultar livro especifico por Id: GET - [ ]
    >>> - h) Cadastro de informações do livro: POST - [ ]
    >>> - i) Atualização de informações de um livro: PUT - [ ]
    >>> - j) Exclusão de informações do livro: - [ ]
    >>> - k) Cadastrar uma avaliação: - [ ]
    >>> - l) Exclusão de avaliaçao: - [ ]
    >> - Parametrizar Regra de negócio por Endpoit/Livros:
    >>> - * a) Objeto JSON com o nome, valor e id do autor. Registro no PostgreSQL - [ ] 
    >>> - * b) Não permitir alteração do nome e autor do livro - [ ] 
    >>> - * c) bloquear exclusão se houver vendas realizadas - [ ]
    >>> - * d) Retornar apenas dados do PostgreSQL BD relacional - [ ]
    >>> - * e) Redirecionar para pagina web com todas informações e avaliações do PostgreSQL e MongoDB - [ ]
    >>> - * f) - [ ]
    >>> - * g) - [ ]
    >>> - * h) Informações cadastradas e as propriedades a serem salvas no MongoDB "livroId" - [ ]
    >>> - * i) Informações cadastradas e as propriedades a serem salvas no MongoDB "livroId" - [ ]
    >>> - * j) - [ ]
    >>> - * k) buscar no MongoDB o registro referente ao livro em questão e inserir no array de avaliação - [ ]
    >>> - * l) - [ ]
    >> - Endpoints de Vendas:
    >>> - a) Cadastro de uma venda: POST - [ ]
    >>> - b) Consultar venda especifica por Id: GET - [ ]
    >>> - c) Constultar vendas cadastradas: GET - [ ]
    >>> - d) Consultar venda especifica por Id de Cliente: GET - [ ]
    >>> - e) Consultar venda especifica por Id de Livro: GET - [ ]
    >>> - f) Consultar venda especifica por Id de Autor: GET - [ ]
    >> - Parametrizar Regra de negócio por Endpoit/Livros:
    >>> - * a) Valor será buscado da tabela do livro. Verificar estoque para efetuar o registro ou não, retornar negativa por falta de estoque ou decrementar estoque se for registrada - [ ] 
    >>> - * b) - [ ] 
    >>> - * c) - [ ]
    >>> - * d) - [ ]
    >>> - * e) - [ ]
    >>> - * f) - [ ]
4. Desenvolvimento do mecanismo de autenticação e autorização: <br/>
4. Teste de integração: <br/>
