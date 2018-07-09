const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
      return console.log("Unable to connect",err);
  }
  const db = client.db('TodoApp');


// db.collection('Todo').findOneAndUpdate({text:'Something to do'},{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log("unable to delete data");
// });
db.collection('Users').findOneAndUpdate({name:'Arijeet'},{
  $set:{
    name:'Anku'
  },
  $inc:{
    age:5
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
},(err)=>{
  console.log("unable to delete data");
});
});
