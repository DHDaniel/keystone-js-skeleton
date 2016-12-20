
// Default first user created

var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Daniel', last: 'Hernández' },
        email: 'daniel.hernandez@sunnysidecode.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);

};
