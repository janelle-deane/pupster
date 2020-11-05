
import React, { Component } from 'react';
import API from '../../utils/API';


export default class Search extends Component {
    state={
        searchBreed:"",
        results:[]
    };

    handleInputChange=event =>{
        const {name, value}=event.target;
        this.setState({
            [name]: value
        })
    }; 

    handleFormSubmit = event =>{
        event.preventDefault();
        API.getBreedPic(this.state.searchBreed).then(res=>{
            this.setState({results:res.data.message})
        })
    }

    render() {
        return (
            <div className="Search">
                <form>
                    <input name="searchBreed" value={this.state.searchBreed} onChange={this.handleInputChange}/>
                    <button>Search</button>
                </form>
                <h1>Search</h1>
                {this.state.results.map(pic=><img src ={pic}/>)}
            </div>
            
           
        )
    }
}

// // import { MDBCol, MDBSelectInput, MDBSelect, MDBSelectOptions, MDBSelectOption } from "mdbreact";


// export default class Search extends Component {
//     state = {
//         dogSearch: ""
//     };
//     getValueOfSelectOne = value => {
//         console.log(value);
//     };


//     render() {
//         return (
//             <div>Search</div>
//     //         <MDBCol md="6">
//     //             <MDBSelect getValue={value => this.getValueOfSelectOne(value)}>
//     //                 <MDBSelectInput selected="Choose your option" />
//     //                 <MDBSelectOptions search>
//     //                     <MDBSelectOption disabled>Choose your option</MDBSelectOption>
//     //                     <MDBSelectOption>Option nr 1</MDBSelectOption>
//     //                     <MDBSelectOption>Option nr 2</MDBSelectOption>
//     //                     <MDBSelectOption>Option nr 3</MDBSelectOption>
//     //                     <MDBSelectOption>Option nr 4</MDBSelectOption>
//     //                     <MDBSelectOption>Option nr 5</MDBSelectOption>
//     //                 </MDBSelectOptions>
//     //             </MDBSelect>
//     //         </MDBCol>
//         )
//     }
// }

