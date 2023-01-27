const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
var mails = JSON.parse(fs.readFileSync('./lib/mails.json'));

try {
  const server = new SMTPServer({
    onData(stream, session, callback) {
      parser(stream, {}, (err, parsed) => {
        if(mails[parsed.to.text] != undefined) {
          try {
	var recentlyMsg = mails[parsed.to.text][mails[parsed.to.text].length - 1]["text"]
} catch (error) {
	
}
if(!(recentlyMsg == undefined)){
  if(recentlyMsg.includes(parsed.text)) return;
}

          if(getMail(parsed) == 'success'){
            console.log("success!");
          }
          else if(getMail(parsed) == "fail"){
            console.log("error!!");
          }
        }
        stream.on("end", callback)
      })
      
    },

    disabledCommands: ['AUTH']
  })
  
  server.listen(2525, "0.0.0.0")
}catch(error) {
  console.log(error)
}

function getMail(parsed){
  try {
      const form = {
        from : parsed.from.text,
        subject : parsed.subject,
        date : parsed.date,
        text : parsed.html
      }
      mails[parsed.to.text].push(form);
      fs.writeFileSync('./lib/mails.json', JSON.stringify(mails, null, 2))
      return 'success'
      
  } 
  catch (error) {
    return 'fail'
  }
}

app.use('/', express.static('src'))
var path = require("path");
const mainPage = (fs.readFileSync("./src/index.html")).toString()
const HTML = require("./lib/HTML")

app.use('/', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.send(mainPage)
});

app.get('/:mailName', (req, res) => {
    
  let { mailName } = req.params;
  var email = mailName + "@kkubul.kro.kr";

  if(mails[email] == undefined){
    mails[email] = [];
    fs.writeFileSync('./lib/mails.json', JSON.stringify(mails, null, 2))
  }
  res.send(HTML.HTML(mails[email]))
});


app.listen(PORT, () => {
  console.log(`server is listening at localhost:${PORT}`);
});