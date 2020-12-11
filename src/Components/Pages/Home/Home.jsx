import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
    return (
        <div className='Header'>
            <Link to='/movies'>
                <Button variant="contained" color="primary">
                    Movies
            </Button>
            </Link>
            <Link to='/serials'>
                <Button variant="contained" color="secondary">
                    Serials
            </Button>
            </Link>
        </div>
    )
}

export default Home
