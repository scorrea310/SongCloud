const express = require('express')
const asyncHandler = require('express-async-handler');
const { Song } = require('../../db/models');
const { multipleMulterUpload, singlePublicFileUpload } = require("../../awsS3")

const router = express.Router();


// POST '/SONGS'
router.post('/', multipleMulterUpload("files"), asyncHandler(async (req, res) => {

    //TODO: multiplemulterupload
    const { userId, albumId, title } = req.body;

    // console.log("======", req.files[0])

    const imageUrl = await singlePublicFileUpload(req.files[0]);


    const url = await singlePublicFileUpload(req.files[1]);


    const song = await Song.create({ userId, albumId, url, title, imageUrl });

    console.log("oooooooooooooooooo", song)


    return res.json(song);
}))












module.exports = router;