import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      breweries: [],
    }
    this.renderBreweries = this.renderBreweries.bind(this)
  }

  componentDidMount() {
    // use get request here. check database first. Then, ping api.
    // $.ajax({
    //   url: '/breweries', 
    //   method:'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify({q:'e'}),
    //   success: (data) => {
    //     this.renderBreweries(data);
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
        $.ajax({
      url: '/breweries', 
      method:'GET',
      contentType: 'application/json',
      success: (data) => {
        this.renderBreweries(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  renderBreweries(data) {
    if(Array.isArray(data)) {
      this.setState({
        breweries:data
      })
    } else { 
    this.setState({
      breweries:data.data
    })
    }
  }

  render () {
    return (<div>
      <h1>Beer App</h1>
      <Search search={this.search} renderBreweries={this.renderBreweries} />
      <List breweries={this.state.breweries}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));