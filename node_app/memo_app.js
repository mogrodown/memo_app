
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'memo';
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const app = express();

app.use(express.static('web'));
app.use(bodyParser.json());

app.post('/api/memo/', (req, res) => {
  console.log(req.body);
  // 例えばUI側JavaScriptでは、UIの構造を切り離したい、という
  // 要求から、コールバックの代わりにPromiseが用意された。
  // ここではmongoライブラリを使っているが、そこまでの要件がないため、
  // コールバックシステムを使用する。
  MongoClient.connect(url, option, (err, client) => {
    assert.equal(null, err);
    let obj = req.body;
    client.db('memo').collection('memo').insertOne(obj, (err, result) => {
      client.close();
      res.send(result);
    });
  });
});

app.get('/api/memo/:id', (req, res) => {
  console.log(req.params.id);
});

app.get('/api/memo/', (req, res) => {
  console.log('category = ', req.query.category);
  MongoClient.connect(url, option, (err, client) => {
    assert.equal(null, err);
    condition = {}
    if (req.query.category != 'none') {
      condition = {category: req.query.category}
    }
    if (req.query.sort_order == 'asc') {
      client.db('memo').collection('memo').find(condition).sort({date:1}).toArray((err, result) => {client.close(); res.send(result);});
    } else {
      client.db('memo').collection('memo').find(condition).sort({date:-1}).toArray((err, result) => {client.close(); res.send(result);});
    }
    // client.db('memo').collection('memo').find().sort({date:1}).toArray((err, result) => {client.close(); res.send(result);});
    //client.db('memo').collection('memo').find({category:'javascript'}).sort({date:-1}).toArray((err, result) => {client.close(); res.send(result);});
  });
});

app.delete('/api/memo/:id', (req, res) => {
  console.log(req.params.id);
  MongoClient.connect(url, option, (err, client) => {
    assert.equal(null, err);
    console.log('condition = ', {id:req.params.id});
    client.db('memo').collection('memo').deleteOne({_id: new mongo.ObjectId(req.params.id)}, (err, result) => {
      client.close();
      if (err) {
        res.send(JSON.stringify({result: 'ng'}));
      } else {
        res.send(JSON.stringify({result: 'ok'}));
      }
    });
  });
});

app.listen(3009, () => console.log('listening on port 3009'));
