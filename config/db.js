const crypto = require('crypto');
crypto.randomBytes(256).toString('hex');

module.exports = {
    url : 'mongodb://localhost:27017/' + this.db,
    db : 'blog',
    secret : crypto
}