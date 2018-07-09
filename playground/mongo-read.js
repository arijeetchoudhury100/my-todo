const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
      return console.log("Unable to connect",err);
  }
  const db = client.db('TodoApp');
  // db.collection('Todo').find().toArray().then((docs)=>{
  //   console.log('Todos:');
  //   console.log(docs);
  // },(err)=>{
  //   console.log("unable to fetch data");
  // });
//   db.collection('Todo').find({completed:true}).toArray().then((docs)=>{
//     console.log('Todos:');
//     console.log(docs);
//   },(err)=>{
//     console.log("unable to fetch data");
//   });
// });
db.collection('Todo').find({_id:new ObjectID('5b3e1578ac1defb9b1703ec3')}).toArray().then((docs)=>{
  console.log('Todos:');
  console.log(docs);
},(err)=>{
  console.log("unable to fetch data");
});
});
