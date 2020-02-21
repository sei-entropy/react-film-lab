import React from 'react'

function Fave(props) {


    const handleFaveClick = (e) => {
        console.log("handling Fave click!", props.isFave);
        e.stopPropagation()

        props.onFaveToggle()

    }

    const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'
    return (
        <div
            className={`film-row-fave ${isFave}`} >

            <p className="material-icons " onClick={handleFaveClick}>{isFave}</p>
        </div>
    )
}
export default Fave;