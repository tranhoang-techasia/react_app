import React, { useState, useEffect } from 'react';
import * as apiNotify from "../../api/notify";
import useQuery from "../../hooks/useQuery";

const  NoticeDetail = (props) => {
    const [notice, setNotice] = useState({});
    let query = useQuery();
    const id = query.get("id");
    useEffect(() => {
        const fetchData = async() => {
            try {
                const result = await apiNotify.detail(id);
                if(result.data.body) setNotice(result.data.body);
            } catch (error) {
                console.error(error);
            }
        }
        
        fetchData();
    },[id]);


    return (
        <div> {notice.title } </div>
    );

}

export default NoticeDetail;