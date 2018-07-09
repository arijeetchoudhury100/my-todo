const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');
var id = '5b42f95b3520a20be6bc649a';
var uid = '5b4063eea8e2f91cda548150';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({   //return an array of objects
//   _id:id
// }).then((todos)=>{
//   console.log('todos:',todos);
// });
//
// Todo.findOne({  //returns the first object matching the conditon
//   _id:id
// }).then((todo)=>{
//   console.log('Todo:',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo by id:',todo);
// }).catch((e)=>console.log(e));

User.findById(uid).then((user)=>{
  if(!user){
    return console.log('user not found');
  }
  console.log('User by id:',JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));
