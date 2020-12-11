import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import ItemTableWithPagination from '../../ItemsTableWithPagination/ItemTableWithPagination';
import { useHistory } from "react-router-dom";
function Serials() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
            .then((response) => {
                return response.json();
            })
            .catch(() => {
                setError(true)
            })
            .then((data) => {
                if (data) {
                    let checkedData = []
                    data.entries.map((item) => {
                        if (item.releaseYear >= 2010 && item.programType === 'series') {
                            checkedData.push(item)
                        }
                    })
                    setData(checkedData)
                    return
                }
                setError(true)

            });

    }, [])
    let history = useHistory();
    if (error) {
        history.push('/error')
    }
    return (
        <>
            { data.length > 0 ? <ItemTableWithPagination items={data} size={10} /> : <CircularProgress />}
        </>
    )
}

export default Serials
