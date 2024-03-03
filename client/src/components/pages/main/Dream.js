import React from 'react'
import { Ddata } from './Data/DreamData.js'
const Dream = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: "10%" }}>
            <div style={{ background: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)', textAlign: 'center', color: 'white', padding: "30px 0px 50px 0px" }}>
                <h1>Dream Numbers</h1>
                <h1 style={{ fontWeight: "lighter", fontSize: "30px" }}>(Date: {formattedDate})</h1>
            </div>

            <div style={{ overflowX: 'scroll', padding: "5px 5px", width:"100%"}}>
                <div className='grid_container1' >
                    <div className="item">#</div>
                    <div className="item">Dream</div>
                    <div className="item">Numbers</div>
                    <div className="item">House</div>
                    <div className="item">Ending</div>
                </div>
                {
                    Ddata.map((item) => {
                        return (
                            <>
                                <div className='grid_items1'>
                                    <div className="grid_item">{item.id}</div>
                                    <div className="grid_item">{item.Dream}</div>
                                    <div className="grid_item">{item.Numbers.join(',')}</div>
                                    <div className="grid_item">{item.House.join(',')}</div>
                                    <div className="grid_item">{item.Ending.join(',')}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Dream
