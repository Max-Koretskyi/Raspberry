const BOT_TOKEN = "1042353212:AAGrFdM1MFRpOlJL1sFenXqvO0gfyT0Asmk"
const Telegraf = require('telegraf')
const bot = new Telegraf(BOT_TOKEN, {polling:true})
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker',(ctx) => ctx.reply('wow!!!'))
bot.hears('Hi', (ctx) => ctx.reply('Hi there'))

bot.launch()
