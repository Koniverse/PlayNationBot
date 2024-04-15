const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Matches "/start" command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  // const opts = {
  //   reply_markup: JSON.stringify({
  //     inline_keyboard: [
  //       [{ text: 'Play game', callback_data: 'play_game' }],
  //       [{ text: 'Earn Fish', callback_data: 'earn_fish' }]
  //     ]
  //   })
  // };
  const opts = {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: 'Play game' }],
        [{ text: 'Get more point' }],
      ],
    })
  };
  bot.sendMessage(chatId, 'Choose an option:', opts);
});

// Handle callback queries
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const category = callbackQuery.data;

  let text;
  if (category === 'play_game') {
    text = 'https://t.me/BookaGamesBot/swbooka?startapp=EXvDA66or';
  } else if (category === 'earn_fish') {
    text = 'https://t.me/BookaGamesBot/swbooka?startapp=EXvDA66or';
  }

  bot.sendMessage(message.chat.id, text);
});