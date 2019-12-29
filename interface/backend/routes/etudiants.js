const router = require('express').Router();
let Etudiant = require('../models/etudiant.model');

router.route('/').get((req, res) => {
  Etudiant.find()
    .then(etudiants => res.json(etudiants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email= req.body.email;
  const password=req.body.password;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const age = Number(req.body.age);
  const date = Date.parse(req.body.date);

  const newEtudiant = new Etudiant({
   email,
    password,
    nom,
    prenom,
    age,
    date,
  });

  newEtudiant.save()
  .then(() => res.json('Etudiant ajouté!'))
  .catch(err => res.status(400).json('Erreur: ' + err));
});

router.route('/:id').get((req, res) => {
  Etudiant.findById(req.params.id)
    .then(Etudiant  => res.json(Etudiant ))
    .catch(err => res.status(400).json('Erreur: ' + err));
});

router.route('/:id').delete((req, res) => {
  Etudiant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Etudiant supprimé!'))
    .catch(err => res.status(400).json('Erreur: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Etudiant.findById(req.params.id)
    .then(Etudiant => {
      Etudiant.email = req.body.email;
      Etudiant.password=req.body.password;
      Etudiant.nom = req.body.nom;
      Etudiant.prenom = req.body.prenom;
      Etudiant.age = Number(req.body.age);
      Etudiant.date = Date.parse(req.body.date);

      Etudiant.save()
        .then(() => res.json('La modification a été éffectuée!'))
        .catch(err => res.status(400).json('Erreur: ' + err));
    })
    .catch(err => res.status(400).json('Erreur: ' + err));
});

module.exports = router;