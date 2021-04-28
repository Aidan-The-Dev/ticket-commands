const discord = require('discord.js')
const client = new discord.Client()

class cmds {
  
  async payment(message) {

    let paymentEmbed = {
      embed: {
        title: `${message.guild.name} Payment options`,
        color: 'RANDOM',
        description: `To proceed with your purchase please send the required amount of money to ${payment} and staff will then continue with your purchase.`,
        footer: `${message.guild.name} Staff Team`
      }
    }

    message.channel.send(paymentEmbed)
  }

  async paymentSuccess(message) {

    let success = {
      embed: {
        title: ':white_check_mark: Success :white_check_mark:',
        color: 'GREEN',
        description: 'We have recieved your payment and will now continue with your purchase.',
        footer: `${message.guild.name} Staff Team`
      }
    }

    message.channel.send(success)
  }

  async fail(message) {

    let failEmbed = {
      embed: {
        title: '❌ ERROR ❌',
        color: 'RED',
        description: 'Your payment has been denied please wait for a staff member to explain why.',
        footer: `${message.guild.name} Staff Team`
      }
    }
  }

  async end(message) {

    let endEmbed = {
      embed: {
        title: `${message.guild.name} Product Purchase`,
        color: 'GREEN',
        description: 'Thank you we greatly appreciate your purcahse and look forward to future purchases from you.',
        footer: `${message.guild.name} Staff Team`
      }
    }
    message.channel.send(endEmbed)
  }

  async start(message) {

    let startEmbed = {
      embed: {
        title: `${message.guild.name}`,
        color: 'RANDOM',
        description: `Hello my name is ${message.author.username} with the ${message.guild.name} staff team how may I help you today?`,
        footer: `${message.guild.name} Staff Team`
      }
    }
    message.channel.send(startEmbed)
  }

  async features(message) {

    let NodeJSversion = 'version 12 or newer'
    let DiscordJSversion = 'version 12 or newer'
    let tip = 'Tip if you are using NodeJS version 12 you should update to version version 16 as it has newer faster features.'

    let content = {
      embed: {
        title: 'Ticket-Commands Features',
        color: 'RANDOM',
        description: `Ticket-Commands 1.0.0 vesion features\n\n.start(message)\n.payment(message)\n.success(message)\n.fail(message)\n.end(message)\n-------------------------\nExtras:\n${NodeJSversion}\n${DiscordJSversion}\n-------------------------\n${tip}\n\nAny questions, concerns or command suggestions please DM me Aidan The Sister#1714\n-------------------------`
      }
    }

    message.channel.send(content)
  }
}

module.exports = cmds
