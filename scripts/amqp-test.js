module.exports = {


  friendlyName: 'Amqp test',


  description: '',


  fn: async function () {

    //Access the callback-based API

    sails.log('Running custom shell script... (`sails run amqp-test`)');

    let amqp = require('amqplib/callback_api');
    let amqpConn = null;

    amqp.connect(process.env.CLOUDAMQP_URL + "?heartbeat=60", function (err, conn) {
      if (err) {
        console.error("[AMQP]", err.message);
        return setTimeout(start, 1000);
      }
      conn.on("error", function (err) {
        if (err.message !== "Connection closing") {
          console.error("[AMQP] conn error", err.message);
        }
      });
      conn.on("close", function () {
        console.error("[AMQP] reconnecting");
        return setTimeout(start, 1000);
      });
      console.log("[AMQP] connected");
      amqpConn = conn;
      console.log('Conected!')
    });
  }


};

