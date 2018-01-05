import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    Here are { props.breweries.length } breweries.
    { props.breweries.map(brewery => <ListItem brewery={brewery}/>)}
  </div>
)

export default List;



// const List = ({breweries}) => {
// 	console.log(breweries);
//   return (
// 	  <div>
// 	    <h4> List Component </h4>
// 	    Here are { props.breweries.length } breweries.
// 	    { props.breweries.map(brewery => <ListItem brewery={brewery}/>)}
// 	  </div>
//   )
// }