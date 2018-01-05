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
    $.ajax({
      url: 'http://127.0.0.1:3000/breweries', 
      method:'GET',
      contentType: 'application/json',
      data: 'o',
      success: (data) => {
        renderBreweries(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  renderBreweries(data) {
    this.setState({
      breweries:data
    })
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