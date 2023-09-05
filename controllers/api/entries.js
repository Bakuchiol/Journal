


// import { v2 as cloudinary } from "cloudinary";
// const Entry = require("../../models/Entry")
// const Profile = require("../../models/Profile")


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

// export {
//     addPhoto,
//     create
// }
