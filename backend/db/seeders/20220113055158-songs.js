'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Songs', [
      {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Cudi+Zone.mp3",
        title: "Cudi Zone",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/kid-cudi-man-on-the-moon-album-cover-art-2.jpeg"
      },
      {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kid+Cudi+-+Just+What+I+Am+feat+King+Chip+(indicud).mp3",
        title: "Just What I am ",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/e6cf8fb555c7d3a3add9bbbabb654891.1000x1000x1.jpg"
      },
      {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Mr.+Rager.mp3",
        title: "Mr. Rager",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/mrRagerCover.jpg"
      },
      {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/The+Prayer.mp3",
        title: "The Prayer",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/thePrayerCover.jpeg"
      },
      {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kid+Cudi+ft.+Phoebe+Bridgers+-+Lovin%E2%80%99+Me+(Official+Visualizer).mp3",
        title: "Lovin' Me",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/kidcudiCover.jpeg"
      },
      {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Reborn.mp3",
        title: "Reborn",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kanye-West-And-Kid-Cudi-Kids-See-Ghosts-album-cover-820-1000x600.jpeg"
      },
      {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Stronger.mp3",
        title: "Stronger",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/graduation.jpeg"
      },
      {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kanye+West+-+Welcome+To+Heartbreak+ft.+Kid+Cudi.mp3",
        title: "Welcome to Heartbreak",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/808s.jpg"
      },
      {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Waves.mp3",
        title: "Waves",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/TLOP.jpeg"
      },
      {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kanye+West+-+Moon+(Audio).mp3",
        title: "Moon",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Donda-Album-Cover-960x500.jpeg"
      },
      {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Runaway.mp3",
        title: "Runaway",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/27045_4_classic-album-kanye-west-my-beautiful-dark-twisted-fantasy_ban.jpeg"
      },
      {
        userId: 5,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Violent+Crimes.mp3",
        title: "Violent Crimes",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kanye-West-Ye.png"
      },
      {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Travis+Scott+-+90210+ft.+Kacy+Hill+(Audio).mp3",
        title: "90210",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/travis-scott.jpeg"
      },
      {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/sdp+interlude.mp3",
        title: "sdp interlude",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/birdsinthetrap.jpg"
      },
      {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Travis+Scott+-+MAFIA+(Official+Audio).mp3",
        title: "MAFIA",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Travis-Scott-Escape-Plan-1636116865.jpeg"
      },
      {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/way+back.mp3",
        title: "way back",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/trviscover.jpg"
      },
      {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/THE+SCOTTS%2C+Travis+Scott%2C+Kid+Cudi+-+THE+SCOTTS+(Audio).mp3",
        title: "THE SCOTTS",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/the+scottscover.jpeg"
      },
      {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/JACKBOYS%2C+Travis+Scott+-+OUT+WEST+(Audio)+ft.+Young+Thug.mp3",
        title: "OUT WEST",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/jackboys.png"
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Songs', null, {});

  }
};
