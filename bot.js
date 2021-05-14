const tmi  = require('tmi.js'),
      auth = require('./src/auth.json'),
	  cmd  = require('./src/commands');


// Bot Setup
const client = new tmi.Client({
	options: {messagesLogLevel: 'info'},
	connection: {
		reconnect: true,
		secure: true
	},
	identity: auth.niksaval,
	channels: ['lavaskin', 'kingtenechi']
});

client.connect().catch(console.error);
console.log('bot started...');


// Read Messages
client.on('message', (channel, tags, message, self) => {
	if (self) return;

	let cut = message.split(' ');
	let command = cut.shift();
	let args = cut;

	switch (command) {
		case '!open':
		case '!open2':
			cmd.Open(client, channel, tags, args[0]);
			break;

		case '!rarity':
			cmd.Rarity(client, channel);
			break;
	}
});