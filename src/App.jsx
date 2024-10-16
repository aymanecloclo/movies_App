import React, { Component } from 'react';
import ShowFilmsCard from './components/ShowFilmsCard';
import ListCategories from './components/ListCategories';

const API_KEY = '3a04bd935b4c76613fdcb308995e1a2f'; 
const GENRES_API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

class App extends Component {
  state = { 
    genres: []
    /* [
    {
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
  ] */
    , movies: [] };
  
  fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    this.setState({ movies: data.results });
  }

   handleClick=(id)=>{
       
   }
  fetchGenres = async () => {
    const response = await fetch(GENRES_API_URL);
    const data = await response.json();
    this.setState({ genres: data.genres });
  }

  componentDidMount() {
    this.fetchMovies();
    this.fetchGenres();
  }

  render() { 
    return (
      <>
        <div className="flex gap-0">
       
          <ListCategories genres={this.state.genres}  />
          <ShowFilmsCard data={this.state.movies} />
        </div>
      </>
    );
  }
}

export default App; 
