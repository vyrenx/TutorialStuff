/* eslint-disable no-unused-vars */
const ms = require('ms');
exports.run = async (client, message, args) => {
	const m = await message.channel.send('Pinging...');
	m.edit(`Latency is \`${m.createdTimestamp - message.createdTimestamp}\`, API latency is \`${client.ws.ping}\`, Uptime is \`${ms(Math.ceil(client.uptime), { long: true })}\``);
};