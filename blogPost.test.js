var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../backend/server");
let should = chai.should();
chai.use(chaiHttp);


describe ("CRUD OPERATIONS", function(){

    var Posts = [{
        "titre": "hello world",
        "contenu": "WorldIsBest",
    }, {
        
        "titre": "hello world2",
        "contenu": "WorldIsBestlllldld", 

    }]
    it("Should add posts in DB", (done) => {
        for (post in Posts) {
            chai.request(server)
                .post("/api/save")
                .send(Posts[Post])
                .end((err, res) => {
                    res.should.have.status(200);
                    console.log("Response Body:", res.body);
                    
                })
        }
        done()
    })  
})
it ("Should Fecth all the Posts", (done)=>{
    chai.request(server)
        .get("/api/")
        .end((err, result)=>{
            result.should.have.status(200);
            console.log ("Got",result.body.data.length, " docs")  
            done()
    })
})
