import React from 'react';
import styled from 'styled-components'


// 표는 table 태그로 만듭니다.
// 행은 tr 태그로 만듭니다.
// 열의 제목이 들어가는 셀은 th 태그로 만듭니다.
// 내용이 들어가는 셀은 td 태그로 만듭니다.
// 각 열의 의미에 따라 thead, tbody, tfoot 태그로 구분지을 수도 있습니다.
// 가로로 이웃한 셀을 합칠 때에는 colspan 속성을 사용합니다.
// 세로로 이웃한 셀을 합칠 때에는 rowspan 속성을 사용합니다.
// 표 제목은 caption 태그로 만듭니다.


const customDiv = styled.div`
    width: 100%;
`
const styledTable = styled.table`

    width: 100px;
    
`
const Tr = styled.tr`
    color : #666;
`
const Td = styled.td`

`
const Th = styled.th`
    border: 0.5px solid;
    border-radius: 3px;
    background: #5459FF; 
    color: white;
    font-family: Nanum Gothic, sans-serif; 
    
`

function Table(props){
    const {title, colums, datas , ...other} = props;

    const header_line = colums.map( object => (
            <Th >{object.name}</Th>
    ))
    const data_lines = datas.map( data => 
        <Tr>
            {colums.map( object =>  (<Td> {data[object.tag]}</Td>)) }
        </Tr>
    )

    return (
        <customDiv> 
            <styledTable>
                <Tr>
                    {header_line}
                </Tr>
                {data_lines}
            </styledTable>
        </customDiv>
        
    )
}

export default Table;