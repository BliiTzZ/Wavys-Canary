const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = async (member) => {
    const client = member.client
    const embed = new MessageEmbed()
    .setColor('#DB4437')
    .setDescription(`<a:blobleave:802213678073774091> **${member.user.tag}** vient de quitter le serveur.`)
    .setFooter('2021 - CDD')
    .setTimestamp()
    client.channels.cache.get('802199040896925777').send(embed)
    
}