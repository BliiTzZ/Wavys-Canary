const Discord = require("discord.js");
const { color, footer } = require("../../db/config.json");
const moment = require('moment');
moment.locale('fr')
module.exports.run = async (bot, message, args) => {

 let mention = message.mentions.members.first() || message.member;
 
 const membre = message.mentions.members.first() || message.member;

 let avatarembed = new Discord.MessageEmbed()

 .setAuthor(mention.user.username, mention.user.avatarURL({dynamic: true}))
 .addField("Tag", `${mention.user.tag} (\`${mention.id}\`)`, true)
 .addField("Badges", Discord.UserFlags.length, true)
 .addField("Messages", pUser.lifetime_messages >= 0 ? convertNumber(pUser.lifetime_messages) : "??", true)
 .addField("Boosteur", mention.premiumSince ? `<a:cdd_boost:809829051564032012> depuis le ${moment(mention.premiumSince).format("L")}` : "Non", true)
  message.channel.send(avatarembed).catch(console.error)
}

module.exports.help = {
 name: "userinfo",
 cooldown : 10,
 aliases: ["ui"],
 categorie: "info",
}
