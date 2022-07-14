import { DropdownItem, DropdownMenu, DropdownToggle, Label, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Button, UncontrolledDropdown } from "reactstrap";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDebugValue, useState } from "react";
import { movieActions } from "../Store/Index";

const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [movie,setMovie]=useState("");
  const selectedMovie=useSelector(state=>state.movie)
  console.log("movie",selectedMovie)

  const movieChangeHandler = (event) => {
    setMovie(event.target.value);
    console.log(movie)
 };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("movie in submit handler",movie)
    dispatch(movieActions.MovieDetail({
      movie
    }))
    setMovie("");
    navigate("/search") 

  }

    return (
        <div className="d-flex">

          <div>
            <h1>Movie Db</h1>
          </div>
          
             <Nav >
    <NavItem>
      <Link className="link"
        to="/"
      >
        Popular
      </Link>
    </NavItem>
    <NavItem>
      <Link className="link" to="/toprated">
        Top Rate
      </Link>
    </NavItem>
    <NavItem>
      <Link className="link"
        
        to="/upcomming"
      >
        Upcomming
      </Link>
      
    </NavItem>
    
  </Nav>
  <input type="text" name="movie" onChange={movieChangeHandler}
                     id="movie"value={movie}></input>
  <Button  color="primary" className="mt-3" onClick={submitHandler}>
                  SEARCH
  </Button>
  

        </div>
    );
}


export default Header;