module.exports = {
	Open: () => {
		let pull = Math.random() * 100;
		let rarity = '';
	
		if (pull < 0.26)
			rarity = 'yellow';
		else if (pull < 0.9)
			rarity = 'red';
		else if (pull < 4.1)
			rarity = 'orange';
		else if (pull < 20.1)
			rarity = 'purple';
		else
			rarity = 'blue';
	
		return rarity;
	}
}