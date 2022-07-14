import { useEffect, useState } from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import MovieDetail from "../MovieDetail/MovieDetail";
import { movieActions } from "../Store/Index";


const Home = () => {
    const [movies,setMovies] = useState([]);
    const selectedMovie=useSelector(state=>state.movie)
    const [movie_id,setMovie_id]=useState('');
    const navigate = useNavigate();
    const dispatch=useDispatch();

    
    const api_img="https://image.tmdb.org/t/p/w500";
    
    
    
    useEffect(()=>{
        console.log("USE EFFECT");
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
  .then(response => response.json())
  .then(json =>{setMovies(json)})
  
  

    },[])   
    const buttonClickHandler = (movie_id) => {
        console.log("movie",movie_id)
        const movieid =movie_id
        dispatch(movieActions.Movieselected({movie_id}))
        
        setMovie_id("");
        navigate("/movieDetail") 
    
      }
    
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
                    <Button color="primary" onClick={e => buttonClickHandler(movie.id)}>
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


export default Home;