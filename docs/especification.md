# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas


### COLECIONADOR
José Antônio, 62 anos. Seu Hobby é colecionar produtos relacionados a tecnologia e apreciar antiguidades no geral. Trabalha lecionando introdução à computação na universidade federal do Rio de Janeiro. José é sereno, brincalhão e fala muito sobre tecnologia com seus netos. O sonho dele, em 20 anos, é ter construído um museu tecnológico. 

### DOADORA
Bianca Pereira, 39 anos. Tem como um dos seus maiores objetivos ajudar pessoas que querem entrar na área de tecnologia, mas não têm condições financeiras nem acesso à área. Bianca é dona de uma escola particular em Manaus, é altruísta, empática e está sempre ouvindo e tentando ajudar as pessoas. O sonho dela é que todos brasileiros carentes tenham acesso à educação de qualquer curso que queiram fazer.

### PESSOA CARENTE  
Lucas dos Santos, 15 anos, é um estudante carente do ensino médio em uma escola estadual de Macapá. O hobby dele é jogar jogos de computador e consertar hardwares de alguns conhecidos de sua região. Lucas é tímido, mas conquista todas as pessoas que conhece, com sua serenidade e bom coração. O sonho de Lucas é fazer Ciências de Computação e ter a sua própria empresa ligada à área.

### ESTUDANTE ABASTADO
João Victor de Oliveira, 23 anos, é um estudante de classe média alta, faz curso de Sistemas de Informação em uma universidade particular de Brasília e gosta de sempre renovar seus equipamentos tecnológicos. João não se dá muito bem com os pais, mas tem tudo o que precisa e muito mais. Apesar de tudo, João tem empatia com pessoas que precisam e, em vez de simplesmente descartar seus hardwares que ele gosta de trocar frequentemente, ele deseja doar para pessoas que necessitam. Seu sonho é ter uma empresa de venda e troca de hardwares.

### RECÉM APROVADA NO VESTIBULAR
Talita Gonçalves, 19 anos, mora em Santa Maria no Rio Grande do Sul e acabou de ser aprovada no vestibular de Análise e Desenvolvimento de Sistemas. A faculdade que Talita vai estudar é particular, ela tem condições de bancar a mensalidade, porém não consegue, neste momento, comprar os equipamentos eletrônicos novos necessários para seus estudos. Talita é batalhadora, comunicativa e tem o sonho de entrar para a área de tecnologia e construir um programa que supere o chat GPT.

### DONO DO CURSO DE INFORMÁTICA
Leandro Siqueira, 45 anos, é formado em ciências da computação e pretende montar um curso de informática. Ele não tem condições de fazer 100% de investimento em equipamentos novos, por isso precisa de adquirir alguns equipamentos usados e em bom uso. Leandro gosta muito de ensinar sobre tecnologia para jovens e seu sonho é conseguir montar uma rede de escolas de informática pelo estado de Pernambuco, onde reside atualmente. 




> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
