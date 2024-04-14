
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/start" command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'Play game', callback_data: 'play_game' }],
        [{ text: 'Earn Fish', callback_data: 'earn_fish' }]
      ]
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
    text = 'Let’s play a game!';
  } else if (category === 'earn_fish') {
    text = 'Time to earn some fish!';
  }

  bot.sendMessage(message.chat.id, text);
});