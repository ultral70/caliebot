const Command = require("../../lib/structures/Command.js");

class Ping extends Command {

	constructor(...args) {
		super(...args, {
			name: "ping",
			description: "Latencia y tiempo de respuesta de la API.",
			usage: "ping",
			aliases: ["pong"]
		});
	}

	async run(message, args, level) { // eslint-disable-line no-unused-vars
		const msg = await message.channel.send(`**${message.member.displayName}**...`);
		msg.edit(`${this.client.responses.pingMessages.random().replaceAll("{{user}}", message.member.displayName).replaceAll("{{ms}}", `${msg.createdTimestamp - message.createdTimestamp}`)}`);
	}

}

module.exports = Ping;
