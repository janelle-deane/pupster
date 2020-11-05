import React, { Component } from 'react';
import API from "../../utils/API"

export default class Discover extends Component {
    state = {
        img: "",
        match: false,
        friendsCount: 0
    };

    componentDidMount() {
        API.getRandomDog().then(res => {
            this.setState({ img: res.data.message })
        })
    };
    dislike() {
        API.getRandomDog().then(res => {
            this.setState({ img: res.data.message })
        })
    };

    like() {
        const randNumber = Math.floor(Math.random() * 5)
        if (randNumber === 1) {
            this.setState({ count: this.state.friendscount + 1 })
        }
        API.getRandomDog().then(res => {
            this.setState({ img: res.data.message })
        })
    };



    render() {
        return (
            <div className="Discover">
                <h2>Make New Pup Friends!</h2>
                <h3>Thumbs up on any pups you'd like to meet!</h3>

                <div className="card">
                    <div className="img-container">
                        <img src={this.state.img} alt="dogpic" className="img-thumbnail" />
                        <button onClick={this.like}>Like<i class="fas fa-thumbs-up"></i></button>
                        <button onClick={this.dislike}>Dislike<i class="fas fa-thumbs-down"></i></button>
                    </div>
                    <div>
                        <h4>You have 5 friends! </h4>
                    </div>
                </div>
            </div>
        )
    }
}
