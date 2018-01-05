import React from 'react';
import $ from 'jquery';
class Search extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  qStr: ''
  	}
  	this.search = this.search.bind(this)
  }

  onBreweryLookup() {
  	this.props.search()
  }
  
  search() {
    $.ajax({
      url: '/breweries', 
      method:'POST',
      contentType: 'application/json',
      data: JSON.stringify({q: this.state.qStr}),
      success: (data) => {
        this.props.renderBreweries(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });    

  }  

  render() {
	return (
	<div>
	  <input onChange={(e) => {this.setState({qStr: e.target.value})}}>
	    	
	  </input>
	  <button onClick={this.search}>
	    Lookup Brewery	
	  </button>
    </div> 	
		)
  }
}


export default Search;
