# cuidado-cristao

um Protótipo [Sails v1](https://sailsjs.com)

## Sobre o Protótipo

### O que é?

É um software para ajudar as comunidades cristãs a gerenciar seus membros e a se integrarem.

### Quem pode utilizá-lo?

Qualquer igreja com dois ou mais membros

### Como posso colaborar com o Protótipo?

* Se você é um desenvolvedor de software, pode integrar a nossa equipe;
* Se você é um especialista em Node.js, pode recomendar configurações de segurança e desempenho;
* Se você é um especialista em Design (UIX) pode colaborar com o visual;
* Se você é um apaixonado por computadores pode integrar nossa equipe de teste;

* Mas principalmente, se você é um Crente, **pode cobrir todas as equipes com suas orações**!

## Desenvolvedores...

### Este tutorial considera que você já possui conhecimento mínimo nas seguintes tecnologias:

* [Javascript ES6](https://www.w3schools.com/js/) ; 
* [Sails.js](https://sailsjs.com) e
* [MongoDB 3+](https://www.w3schools.com/mongodb/).

### Consideramos ainda que você já instalou o Node.js na sua estação de trabalho e possui conhecimento mínimo quanto aos seguintes comandos de console:

* npm; e
* node;

## Criando meu primeiro Protótipo Sails

### Criando novas funcionalidades:

1) Para criar uma nova funcionalidade, tanto do tipo view quanto um Endpoint de API, utilize o comando abaixo.
   Este comando criará um Controller (/api/controllers/NomefuncionalidadeController.js)
   e uma entidade de persistencia chamada NomeFuncionalidade (/api/models/NomeFuncionalidade,js)

   `sails generate api nome-funcionalidade`


2) Para implementar comportamento (também chamado _actions_) na Nova Funcionalidade,

* localize o respectivo Controller criado e adicione os métodos necessários. Ex.:

<pre>
module.exports = {

get: async function (req, res) { res.send('OK') },
post: async function (req, res) { res.send('OK') },
put: async function (req, res) { res.send('OK') },
delete: async function (req, res) { res.send('OK') },
getAll: async function (req, res) { res.send('LIST') }

}
</pre>

* adicione os PATH da requisicao no arquivo routes.js, associando o PATH com o controller do seguinte modo:

<pre>
'GET /api/v1/nova-funcionalidade':      'NovaFuncionalidadeController.get',
'GET /api/v1/nova-funcionalidade/list': 'NovaFuncionalidadeController.getAll',
</pre>

* reinicie o aplicativo (ctrl+C depois sails lift) teste o path criado navegando
  para `localhost:1337/api/v1/nova-funcionalidade` e a resposta deve ser 'OK'.

* teste agora o outro path criado navegando para `localhost:1337/api/v1/nova-funcionalidade/list` e a resposta deve
  ser 'LIST'.

Observe que as respostas (response) atribuídas a variável res (passada como parametro) podem ser:

* res.json(obj) para enviar um objeto no formato JSON para o requisitante (request);
* res.send('texto') para enviar um texto qualquer para o requisitante. Este texto pode estar no formato html ou em texto
  claro;
* res.redirect('/addr') para informar ao requisitante que a requisição deve ser redirecionada para outro endereço
  informado (addr); ou
* res.view('', {}) para renderizar uma arquivo .ejs e enviá-lo como resposta. O arquivo deve estar abaixo do diretório
  /views do Protótipo e {} corresponde a um objeto a ser passado como parametro.
  Ex.: `res.view('pages/faq',{param: 'teste'})`
* Para visualizar os dados passados como parametro para a View renderizada com EJS (https://ejs.co/) faça o seguinte:

a) Localize o arquivo /views/pages/faq.ejs;

b) Abra o arquivo para edição;

c) Adicione a linha ```Monstrando a palavra <%=param%> aqui.```; e

