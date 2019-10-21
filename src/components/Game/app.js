// import components
import React, { Component } from "react";
import Planets from "../Planets";
import Title from "../Title";
import Wrapper from "../Wrapper";
import Score from "../Score";
import data from "../../planets.json";

class Functionality extends Component {
    // set initial state
    state = {
        data: data,
        score: 0,
        totalScore: 0
    }

    // handles functionality when player guesses correctly
    correctGuess = (planetData) => {
        // setting score & totalScore to their current states in the game
        let { score, totalScore } = this.state;
        // adds 1 to score when player guesses correctly
        let newScore = score + 1;
        // checks which variable is greater, and adjusts totalScore if newScore is greater
        let newTotalScore = Math.max(newScore, totalScore);

        this.setState({
            //  shuffling planets based on new data
            data: this.randomizeImages(planetData),
            // adjusts score
            score: newScore,
            // adjusts total score
            totalScore: newTotalScore
        });
    };

    incorrectGuess = () => {
        // loops through data, sets clicked status to false 
        this.state.data.map(planetData => (planetData.clicked = false))

        // randomizes images
        return this.randomizeImages(data);

    }

    // shuffles images 
    randomizeImages = (data) => {
        // looping through data using destructuring assignment
        for (let i = data.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]]
        }
        return data;
    };

    render() {
        return (
            <Wrapper className="wrapper" >
                <Title>Memory Game</Title>
                <Score />
                {this.state.data.map(planetobj => (

                    <Planets
                        id={planetobj.id}
                        key={planetobj.id}
                        name={planetobj.name}
                        image={planetobj.image}
                    />

                ))
                }
            </Wrapper >
        );
    }
}

export default Functionality;