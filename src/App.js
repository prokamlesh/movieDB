import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import NotFound from "./Components/404/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upcomming from './Components/Upcomming/Upcomming';
import TopRated from './Components/TopRated/TopRated';
import Search from './Components/Search/Search';
import { Provider } from 'react-redux';
import store from './Components/Store/Index';
import MovieDetail from './Components/MovieDetail/MovieDetail';


function App() {
  return (
    <div>
            <Provider store={store}>
            <BrowserRouter> 
              <Header/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<NotFound/>}></Route>
                <Route path="/upcomming" element={<Upcomming/>} />
                <Route path="/moviedetail" element={<MovieDetail/>} />
                <Route path="/toprated" element={<TopRated/>} />
                <Route path="/search" element={<Search/>} />
              </Routes>
            </BrowserRouter>
            </Provider>
         
    </div>
  );
}

export default App;
