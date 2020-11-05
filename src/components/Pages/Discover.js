import React, { Component } from 'react'

export default class Discover extends Component {
    state = {
        img: "",
        match: false,
        friendsCount: 0
    }


    render() {
        return (
            <div className="Discover">
                <h2>Make New Pup Friends!</h2>
                <h3>Thumbs up on any pups you'd like to meet!</h3>

                <div className="card">
                    <div className="img-container">
                        <img src="https://place-puppy.com/300x300" alt="..." className="img-thumbnail" />
                        <button>Like<i class="fas fa-thumbs-up"></i></button>
                        <button>Dislike<i class="fas fa-thumbs-down"></i></button>
                    </div>
                    <div>
                        <h4>You have 5 friends! </h4>
                    </div>
                </div>
            </div>
        )
    }
}
