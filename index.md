# Making your own discord bot
## Chapter 0: Preparation
### Step 1: Installing stuff
- Install [node.js](https://nodejs.org/en/)
- Install a code editor such as [Visual Studio Code](https://code.visualstudio.com/)

## Chapter 1: Making a bot
### Step 1: Creating your bot
- Go to [Discord developer portal](https://discord.com/developers/applications)
- On the top right, click `New Application`.

![Image1](https://cdn.discordapp.com/attachments/804614889577644032/804619100265250826/unknown.png)

- Enter the name you would like to name your application.

![Image2](https://cdn.discordapp.com/attachments/804614889577644032/804619548980543488/unknown.png)

This is how it should look like now.

- Now click on `Bot`

![Image3](https://cdn.discordapp.com/attachments/804614889577644032/804619718450610186/unknown.png)

- Click on `Add Bot`

![Image4](https://cdn.discordapp.com/attachments/804614889577644032/804619896709054484/unknown.png)

**And boom! You're basically done!**

### Step 2: Code stuff
- Create a folder for where you store your bot's files
- Open that folder on your code editor, and then create your main file (A main file is usually named `index`, we're going to use JavaScript so we must use a `.js` file extension.
- Open your console with `ctrl + ~`
- Initialize npm in your folder with typing `npm init` in your console
- Install the discord.js library with typing `npm i discord.js` in your console
- Include the library in your `index.js` file

```js
const Discord = require('discord.js');
```

- Initialize `Client` class of the library

```js
const Discord = require('discord.js');
const client = new Discord.Client();
```

- Logging in to your bot using `<Client>.login(token)`, get your token from the Dev Portal and click `Copy Token`
- Add an event listener with `<Client>.on(event, callback)`, in this case, to detect a login to our bot we use the "ready" event

```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Hello world!");
})

client.login("MY-TOKEN");
```
Your code should look like this by now,
What this code means above is "When client on event `ready`, log string `Hello World` to console."

### Step 3: Getting your bot to join your server
- Go back to [Discord developer portal](https://discord.com/developers/applications)

![Image5](https://cdn.discordapp.com/attachments/804614889577644032/804626064780296192/unknown.png)

- Click on OAUTH2
- Check `bot`
- Follow the link that is given
**Your bot is now working! Neat!**
