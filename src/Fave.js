import React from 'react';

export default function Fave(props){

    const handleClick = (e) =>{
        // Stop the event of displaying details of a film on the favorites icon
        e.stopPropagation()
        console.log('Handling Fave click!')

        // Add this line. You'll call the function passed through props
        props.onFaveToggle()
          };

          // if isFave state of current film is true => film is favorited display remove icon
        // Otherwise display add film to favorites icon
        const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return(
            <div className={"film-row-fave " +isFave} onClick={handleClick}>
                <p className="material-icons">{isFave}</p>
            </div>
        )
}