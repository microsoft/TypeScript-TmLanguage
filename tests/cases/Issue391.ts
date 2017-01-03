var interface = require('./../interface');
var ctrl = require('./controllers');
var utils = require('./../utils');
var Promise = require('bluebird');
var deligate = require('./core');
var log = require('./../log');

var constructor = deligate.then(function(bot)
{
    bot.sendMessage(110224344, 'here is the index');
    bot.on('message', function(message)
    {
        if(utils.telegram.is_command(message.text))
        {
            ctrl.commands(message).catch(function(error_log)
            {
                bot.sendMessage(message.chat.id, interface.text.errors.redirect);
                log.uncaughtException(error_log);
            });
        }
    });

    return '  ? Telegram WebHook Set: Successfull!';
});

module.exports = constructor;
