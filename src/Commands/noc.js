const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "spanek",
    description: "oznámení",


    //pouze role pavy
    async run(message, args, client) {
        if (!message.member.roles.cache.find(r => r.id == `907018856667680880`)) return message.channel.send("Nemáš dostatečná práva, občane!");



        const embed = new Discord.MessageEmbed();

        embed
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        embed.setTitle("Noc");
        embed.setDescription("Vážení občané.\n Váš fuhrer vyhlašuje noc. Prosím, pomodle te se ke svému vůdci, a ulehněte do své lože.\n Sláva vůdci!");
        embed.setThumbnail(client.user.avatarURL({ dynamic: true }));
        embed.setTimestamp(message.createdTimestamp);

        const msg = message;
        setTimeout(() => msg.delete(), 50);


        message.channel.send({ embeds: [embed] });

    }
})