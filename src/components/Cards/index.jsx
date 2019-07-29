import React from 'react';
import './card-list.styles.css';
import Card from '../Card';

const Cardlist = (props) =>{
    return(
        <div className='card-list row'>
            {props.monster.map(monster =>
          <Card key={props.monster.id} monster={monster}/>)}
        </div>
    )
}
export default Cardlist;