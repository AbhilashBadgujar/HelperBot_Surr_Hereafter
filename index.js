
const Discord = require('discord.js');
const client = new Discord.Client();

client.login('Nzg1NjYyMTk5MTUwNDExNzc4.X87G8Q.1cfdDFr5fY5Cmzw1NiWS8fJoyTc');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
     const hook = new Discord.WebhookClient('785805411533717505', 'gsaeZOaIgyGfqVGycsjfvg9kg4nvJ5JDML_-YXoSOul-TYhsSLMY8d9MI-E1CdX3fOjw');

    // // Send a message using the webhook
     hook.send('I am now alive!');
    // client.channels.cache.get('785663465124790294').send('Hello here!')
  });

    


//client.login('Nzg1NjYyMTk5MTUwNDExNzc4.X87G8Q.XPLeWAmajyz7Vkke0A1iLu4ybIw');

