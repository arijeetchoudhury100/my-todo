const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo.js');

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
});

describe('POST /todos',()=>{
  it('should create a new todo',(done)=>{
    var text = 'test todo text';

    request(app)
    .post('/todos')
    .send({
      text
    })
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.lenth).toBe(1);
        expect(todos[0].text).toBe(text);
      }).catch((e)=>done(e));
    });
  });
});