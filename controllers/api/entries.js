const Entry = require("../../models/Entry")

// get all entries
const allEntries = async(req, res) => {
    try {
        const getAllEntries = await Entry.find({})
        res.status(200).json(getAllEntries)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// get by id
const oneEntry = async(req,res) => {
    try {
        const id = req.params.id
        const getOneEntry = await Entry.findOne({ "_id": id })
        res.status(200).json(getOneEntry)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// create new entry
const newEntry = async(req, res) => {
    try {
        const entry = await Entry.create(req.body)
        res.json(entry)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// edit one
const editEntry = async(req, res) => {
    try {
        const editOne = await Entry.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json(editOne)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}


const deleteEntry = async(req,res) => {
    try {
        const deleteOne = await Entry.findByIdAndDelete(req.body.id)
        res.json(deleteOne)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}

module.exports = {
    allEntries,
    newEntry,
    oneEntry,
    editEntry,
    deleteEntry
}

// // create entry
// const create = async(req,res) => {
//     try {
//         req.body.author = req.user.profile
//         const entry = await Entry.create(req.body)
//         const profile = await Profile.findByIdAndUpdate(
//             req.user.profile,
//             {new : true }
//             )
//         entry.author = profile
//         res.status(201).json(entry) // 201 = created
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err)
//     }
// }

// // add image to entry
// const addPhoto = async (req, res) => {
//   try {
//     const imageFile = req.files.photo.path;
//     const profile = await Profile.findById(req.params.id);
//     const postObjId = profile.posts[profile.posts.length - 1].toString();

//     const image = await cloudinary.uploader.upload(imageFile, {
//       tags: `${req.user.email}`,
//     });
//     const post = await Entry.findById(postObjId);

//     post.photo = image.url;
//     post.save();
//     post.author = profile;
//     res.status(201).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

