import React, { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab';
import ItemCard from '../ItemCard'
import './ItemTableWithPagination.scss'
function ItemTableWithPagination({ items, size = 3 }) {
    const [pages, setPages] = useState([])
    const [selectedPage, setSelectedPage] = useState(0)
    useEffect(() => {
        let pages = [];
        for (let i = 0; i < Math.ceil(items.length / size); i++) {
            pages[i] = items.slice((i * size), (i * size) + size);
        }
        setPages(pages)
        return () => {

        }
    }, [])
    return (
        <div>
            <div className='Items-Table'>
                {pages.length > 0 ? pages[selectedPage].map((item, index) => {
                    return (
                        <div className='Item' key={index}>
                            <ItemCard title={item.title} img={item.images['Poster Art'].url} description={item.description} />
                        </div>)
                }) : null}
            </div>
            <div className='Pagenation'>
            <Pagination count={pages.length} onChange={(e, p) => setSelectedPage(p - 1)} />
            </div>
        </div>
    )
}

export default ItemTableWithPagination
