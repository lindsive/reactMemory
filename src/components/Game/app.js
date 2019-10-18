// import components
import React, { Component } from "react";
import Planets from "../Planets";
import Title from "../Title";
import Wrapper from "../Wrapper";
import data from "../../planets.json";

class Functionality extends Component {
    // set initial state
    state = {
        data,
        score: 0,
        totalScore: 0
    }

    componentDidMount() {

    }

    correctGuess = (addData) => {
        let { score, totalScore } = this.state;
        let newScore = score + 1;
        let newTotalScore = Math.max(newScore, totalScore);

        this.setState({
            data: this.randomize(data),
            score: newScore,
            totalScore: newTotalScore
        });

    }

    randomize = (data) => {
        for (let i = data.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i + 1);
            let tempArr = data[i];
            data[i] = data[j];
            data[j] = tempArr;
        }
        return data;
    }

    checkGuess = (id) => {
        // let correctGuess = false;
        // let counts = []
        // let ? = this.state.data.map(...id) {

        // }

        // or

        // this.props.id.map((data, index) => {
          
            // if(counts[data.id[i]] === undefined) {
            //counts[data.[i]] = 1;
            // return true;
            // } else {
                // this.state.randomize(data)
            //  
            //}
            

        // }

        


        // translate for loop to map()??

        // for (let i = 0; i <= data.id.length; i++) {
        // if(counts[data.id[i]] === undefined) {
        //counts[data.[i]] = 1;
        // } else {
        //   return true;
        //}
        //}
        // return false;
    }


    render() {
        return (
            <Wrapper className="wrapper">
                <Title>Memory Game</Title>
                {this.state.data.map(planetobj => (
                    
                    <Planets
                        id={planetobj.id}
                        key={planetobj.id}
                        name={planetobj.name}
                        image={planetobj.image}
                    />

                ))}
            </Wrapper>
        );
    }

}

export default Functionality;