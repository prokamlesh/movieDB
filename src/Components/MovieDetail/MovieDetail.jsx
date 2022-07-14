import { useEffect, useState } from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";


const MovieDetail = () => {
    const [movies,setMovies] = useState([]);
    const [casts,setCasts] = useState([]);
    const [selectedmovie, setSelectedmovie] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const selectedMovie=useSelector(state=>state.movie.selectedMovie.movie_id)
    const api_img="https://image.tmdb.org/t/p/w500";
    console.log("mo",selectedMovie)
    
    useEffect(()=>{
        console.log("USE EFFECT");
        fetch(`https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
  .then(response => response.json())
  .then(json =>{setMovies(json)}
    )
  
  fetch(`https://api.themoviedb.org/3/movie/${selectedMovie}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
  .then(response => response.json())
  .then(json =>{setCasts(json)})

  

    },[])

    return (
        <div className="m-2">  
        <div className="poster-container" style={{backgroundImage:`url(${api_img+movies.poster_path})`,backgroundSize:'cover',backgroundPosition:'center'}} > 
        
        
            

        </div>

        {
            
           casts && casts.cast && casts.cast.length>0 ? casts.cast.map(movie => {
            
            return (
                <div className="media">
                    <div className="movie-over">

                <h2>Character Name:</h2>
                <p>{movie.character}</p>
            </div>
            <Card className="media">
                <CardBody >
                    
                    <CardTitle  tag="h5">
                    <img className="img-container"
                    width="100%"
                     src={api_img+movie.profile_path}
                     alt="Card image cap"></img>
                    </CardTitle>
                    
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
                    PROFESION : {movie.known_for_department}
                    </CardSubtitle>
                    <CardText>
                    {movie.name}

                    </CardText>
                    
                </CardBody>
            </Card>
            
            </div>
            
            );
            }):
    console.log("no display" )
        }
        </div>
    );
}


export default MovieDetail;