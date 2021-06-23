import React from 'react'
import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";

export const Quiz = (name, score,questions,setQuestions,setScore) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[currQues]?.correct_answer,
              ...questions[currQues]?.incorrect_answers,
            ])
        );
      }, [currQues, questions]);
    
      console.log(questions);
    
      const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };

    return (
        <div>
        </div>
    )
}

export default Quiz;