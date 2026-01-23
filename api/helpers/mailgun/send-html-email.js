/* send-mailgun-email.js (Helper)
╔═══╗╔═╗ ╔╗╔╗  ╔╗╔══╗╔═══╗╔═══╗╔═══╗╔═══╗    ╔═══╗╔═══╗    ╔═╗╔═╗╔═══╗╔══╗╔╗   ╔═══╗╔╗ ╔╗╔═╗ ╔╗
║╔══╝║║╚╗║║║╚╗╔╝║╚╣╠╝║╔═╗║╚╗╔╗║║╔═╗║║╔═╗║    ╚╗╔╗║║╔══╝    ║║╚╝║║║╔═╗║╚╣╠╝║║   ║╔═╗║║║ ║║║║╚╗║║
║╚══╗║╔╗╚╝║╚╗║║╔╝ ║║ ║║ ║║ ║║║║║║ ║║║╚═╝║     ║║║║║╚══╗    ║╔╗╔╗║║║ ║║ ║║ ║║   ║║ ╚╝║║ ║║║╔╗╚╝║
║╔══╝║║╚╗║║ ║╚╝║  ║║ ║╚═╝║ ║║║║║║ ║║║╔╗╔╝     ║║║║║╔══╝    ║║║║║║║╚═╝║ ║║ ║║ ╔╗║║╔═╗║║ ║║║║╚╗║║
║╚══╗║║ ║║║ ╚╗╔╝ ╔╣╠╗║╔═╗║╔╝╚╝║║╚═╝║║║║╚╗    ╔╝╚╝║║╚══╗    ║║║║║║║╔═╗║╔╣╠╗║╚═╝║║╚╩═║║╚═╝║║║ ║║║
╚═══╝╚╝ ╚═╝  ╚╝  ╚══╝╚╝ ╚╝╚═══╝╚═══╝╚╝╚═╝    ╚═══╝╚═══╝    ╚╝╚╝╚╝╚╝ ╚╝╚══╝╚═══╝╚═══╝╚═══╝╚╝ ╚═╝
*/

module.exports = {


  friendlyName: 'Send MailGun',


  description: 'Send a Mail by MailGun provider.',


  extendedDescription: 'To get available this MailGun feature we should to create an MailGun account at https://signup.mailgun.com/new/signup',


  inputs: {
    from: {type: 'string', required: true},
    to: {type: 'string', required: true},
    subject: {type: 'string', required: true},
    html: {type: 'string', required: true}
  },

  exits: {
    success: {
      description: 'MailGun sent successfully!'
    },

    error: {
      description: 'If some kind of err occur, it often is due to credentials issues',
    }
  },

  fn: async function ({from, to, subject, html}) {

    let apiKey = sails.config.custom.mailgunApiKey;
    let domain = sails.config.custom.mailgunDomain;
    let mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});

    console.log(`Sending MailGun to ${to}...`)

    let data = {
      from: from,
      to: to,
      subject: subject,
      html: html // or html: if you wanna send html instead pure txt
    };

    mailgun.messages().send(data, function (error, body) {
      if(error){
        console.log(error)
      }else{
        console.log(body);
      }
    });
  }


}
