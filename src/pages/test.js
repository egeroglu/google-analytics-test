import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Test() {

  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  if (showResults) {
    navigate("/pageSon");
  }

  const questions = [
    {
      text: "Page 1 e gitmek ister misin",
      options: [
        { id: 0, text: "✅ EVET ", isCorrect: true, goTo: "/page1" },
        { id: 1, text: "❌ Hayır", isCorrect: false, goTo: "/pageSon" },
      ],
    },
  ];
  const optionClicked = (isCorrect, id) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="App">
      <div className="mobile-container" style={{ position: "relative", marginTop:"1%", paddingBottom:"5%",  '@media (max-width: 767px)': { backgroundColor:"#000000", marginBottom: "10%" }}}>
        <div style={{ position: "relative", paddingBottom:"5%", paddingTop:"5%"}}>
          {showResults ? (
            /* 4. Final Results */
            <></>
            ) : (
            <div className="question-card" style={{ paddingBottom: "0%" }}>
              
              <div color="#ffffff" fontSize={34} fontFamily= "figtree" style={{ paddingTop: "0%" }}>
                {questions[currentQuestion].text}
              </div>
              <ul>
                <div color="#ffffff" fontFamily= "figtree" fontSize={18}>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <Link
                                to={option.isCorrect ? option.goTo : option.goTo}
                                onClick={() => optionClicked(option.isCorrect, option.id)}
                                style={{ textDecoration: "none", color: "inherit" }}
                              >
                        <div className="buttonOnMobile" style={{ paddingTop: "3%" }}>
                            <li
                                key={option.id}
                                className="box-wide"
                            >      
                                <div>
                                  {option.text}
                                </div>
                            </li>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default Test;