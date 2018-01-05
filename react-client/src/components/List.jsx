import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.breweries.length } breweries.
    { props.breweries.map(brewery => <ListItem brewery={brewery}/>)}
  </div>
)

export default List;