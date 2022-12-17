import katiezaferes from '../img/katie-zaferes.png';
import wdimg from '../img/wd.png';
import mtbike from '../img/mountainbike.png';


// This is where all the data is stored in array form 
export default [
    {
        id: 1,
        coverImg: katiezaferes, 
        title: "Life lessons with Katie Zaferes",
        stats: {
            rating: 5,
            reviewCount: 6,
        },
        location: "USA", 
        price: 136,
        openspots: 0,

    },

    {
        id: 2,
        coverImg: wdimg, 
        title: "Learn weeding photography",
        stats: {
            rating: 5,
            reviewCount: 30,
        },
        location: "USA", 
        price: 125,
        openspots: 27,

    },

    {
        id: 3,
        coverImg: mtbike, 
        title: "Group mountain biking",
        stats: {
            rating: 4.8,
            reviewCount: 2,
        },
        location: "USA", 
        price: 50,

    }
]