const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
      return console.log("Unable to connect",err);
  }
  const db = client.db('TodoApp');

// db.collection('Todo').deleteOne({_id:new ObjectID('5b3e1578ac1defb9b1703ec3')}).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log("unable to delete data");
// });
// db.collection('Todo').deleteMany({text:'do homework'}).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log("unable to delete data");
// });
db.collection('Todo').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
  console.log(result);
},(err)=>{
  console.log("unable to delete data");
});
});
