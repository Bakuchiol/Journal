import CreateEntry from "../CreateEntry/CreateEntry";

export default function NewEntry(props) {
    return (
        <>
            <p>create new post here</p>
            <CreateEntry newEntry={props.newEntry}/>
        </>
    )
}

// TO DO
// create new entry component here