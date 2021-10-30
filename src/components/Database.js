// var data = "mongodb+srv://Rinki:Rinki1434@cluster0.5wkal.mongodb.net/Picture_Quiz_Game?retryWrites=true&w=majority";
// const mongoose = require ("mongoose");

// mongoose.connect(data, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log(`Successfully Established Connection with MongoDB`);
// }).catch((err) => {
//     console.log(`Failed to Establish Connection with MongoDB with Error: ${err.message}`);
// });

// const Schema = new mongoose.Schema({
//     name: {
//         type: String
//     }, date: {
//         type: Date
//     }
// });

// const userModel = new mongoose.model('users', Schema);
// const a = {
//     name: "saer",
//     date: Date.now()
// }
// // const post = userModel.create(a)
// const s = userModel.find({name: "saer"});
// console.log(s);
// // module.exports = userModel;