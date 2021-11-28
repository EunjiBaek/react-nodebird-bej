const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends Model {
    static init(sequelize) {
        return super.init({
            // id가 기본적으로 들어있다.
            content: {
                type: DataTypes.TEXT,
                allowNullL: false,
            },
            // UserId: {}
            // PostId: {}
        }, {
            modelName: 'Comment',
            tableName: 'comments',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 이모티콘 저장
            sequelize,
        });
    }
    static associate(db) {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    }
};