import React, { useState, useEffect } from 'react';
import * as apiNotify from "../../api/notify";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";

const  Notice = (props) => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const result = await apiNotify.getList();
                setNotices(result.data.body.notices);
            } catch (error) {
            }
        }
        
        fetchData();
    },[]);

    return ( 
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Time</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                notices.map((item, index) => <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.created_at || 0}</td>
                    <td><Link to={`/notify/detail?id=${item.id}`}>Detail</Link></td>
                    </tr>
                )

            }
        </tbody>
    </Table>
    );

}

export default Notice;