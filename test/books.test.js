process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Book = require('../models/book');

//requiring dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

//chai-http middleware
chai.use(chaiHttp);

/* Before each test we empty the database
describe('Books',()=>{
    beforeEach(done=>{
        Book.remove({},err=>{
            done();
        });
    });
});
*/

// Testing /GET route
describe('/GET book',()=>{
    it('it should get all books',done=>{
        chai.request(app)
            .get('/books')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
