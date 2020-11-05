
import React, { Component } from 'react';


export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <h1>Search</h1>
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

