export default {
  projetos: [
    {
      video: 'english.mp4',
      nome: 'English cards',
      descricao: 'English cards é uma aplicação feita para estudar e praticar inglês. A ideia desse projeto pessoal surgiu após utilizar sites de flashcards que limitava a quantidade de cards por dia no plano gratuito, a partir disso decidi fazer o meu próprio. <br>Atualmente só tem a opção de traduzir do português para inglês pois identifiquei que consigo fixar melhor o aprendizado escrevendo/digitando. Portanto a aplicação cumpre com a minha necessidade, mas desejo aprimorar ao decorrer do tempo. <br><br> Utilizei o vue router para manipulação de rotas passando propriedades para criá-lo de forma dinâmica.',
      site: 'https://jaquemoura.github.io/english-cards/',
      repositorio: 'https://github.com/jaquemoura/english-cards'
    },
    {
      video: 'tracker.mp4',
      nome: 'Alura Tracker',
      descricao: 'Esse projeto se trata de um gerenciador do tempo das tarefas executadas no dia a dia.<br><br><b><u>Funcionalidades:</u></b><br><br>- Controlar o tempo gasto em cada tarefa;<br>- Vincular uma tarefa a um projeto;<br>- Listar tarefas;<br>- Buscar tarefa com o filtro de pesquisa;<br>- Navegar entre as tarefas através dos controles de paginação (implementei pois não existia no projeto inicial);<br><br><b><u>Ferramentas:</u></b><br><br>Foi desenvolvido utilizando o vue 3 e o TypeScript. Também foi utilizado o json-server para simular uma API REST<br><br><b><u>Minha contribuição:</u></b><br><br>Um problema que identifiquei ocorria ao cadastrar muitas tarefas, observe a coluna do header que está com 100vh <a href="https://prnt.sc/HWKDaShjqTYP" target="_blank">Exemplo 1</a>. Ao mudar para 100% resolvia o problema da página da home <a href="https://prnt.sc/zz8PU4Nr7BfH" target="_blank">Exemplo 2</a>, mas aí é surge outro problema na página de projetos que precisava do height: 100vh; para cobrir tudo baseado na altura da tela, quando houver poucos projetos <a href="https://prnt.sc/Umdn8BaQ5dKi" target="_blank">Exemplo 3</a>, <a href="https://prnt.sc/yb-Q23a1ftqt" target="_blank">Exemplo 4</a><br><br> Para isso resolvi fazer uma paginação para melhorar a visualização e organização e aproveitar para colocar em prática todo o entendimento de como uma paginação funciona<br><br><b>Obs:</b><br><br>- Não coloquei link do site porque o github Pages não executa nenhum código do lado do servidor, mas no arquivo <a href="https://github.com/jaquemoura/cronometrar-tarefas?tab=readme-ov-file" target="_blank">README</a> estão as informações de como executar o projeto localmente.',
      repositorio: 'https://github.com/jaquemoura/cronometrar-tarefas/commit/d2b250cde26bdaaaac96c1d871f21a313b4f06ff'
    },
    {
      video: 'menu.mp4',
      nome: 'Menu de ecommerce',
      descricao: 'Ao trabalhar com menus de e-commerces recursivos de vários níveis, sentia dificuldade em estilizar sobrepondo classes sobre classes. Então resolvi desmembrar um menu e fazer o meu próprio separando em componente, para entender melhor como funciona.<br><br> Utilizei eventos personalizados para fazer a comunicação entre componentes filhos e componentes pai, o que  ajudou na transição de item nível 1 para subitem no menu mobile.',
      site: 'https://jaquemoura.github.io/menu-completo/',
      repositorio: 'https://github.com/jaquemoura/menu-completo'
    }
  ]
}