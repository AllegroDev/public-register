const allegro = require('aoi.js');
var fs = require('fs');
const bot = new allegro.Bot({
	token: process.env['token'],
	prefix: '$getServerVar[prefix]'
});

const keep_alive = require('./http.js');
bot.loadCommands(`./komutlar/`);
bot.onEmojiDelete()
bot.onEmojiCreate()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onBanRemove()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageDelete()
bot.onMessageUpdate()
bot.onJoined()
bot.onLeave()
bot.onMessage()


bot.readyCommand({ 
    channel: "log id", 
    code: `$djsEval[client.channels.cache.get("ses id").join()]
Bot Yeniden Başlatıldı Ve Sesli Kanala Girdim.`
})

bot.joinCommand({
channel:"hg kanal id",
code:`
Sunucuya Hoş geldin <@$authorID> \`($authorID)\`


Seninle birlikte sunucumuz toplam **$membersCount** kişiye ulaşmış bulunmakta!

Hesabın \`$creationDate[$authorID]\` tarihinde oluşturulmuş.

Kurallar sunucunun düzenini sağlamak için konulmuştur.
( <#kanal id> ) kanalından kurallarımızı okumayı ihmal etme.


Sunucuya erişebilmek için teyit kanallarında teyit vermen gerekiyor <@&rol id> rolündeki yetkilililer seninle ilgilenicektir.

**İyi Eğlenceler.**
`
})     

bot.command({
        name: "eval",
        code: `$eval[$message]
$onlyForIDs[$botOwnerID;Geliştiricim Değilsin]`
})

bot.status({
	text: "Allegro ❤",
	type: "PLAYING",
	status: "online",
	time: 12
	
})



bot.variables({
	prefix: "prefixiniz"
})