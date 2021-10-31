import { Command } from '../../interfaces';

export const command: Command = {
	name: 'ping',
	description: 'Ping command',
	aliases: [],
	usage: 'ping',
	testOnly: true,
	permissions: [],
	run: async (client, message, args) => {
		message.reply(`${client.ws.ping}`);
	},
};
