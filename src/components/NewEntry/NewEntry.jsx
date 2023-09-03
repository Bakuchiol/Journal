import CreateEntry from "../CreateEntry/CreateEntry";
import CreateJournal from "../CreateJournal/CreateJournal";

export default function NewEntry(props) {
    return (
        <>
            <p>create new post here</p>
            <CreateEntry newEntry={props.newEntry}/>
            <CreateJournal />
        </>
    )
}

// TO DO
// create new entry component here