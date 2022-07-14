import { useEffect, useState } from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { movieActions } from "../Store/Index";


const Upcomming = () => {
    const [movies,setMovies] = useState([]);
    const [selectedmovie, setSelectedmovie] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const Api_key="c45a857c193f6302f2b5061c3b85e743";
    const api_img="https://image.tmdb.org/t/p/w500";
    
    useEffect(()=>{
        console.log("USE EFFECT");
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
  .then(response => response.json())
  .then(json => {setMovies(json)})
  

    },[])
    const buttonClickHandler = (movie_id) => {
        console.log("movie",movie_id)
        const movieid =movie_id
        dispatch(movieActions.Movieselected({movie_id}))
        
        
        navigate("/movieDetail")
    }
    return (
        <div className="m-2">    
        {
            
           movies && movies.results && movies.results.length>0 ? movies.results.map(movie => {
            console.log(movie.backdrop_path);
            console.log(movie.title);
            console.log(movie.id);
            console.log(movies.results.length);
            return (
                <div className="media">
            <Card >
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
            </div>
            
            );
            }):
    console.log("no display" )
        }
        </div>
    );
}


export default Upcomming;