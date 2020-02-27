import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} /> {/* load the excersicesList component in home page */}
        <Route path="/edit/:id" component={EditExercise} /> {/* load the EditExercise component in edit page */}
        <Route path="/create" component={CreateExercise} /> {/* load the CreateExercise component in create page */}
        <Route path="/user" component={CreateUser} /> {/* load the CreateUser component in user page */}
      </div>
    </Router>
  );
}

export default App;
