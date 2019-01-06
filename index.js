const express = require('express');
const app = express();
const db = require('./models')
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(__dirname + '/static'));

app.get('/',(req,res)=>{
     db.boat.findAll({}).then(boats=>{
          res.render('index',{boats:boats})
     })
})

app.get('/new', (req,res)=>{
     res.render('new');
})

app.post('/boats',(req,res)=>{
     let newBoat = req.body;
     if(newBoat.private) newBoat.private=true;
     else newBoat.private = false;
     db.boat.create(newBoat).then(data=>{
          res.redirect('/')
     })
})
 
app.listen(PORT);