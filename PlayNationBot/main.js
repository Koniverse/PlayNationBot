const {Markup} = require("telegraf");
const Telegraf = require('telegraf').Telegraf;
require('dotenv').config();
const {BANNER_URL, WEB_APP_URL, TELEGRAM_BOT_TOKEN} = process.env;
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);
bot.telegram.setMyCommands([
    {
        command: 'start',
        description: 'Start App',
    },
]);
bot.command("start", async ctx => {
        await ctx.reply('Welcome!', Markup.keyboard([Markup.button.webApp('Open apps', WEB_APP_URL)], ).resize(true));
        await ctx.replyWithPhoto(
            BANNER_URL,
            {
                caption:
                    'Playnation is a Telegram-based gaming wallet featuring a wide array of highly interactive games, tailored to connect Web3 users with abundant airdrops from top-tier web3 projects' ,
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[Markup.button.webApp('Open apps', WEB_APP_URL)]],
                }
            }
        );
    }
);
bot.launch();
