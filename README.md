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

* [HTML 5](https://www.w3schools.com/html/);
* [CSS](https://www.w3schools.com/html/css/);
* [Javascript ES6](https://www.w3schools.com/js/) ;
* [Sails.js](https://sailsjs.com) e
* [MongoDB 3+](https://www.w3schools.com/mongodb/).

### Consideramos ainda que você já instalou o Node.js na sua estação de trabalho e possui conhecimento mínimo quanto aos seguintes comandos de console:

* npm; e
* node;

## Criando meu primeiro Protótipo Sails

I) Localize e altere os seguintes textos contidos no Protótipo:

Quando você tiver seu produto, nome da empresa e marca finalizados, aqui estão os espaços reservados que você deverá trocar:

* NEW_APP_NAME - O Nome do seu produto de software.
* NEW_APP_COMPANY_NAME - Esse espaço reservado é usado para o nome da entidade nos termos legais e na política de privacidade e pode ser substituído pelo nome da empresa por trás do seu aplicativo.
* DATE_PRIVACY_POLICY_LAST_UPDATED - Substitua isso pela data em que sua Política de Privacidade foi atualizada (portanto, se você estiver trocando o nome da empresa, a data é hoje).
* DATE_TERMS_OF_SERVICE_LAST_UPDATED - Substitua isso pela data em que seus Termos de Serviço foram atualizados (portanto, se você estiver trocando o nome da empresa, a data é hoje).
* NEW_APP_COMPANY_ABOUT_HREF - Este é o link na seção de direitos autorais do rodapé. Você provavelmente vai querer trocá-lo por um link para a página sobre a sua empresa ou site de marketing.
Espaço reservado para o Logotipo - Para usar sua marca personalizada, você pode simplesmente substituir o arquivo de imagem em assets/images/logo.png por uma imagem personalizada de mesmo nome, ou alterar a imagem src no cabeçalho em views/layouts/layout.ejs.

II) Altere o dicionário de internacionalização:

A internacionalização consiste em substituir palavras chaves existentes nos templates por seus significados em dicionário. Este dicionário considera a **localidade** 
configurada no navegador para selecionar qual dos dicionários disponíveis será utilizado. Por exemplo, se o navegador está configurado para o francês, então o Sails
utilizará as definições constantes do arquivo ``config/locales/fr.json``.

* Utilize <%=__('Welcome')%> para definir uma chave de tradução, no corpo de um arquivo **.EJS**;
* Utilize "Welcome":"Bem vindo" para definir o significado da chave, no arquivo en.json, por exemplo.
* Quando o Sails não encontra uma correspondência de chave x significado, ele cria (em tempo de execução) um par chave:significado no arquivo associado a localidade e reproduz a chave (que agora é igual ao significado) na tela. Ex. Se utilizarmos <%=__('teste')%> e o arquivo de tradução principal for o português, então o Sails criará uma linha "teste":"teste" no arquivo pt.json e você verá na tela **teste**.
* Para alterar o dicionário padrão, edite o arquivo ```config/i18n.js```

III) Instruções detalhadas de como personalizar as integrações: https://www.sailsjs.tec.br/content/faq.ejs.html

IV) Instruções detalhadas de **como criar novas funcionalidades** pode ser encontrada na
[Segunda Etapa destas Orientações passo-a-passo](https://www.sailsjs.tec.br/ext/passo-a-passo-faq.html) .

### Definindo o tipo e versão do banco de dados

    O Sails se utiliza de adaptadores javascript para conexao com diversos bancos de dados.
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

Os dados de conexão acima são um _template_ e deve ser atualizado para os dados reais de conexão com o BD.

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

## Adicionando dados falsos para teste

Para adicionar dados falsos ao seu Protótipo:

* Localize o arquivo ```scripts/cria-dados-para-teste``` e prepare-se para editá-lo;
* Siga o modelo já implantando para expandir sua carga de dados;
* Para conhecer mais recursos de criação de dados _fake_ visite o site [@Faker.js](https://fakerjs.dev/), mas preste bem a atenção em qual das versões está instalada no seu Protótipo.

## Be happy!

### Links Adicionais

+ [Sails.js Tech](https://www.sailsjs.tec.br)
+ [Documentação do Sails framework](https://sailsjs.com/get-starte*)
+ [Notas da Versão/Atualização](https://sailsjs.com/documentation/upgrading)
+ [Dicas para deploy](https://sailsjs.com/documentation/concepts/deployment)
+ [Opções de Support gratúito](https://sailsjs.com/support)
+ [Opções de suporter profissional](https://sailsjs.com/enterprise)

### Informações da versão

Este aplicativo foi originalmente gerado em 10 de janeiro de 2023 GMT-0300 (Horário Padrão de Brasília, usando Sails v1.5.3.)

Internamente, Sails usou  o ['sails-generate@2.0.7'](https://github.com/balderdashy/sails-generate/tree/v2.0.7/lib/core-generators/new).

O template deste Protótipo é baseado em um aplicativo de geração de código expandido fornecido pela [equipe principal do Sails](https://sailsjs.com/about) com o propósito de tornar mais fácil para você criar em cima de recursos prontos, como autenticação, registro, verificação de e-mail, e faturamento. Para mais informações, [faça contato conosco](https://sailsjs.com/support).

Mais informações em português podem ser encontradas no sítio [Sails.j Tech Brazil](https://www.sailsjs.tec.br)


Observação: Os geradores de código são geralmente executados usando a CLI (interface de linha de comando) 'sails' instalada globalmente.  Esta versão da CLI é _environment-specific_ em vez de específica do aplicativo, portanto, ao longo do tempo, à medida que as dependências de um Protótipo são atualizadas ou o Protótipo é trabalhado por diferentes desenvolvedores em computadores diferentes usando versões diferentes do Node.js, a dependência do Sails em seu arquivo package.json pode diferir da versão da CLI do Sails instalada globalmente com a qual foi originalmente gerada.
