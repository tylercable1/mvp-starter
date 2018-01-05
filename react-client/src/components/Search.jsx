import React from 'react';

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
      url: 'http://127.0.0.1:3000/breweries', 
      method:'GET',
      contentType: 'application/json',
      data: this.state.qStr,
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
