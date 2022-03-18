const express = require('express')
const asyncHandler = require('express-async-handler');
const { Song } = require('../../db/models');
const { User } = require('../../db/models')
const { multipleMulterUpload, singlePublicFileUpload } = require("../../awsS3")

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateUploadSong = [
    check('title')
        .exists({ checkFalsey: true })
        .withMessage('Please enter a Title.'),
    handleValidationErrors,
];



// POST '/SONGS'
router.post('/', multipleMulterUpload("files"), validateUploadSong, asyncHandler(async (req, res) => {

    //TODO: multiplemulterupload
    const { userId, albumId, title } = req.body;

    const imageUrl = await singlePublicFileUpload(req.files[0]);


    const url = await singlePublicFileUpload(req.files[1]);


    const song = await Song.create({ userId, albumId, url, title, imageUrl });


    return res.json(song);
}))



router.put("/:id", multipleMulterUpload("files"), asyncHandler(async (req, res) => {

    const { title, image, newSong } = req.body;

    const id = req.params.id

    let imageUrl;
    let url;

    if (image === undefined) {
        imageUrl = await singlePublicFileUpload(req.files[0]);

    } else {
        imageUrl = image
    }



    if (newSong === undefined && image !== undefined) {

        url = await singlePublicFileUpload(req.files[0]);
    } else if (newSong === undefined && image === undefined) {
        url = await singlePublicFileUpload(req.files[1]);
    } else {
        url = newSong
    }


    const song = await Song.updateSong({ id: +id, url, title, imageUrl, User });

    return res.json(song);

}))


//delete song

router.delete("/:id", asyncHandler(async (req, res) => {


    const { id } = req.params



    const idOfSong = +id

    const message = await Song.deleteSong({ idOfSong })

    return res.json({ id })

}))


router.get("/:id", asyncHandler(async (req, res) => {

    const { id } = req.params



    const idOfUser = +id



    const songs = await Song.getUsersSongs(idOfUser, User)


    return res.json(songs);

}))










module.exports = router;