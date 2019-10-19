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

    correctGuess = () => {
        let guess = false;
        let newData = this.state.data.map(data => {
            let checkData = {...data};
            if (checkData.id === id) {

            }
        })
        this.setState({
            score: this.state.score + 1,
            totalScore: newTotalScore
        });
        this.randomizeImages(data);
    }

    // shuffles images 
    randomizeImages = (data) => {
        for (let i = data.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]]
        }
        return data;
    }

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