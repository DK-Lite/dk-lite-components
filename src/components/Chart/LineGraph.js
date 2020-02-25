import React, { useRef, useEffect, useState } from 'react'
import Chart from 'chart.js'

function LineGraph(props) {
    //const { data, labels } = props;

    const chartContainer = useRef();

    const [chartInstance, setChartInstance] = useState(null);
    const paramter = {
        type: "bubble",
        data: {
            labels: ["Jan", "Feb", "March"],
            datasets: [
                {
                    label: "Sales",
                    data: [86, 67, 91],
                },
            ]
        },
        options: {

        }
    }
    useEffect(()=>{
        if(chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(chartContainer.current, paramter);
            setChartInstance(newChartInstance);
        }
    },[chartContainer]);
    
    return (
        <div>
            <canvas ref={chartContainer} />
        </div>
    )

}

export default LineGraph;