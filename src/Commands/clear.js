const { Message } = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({

    name: "clear",
    description: "Mazání zpráv",
    //práva Pavy a Myšák
    async run(message, args, client) {
        //  if (!message.member.roles.cache.find(r => r.id == `907018856667680880` || `907347864030674994`)) return message.channel.send("Nemáš dostatečná práva, občane!");
        const amount = args[1];

        if (!amount || isNaN(amount)) return message.reply(`${amount} není správné číslo!`);

        const amountParsed = parseInt(amount);

        if (amountParsed > 100) return message.reply("ce jak 100 zpráv!");

        message.channel.bulkDelete(amountParsed);

        const msg = await message.channel.send(`Smazáno ${amountParsed} svazků!`);

    }


});