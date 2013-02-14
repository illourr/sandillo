


/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("Users");
  console.log(req.login);
};