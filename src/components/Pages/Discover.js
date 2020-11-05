import React, { Component } from 'react'

export default class Discover extends Component {
    state = {
        img: "",
        match: false,
        friendsCount: 0
    }


    render() {
        return (
            <div>
                <h2>Make New Pup Friends!</h2>
                <h3>Thumbs up on any pups you'd like to meet!</h3>

                <div className="card">
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>Name:</strong> {props.name}
                            </li>
                            <li>
                                <strong>Occupation:</strong> {props.occupation}
                            </li>
                            <li>
                                <strong>Location:</strong> {props.location}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
