var expect = require('chai').expect;
var preventReloginMW = require('../../middleware/auth/preventRelogin');


describe('preventRelogin middleware ', function () {

    describe('should call next when', function () {
        it('user is not present in session', function (done) {
            var req = {
                session: {
                    user: undefined
                }
            };

            preventReloginMW()(req, {}, function () {
                expect(true).to.eql(true);
                done();
            });
        });
    });
    describe('should redirect to /editprofile when', function () {
        it('user is present in session', function (done) {
            var req = {
                session: {
                    user: 'ABCD1234'
                }
            };

            var res = {
                redirect: function (to) {
                    expect(to).to.eql('/editprofile');
                    done();
                }
            };

            preventReloginMW()(req, res, function () {
                expect(true).to.eql(false);
                done();done();
            });
        });
    });
});