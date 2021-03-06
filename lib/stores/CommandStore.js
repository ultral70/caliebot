const Store = require("../structures/Store");
const { Collection } = require("discord.js");

class CommandStore extends Store {

	constructor(client) {
		super(client, "commands");

		this.aliases = new Collection();
	}

	get(name) {
		return super.get(name) || this.aliases.get(name);
	}

	has(name) {
		return super.has(name) || this.aliases.has(name);
	}

	set(command) {
		super.set(command);
		if (command.aliases.length) for (let i = 0; i < command.aliases.length; i++) this.aliases.set(command.aliases[i], command);
		return command;
	}

	delete(command) {
		const exists = this.get(command);
		if (!exists) return false;
		if (exists.aliases.length) for (let i = 0; i < exists.aliases.length; i++) this.aliases.delete(exists.aliases[i]);
		return super.delete(command);
	}

	clear() {
		super.clear();
		this.aliases.clear();
	}

}

module.exports = CommandStore;
