const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection is successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "tony",
    to: "peter",
    msg: "bring me some fruits",
    created_at: new Date()
    },
    {
    from: "rohit",
    to: "mohit",
    msg: "teach me JS callbacks",
    created_at: new Date()
    },
    {
    from: "Hulk",
    to: "Thor",
    msg: "Let us save the world",
    created_at: new Date()
    },
    {
    from: "spiderman",
    to: "MJ",
    msg: "I love you",
    created_at: new Date()
    },
]

Chat.insertMany(allChats);
