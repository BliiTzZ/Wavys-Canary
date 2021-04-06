const Discord = require("discord.js");
const { color, footer } = require("../../db/config.json");
const { MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const avishelp1 = new Discord.MessageEmbed()
.setTitle('Donnez l\'avis sur un bénévole')
.setDescription('Vous souhaitez donner un avis sur un bénévole qui vous a aider ? Voici la démarche:')
.addField('Mentionnez la personne à qui vous souhaitez donner une avis.',"*exemple: `@ZeTro#0002` ou `<@356344219813806080>`*")
.setColor(color)
.setFooter(footer);
if (!user) return message.channel.send(avishelp1).catch(console.error);

let verication_user = message.guild.members.cache.find(m => m.id === user.user.id)
const avishelp2 = new Discord.MessageEmbed()
.setTitle('Donnez l\'avis sur un bénévole')
.setDescription('Vous souhaitez donner un avis sur un bénévole qui vous a aider ? Voici la démarche:')
.addField('Mentionnez la personne à qui vous souhaitez donner une avis.',"*exemple: `@ZeTro#0002` ou `<@356344219813806080>`*")
.setColor(color)
.setFooter(footer);
if (!verication_user) return message.channel.send(avishelp2).catch(console.error);

const avisreturn = new MessageEmbed()
.setTitle(`Vous avez choisi: ${verication_user.user.tag}`)
.setThumbnail(verication_user.user.displayAvatarURL({dynamic: true}))
.setDescription('Cliquer sur la récation que vous souhaiter pour donner une note au membre.')
.addField('Aide:','0⃣ > Manque de respect\n1⃣ > Super mal expliqué\n2⃣ > Aide minimaliste\n3⃣ > Aide convenable\n4⃣ > Aide satisfait\n5⃣ > Aide très efficace')
.setColor(color)
.setFooter(footer);
message.channel.send(avisreturn).then(msg => {
    msg.react('0⃣').then(() => msg.react('1⃣')).then(() => msg.react('2⃣')).then(() => msg.react('3⃣')).then(() => msg.react('4⃣')).then(() => msg.react('5⃣'))
})

if(verication_user.react) return message.channel.send('lol')

}

module.exports.help = {
    name:"avis",
    description : "Donnez l'avis sur un bénévole",
    args : false,
    aliases: [],
    categorie: 'utilitaire',
};