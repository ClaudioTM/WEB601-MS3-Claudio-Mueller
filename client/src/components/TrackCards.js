import React from 'react'
import TrackCardItem from './TrackCardItem';
import './TrackCards.css';
import image11 from '../images/img-11.jpg'
import image12 from '../images/img-12.jpg'
import image13 from '../images/img-13.jpg'

const cardData = [
   {src:image11 ,
   text:'Explore the lush beauty of the Kahurangi National Park as you make your way to Karamea on the West Coast, with this multi day tramp known as a Great Walk of New Zealand.' ,
   label:'Heaphy Track' ,
  path:'/tracks' },

   {src:image12 ,
   text:'The Tableland is a fascinating alpine plateau of rolling tussock and karst features, passing beautiful beech forest and unusual rock shelters, it is located west of Mt Arthur, in Kahurangi National Park.' ,
   label:'Tableland Circuit' ,
   path:'/tracks' },

   {src:image13 ,
   text:'Lake Sylvester is situated in an alpine basin, above the Cobb Reservoir in the Kahurangi National Park. It’s a good option as an easy overnight tramp.' ,
   label:'Lake Sylvester' ,
   path:'/tracks' }

]



function TrackCards(){
  return (
    <div className='trackcards'>
      <h1>Check out these epic tracks</h1>
      <div className="trackcards__container">
        <div className="trackcards__wrapper">
          <ul className="trackcards__items">
            {/* <TrackCardItem 
            /> */}
              {cardData.map((data) =>
                <TrackCardItem 
                src={data.src}
                 text={data.text} 
                 label={data.label}
                 path={data.path}
              />)}
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TrackCards;