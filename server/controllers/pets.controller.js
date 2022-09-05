const Pet = require('../models/pets.model');
// find all Pets
module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allDaPets => res.json({ pets: allDaPets }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// find one Pet                  remove id
module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params })
        .then(oneSinglePet => res.json({ pet: oneSinglePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// create a Pet
module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// update a Pet
module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// delete a Pet
module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}