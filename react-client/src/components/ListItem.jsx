import React from 'react';
import Description from './description.jsx'

class ListItem extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  isHidden: true
  	}
  	this.showDescription = this.showDescription.bind(this)
  }

  showDescription() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  

  render() {
  	return (
  <div>
   
      <li onClick={this.showDescription} >
      	{ this.props.brewery.name }
        {!this.state.isHidden && <div><a href={this.props.brewery.website}>{this.props.brewery.website}</a><br></br><p>{this.props.brewery.description}</p></div>}
      </li>
    
  </div>
  	)
  }
}

export default ListItem;