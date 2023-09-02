import { useState } from "react";

export default function CreateEntry(props) {
    const [photoData, setPhotoData] = useState({})
    const [entryData, setEntryData] = useState({
        caption: ''
    })

    // upload photo
    const uploadPhoto = (e) => {
        setPhotoData({
            photo: e.target.files[0]
        })
    }

    // new entries
    const handleChange = (e) => {
        setEntryData({
            ...entryData,
            [e.target.name] : e.target.value,
        })
    }

    // submit
    const handleSubmit = async(e) => {
        e.preventDefault()
        props.newEntry(entryData, photoData.photo)
    }

    return(
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <label htmlFor="photo-upload">
                    Upload Photo
                </label> 
                <input
                    type="file"
                    name="photo"
                    required
                    onChange={uploadPhoto}
                />
                <label>
                    Create New Journal Entry
                </label>
                <input
                    type="text"
                    autoComplete="off"
                    value={entryData.caption}
                    name="caption"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                >
                    Add New Entry
                </button>
            </form>
        </div>
    )
}