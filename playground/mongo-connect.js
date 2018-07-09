const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    console.log("Unable to connect to mongodb server",err);
    return;
  }
  const db = client.db('TodoApp');
  // db.collection('Todo').insertOne({
  //   text:"Something to do",
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     console.log('unable to connect to mongodb server',err);
  //     return;
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  db.collection('Users').insertOne({
    name:"Arijeet",
    age:21,
    location:"Jorhat"
  },(err,result)=>{
    if(err){
      return console.log("unable to insert user"),err;
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })
  client.close();
});
