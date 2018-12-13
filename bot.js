const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var result_rdm = null;

client.on('message', msg => {

	if(msg.author != client.user){
		if(result_rdm != null){

			if (msg.content == result_rdm) {
			    msg.reply("Bravo");
			    result_rdm = null;
			    return;
			} 

			if (msg.content != result_rdm) {
			    msg.reply("Perdu, la bonne réponse étais: " + result_rdm);
			    result_rdm = null;
			    return;
			} 
		}
	}
	if (msg.content === '!jouer') {
			if(result_rdm == null){
		  	let rdm_number = Math.floor((Math.random() * 10) + 1);
		    msg.reply("Insérer un numéro entre 1 - 10: ");
		    result_rdm = rdm_number;
		}
	}
});



client.login('NTIyNzczMTEzMTQ3MjI4MTkw.DvP3OA.Hhf_xvEPoryqKo8bOkcR3xzLomI');