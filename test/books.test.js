process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
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
    it('it should get all books', done=>{
        chai.request(app)
            .get('/books')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});


//testing /POST route
describe('/POST book',()=>{
    it("it shouldn't post a book without fileds",done=>{
        let Book = {
            title : 'Sol Ayagım',
            auhtor: 'Christy Brown',
            category: 'Psikoloji',
            language: 'Türkçe'
        } 

        chai.request(app)
            .post('/books/add')
            .send(Book)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
                done();
            });
    });
});