var bcrypt   = require('bcrypt-nodejs');


    module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('users', {
        annotation_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },
{
        freezeTableName: true,
        instanceMethods: {
            // generateHash(password, cb) {
            //     return bcrypt.hash(password, bcrypt.genSaltSync(8), function(err, hash) {
            //         console.log(err, hash);
            //     });
            // },
            
        },
    timestamps: false
});

User.prototype.validPassword = function(passwordInput, cb) {
    bcrypt.compare(passwordInput, this.password, cb);
}

return User;
}
