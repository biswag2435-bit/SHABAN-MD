const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xuYXVtQ1RBNStMdElSM21hOEFTYmtYTEg0S3phenRsam5LOVFibTlHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTNVZ2pqZTNLa3lxUFhiN2VqWnFkV0tKdUNTUkJoYkpOYmN0MWlGbmlRST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSExpRGlVUFRJS1Erd0Fabm9WbmN2VnU1bzh6My9ldzhPcXVrd1A0QTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJidG9weXUrRTNSMjVySnZGZ1VQQ0tyTVBGV0xEVDVEYlZaenRmOWs2T21zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPUHpwd0sxcnQ2YnBhampXWmdZdWNDY01VV2lKU20wTFdaVXhqd0grRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpDMnNLMmZnTkJRUTVsK3BYMlFpNVh2TU5xQnRsRURLbW1uMlV4dVlsQXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdLOWtEU1VkcFlYSXFZVXl4NE1aV1Y5TmtaOVp4SzJvOXA4OGM1ZVRrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUc1SWI2YVB2bXozU2RNMmpYZjQvL01GTWdISnU1UDF6djFLVk5LZmtsZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt5aUMvb0t5aW4yZ283ZEFMa3lGdnlTY1czUlZUZTdNUHcvSnpWbzgwUFpDUmpVNTB4d3lrQ3JMUWQ4VEk4cSs1RmZXTmw0Wjl5M2poMUJtK2JTQmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiIydDBEVlNPY1JJaStHd01xaG1hUmFjbmt1WGlVR1p5d3BOd3VPOEpTM3NVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODEwMTY4NjYyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMTFDNUFFOTQ3MDY5NUM3QjBFQjA1QTdBRUJBN0U4OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MjI2MTQ5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTgxMDE2ODY2MjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUZCODQyN0VGMzE1MDVGMEY1RjAwM0Q2OTZBQ0U5MzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjIyNjE0OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNVBUUkJaWEIiLCJtZSI6eyJpZCI6IjkxODEwMTY4NjYyNTozMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyODA3Njc2Mzg3NTU0OjMwQGxpZCIsIm5hbWUiOiJUw5hNX/Cfkpfwn5GR8J+SuCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFdEdkxVSEVON0V0OFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0NpMkV3MmVlRTVMREJXRFplQUVRZVBiNUx6WGxQSjE2RmZxUStTRGVHcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaWgzNkFZSjUvMTYzK2pmMmx5R0pIdGlVMXJ4clArTDBNcU45WmNDYlJEdzd4QlowWitGYVBjSEdiUGpkMjJYQ2M0WHliUFJKSEIzcXdEQVo2R1hDQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImJpL1lrVXR1TStxbVNPVHhUSDJaY3dmVXJTOXQ4WnJNc0VFanVObC91bVNyaDIxV0ZPRXEra1RyZ2FoakZIQ1V4V3ZUU3J3RmYrdm9DMHYwcTVmSGl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4MTAxNjg2NjI1OjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFnb3RoTU5ubmhPU3d3VmcyWGdCRUhqMitTODE1VHlkZWhYNmtQa2czaHIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjIyNjE0NiwibGFzdFByb3BIYXNoIjoiQzRmSk4iLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVXUyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://wa.me/918101686625",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "918101686625",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Tom",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "918101686625",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
