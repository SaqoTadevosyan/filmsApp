import React, { useEffect, useState } from 'react'
import ItemCard from '../../ItemCard'
import { Pagination } from '@material-ui/lab';
import './Movies.scss'
import ItemTableWithPagination from '../../ItemsTableWithPagination/ItemTableWithPagination';
function Movies() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data) {
                    let checkedData = []
                    data.entries.map((item) => {
                        if (item.releaseYear >= 2010 && item.programType === 'movie'){
                            checkedData.push(item)
                        }
                    })
                    setData(checkedData)
                }
                console.log(data);
            });
    }, [])
    return (
        <div >
         {data.length>0 ?   <ItemTableWithPagination items={data} size={10}/> :null}
        </div>
    )
}

export default Movies
