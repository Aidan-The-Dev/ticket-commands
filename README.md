#
# Ticket-Commands

## The goal with Ticket-Commands is to simplify discord tickets as of the initial release it just includes payment commands for discord businesses.
#

### Installation
#
npm install ticket-commands
#

### Usage

#
```js
const {Commands} = require('ticket-commands')
const cmd = new Commands() //cmd is my choice you can put whatever you want
const discord = require('discord.js')
const client = new discord.Client()
const prefix = 'YOUR PREFIX HERE'

client.once('ready', () => {
  console.log('Ready')
  client.user.setActivity('tickets', {type: 'WATCHING'})
})

client.on('message', message => {
    if(!message.content.startsWith(prefix)) return

const args = message.content.slice(prefix.length).trim().split(' ')
const command = args.shift().toLowerCase()

if(command === 'command1') {
        cmd.command1(message) //Command 1 and command 2 aren't commands just replace them with the command you want
    } else if(command === 'command2') {
        cmd.command2(message)
    }
})

client.login('YOUR_BOT_TOKEN')
```
