const client = require('../../index');

client.on('ready', () => {
    console.log(`${client.user.tag} is up and ready to go!`);
    client.user.setStatus('online');
});
