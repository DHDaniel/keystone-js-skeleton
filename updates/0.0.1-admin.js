
// Default first user created

var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'John', last: 'Doe' },
        email: 'johndoe@example.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);

};
