const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = async (member) => {
    const client = member.client
    var choices = [
        `[<:join:802213921531494508>] Bienvenue, On espère que tu as apporté de la pizza ${member.user} !`,
        `[<:join:802213921531494508>] Un développeur viens de tomber du ciel. Bienvenue ${member.user} !`,
        `[<:join:802213921531494508>] On me dit à l'oreillete que ${member.user} viens de débarquer !`,
        `[<:join:802213921531494508>] ${member.user} viens d'arriver pour boire un café.`,
        `[<:join:802213921531494508>] ${member.user} vient juste d'atterrir.`,
        `[<:join:802213921531494508>] ${member.user} a bondi dans le serveur.`,
        `[<:join:802213921531494508>] Tout le monde, accueillez comme il se doit ${member.user} !`,      
    ]
    var react = [
      ':IconServerDiscovery:807317393520721930',
      ':WumpusHello:805497940227260467',
      'a:BlobDiscord:806279259327823952',
      ':WumpusPlus:802213694427103304',
      'a:bug_4:804363990300885023',
      ':Wumpus_Star:802290318505672744',
      ':wunpuscadeau:805496505208799272',
    ]
    var react = [
      '807317393520721930',
      '805497940227260467',
      '806279259327823952',
      '802213694427103304',
      '804363990300885023',
      '802290318505672744',
      '805496505208799272'
        ]
    
        client.channels.cache.get('802199768096309268').send(choices[Math.floor(Math.random() * choices.length)]).then(message => {message.react(react[Math.floor(Math.random() * react.length)])});
        member.send(new MessageEmbed()
        .setColor('#7289DA')
        .setTitle(`<:WumpusPlus:802213694427103304> Bienvenue à toi ${member.user.username}`)
        .setDescription(`__**Voici quelques informations qui te pourrais être utiles:**__\n\nNous t'invitons à lire sérieusement le [règlement](https://discord.com/channels/802070964287963177/802198909798973500/802201103860367400)\nSi tu souhaite te personnaliser va dans le salon [rôle](https://discord.com/channels/802070964287963177/802199959785046017/802220112362995712)\nSi tu veux devenir staff sur notre serveur va dans le salon [F.A.Q](https://discord.com/channels/802070964287963177/802220599786733569/802220716673597442)\n\n__**Voici quelques liens qui pourrais peut-être t'intéresser:**__\n\nVoici un ticket au cas ou de notre serveur [FR | Café Dev](https://discord.gg/2Ph7nNSQPJ)\nNotre partenaire officiel (**Place libre**)\n\nNous te souhaitons une bonne journée/soirée sur notre serveur.\n**Toutes l'équipe du staff te souhaite la bienvenue** !`)
        )

        const embed = new MessageEmbed()
        .setColor('#0F9D58')
        .setDescription(`<a:blobjoin:802213644342394890> **${member.user.tag}** vient de rejoindre le serveur. `)
        .setFooter('2021 - CDD')
        .setTimestamp()
        member.roles.add('802195996473557072')
        member.roles.add('802197117946560543')
        client.channels.cache.get('802199040896925777').send(embed)
        
}