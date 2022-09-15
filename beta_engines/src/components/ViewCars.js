import React, { useEffect, useState } from 'react';
import CarApi from '../apis/CarApi';


const ViewCars = props => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarApi.getCars(setCars)
    }, [])


    return (
        <div>

            <h2 className='display-4'>Available Cars for Sale</h2>

            <table className='table' style={{ color: "white", width: "70%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Vehicle Type</th>
                        <th>Vehicle Year</th>
                        <th>Color</th>
                        <th>Mileage</th>
                        <th>Price</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        cars.map((c, i) =>
                            <tr key={i}>
                                <td>{c.make}</td>
                                <td>{c.model}</td>
                                <td>{c.vehicle_type}</td>
                                <td>{c.vehicle_year}</td>
                                <td>{c.color}</td>
                                <td>{c.mileage}</td>
                                <td>{c.price}</td>
                                <td>
                                <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>

            </table>

        </div>
    );

};





export default ViewCars;