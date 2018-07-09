const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');
var id = '5b42f95b3520a20be6bc649a';
var uid = '5b4063eea8e2f91cda548150';

//remove all documents
Todo.remove({}).then((result)=>{
  console.log(result);
});

//find the first document that matches the condition and remove it
Todo.findOneAndRemove({_id:'5b42f95b3520a20be6bc649a'}).then((todo)=>{
  console.log(todo);
})

//remove document by id
Todo.findByIdAndRemove('5b42f95b3520a20be6bc649a').then((todo)=>{
  console.log(todo);
});
