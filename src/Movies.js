import React, { Component } from 'react'
import axios from 'axios';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            data: " ",
        };
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie?api_key=3583464c166eb3446babdeabbc188153&language=en-US&query=" + this.state.data,
            {}
        )
            .then((res) => {
                this.setState({ items: res.data.results })
                console.log(res, 'mydata');
            }).catch((err) => {
                console.log(err, "err");
            })
        };
    hanleChange = (e) => {
        this.setState({ data: e.target.value })
    }
    render() {
        const image = "https://image.tmdb.org/t/p/w1280";
        return (
            <div>
                <div className="search-box">
                    <img className='search-Box' src="search.png" />
                    <input type="text" onChange={this.hanleChange} onClick={this.handleSubmit} placeholder=" Search Movie..... " />
                </div>
                {this.state.items.map((item) => (
                    <div class="card">
                        <div class="container">
                            <div className='div'>
                                <img className='image' src={image + item.poster_path} alt="image" />
                                <div className='movie-info'>
                                    <h3 className='Title'>{item.title}  </h3>
                                    <h4 className="Range">{item.vote_average}</h4>
                                </div>
                                <div className='content'>
                                    <p>{item.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        )
    }
}

export default Movies;