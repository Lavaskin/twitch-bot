= Get started:
 - Run "npm install" to instal dependencies.
 - Create an auth.json in /src in the form:

   ">bot_username": {
		"username": ">bot_username",
		"password": ">oauth_password"
   }

   I use this syntax because I swap which account I run the bot on so adding more accounts is simpler.
 - In the "const client = new tmi.Client({..." statement, change the Identity key to auth.>bot_username.
 - Run the bot with "node bot" or "nodemon bot".

= Commands
 - !open/!open2:
   Simulates opening a CSGO case, swapping pink rarity for orange. Open2 exists to bypass twitches 30s duplicate message cooldown.
 - !rarity:
   Shows the odds of each possible roll with !open.