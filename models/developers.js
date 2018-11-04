
module.exports = function (sequelize, DataTypes) {
    const developers = sequelize.define(
        'developers',
        {
            userId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            gitHubHandle: DataTypes.STRING,
            imageURL: DataTypes.STRING

        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return developers;
}
