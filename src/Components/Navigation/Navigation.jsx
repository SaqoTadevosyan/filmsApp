import React from 'react'
import './Navigation.scss'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
function Navigation() {
    return (
        <div className='Navigation'>
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

export default Navigation
