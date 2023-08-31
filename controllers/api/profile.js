import { Profile } from '../../models/Profile'
import { v2 as cloudinary } from 'cloudinary'

// find profiles ( attempt!! )
const index = async(req,res) => {
    try {
        const profile = await Profile.find({});
        res.json(profile)
    } catch (err) {
        res.status(500).json(err)
    }
}

// *** cloudinary attempt ***
// const addPhoto = async(req,res) => {
//     const imageFile = req.files.photo.path
//     const image = Profile.findById(req.params.id)
//     image = cloudinary.uploader.upload(imageFile, {})
//     try {
        
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

const addPhoto = async(req,res) => {
    try {
        const imageFile = req.files.photo.path // google search lol
        const profile = await Profile.findById(req.params.id)
        // no profile found - NO PROFILE
        if(!profile){
            return res.status(404).json({error : 'Profile not found'})
        }
        // cloudinary upload *attempt* - youtube tutorial
        const image = await cloudinary.uploader.upload(imageFile, { tags: `${req.user.email}` })
        profile.photo = image.url
        await profile.save();
        res.status(201).json(profile.photo)

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}


module.exports = {
    index,
    addPhoto
}