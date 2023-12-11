# Testes
Neste projeto serão realizados dois tipos de testes:
 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 
Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).
A documentação dos testes é dividida nas seguintes seções:
 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)
# Teste de Software
Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.
## Plano de Testes de Software
Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.
**Caso de Teste** | **CT01 - Listagem de Produtos**
:--------------: | ------------
**Procedimento**  | 1) Usuário acessa o botão "Produtos" disponível em qualquer uma das abas do site e tem acesso aos produtos, caso estejam cadastrados na página de anuncios. 
**Requisitos associados** | RF-002 (Listagem de Produtos) 
**Resultado esperado** | Exibição dos produtos já cadastrados.
**Dados de entrada** | Acessar o caminho chamado "Produtos" em qualquer uma das páginas do site.
**Resultado obtido** | Sucesso.
**Caso de Teste** | **CT02 - Upload de fotos de produtos**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa o caminho do site: "Sobre Nós", acessa a página do doador aonde deverá acessar o botão "Clique aqui para Iniciar a doação" existe uma opção para adicionar a descrição ao produto a ser doado, além disso existe uma opção que foi adaptada por possuir menor complexidade que é já inserir a URL da foto do produto que já foi carregada em um servidor de imagens. 
2) O Usuário acessa a página de "Meus Anuncios"  e insere os dados necessários para cadastrar um produto, este caminho possui a mesma opção da página do doador que é inserir o URL da foto.
   
**Requisitos associados** | RF-004 
**Resultado esperado** | Criação de cadastro do produto a ser doado inclusive permitir o envio da imagem. 
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro/ URL da foto
**Resultado obtido** | Sucesso.
**Caso de Teste** | **CT03 - Login**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa o botão de login em qualquer uma das páginas do site e faz a inserção dos seguintes dados: 
Nome completo, E-mail, Senha para criação da conta e posteriormente realiza o login com os dados cadastrados. 
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro do perfil do usuário e realização de login com os dados inseridos.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.
**Caso de Teste** | **CT04 - Pesquisa de Produtos**
:--------------: | ------------
**Procedimento**  | 1) O Usuário acessa a barra de pesquisa e faz a inserção de dados que serão pesquisados no site.
**Requisitos associados** | RF-005
**Resultado esperado** | Retorno de resultados em tela ou sugestões de pesquisa
**Dados de entrada** | Inserção de dados válidos na pesquisa.
**Resultado obtido** | Sucesso.
**Caso de Teste** | **CT05 - Página com explicações sobre o projeto**
:--------------: | ------------
**Procedimento**  | 1) O Usuário acessa o caminho "sobre" que está disponível em qualquer uma das páginas e acessa as informações sobre o projeto que estão sendo exibidas em tela. 
**Requisitos associados** | RF-007
**Resultado esperado** | Retorno de resultados em tela.
**Dados de entrada** | Acessar o caminho correto da página "sobre"
**Resultado obtido** | Sucesso.
**Caso de Teste** | **CT06 - Página com informações para contato**
:--------------: | ------------
**Procedimento**  | 1) O Usuário acessa o caminho "Contatos" que está disponível em qualquer uma das páginas e acessa as informações sobre o projeto que estão sendo exibidas em tela. 
**Requisitos associados** | RF-006
**Resultado esperado** | Retorno de resultados em tela.
**Dados de entrada** | Acessar o caminho correto da página "contatos"
**Resultado obtido** | Sucesso.
**Caso de Teste** | **CT07 - Adicionar os detalhes aos produtos**
:--------------: | ------------
**Procedimento**  | 1) O Usuário acessa o caminho "Meus Anuncios" acessa o botão "Cadastar Produto" e insere os seguintes dados: 
Nome Produto, Descrição, Preço, Data
**Requisitos associados** | RF-003
**Resultado esperado** |Permitir a inserção dos dados inerentes ao produto. 
**Dados de entrada** |  Nome Produto, Descrição, Preço, Data
**Resultado obtido** | Sucesso.
## Registro dos Testes de Software
Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.
|*Caso de Teste*                                 |*TC-01 - Listagem de Produtos*                                         |
|---|---|
|Requisito Associado | RF-002 - Listagem de Produtos|
|Link do vídeo do teste realizado: | https://photos.google.com/share/AF1QipM-r_KY2d9XGwG8lqIVZvQLa50A74IrqlDqR2x8-p6MlJ5q1HKSddf4xwHjAAkqVw/photo/AF1QipNS7BiFdG2FnuiQdrbDJhQgudxSSqVMQhWpwXkd?key=OXVVNTd2NVpiYjdtamJnLW9qcGV2RHd3SkpDb1lR| 
|*Caso de Teste*                                 |*TC-02 - Upload de fotos de produtos**                                         |
|---|---|
|Requisito Associado | RF-004 - 	Upload de fotos dos produtos.|
|Link do vídeo do teste realizado: | https://photos.google.com/share/AF1QipM-r_KY2d9XGwG8lqIVZvQLa50A74IrqlDqR2x8-p6MlJ5q1HKSddf4xwHjAAkqVw/photo/AF1QipNS7BiFdG2FnuiQdrbDJhQgudxSSqVMQhWpwXkd?key=OXVVNTd2NVpiYjdtamJnLW9qcGV2RHd3SkpDb1lR | 
|*Caso de Teste*                                 |*TC-03 - Login*                                         |
|---|---|
|Requisito Associado | RF-001 - Login com redes sociais.|
|Link do vídeo do teste realizado: | https://photos.app.goo.gl/WjDbo7WousjFqMWp8 | 
|Link do vídeo do teste realizado: | https://photos.google.com/share/AF1QipOTxhwTPkxDJOZQg0KQUWqMRUk0U9w2eLrqxGdWe46kf5eQhO6ndvIY1WZn9pHSQQ/photo/AF1QipM8ce7-Y92VASp4IL109nItiqCw6Ch1YuJlDGF2?key=TFpDSkZZQzBMbDFxa2JxVUUxUXRVajlJSTJxTWJR | 


