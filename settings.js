const fs = require('fs')
const chalk = require('chalk')

//Api Wesite\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6283897390164','6285391576039']
global.premium = ['6285781151132']
global.ownernomer = '6283897390164','6285391576039'
global.ownername = 'Y/Glospot'
global.botname = 'GlospotBot'
global.footer = 'LinuxUi'
global.ig = 'https://saweria.co/YUSUP909'
global.region = 'Indonesia,Isekai'
global.sc = 'https://github.com/Yusup909'
global.myweb = 'https://www.youtube.com/c/YUSUP909'
global.packname = 'LinuxUi'
global.author = 'Y/Glospot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '🚢'
global.mess = {
    success: 'Selesai Tod ✓',
    admin: 'Only Admin Broo!',
    botAdmin: 'Bot nya jadiin admin dlu gblk!',
    owner: 'Khusus owner deck!',
    group: 'Hanya bisa di gunakan di grup!',
    private: 'Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Sedang di proses...',
    error: 'Eror!?, mungkin apykey nya sudah habjs🤔!',
    endLimit: 'Limit Lu habis bro, Beli lagi atau gk main rpg, kalo gk ngerti lu bisa nunggu reset 24jam tod',
}
    global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/djt.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
