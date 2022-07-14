import { useEffect, useState } from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";


const Search = () => {
    const [movies,setMovies] = useState([]);
    const api_img="https://image.tmdb.org/t/p/w500";
    const selectedMovie=useSelector(state=>state.movie.movies.movie)

    const movie_name="the lead";
    useEffect(()=>{
        console.log("USE EFFECT");
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${selectedMovie}&page=1`)
  .then(response => response.json())
  .then(json =>{setMovies(json)})
  

    },[])
  
    return (
        <div className="m-2">    
        {
            
           movies && movies.results && movies.results.length>0 ? movies.results.map(movie => {
            
            return (
                <div className="media">
            <Card className="media">
                <CardBody >
                    
                    <CardTitle  tag="h5">
                    <img className="img-container"
                    width="100%"
                     src={api_img+movie.backdrop_path}
                     alt="Card image cap"></img>
                    </CardTitle>
                    
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    RATING : {movie.vote_average}
                    </CardSubtitle>
                    <CardText>
                    {movie.title}

                    </CardText>
                    <Button color="primary" onClick={e =>showDetails(selectedmovie.id)}>
                        SHOW DETAILS
                    </Button>
                </CardBody>
            </Card>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
            </div>
            </div>
            
            );
            }):
    console.log("no display" )
        }
        </div>
    );
}


export default Search;