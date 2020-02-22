import React from 'react';

export default function render(props) {


        return (
            //  main div for the image, it gets the information
            //  from the parent props
            <div>
                <img src={props.posterUrl} alt={props.title} />
            </div>
        );

}