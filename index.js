const epxress = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = epxress();
app.use(cors());
app.use(bodyParser.json());

const user = ["rahim","karim","jamal","kamal"]


app.get('/', (req, res) => {
    const fruits = {
        product: 'banana',
        price: 100
    }
    res.send(fruits)
  });

app.get('/fruits/banana',(req, res) => {
    const banana = {
        qauntity: 1000,
        price: 100000,
        test: 'onek moja'
    }
    res.send(banana);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = user[id];
    res.send({id, name});
})

//Post
app.post('/adduser', (req, res) =>{
    //save to database
    const user = req.body;
    user.id = 4;
    res.send(user);
})

app.listen(3000, () => console.log('listening to port 3000'))