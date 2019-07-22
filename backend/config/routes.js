var pets = require('../controllers/pets.js');


module.exports = function(app){
    app.post('/create', (req,res)=>{
        // console.log("got to routes");
        pets.create(req,res);
    });
    app.get('/pets', (req, res) =>{
        pets.all_pets(req,res);
    })
    app.get('/onepet/:id', (req, res) =>{
        pets.one_pet(req,res);
    })
    app.put('/edit/:id', (req, res)=>{
        pets.edit(req,res);
    })
    app.delete('/delete/:id', (req, res)=>{
        pets.delete(req,res);
    })
}