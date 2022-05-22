import { Command } from '../../Interfaces';

export const command: Command = {
  name: 'ping',
  description: 'Ping command',
  aliases: ['p'],
  usage: 'ping',
  testOnly: true,
  permissions: ['SEND_MESSAGES'],
  run: async (client, message, args) => {
    message.reply({ content: `${client.ws.ping}ms` });
  },
};
