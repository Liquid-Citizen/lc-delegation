var mongoose = require('mongoose');

var Schema = mongoose.schema;

var DelegationTokenScheme = new Schema({
    a_personID : {type: Number, required : true},
    a_delegationToken : {type: String, required: true},
    a_proposition : {type: Number, required: true}
});

module.exports = mongoose.model('delegationTokenModel', DelegationTokenScheme);