const { default: Axios } = require("axios")

import Axios from "axios";


const API={
    getRandomDog: function(){
        return Axios("https://dog.ceo/api/breeds/image/random");
    }
}