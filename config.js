const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01YcFNaUGc0c25GQTQxdnY0UXhQZC9sSHJzTk9yYk5CK2NaMVZjZUduUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHNBcllkZHZnZmwzL3FRcHJTRlViOXFIRHZOQ0tQQUY1SEVyTE55eXJFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RU9MMitsQXZwMEgvdHk2alRFNGprbytaTXpoQ1ZwNjA1MFJqaVd0TVdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUUFOaGFjN3ZYdGkyVDhwM3lobFNpc3VBY2t6b0psVmpQQTZ3bTN6Z1NFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDWklzQTNQS3lOSFA4SzN3TlRjSTl3Qm9oTUZ3K29BN3dncExseTVlbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRER3lEbVJST3dxbVh4Ylk5YWJJK2kxOWNsNkpEMVRabkRNbUpod09CUWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZZV2ozYlNNd0VxRDMzTkFhaitFODJlWitrOFdlb2NiTXBLWlVFN1BHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnJXNWR4M2RKTnllMFJTd2pxZ3pPNHZoTVZQczJsWVFjMkxKN1VUanVEMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg3K2gvN0hiMERpUDRPVTlTdE84ZGdPVVlMUFJEYTRuNzZ4anIyYi9ZSWNoakYwbmFlTWREc29JNnp3ZHZWMnpNTkhkcVZsQ3h2eG1GVmpnbVQyMkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJZZE1kTjdtM04xc1RDZVI0ZVMvMk45QVpSYXUveHkzQ1FSSlNyMHplWmY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODEwMTY4NjYyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0REE1RUQ3QjBGMDFBRkQ1NTlEREUwRDNGNkEwNDg4OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDE4MTAxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI1TFhCQzdNWSIsIm1lIjp7ImlkIjoiOTE4MTAxNjg2NjI1OjE4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTI4MDc2NzYzODc1NTQ6MThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcUR2TFVIRUt2cnFzVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDQ2kyRXcyZWVFNUxEQldEWmVBRVFlUGI1THpYbFBKMTZGZnFRK1NEZUdzPSIsImFjY291bnRTaWduYXR1cmUiOiJDLzhnU1M2VVFNM1F3MDVrNUt5cm9TRE45VXdGMnhTdHVPRkl2bVdHTTYvUVpYUUZ0ZkFCNmhORmFXWWRZcTE2Y3RuOGRwTXZRcTZHSW1UR3VNZjNBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWtodlgyTEJZUnM0QThnVDdhUnhFVkpZb3VlMHcwbFpGaXVVS1FndEM4YVAvSVhOcGsvK3Y1TEg5VEpFcEJaWGxZK2J4ZDVkdG5Ld1JxNU1FcDZSRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTgxMDE2ODY2MjU6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWdvdGhNTm5uaE9Td3dWZzJYZ0JFSGoyK1M4MTVUeWRlaFg2a1BrZzNociJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDE4MDk2LCJsYXN0UHJvcEhhc2giOiJDNGZKTiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSXVKIn0=",
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
