const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "mysak",
    description: "oznámení",


    // práva Pavy
    async run(message, args, client) {

        if (!message.member.roles.cache.find(r => r.id == `907018856667680880`)) return message.channel.send("Nemáš dostatečná práva, občane!");


        const embed = new Discord.MessageEmbed();

        embed
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));

        embed.setDescription("Vážení občané.\n Chceme vám oznámit, že námi nenáviděný apik, nebo také wenzel, prolomil ledy, a úspěšně políbil dámu. \n Prý neutekl, ale to mu nevěříme. \n Z celého srdce blahopřejeme.");
        embed.setThumbnail(client.user.avatarURL({ dynamic: true }));
        embed.setTimestamp(message.createdTimestamp);

        const msg = message;
        setTimeout(() => msg.delete(), 50);


        message.channel.send({ embeds: [embed] });

    }
})