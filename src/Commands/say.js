const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "say",
    description: "bot něco řekne",
    //práva pavy || `907347864030674994`
    async run(message, args, client) {
        if (!message.member.roles.cache.find(r => r.id == `907018856667680880`)) return message.channel.send("Nemáš dostatečná práva, občane!");
        const msg = message;
        message.channel.send(args.slice(1).join(" "));
        setTimeout(() => msg.delete(), 50);
    }
})