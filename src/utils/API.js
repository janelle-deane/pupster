import axios from "axios";


const API={
    getRandomDog: function(){
        return axios("https://dog.ceo/api/breeds/image/random");
    },
    getBreedPic:function(breed){
        return axios(`https://dog.ceo/api/breeds/list/all
        https://dog.ceo/api/breed/${breed}/images
        `)
    }
}


export default API