const Telegraf  = require('telegraf'),
    {rozclad} = require('./function');

const options = {
    webHook: {
        port: process.env.PORT
    }
};

const bot = new Telegraf(process.env.SECRET_BOT_KEY, options);

bot.hears(/^.$/, (ctx) => rozclad(ctx.message.text)
    .then(result=>{ctx.reply(result)})
    .catch(()=>ctx.reply('Something went wrong')));


bot.telegram.setWebhook('https://jsexam.hitrch.now.sh');

module.exports = bot.webhookCallback('/');