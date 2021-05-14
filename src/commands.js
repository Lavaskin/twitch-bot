let func = require('./functions');

module.exports = {
	Open: (client, channel, tags, arg) => {
		if (arg) {
			let count = parseInt(arg);

			if (Number.isNaN(count) || count > 1000001)
				client.say(channel, '@' + tags.username + ' invalid argument!');
			else {
				let rolls = [0, 0, 0, 0, 0];

				for (let i = 0; i < count; i++) {
					let pull = func.Open();

					switch (pull) {
						case 'blue':
							rolls[0] += 1;
							break;
						case 'purple':
							rolls[1] += 1;
							break;
						case 'orange':
							rolls[2] += 1;
							break;
						case 'red':
							rolls[3] += 1;
							break;
						case 'yellow':
							rolls[4] += 1;
							break;
					}
				}

				client.say(channel, tags.username + '\'s pulls: ' + rolls);
			}
		} else
			client.say(channel, tags.username + ' pulled a(n) ' + func.Open() + ' !');
	},
	
	Rarity: (client, channel) => {
		client.say(channel, ':yellow_circle:  0.26%  :red_circle:  0.64%  :orange_circle:  3.2%  :purple_circle:  15.98%  :blue_circle:  79.92%');
	}
}