|*Caso de Teste*                                 |*TC-04 - Pesquisa de Produtos*                                         |
|---|---|
|Requisito Associado | RF-005 - Pesquisa de produtos|
|Link do vídeo do teste realizado: | https://photos.google.com/share/AF1QipN0K_vrU6dZVSnw7du60xQBsfDaIlFu2KY77Juoto6EDQx44zs7NUQARBdKsbnlQg/photo/AF1QipN3Li_UiJ0VhSwNOUGxag1TISmZ9KYiMwRv9_jS?key=cVZtalRqMVpXd0p3X0w5eHpNY2MwTVU2S0VEV1dB | 
|*Caso de Teste*                                 |*TC-05 - Página com explicações sobre o projeto*                                         |
|---|---|
|Requisito Associado | RF-007  - Página com explicações sobre o projeto. |
|Link do vídeo do teste realizado: | https://photos.google.com/share/AF1QipMs3BOWV7Gq3dniKO1-mMyjIBVP3HrfVCWgk_byXIjdtPGYO4_Wp5tb6BboJGFjSQ/photo/AF1QipNcauaDCstQYuC5DxxmuZxR5DAgR64_W9cIMBqw?key=a2NScUFIWUZaS1NQcGx2UVp2cGVGckt0eWRGSjln | 
|*Caso de Teste*                                 |*TC-06 - Página com informações para contato*                                         |
|---|---|
|Requisito Associado | RF-006 - Página com informações para contato|
|Link do vídeo do teste realizado: | https://photos.google.com/share/AF1QipMs3BOWV7Gq3dniKO1-mMyjIBVP3HrfVCWgk_byXIjdtPGYO4_Wp5tb6BboJGFjSQ/photo/AF1QipNcauaDCstQYuC5DxxmuZxR5DAgR64_W9cIMBqw?key=a2NScUFIWUZaS1NQcGx2UVp2cGVGckt0eWRGSjln | 
|*Caso de Teste*                                 |*TC-07 - Adicionar os detalhes aos produtos*                                         |
|---|---|
|Requisito Associado | RF-003 - Adicionar detalhes do produto |
|Link do vídeo do teste realizado: | https://photos.google.com/share/AF1QipM-r_KY2d9XGwG8lqIVZvQLa50A74IrqlDqR2x8-p6MlJ5q1HKSddf4xwHjAAkqVw/photo/AF1QipNS7BiFdG2FnuiQdrbDJhQgudxSSqVMQhWpwXkd?key=OXVVNTd2NVpiYjdtamJnLW9qcGV2RHd3SkpDb1lR | 
