// var mongoose = require("mongoose");
// mongoose.connect('mongodb://nodejitsu:c98203a873395ed0842b1ba1f3e8a89f@linus.mongohq.com:10072/nodejitsudb5887837510')

// var db = mongoose.connection;
// var speak;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.on('open', function callback (){
//   var kittySchema = mongoose.Schema({
//     name: String
//   }); 

//   // NOTE: methods must be added to the schema before compiling it with mongoose.model()
//   kittySchema.methods.speak = function() {
//     var greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";      
//     return greeting;
//   };

//   var Kitten = mongoose.model('Kitten', kittySchema);
//   var fluffy = new Kitten({ name: "fluffy" });
//   speak = fluffy.speak();
// });  
/*
 * GET home page.
 */




exports.index = function(req, res){
  var userObj = req.user ? req.user : "Anonymous";
  
  res.render('index',  {title: "Sandillo", user: userObj } );
};
