const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
  email: { type: String, required: true },
  password:{type:String ,required:true},
  nom: { type: String , required: true},
  prenom: { type: String , required: true},
  age: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Etudiant = mongoose.model('Etudiant', etudiantSchema);

module.exports = Etudiant;