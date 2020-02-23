import React from 'react';


function Table(props){
    const {title, colums, datas , ...other} = props;

    const header_line = colums.map( object => (
            <th >{object.name}</th>
    ))
    const data_lines = datas.map( data => 
        <tr>
            {colums.map( object =>  (<td> {data[object.tag]}</td>)) }
        </tr>
    )

    return (
        <table>
            <tr>
            {header_line}
            </tr>
            {data_lines}
        </table>
    )
}

export default Table;