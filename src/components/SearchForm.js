import React,{Component } from 'react';

const API_KEY='4a49e47f';

export class SearchForm extends Component{

    state={
        inputMovie:''
    };

    _handleChange = (e) =>{
        this.setState({inputMovie: e.target.value});
    }

    _handleSubmit = (e) =>{
        e.preventDefault();
        const {inputMovie} = this.state;
        // alert(this.state.inputMovie);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res=>res.json())
        .then(results=>{
            const {Search =[], totalResults = "0"}= results;
            //si el valor de Search es undefined agregar [] vacio
            // const SearchResults = Search || [];
            console.log({Search,totalResults});
            this.props.onResults(Search);
        })
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                <div className="control">
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Movies to Search.."
                    onChange={this._handleChange}/>
                </div>
                <div className="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
            </div>
            </form>
        );
    }
}
