// var assert = require('assert');
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1,2,3].indexOf(4), -1);
//         });
//     });
// });
const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe("Brolly Task API", function() {

    describe("Brolly policies API", function () {

        let url = "http://localhost:3000/policies";

        it('should return 403 and error message', function (done) {
            request.get(url, function (err, res, body){
                expect(res.statusCode).to.equal(403);
                expect(res.body).to.equal('You have to be logged in to see this route!');
                done();
            });
        });

        it('should return 200 and policies array', function (done) {
            request.get({url, headers: {"token": "someToken"}}, function (err, res, body){
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.equal(JSON.stringify(['travel',   'motor',   'buildings   and   contents',   'mobile',   'home',   'income']));
                done();
            });
        });

    });

    describe("Brolly login API", function () {

        let url = "http://localhost:3000/login";

        it('should return 200 and token', function (done) {
            let postData = {
                username: 'username',
                password: 'password'
            };

            let options = {
                method: 'post',
                body: postData,
                json: true,
                url: url
            };
            request(options, function (err, res, body){
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.deep.equal({ token: new Buffer('username').toString('base64') });
                done();
            });
        });

        it('should return 403 and error message: missing both username and password', function (done) {
            let postData = {
                username: '',
                password: ''
            };

            let options = {
                method: 'post',
                body: postData,
                json: true,
                url: url
            };
            request(options, function (err, res, body){
                expect(res.statusCode).to.equal(400);
                expect(res.body).to.equal('You provided unvalid data to login!');
                done();
            });
        });

        it('should return 403 and error message: missing username', function (done) {
            let postData = {
                username: '',
                password: 'password'
            };

            let options = {
                method: 'post',
                body: postData,
                json: true,
                url: url
            };
            request(options, function (err, res, body){
                expect(res.statusCode).to.equal(400);
                expect(res.body).to.equal('You provided unvalid data to login!');
                done();
            });
        });

        it('should return 403 and error message: missing password', function (done) {
            let postData = {
                username: 'username',
                password: ''
            };

            let options = {
                method: 'post',
                body: postData,
                json: true,
                url: url
            };
            request(options, function (err, res, body){
                expect(res.statusCode).to.equal(400);
                expect(res.body).to.equal('You provided unvalid data to login!');
                done();
            });
        });

    });
});

