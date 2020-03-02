import React from 'react'
import styled from 'styled-components'
import { LineGraph } from '../Chart'


const StyledCard = styled.div`
    border: 0.5px solid #6663;
    border-radius: 7px;
    &:hover {
        box-shadow: 2px 2px 3px 1px gray;
    }
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`


function Card(props){
    const { width, height, ...other } = props;

    return(
        <StyledCard
            style= {{
                width: width,
                height: height,
                ...other
            }} 
        >
            <dib> Title </dib>
            
        </StyledCard>
    )
    

}

export default Card;