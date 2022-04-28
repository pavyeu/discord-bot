const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "oznameni",
    description: "oznámení",
    permission: "SEND_MESSAGES",
    // Práva pavy a myžog
    async run(message, args, client) {

        if (!message.member.roles.cache.find(r => r.id == `907018856667680880` || `907347864030674994`)) return message.channel.send("Nemáš dostatečná práva, občane!");
        const embed = new Discord.MessageEmbed();

        embed
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));

        embed.setDescription("Dámy a Pánové \n Chtěl bych vám oznámit, že jsme na server přivedli nový systém práv na bota. \n Ten, kdo by měl o práva zájem, nechť napíše Vůdci.\n Děkujeme za pozornost");
        embed.setThumbnail(client.user.avatarURL({ dynamic: true }));
        embed.setTimestamp(message.createdTimestamp);

        const msg = message;
        setTimeout(() => msg.delete(), 50);


        message.channel.send({ embeds: [embed] });

    }
})