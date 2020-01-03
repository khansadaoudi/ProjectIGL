var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../backend/server");
let should = chai.should();
chai.use(chaiHttp);


describe ("CRUD OPERATIONS", function(){

    var Etudiants = [{
        "email": "kkdk@djjj",
        "password": "WorldIsBest",
        "nom": "Larry",
        "prenom": "macclomi",
        "age": 16,
        "date": "2016/12/28"

    }, {
        "email": "kkdk@djjolfj",
        "password": "WorldIsBest2",
        "nom": "Larryne",
        "prenom": "macclomine",
        "age": 16,
        "date": "2016/12/15"
        

    }]
    it("Should add etudiants in DB", (done) => {
        for (Etudiant in Etudiants) {
            chai.request(server)
                .post("/etudiants/add")
                .send(Etudiants[Etudiant])
                .end((err, res) => {
                    res.should.have.status(200);
                    console.log("Response Body:", res.body);
                    
                })
        }
        done()
    })  
})
it ("Should Fecth all the Etudiants", (done)=>{
    chai.request(server)
        .get("/etudiants/")
        .end((err, result)=>{
            result.should.have.status(200);
            console.log ("Got",result.body.data.length, " docs")  
            done()
    })
})
it ("Should Fetch Particular etudiant only", (done)=>{
    chai.request(server)
        .get("/etudiants/"+Etudiants[1].isbn)
        .end((err, result)=>{                    
            result.should.have.status(200)
            console.log("Fetched Particlar etudiant using /GET/Etudiants/:ETUDIANTID ::::", result.body)
            done()
        })
})
it ("should check data updated in DB", (done)=>{
    chai.request(server)
        .get("/etudiants/"+Etudiants[1].isbn)
        .end((err, result)=>{                    
            result.should.have.status(200)                
            result.body.data.age.should.eq("15")
            console.log("Fetched Particlar Book using /GET/Etudiants/:ETUDIANTID ::::", result.body)    
            done()
        })
})
it("Should Delete Particular Etudiant", (done)=>{
    chai.request(server)
        .delete("/etudiants/"+Etudiants[1].isbn)
        .end((err, result)=>{                    
            result.should.have.status(200)                
            console.log("Deleted Particlar Book using /GET/BOOKS/:BOOKID ::::", result.body)    
            done()
        })
})