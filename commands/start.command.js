const startCommand = (bot, msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'sucess');
}

module.exports = startCommand;