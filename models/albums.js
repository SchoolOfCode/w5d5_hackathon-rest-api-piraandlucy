//import albums array from data.js file
import { albums } from "../libs/data.js";

//function to return albums array
//export for use in other files
export function getAlbums() {
    return albums;
}

//console.log(getAlbums());