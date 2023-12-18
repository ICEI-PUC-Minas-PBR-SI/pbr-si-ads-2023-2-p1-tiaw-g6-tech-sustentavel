# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir os produtos com mais destaque em vendas. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novos produtos, tanto para vendas quanto para doação. | ALTA | meusanuncios.index.html |
|RF-003| O sistema deve exibir todos os produtos anunciados. | ALTA | produtos.html |
|RF-004| O sistema deve exibir a página para o doador anunciar seu produto. | ALTA | pagina_doacao.html |
|RF-006| O sistema deve exibir os dados do perfil do usuário. | ALTA | Meu_Perfil.html |
|RF-007| O sistema deve exibir a página com texto contendo o intuito do nosso site. | ALTA | sobre.html |
|RF-008| O sistema deve exibir os dados de contato do usuário | ALTA | contato.html |
|RF-009| O sistema deve exibir a tela de login para o usuário se cadastrar ou entrar na sua conta se já for registrado. | ALTA | tela_login.html |



## Descrição das estruturas:

## Produto
|  **Nome**      | **Tipo**          | **Descrição**                             | **Dados do vendedor**                          |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor    |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

