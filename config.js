const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_08_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc5LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1UDJBVkxtaE50cXpxbVNyNnpWRTNrd2xOUVEyWmt3Mm52Z2lFWE1zRUFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpZ09OQlNBa1JoV2xHcndvaVlrbl93XCIsXG4gIFwicGhvbmVJZFwiOiBcImUzZjk0ODhkLWY3NzQtNGFjZi1iMjQxLWEzNTliMzVhYWFmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDgxLFxuICAgICAgNTYsXG4gICAgICAxMzEsXG4gICAgICA0LFxuICAgICAgMjMsXG4gICAgICAyNDQsXG4gICAgICA4NixcbiAgICAgIDEwNCxcbiAgICAgIDE1MixcbiAgICAgIDEwOCxcbiAgICAgIDc0LFxuICAgICAgMTk2LFxuICAgICAgMjA5LFxuICAgICAgMjM3LFxuICAgICAgODcsXG4gICAgICAxNCxcbiAgICAgIDgwLFxuICAgICAgOTcsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDQzLFxuICAgICAgOTgsXG4gICAgICA1LFxuICAgICAgMyxcbiAgICAgIDY5LFxuICAgICAgMTM4LFxuICAgICAgMTI3LFxuICAgICAgMjIsXG4gICAgICAyNTQsXG4gICAgICAxODMsXG4gICAgICAyMDEsXG4gICAgICAxMDMsXG4gICAgICA4NixcbiAgICAgIDEyNSxcbiAgICAgIDIzNCxcbiAgICAgIDIzNyxcbiAgICAgIDIzNixcbiAgICAgIDI0LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1UdU1zQ0VMalRpY0lHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QU9TWjAwTkE1V2I4K3pQWlNyOHBsTnFiRFhuZERqR2J1TmgxVmVWR0FzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjIwVjFtd0MzQVV0Q3paZG1sSnY4bFVZOXlFUUo4L0FlNzh4RUJFZEl4WFRwZVArSElPYzA3RGJZQjVnR01YWWpjRVlWczlKWnpTOGczTUROeC9nUUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9MbFI1NGFmTmlMcVR0cVlYZEtaYmRML3drakhPcmNBejQ0UG5paHMxSG1VSVVlWFphZ0d6bTN5WFp4cGRPVUZJN2t4V05SVDJOWmU0UGxGWWNjdWpRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NDAzNjEzNDIwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzM1MDQzOTc4NDg1ODk6MTRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDM2MTM0MjA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5MTgyOTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGMrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxYk03c2dQWStmOWFWb2NlbVQvRnM5bCszZGJRSHc0OE52OXpTRXVLb0gwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ5MTgyODcxMDM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGMwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDVmSE1YQzlaRjNUSitTY2lDSUZhVXlQbVpBVk9uSWhteTdnYmtJV0xqcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODI2MjIwMDU4MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhjMi5qc29uIjogIntcImtleURhdGFcIjpcIllhZStQTUZUNVFPaEVwUTdVZzVHYzJQd0pFdnVjeDlwWm1mQXJzY1pQUmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDgyNjMyNTkxMjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1NVFIZmQ0aGxRTjl2NUR0UGU5ckpJMFAvcENJbjFlWmtkNWNmVjFZYTRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg4MjQzODA4NDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyZUw5V3hVeGhrOWp6bWk3K0dxNnA5b2EzL3crTDRXZithLy9PYzJFUXNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg4MjQ0NDkyOTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJERHJNK3dtV2xFME9YbGc5eTY1Q2hCdW1qNlRZTmh3eXFRNVM4ZVFaclJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGMENuSkFYTjh1bU1iVlVTa3k3TG8zc250OG1rMDBoV1hjeHBNNTNzUGdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ5MTgyODMxNTQzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBd0FBSGMxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUitUejM1MS9yQUdLNWo5MWd0VzhhSjVtZE9Mb3NWM0M1NFVaTDBQenpxZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDgyNjIyNjc0NjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUF3QUFIYzMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6ZGlGRE5Vem8rblBQZ1g5Q1V1WkFoMHJ5ZDYyU2UrMEN4QXMxNjhNTGRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwxMl19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjYzMzE3ODc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBd0FBSGM1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiczhjWEJHb0loTjcvSW45YmZ1UmtrSjlEQ29ZaXZjUjJOdy9IdTRDT005az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMTJdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODgyNDQyNTYxOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQXdBQUhjNy5qc29uIjogIntcImtleURhdGFcIjpcIlhRVWR2TENFRkdNUDByR3M4TXJZbm9TcE5xV3AyZUNPaTBJdWJ3N2Q3MmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg4MjQ2Mjc3MjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
