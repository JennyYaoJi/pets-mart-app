const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const petRoutes = express.Router();
const PORT = 4000;

let Pet = require('./pet.model');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

mongoose.connect('mongodb://127.0.0.1:27017/pets', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})

petRoutes.route('/').get(function(req, res){
    Pet.find(function(err, pets) {
        if(err){
            console.log(err);
        } else {
            res.json(pets);
        }
    })
});

petRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Pet.findById(id, function(err, pet) {
        res.json(pet);
    })
});

petRoutes.route('/add').post(function(req, res) {
    let pet = new Pet(req.body);
    pet.save()
       .then(pet => {
           res.status(200).json({'pet': 'pet added successfully'});
       })
       .catch(err => {
           res.status(400).send('adding new pet failed');
       })
});

app.use('/pets', petRoutes);

app.listen(PORT, function() {
    console.log('Server is running on Port: ' + PORT);
})