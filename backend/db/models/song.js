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




    return newSong.dataValues
  }



  Song.updateSong = async function ({ id, url, title, imageUrl }) {

    const song = await Song.findByPk(id)

    const updatedSong = await song.update({ url, title, imageUrl })

    const finalUpdatedSong = await updatedSong.save()


    return finalUpdatedSong.dataValues
  }


  Song.deleteSong = async function ({ idOfSong }) {


    const song = await Song.findByPk(idOfSong)


    const deleteSong = await song.destroy()


    return { message: "Success" }

  }



  Song.getUsersSongs = async function ({ idOfUser }) {

    return Song.findAll({
      where: {
        idOfUser,
      }
    })
  }




  return Song;
};