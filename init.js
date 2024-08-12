const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful")
}).catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

  let allChats=[
    {
    from:"neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at: new Date()
},
{
    from:"rakehs",
    to:"ramesh",
    msg:"hii,",
    created_at: new Date()
},

{
    from:"shyam",
    to:"patel",
    msg:"how are you!",
    created_at: new Date()
},
{
    from:"manjeet",
    to:"aman",
    msg:"hello bhai",
    created_at: new Date()
},
{
    from:"prachi",
    to:"pankaj",
    msg:"what are you doing ",
    created_at: new Date()
},
{
    from:"kamal",
    to:"chandu",
    msg:"hello sir",
    created_at: new Date()
},
{
    from:"khalid",
    to:"danish",
    msg:"hello bro!",
    created_at: new Date()
},


];
Chat.insertMany(allChats);
