import {                                                                
  BrowserRouter as Router,                                              
  Routes,                                                               
  Route,                                                                
  Link,
  useLocation
} from "react-router-dom";                                              
 
import "./App.css";
 
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";      
 
import BookablesPage from "./components/Bookables/BookablesPage";                  
import BookingsPage from "./components/Bookables/BookingsPage";                     
import UsersPage from "./components/Users/UsersPage";                              
import UserPicker from "./components/Users/UserPicker";   
import TodoView from "./components/observable/SampleState"; 
import Todo from "./components/observable/SampleState";
import Title from "./components/ts/Subtitle";
import Semoss from "./components/Bookables/semoss";
 
export default function App () {



  return (
    <Router>                                                            
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">        
                  <FaCalendarAlt/>                                      
                  <span>Bookings</span>                                 
                </Link>                                                 
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">       
                  <FaDoorOpen/>
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers/>                                            
                  <span>Users</span>
                </Link>
              </li>
              <li>
                <Link to="/semoss" className="btn btn-header">
                  <FaUsers/>                                            
                  <span>Semoss</span>
                </Link>
              </li>
            </ul>
          </nav>
 
          <UserPicker/>  
        </header>
 
        <Routes>                                                        
          <Route path="/bookings" element={<BookingsPage/>} />           
          <Route path="/bookables" element={<BookablesPage/>}/>         
          <Route path="/users" element={<UsersPage/>}/>           
          <Route path="/semoss" element={<Semoss/>}/>           
        </Routes>

      <div><Title title="Title passed as props" /> </div>

      </div>
    </Router>
  );
}