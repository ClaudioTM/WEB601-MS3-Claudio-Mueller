import React from 'react'
import { Link } from 'react-router-dom';

function TrackCardItem(props){
    console.log(props.src);
    return(
        <>
            <li className="trackcards__item">
                <Link className="trackcards__item__link" to={props.path}>
                    <figure className="trackcards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Track Image"
                        className="trackcards__item__img"/>
                    </figure>
                    <div className="trackcards__item__info">
                        <h5 className="trackcards__item__text">{props.text}</h5>
                    
                    </div>
                </Link>
            </li>
            
        </>
    )
}

export default TrackCardItem;
