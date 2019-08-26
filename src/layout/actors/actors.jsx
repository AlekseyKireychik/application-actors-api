import React, { Component } from 'react';

import Title from '../../components/title/title';
import PeopleList from '../../components/peoplelist/peoplelist';
import Input from '../../components/input/input';
import './actors.css';

const BASE_PATH = 'https://swapi.co/api';
const SEARCH_PATH = '/people/';
const SEARCH_PARAM = 'query=';

class Actors extends Component {

  state = {
    searchQuery: '',
    result: {},
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.fetchData(searchQuery);
  }

  fetchData = (searchQuery) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)    
      
      .then(res => res.json())
      .then(result => this.setName(result))
      .catch(error => error);
      console.log(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`);
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value
    })
  }

  getSearch = ({ key }) => {
    if(key === 'Enter') {
      const { searchQuery } = this.state;
      this.fetchData(searchQuery);
    }
  }

  setName = result => {
    this.setState({ result });
  }

  render() {
    const { searchQuery, result } = this.state;
    const { hits = [] } = result;

    return (
      <div className="wrapper">
        <Title title="People List" />
        <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} />
        <ul className="peopleList">
          {hits.map(({ name }) =>
            <PeopleList
              name={name}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Actors;