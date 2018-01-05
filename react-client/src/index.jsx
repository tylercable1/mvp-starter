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
      qStr: ''
    }
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: 'http://127.0.0.1:3000/breweries', 
      method:'GET',
      contentType: 'application/json',
      data: 'o',
      success: (data) => {
        this.setState({
          breweries: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search() {
    $.ajax({
      url: 'http://127.0.0.1:3000/breweries', 
      method:'GET',
      contentType: 'application/json',
      data: this.state.qStr,
      success: (data) => {
        this.setState({
          breweries: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });    
  }

  render () {
    return (<div>
      <h1>Beer App</h1>
      <Search search={this.search} />
      <List breweries={this.state.breweries}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));