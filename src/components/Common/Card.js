import React from 'react'
import { LineGraph } from '../Chart'

function Card(props){
    const { width, height, ...other } = props;

    return(
        <div
            style= {{
                border: "0.5px solid #6663",
                borderRadius: "5px",
                boxShadow: "0px 0px 2px 1px gray",
                background: '#FFFFFF',
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                flexWrap: 'wrap',
                width: width,
                height: height,
                ...other
            }} 
        >
            <dib> Title </dib>
            <LineGraph></LineGraph>

        </div>
    )
    

}

export default Card;