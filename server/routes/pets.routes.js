const PetController = require('../controllers/pets.controller');
 
module.exports = app => {
    app.get('/api/pet', PetController.findAllPets);
    app.get('/api/pet/:_id', PetController.findOneSinglePet);
    app.post('/api/pet/new', PetController.createNewPet);
    app.put('/api/pet/update/:_id', PetController.updateExistingPet);    
    app.delete('/api/pet/delete/:_id', PetController.deleteAnExistingPet);
}
