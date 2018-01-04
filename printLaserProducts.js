"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

    metadata: function metadata() {
        return {
            "name": "customComponent.carouselProducts",
            "properties": {
                "name": { "type": "string", "required": true }
            },
            "supportedActions": []
        };
    },

    invoke: (conversation, done) => {
      var name = conversation.properties().name;
      var card =
      {
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"generic",
            "elements":[
               {
                "title":"Hello " + name + "!!",
                "subtitle":"Welcome to London !!",
                "image_url": "http://www.sciencekids.co.nz/images/pictures/flags680/United_Kingdom.jpg",
                "buttons":[
                  {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"foobar payload"
                  }
                ]
              },
               {
                "title":"Ola " + name + "!",
                "subtitle":"Bienvenido a Londres !!",
                "image_url": "http://www.sciencekids.co.nz/images/pictures/flags96/Spain.jpg",
                "buttons":[
                  {
                    "type":"postback",
                    "title":"Do something else",
                    "payload":"blahblah payload"
                  }
                ]
              },
              {
               "title":"Hallo " + name + "!",
               "subtitle":"Willkommen in London !!",
               "image_url": "http://www.sciencekids.co.nz/images/pictures/flags120/Germany.jpg",
               "buttons":[
                 {
                   "type":"postback",
                   "title":"Do something else",
                   "payload":"blahblah payload"
                 }
               ]
             },
             {
              "title":"Bonjour " + name + "!",
              "subtitle":"Bienvenue à Londres !!",
              "image_url": "http://www.sciencekids.co.nz/images/pictures/flags96/France.jpg",
              "buttons":[
                {
                  "type":"postback",
                  "title":"Do something else",
                  "payload":"blahblah payload"
                }
              ]
            }
            ]
          }
        }
      }
      logger.debug('SayHello: shaping greeting for ' + name);

      if (name !== null) {
          conversation.reply({ text: 'Welcome ' + name + '!!' });
          var channelType = conversation.channelType();
          if (channelType === 'facebook') {
            conversation.reply(card);
          }
      } else {
          logger.debug('SayHello: no name provided!');
          conversation.reply({ text: 'Welcome ??? !!' });
      }
      conversation.transition();
      done();
    }
};
