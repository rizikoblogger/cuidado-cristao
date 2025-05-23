# cuidado-cristao

> PAY ATTENTION! This README was written in Brazilian Portuguese because they are our main customer/client. If you want to get it in English, please, contact us.

> Besides, this is an i18n project, so if you want to contribute with translations, please, contact us too.

##  O Projeto Cuidado Cristão tem como objetivo disponibilizar um Software Web livre e de código aberto para quem quer gerenciar seus congregados como comunidade dos Servos do Reino de Deus

um Projeto [Sails v1](https://sailsjs.com)

### Este tutorial considera que você já possui conhecimento mínimo nas seguintes tecnologias:

* Javascript ES6; e
* MongoDB 4+.

### Consideramos ainda que você já instalou o Node.js na sua estação de trabalho e possui conhecimento mínimo quanto aos seguintes comandos de console:

* npm; e
* node.

### Preparação do Ambiente:

```npm install sails -g```

#### Definindo as Variáveis de Ambiente (ENVIRONMENT VARIABLES)

O Projeto requer que as seguintes variáveis de ambiente estejam disponíveis:

  <pre class="bg-dark text-success p-2">
                                <code>
# Are you running as [production] or [development]?
NODE_ENV=production
# Where (domain) will your server run?
BASE_URL=http://localhost
# Which server port should be exposed?
SERVER_PORT=80
# Who will send emails from Application to clients?
FROM_EMAIL_ADDRESS=no_reply@example.com
# How sender want to be recognized?
FROM_NAME=The Cristan Care`s Team
# Who will receive customer support emails?
INTERNAL_EMAIL_ADDRESS=support+development@example.com
# Brand new emails should be validated [true] or [false]?
VERIFY_EMAIL_ADDRESS=false
# To receive payments - you should create an 'https://stripe.com/' account
STRIPE_PUBLISHABLE_KEY=k_test_Zzd814nldl91104qor5911gjald
STRIPE_SECRET=sk_test_Zzd814nldl91104qor5911gjald
# To send emails - you should create an 'https://sendgrid.com' account
SENDGRID_SECRET=sk_prod__fake_Nfgh82401348jaDa3lkZ0d9Hm
# Which kind of database adapter must to be used [sails-disk], [sails-mongo], [sails-mysql]...
# https://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters
DATASTORE_ADAPTER=sails-disk
DATASTORE_URL=mysql://user:password@host:port/database
# Is it a MONGO_DB NO-SQL database?
IS_MONGO_DB=false
# The unique Encryption Key for the application
DATA_ENCRYPTION_KEYS_DEFAULT=ffliOnsljHYX05U58V5AkDXHqMT+bTlVOKT+Q0LUpcA=
                                </code>
                            </pre>

> Agora, na raiz do Projeto, podemos executar o Sails com um dos seguintes comandos:

* npm start; ou
* node app.js; ou
* sails lift (este último sempre carregará o Sails em ambiente de desenvolvimento, independente do valor atribuído a
  variável NODE_ENV, do arquivo .env.

### Criando minhas funcionalidades:

9) Para criar uma nova funcionalidade, tanto do tipo view quanto um Endpoint de API, utilize o comando abaixo.
   Este comando criará um Controller (/api/controllers/NomefuncionalidadeController.js)
   e uma entidade de persistencia chamada NomeFuncionalidade (/api/models/NomeFuncionalidade,js)

   `sails generate api nome-funcionalidade`


10) Para implementar comportamento na Nova Funcionalidade,

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
  /view do Projeto e {} corresponde a um objeto a ser passado como parametro.
  Ex.: `res.view('pages/faq',{param: 'teste'})`
* Para visualizar os dados passados como parametro para a View renderizada com EJS (https://ejs.co/) faça o seguinte:

<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang='pt-br'&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;
 Mostrando a palavra {{param}} aqui.
 ou
 Mostrando &lt;%=param %&gt; também.

 Acessando a variavel de ambiente environment exposta em SAILS_LOCALS
 cujo valor seria o definido na variável de ambiente NODE_ENV ('development') <%- _environment %>

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

12) Para acessar os dados em tabelas ou coleções de dados (noSQL) o Sails se utiliza da biblioteca
    Waterline (https://waterlinejs.org/).
    Como já visto anteriormente, o comando `sails generate api nome-controller` cria um arquivo controller e um arquivo
    model para ser utilizado como ORM de persistência.
    Este arquivo define um Objeto Persistente que estará acessível para todos os componentes do Projeto.
    Uma "Classe" Waterline possui atributos que podem ser manipulados e persistidos. Para saber como definir estes
    atributos no Sails.js consulte: https://sailsjs.com/docs/concepts/models-and-orm/models.
    Os métodos de manipulação mais comuns são:

* await NomeObjeto.find({}).then(result=>console.log(result)) - lista de todos os objetos
* await NomeObjeto.create({JSON contendo os dados}) - adicione um novo registro ao banco de dados
* await NomeObjeto.destroyOne({id: _id}) - remove um registro cujo atributo id corresponda ao parametro _id
* await NomeObjeto.find({id: 3}).then(result=>console.log(result)) - lista objetos cujop parametro id corresponda a 3
* await NomeObjeto.count({atributo: _criterio}) - conta o total de registros que correspondem ao criterio passado
  como parametro.


### Obtendo parametros da requisição:

13) Considerando uma requisição com a seguinte assinatura

<pre>
POST /api/v1/aluno/:id
</pre>

executada do seguinte modo

<pre>
POST http://localhost:1337/api/v1/aluno/34?page=2&size=10
Content-Type: application/json

{
 matricula: 123,
 disciplina: 18
}

</pre>

e uma função:

<pre>
module.exports = {

  getNotas: async function (req, res) { ... },

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

### Exemplo completo:

<pre>
/**

* InfoController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
  */

module.exports = {

  get: async function (req, res) {
    const id = req.params['id'];
    await Info.find({id: id})
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
    await Info.find({})
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

      await Info
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
    await Info.create(req.body).then(
      info => res.json(info)
    ).catch(err => console.log(err));
  },

  faq: async function (req, res) {
    res.view('pages/faq', {param: 'teste'});
  }

};
</pre>

### Definindo o tipo e versão do banco de dados

14) O Sails se utiliza de adaptadores javascript para conexao com diversos bancos de dados.
    Inicialmente, por padrão, o Sails já está configurado para conexão com o adaptador SailsDisk.
    Atualmente os adaptadores que compoem a instalação padrão do Sails são:

* SailsDisk (banco de dados local, nativo, somente para desenvolvimento inicial);
* Postgresql;
* MySql
* MongoDB

Existe uma série de outros adaptadores não nativos, como por exemplo OracleDB
(vide https://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters)

Para conectar a um banco MongoDB, por exemplo, é preciso:

i) instalar o pacote sails-mongo (o mongodb já foi instalado anteriormente);
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

### Pronto, O Projeto está funcionando!

Para criar novos Endpoints isolados, ou seja, sem associação direta com um Modelo do Banco de Dados, utilize o comando:
`
sails generate controller nome-do-controller
`
e não se esqueça de criar também o PATH no arquivo routes.js.

### Criando dados para teste

Nosso prototipo ja possui um _script_ capaz de gerar dados para teste.
O arquivo ``scripts/cria-dados-para-teste.js``. Para executa-lo, abra um
novo Terminal/Console e digite ``sails run cria-dados-para-teste``.
Depois disso, reinicie com ``sails lift``. **Se tudo correu bem, foi criado um
usuario [admin@example.com] com a senha [abc123] e com Perfil [SuperAdmin]**


## Estamos felizes que você tenha lido até aqui!

Porém, temos um pouco mais de informação importante pra você, o Sails Action 2:

### Sails Action 2 ###

Esta versão foi inicialmente criada com os conceitos de Actions 1, também chamados de _Controllers_.
Estes _Controllers_ são arquivos que contém funções que respondem como **ações** de resposta às requisições HTTP
mapeadas como rotas (ex. /api/v1/aluno/:id apontando para /controllers/AlunoController.editAluno), mas atualmente
estamos dando preferência ao uso das **Action 2**.

No caso do Action 2, existem três peguenas mudanças:

1) O Comando de console para criação seria ```sails generate action aluno``` (e nao generate controller como antes);
2) A rota agora deve ser '/api/v1/aluno/:id' apontando para action: '/controllers/edit-aluno', sendo edit.js o arquivo definição da action, com uma única functions.
3) Não é possível definir várias funções de ação em um arquivo de controle, mas somente uma ação por arquivo.

Visite [Sails Actions & Controllers](https://www.sailsjs.tec.br/#actions) para saber mais.

### Links Adicionais

+ [Documentação do Sails framework](https://sailsjs.com/get-starte*
+ [Notas da Versão/Atualização](https://sailsjs.com/documentation/upgrading)
+ [Dicas para deploy](https://sailsjs.com/documentation/concepts/deployment)
+ [Opções de Support gratúito](https://sailsjs.com/support)
+ [Opções de suporter profissional](https://sailsjs.com/enterprise)

### Informações da versão (Inglês)

This app was originally generated on Tue Jan 10 2025 15:35:58 GMT-0300 (Horário Padrão de Brasília) using Sails v1.5.3.

<!-- Internally, Sails used [`sails-generate@2.0.7`](https://github.com/balderdashy/sails-generate/tree/v2.0.7/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about)
to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification,
and billing. For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

