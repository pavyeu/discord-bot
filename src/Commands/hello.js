const { MessageFlags } = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({

    name: "ahoj",
    description: "pozdrav",
    // Práva Soudci a Dozorci
    async run(message, client) {
        if (!message.member.roles.cache.find(r => r.id == `690290591267029042` || `690290726126616688`)) return message.channel.send("Nemáš dostatečná práva, občane!");
        const msg = message;
        message.channel.send("Vítej v protektorátu!");
        setTimeout(() => msg.delete(), 50);
    }

});