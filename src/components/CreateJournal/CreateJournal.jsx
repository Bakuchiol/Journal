// import { useState } from "react"

export default function CreateJournal(props) {

    // const [journal, setJournal] = useState=({})

    return (
        <div>
            <form autoComplete="off">
                {/*  */}
                <label>
                    What are three things you are grateful for today?
                </label>
                <input
                type="text"
                name="prompt_1"
                required
                />
                {/*  */}
                {/*  */}
                <label>
                    What are three things you are grateful for today?
                </label>
                <input
                type="text"
                name="prompt_2"
                required
                />
                {/*  */}
                {/*  */}
                <label>
                    What are three things you are grateful for today?
                </label>
                <input
                type="text"
                name="prompt_3"
                required
                />
                {/*  */}
                {/*  */}
                <label>
                    What are three things you are grateful for today?
                </label>
                <input
                type="text"
                name="prompt_4"
                required
                />
                {/*  */}
                {/*  */}
                <label>
                    What are three things you are grateful for today?
                </label>
                <input
                type="text"
                name="prompt_5"
                required
                />
                {/*  */}
            </form>
        </div>
    )
}