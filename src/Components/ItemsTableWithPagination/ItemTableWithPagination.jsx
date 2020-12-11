import React, { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab';
import ItemCard from '../ItemCard'
import './ItemTableWithPagination.scss'
function ItemTableWithPagination({ items, size = 3 }) {
    const [pages, setPages] = useState([])
    const [selectedPage, setSelectedPage] = useState(0)
    useEffect(() => {
        let sortedItems = items
        sortedItems.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        })
        let pages = [];
        for (let i = 0; i < Math.ceil(sortedItems.length / size); i++) {
            pages[i] = sortedItems.slice((i * size), (i * size) + size);
        }
        setPages(pages)
        return () => {

        }
    }, [])
    const changePage = (e, p) => {
        setSelectedPage(p - 1)
        window.scrollTo(0, 0);
    }
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
                <Pagination count={pages.length} onChange={changePage} />
            </div>
        </div>
    )
}

export default ItemTableWithPagination
