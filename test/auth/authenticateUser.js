var expect = require('chai').expect;
var authenticateUserMW = require('../../middleware/auth/authenticateUser');

describe('preventRelogin middleware ', function () {

    describe('should call next when', function () {
        it('no email given', function (done) {
            var req = {
                body: {
                    email: undefined
                }
            };

            var shouldNotCall = false;
            var fakeUserModel = {
                findOne: function (some, cb) {
                    shouldNotCall = true;
                    cb();
                }
            };

            authenticateUserMW({userModel: fakeUserModel})(req, {}, function () {
                expect(shouldNotCall).to.eql(false);
                done();
            });
        });

        it('no password given', function (done) {
            var req = {
                body: {
                    password: undefined
                }
            };

            var shouldNotCall = false;
            var fakeUserModel = {
                findOne: function (some, cb) {
                    shouldNotCall = true;
                    cb();
                }
            };

            authenticateUserMW({userModel: fakeUserModel})(req, {}, function () {
                expect(shouldNotCall).to.eql(false);
                done();
            });
        });
    });

    describe('should set error if', function () {
        it('user is not present in database', function (done) {
            var req = {
                body: {
                    email: 'a@b.hu',
                    password: 'test'
                }
            };

            var res = {
                tpl: {}
            };

            var fakeUserModel = {
                findOne: function (some, cb) {
                    return cb(undefined, null);
                }
            };

            authenticateUserMW({userModel: fakeUserModel})(req, res, function () {
                expect(res.tpl.error).to.eql('Not a registered email address');
                done();
            });
        });

        it('there was an error accessing the database', function (done) {
            var req = {
                body: {
                    email: 'a@b.hu',
                    password: 'test'
                }
            };

            var res = {
                tpl: {}
            };

            var fakeUserModel = {
                findOne: function (some, cb) {
                    return cb("Database error", undefined);
                }
            };

            authenticateUserMW({userModel: fakeUserModel})(req, res, function () {
                expect(res.tpl.error).to.eql('Not a registered email address');
                done();
            });
        });
    });

    //Bcrypt hash code of test is $2a$04$dr3ig0WYDHP/HICXxwN7tuGpEfoCR5LZrkpMUQx8zjivCJamkFznK

    describe('should not allow user to login and set error if', function () {
        it('wrong password is provided', function (done) {
            var req = {
                body: {
                    email: 'a@b.hu',
                    password: 'testwrong'
                }
            };

            var res = {
                tpl: {}
            };

            var fakeUserModel = {
                findOne: function (some, cb) {
                    return cb(undefined, {_id: '1234', email: 'a@b.hu', password: '$2a$04$dr3ig0WYDHP/HICXxwN7tuGpEfoCR5LZrkpMUQx8zjivCJamkFznK'});
                }
            };

            authenticateUserMW({userModel: fakeUserModel})(req, res, function () {
                expect(res.tpl.error).to.eql('Wrong password');
                done();
            });
        });
    });

    describe('should allow user to login and redirect to /editprofile', function () {
        it('correct password is provided', function (done) {
            var req = {
                body: {
                    email: 'a@b.hu',
                    password: 'test'
                },
                session: {}
            };

            var res = {
                tpl: {},
                redirect: function (to) {
                    expect(res.tpl.error).to.eql(undefined);
                    expect(req.session.user).to.eql('1234');
                    expect(to).to.eql('/editprofile');
                    done();
                }
            };

            var fakeUserModel = {
                findOne: function (some, cb) {
                    return cb(undefined, {_id: '1234', email: 'a@b.hu', password: '$2a$04$dr3ig0WYDHP/HICXxwN7tuGpEfoCR5LZrkpMUQx8zjivCJamkFznK'});
                }
            };

            authenticateUserMW({userModel: fakeUserModel})(req, res, function () {
                expect(true).to.eql(false);
                done();
            });
        });
    });
});