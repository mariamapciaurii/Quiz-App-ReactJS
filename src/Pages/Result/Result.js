import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from "@material-ui/core"
import "./Result.css";

export const Result = ({name, score}) => {

    const history = useHistory();
    
    useEffect(() => {
        if(!name){
            history.push("/")
        }
    }, [name, history]);
        
    return (
        <div className="Result-container">

            <span> You've completed the Quiz 🎉 </span>
            <span className="Result-container__title"> {name} Your Final Score Is:  {score}  </span>

            <Button
            color="secondary"
            variant="contained"
            size="large"
            style={{ alignSelf: "center", marginTop: 15 }}
            href="/"
            >
                Go to homepage
            </Button>

        </div>
    )
}
export default Result;