var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
app.use(express.static('public'));
var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "mkomix@gmail.com",
pass: "Manolocx"
}
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
	res.sendfile('index.html');
});
app.get('/send',function(req,res){
	var mailOptions={
	to : req.query.to,
	subject : req.query.subject,
	text : req.query.text
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
	if(error){
	console.log(error);
	res.end("error");
	}else{
	console.log("Message sent: " + response.message);
	res.end("sent");
}
});
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});