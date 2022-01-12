'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    albumId: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: "userId" });
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
  };



  Song.create = async function ({ userId, albumId, url, title, imageUrl }) {

    const song = await Song.build({
      userId: +userId,
      albumId: null,
      url,
      title,
      imageUrl
    })



    const newSong = await song.save()


    console.log("++++++++++", newSong.dataValues)

    return newSong.dataValues
  }



  Song.updateSong = async function ({ id, url, title, imageUrl }) {

    const song = await Song.findByPk(id)

    const updatedSong = await song.update({ url, title, imageUrl })

    const finalUpdatedSong = await updatedSong.save()


    return finalUpdatedSong.dataValues
  }



  return Song;
};