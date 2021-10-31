import { Slash } from '../../interfaces';

export const slash: Slash = {
	name: 'ping',
	description: 'ping',
	testOnly: true,
	run: async (client, interaction, args) => {
		interaction.followUp({ content: `${client.ws.ping}ms` });
	},
};
