const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema =  new mongoose.Schema({
  name : String,
  url : String,
  html_url : String,
  id : Number,
  repoName : String

  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);
let save = (data) => {
   var repo = new Repo ({name: data.owner.login , id:data.owner.id ,url: data.owner.url ,html_url:data.owner.html_url ,repoName : data.name })
   repo.save(function(err,save){
     if (err){
       console.log("there is an error sorry ")
     }else{
       console.log("data svaed " )
     }
   })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}
module.exports.repo = Repo
module.exports.save = save;