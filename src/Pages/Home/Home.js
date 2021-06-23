import React from 'react'
import "./Home.css";
import { useState } from "react";
import { Button, MenuItem, TextField } from '@material-ui/core';
import Categories from '../../Data/Categories';
import { useHistory } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


export const Home = ({name,setName, fetchQuestions}) => {
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);


    const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

    return (
        <div className="Quiz-content">
            <div>
                <span className="Quiz-content__title">
                    Quiz App
                </span>
                {error && <ErrorMessage>Please Fill Information</ErrorMessage>}
                <div className="Quiz-content__select">
                    <TextField style={{marginBottom:30}}
                     label = "Enter Your Name" 
                     onChange={(e) => setName(e.target.value)}
                     variant = "outlined"/>
                     
                     
                     <TextField
                     select
                     label="Select Category"
                      value={category}
                     onChange={(e) => setCategory(e.target.value)}
                     variant="outlined"
                     style={{ marginBottom: 30 }}>
                         {Categories.map((cat) => (
                         <MenuItem key={cat.category} value={cat.value}>
                             {cat.category}
                             </MenuItem>
                             ))}
                             </TextField>

                             <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>


          <Button
            // variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>


          
                </div>
            </div>
        </div>
    )
}
export default Home;