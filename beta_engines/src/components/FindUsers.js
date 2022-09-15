import React, { useEffect, useState } from 'react';
import UserApi from '../apis/UserApi';


const FindUsers = props => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserApi.getUsers(setUsers)
    }, [])
    return (
        <div>

            <h2 className='display-4'>Find Users</h2>

            <table className='table' style={{ color: "white", width: "70%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        users.map(u =>
                            <tr>
                                <td>{u.first_name}</td>
                                <td>{u.last_name}</td>
                                <td>{u.username}</td>
                            </tr>)
                    }
                </tbody>

            </table>

        </div>
    );
};


export default FindUsers;