d) Reinicialize seu Protótipo. Se tudo estiver certo, a palavra 'teste  ' aparecerá na página FAQ do endereço (http://localhost:1337/faq).

Exemplos:

<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang='pt-br'&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;
 Mostrando a palavra <%=param%> aqui.
 
 Acessando a variavel de ambiente environment exposta em SAILS_LOCALS
 cujo valor seria o definido na variável de ambiente NODE_ENV ('development')
 <%- _environment %>

<%- /* Expose locals as `window.SAILS_LOCALS` :: */ exposeLocalsToBrowser() %>

Para executar um laço durante a renderização, fariamos:
&lt;ul&gt;
&lt;% objetotipoarray.forEach(objeto=> { %&gt;
   &lt;li&gt;&lt;%=objeto.atributo %&gt;&lt;/li&gt;
&lt;% }) %&gt;
&lt;/ul&gt;
&lt;body&gt;
&lt;/html&gt;
</pre>

### Para manipular dados de/para banco de dados

3) Para acessar os dados em tabelas ou coleções de dados (noSQL) o Sails se utiliza da biblioteca
    Waterline (https://waterlinejs.org/).
    Como já visto anteriormente, o comando `sails generate api nome-controller` cria um arquivo controller e um arquivo
    model para ser utilizado como ORM de persistência.
    Este arquivo define um Objeto Persistente que estará acessível para todos os componentes do Protótipo.
    Uma "Classe" Waterline possui atributos que podem ser manipulados e persistidos. Para saber como definir estes
    atributos no Sails.js consulte: https://sailsjs.com/docs/concepts/models-and-orm/models.
    Os métodos de manipulação mais comuns são:

* NomeObjeto.find({}).**then**(result=>console.log(result)) - lista de todos os objetos
* **await** NomeObjeto.create({JSON contendo os dados}) - adicione um novo registro ao banco de dados
* **await** NomeObjeto.destroyOne({id: _id}) - remove um registro cujo atributo id corresponda ao parametro _id
* NomeObjeto.find({id: 3}).**then**(result=>console.log(result)) - lista objetos cujo parametro id corresponda a 3
* **await** NomeObjeto.count({atributo: _criterio}) - conta o total de registros que correspondem ao criterio passado
  como parametro.


### Obtendo parametros da requisição:

4) Para capturar parametros de uma requisição HTTP

Considerando a requisição abaixo:

<pre>
POST http://localhost:1337/api/v1/aluno/34?page=2&size=10
Content-Type: application/json

{
 matricula: 123,
 disciplina: 18
}

</pre>

definida em uma rota no arquivo `config/routes.js` como:

<pre>
'POST  /api/v1/aluno/:id': 'AlunoController.save',
</pre>

e uma função-action:

<pre>
module.exports = {

  save: async function (req, res) { ... },

}
</pre>

Poderíamos obter os dados da requisição do seguinte modo:

<pre>
const idAluno = req.params['id'] // seria = 34
const page = req.query.page // seria 2
const size = req.query.size // seria 10
const matricula = req.body.matricula // seria 123
const disciplina = req.body.disciplina // seria 18
</pre>

### Exemplo completo RESTfull:

<pre>
/**

* InfoController: 
* ex.: 'GET /info', {controller: 'InfoController.[get|getOne|getAll  ...]'}
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
  */

module.exports = {

  get: async function (req, res) {
    const id = req.params['id'];
    Info.find({id: id})
      .then(
        info => {
          res.json(info);
        }
      ).catch(err => {
          res.notFound()
          console.log(err.message)
      });
  },

  getOne: async function (req, res) {
    Info.find({})
      .then(
        info => {
          if (info.length > 0) {
            res.json(info[0]);
          } else {
          Info.create({
            version: '0.0.1',
            date: new Date(),
            description: 'snapshoot'
          }).then(
            info => res.json(info)
          ).catch(err => console.log(err.message));
      }
    }).catch(err => console.log(err.message));
  },

  getAll: async function (req, res) {
      const page = req.query.page | 0;
      const size = req.query.size | 0;

      Info
        .find()
        .skip(page*size)
        .limit(size)
        .then(result => res.json(result))
        .catch(err => console.log(err.message));
  },

  put: async function (req, res) {
    let info = await Info.find({_id: req.params['id']});
    return res.json(info.updateOne(
        {
        version: req.body.version,
        description: req.body.description
        }
    ));
  },

  post: async function (req, res) {
    Info.create(req.body).then(
      info => res.json(info)
    ).catch(err => console.log(err));
  },

  faq: async function (req, res) {
    res.view('pages/faq', {param: 'teste'});
  }

};
</pre>

