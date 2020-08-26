/* eslint-disable no-unused-vars */
const get = require('node-fetch');
const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
	get('https://corona.lmao.ninja/v3/covid-19/all')
		.then(res => res.json())
		.then(dataValue => {
			const cases = dataValue.cases.toLocaleString();
			// .toLocaleString() isn't that important, it just adds commas to numbers.
			// ex: 9000 becomes 9,000
			const deaths = dataValue.deaths.toLocaleString();
			const recovered = dataValue.recovered.toLocaleString();
			// you can add other datas such as todayCases or something.
			// dataValue is just a variable, you can change it's name to whatever
			// you want. But remember to change all the dataValue(s)! in the code!
			const coronaembed = new MessageEmbed()
				.setAuthor('Worldwide COVID-19 Statistics.', 'https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg')
				.addFields(
					{ name: 'Cases:', value: `\`${cases}\``, inline: true },
					{ name: 'Recovered:', value: `\`${recovered}\``, inline: true },
					{ name: 'Deaths:', value: `\`${deaths}\``, inline: true },
				);
			message.channel.send(coronaembed);
			// and then let eslint do the rest.
		});
};