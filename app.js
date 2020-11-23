require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true});

const dayCommand = require('./commands/day.command');
const nextCommand = require('./commands/next.command');
const nextDayCommand = require('./commands/nextday.command');
const nowCommand = require('./commands/now.command');
const startCommand = require('./commands/start.command');
const stopCommand = require('./commands/stop.command');
const weekCommand = require('./commands/week.command');

bot.onText(/\/day/, (msg) => dayCommand(bot, msg));
bot.onText(/\/nextday/, (msg) => nextDayCommand(bot, msg));
bot.onText(/\/now/, (msg) => nowCommand(bot, msg));
bot.onText(/\/start/, (msg) => startCommand(bot, msg));
bot.onText(/\/stop/, (msg) => stopCommand(bot, msg));
bot.onText(/\/week/, (msg) => weekCommand(bot, msg));

bot.on('text', (msg) => {
    const isNextCommand = (
        msg.text.toLowerCase() === '/next' ||
        msg.text.toLowerCase() === '/next@lessons_541_bot'
    )

    if (isNextCommand) {
        nextCommand(bot, msg)
    }
})
