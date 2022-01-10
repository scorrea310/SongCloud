const express = require('express')
const asyncHandler = require('express-async-handler');
const { Song } = require('../../db/models');

const router = express.Router();


// POST '/SONGS'
router.post('/', asyncHandler(async (req, res) => {

    //TODO: multiplemulterupload

    const { userId, albumId, url, title, imageUrl } = req.body;
    const song = await Song.create({ userId, albumId, url, title, imageUrl });


    return res.json({
        song,
    });
}))












module.exports = router;