### Definindo o tipo e versão do banco de dados

5) O Sails se utiliza de adaptadores javascript para conexao com diversos bancos de dados.
    Inicialmente, por padrão, o Sails já está configurado para conexão com o adaptador SailsDisk.
    Atualmente os adaptadores que compoem a instalação padrão do Sails são:

* SailsDisk (banco de dados local, nativo, somente para desenvolvimento inicial);
* Postgresql;
* MySql
* MongoDB

Existe uma série de outros adaptadores não nativos, como por exemplo OracleDB
(vide https://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters)

Para conectar a um banco MongoDB, por exemplo, é preciso:

i) instalar o pacote sails-mongo e o mongodb;
ii) adicionar ao arquivo /config/datastores.js as seguintes linhas:

<pre>
adapter: 'sails-mongo',
url: 'mongodb://user:password@host:port/database',
</pre>

Os dados de conexão acima são um template e deve ser atualizado para os dados reais de conexão com o BD.

iii) Configurar a política de atualização manipulação dos dados no arquivo congig/models.js, podendo ser:

* safe - nenhuma alteração é feita na estrutura do banco de dados, nem tampouco dados serão perdidos;
* drop - todas as tabelas serão destruidas e recriadas a cada inicialização do sistema;
* alter - o Waterline tentará modificar a estrutura de dados sem comprometer os dados, mas poderá eventualmente
  destruí-los antes de recriar.
  veja:

<pre>
//***************************************************************************
*                                                                          *
* How and whether Sails will attempt to automatically rebuild the          *
* tables/collections/etc. in your schema.                                  *
*                                                                          *
* > Note that, when running in a production environment, this will be      *
* > automatically set to `migrate: 'safe'`, no matter what you configure   *
* > here. This is a failsafe to prevent Sails from accidentally running    *
* > auto-migrations on your production database.                           *
* >                                                                        *
* > For more info, see:                                                    *
* > https://sailsjs.com/docs/concepts/orm/model-settings#?migrate          *
*                                                                          *

***************************************************************************/

migrate: 'alter',

</pre>

### Pronto, O Protótipo está funcionando!

Para criar novos Endpoints isolados, ou seja, sem associação direta com um Modelo do Banco de Dados, utilize o comando:
`
sails generate controller nome-do-controller
`
e não se esqueça de criar também o PATH no arquivo routes.js.

## Be happy!

### Links Adicionais

+ [Sails.js Tech](https://www.sailsjs.tec.br)
+ [Documentação do Sails framework](https://sailsjs.com/get-starte*)
+ [Notas da Versão/Atualização](https://sailsjs.com/documentation/upgrading)
+ [Dicas para deploy](https://sailsjs.com/documentation/concepts/deployment)
+ [Opções de Support gratúito](https://sailsjs.com/support)
+ [Opções de suporter profissional](https://sailsjs.com/enterprise)

### Informações da versão (Inglês)

Este aplicativo foi originalmente gerado em 10 de janeiro de 2023 GMT-0300 (Horário Padrão de Brasília, usando Sails v1.5.3.)

Internamente, Sails usou  o ['sails-generate@2.0.7'](https://github.com/balderdashy/sails-generate/tree/v2.0.7/lib/core-generators/new).

O template deste Protótipo é baseado em um aplicativo de geração de código expandido fornecido pela [equipe principal do Sails](https://sailsjs.com/about) com o propósito de tornar mais fácil para você criar em cima de recursos prontos, como autenticação, registro, verificação de e-mail, e faturamento. Para mais informações, [faça contato conosco](https://sailsjs.com/support).


Observação: Os geradores de código são geralmente executados usando a CLI (interface de linha de comando) 'sails' instalada globalmente.  Esta versão da CLI é _environment-specific_ em vez de específica do aplicativo, portanto, ao longo do tempo, à medida que as dependências de um Protótipo são atualizadas ou o Protótipo é trabalhado por diferentes desenvolvedores em computadores diferentes usando versões diferentes do Node.js, a dependência do Sails em seu arquivo package.json pode diferir da versão da CLI do Sails instalada globalmente com a qual foi originalmente gerada.  