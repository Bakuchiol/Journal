// const express = require('express');
// const router = express.Router();
// const multer = require('../../controllers/api/multer')
// const Board = require('../../models/Board')

// router.get('/api/get', async(req, res) => {
//     const allPhotos = await Board.find().sort({createdAt: "descending"})
//     res.send(allPhotos)
// })

// router.post("/api/save", multer.single("photo"), async(req,res) => {
//     try{
//         const photo = req.file.filename;
//         console.log(photo); // sanity check

//         const data = await Board.create({ photo })
//         console.log("upload success??") //sanity check!!
//         console.log("data: ",data)
//         res.send(data)
//     }catch(err){
//         console.error(err)
//         res.status(500).send("Error occured while uploading.")
//     }
// })

// module.exports = router