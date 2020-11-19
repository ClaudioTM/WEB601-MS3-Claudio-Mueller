import React from 'react';
import '../../src/App.css';
import TrackCards from '../components/TrackCards';
import Comments from '../components/Comments'

export default function Tracks() {
    return(
        <>
            <h1 className='tracks'>TRACKS</h1>
            <TrackCards />
            <Comments></Comments>
        </>
    );
}