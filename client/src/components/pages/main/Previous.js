import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Previous = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const [FData, setFData] = useState([]); // Corrected variable name to FData

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/getPrevious');
                setFData(response.data); // Update FData with response data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)', textAlign: 'center', color: 'white', padding: "30px 0px 50px 0px" }}>
                <h1>Previous Numbers</h1>
                <h1 style={{ fontWeight: "lighter", fontSize: "30px" }}>(Date: {formattedDate})</h1>
            </div>
            <div className='grid_container1'>
                <div className="item">#</div>
                <div className="item">Date</div>
                <div className="item">Timing</div>
                <div className="item">FR</div>
                <div className="item">SR</div>
            </div>
            {FData.reverse().map((item, i) => { // Corrected variable name to FData
                return (
                    <div className='grid_items1' key={item.id}>
                        <div className="grid_item">{i + 1}</div>
                        <div className="grid_item">{item.Date}</div>
                        <div className="grid_item">{item.Timing}</div>
                        <div className="grid_item">{item.FR}</div>
                        <div className="grid_item">{item.SR}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Previous;
