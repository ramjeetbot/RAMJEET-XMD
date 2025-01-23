const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *BABA RAMJEET*

> *RAMJEET XMD REPO:*
*|* *https://github.com/ramjeetbot/RAMJEET-XMD.git*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb4HINV7NoZz6r9A4a33*
*╰──────────────●●►*

> *RAMJEET-XMD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363391862867761@newsletter',
      newsletterName: "ʙᴀʙᴀ ʀᴀᴍᴊᴇᴇᴛ",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'RAMJEET XMD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/ramjeetbot/RAMJEET-XMD" ,
thumbnailUrl: "https://qu.ax/jUeMU.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
