const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "ping",
    description: "Ukazuje ping bota",
    //práva pavy
    async run(message, args, client) {
        if (message.author.id == `205928649545875456`) return message.channel.send("nemáš práva");
        if (!message.member.roles.cache.find(r => r.id == `907018856667680880`)) return message.channel.send("Nemáš dostatečná práva, občane!");
        const msg = message;
        message.channel.send(`Ping: ${client.ws.ping} ms.`);
        setTimeout(() => msg.delete(), 50);

    }
})