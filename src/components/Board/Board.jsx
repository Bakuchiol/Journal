

export default function Board({photos}) {
    return (
        <div>
            <h1>Vision board/ mood board</h1>
            <div>
                {photos.map(({ photo, _id }) => {
                    <div key={_id}>
                        <img src={`/uploads/${photo}`} alt="pic" />
                    </div>
                })}
            </div>
        </div>
    )
}