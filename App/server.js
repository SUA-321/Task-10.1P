const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const sgMail = require("@sendgrid/mail");
const cors = require("cors")


const API_KEY = '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';
sgMail.setApiKey(process.env.API_KEY);

app.use(bodyParser.urlencoded({extended:true}));
const { urlencoded } = require("body-parser");
app.use(cors())
app.use(bodyParser.json())



app.get('/', (req, res) => {
    const user = {
        username:"Deakin",
        password:"123"
    }
    res.send(user)});

const testEmail = async (msg) => {
    try {
        await sgMail.send(msg);
        console.log("Message sent successfully");
    } catch (error) {
        console.error(error);
    }
};




app.post('/', (req, res) =>{
    const email = req.body.email;

    testEmail({
        to: email,
        from: "ubaid.a218@gmail.com",
        subject: "Subscribed.",
        text: "Thanks for Subscribing!",
    });
    console.log(data)
});

app.listen(8003, function (request, response){
    console.log("server is running on port 8003")
})
