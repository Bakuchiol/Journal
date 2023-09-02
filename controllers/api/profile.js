import { v2 as cloudinary } from "cloudinary";
const Profile = require("../../models/Profile");

// find profiles ( attempt!! )
// const index = async(req,res) => {
//     try {
//         const profile = await Profile.find({});
//         res.json(profile)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

// const addPhoto = async(req,res) => {
//     try {
//         const imageFile = req.files.photo.path // google search lol
//         const profile = await Profile.findById(req.params.id)
//         // no profile found - NO PROFILE
//         if(!profile){
//             return res.status(404).json({error : 'Profile not found'})
//         }
//         // cloudinary upload *attempt* - youtube tutorial
//         const image = await cloudinary.uploader.upload(imageFile, { tags: `${req.user.email}` })
//         profile.photo = image.url
//         await profile.save();
//         res.status(201).json(profile.photo)

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err)
//     }
// }

// module.exports = {
//     index,
//     addPhoto
// }

function index(req, res) {
  Profile.find({})
    .then((profiles) => res.json(profiles))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path;
  Profile.findById(req.params.id).then((profile) => {
    cloudinary.uploader
      .upload(imageFile, { tags: `${req.user.email}` })
      .then((image) => {
        profile.photo = image.url;
        profile.save().then((profile) => {
          res.status(201).json(profile.photo);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
}

export {
    index,
    addPhoto,
}