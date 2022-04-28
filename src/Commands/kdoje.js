const Discord = require('discord.js');
const Command = require("../Structures/Command.js");


module.exports = new Command({
    name: "userinfo",

    description: "Shows a user's info",

    usage: "(user)",

    category: "Utilities",
});




module.exports.run = async(bot, message, args) => {
    const taggedUser = message.mentions.members.first() || message.author;

    const embed = new Discord.MessageEmbed();
    embed.setTitle(`${taggedUser.username}`);
    embed.setColor(colours.commandscolour);
    embed.setThumbnail(taggedUser.displayAvatarURL());

    embed.addField('Username', `${taggedUser.username}`);

    embed.addField('Tag', `${taggedUser.discriminator}`);

    embed.addField('Time of creation', `${taggedUser.createdAt}`);

    embed.addField('User ID', `${taggedUser.id}`);



    return message.channel.send(embed);

}