//import albums array from data.js file
import { albums } from "../libs/data.js";

//function to return albums array
//export for use in other files
export function getAlbums() {
    return albums;
}

//console.log(getAlbums());

//search albums by title
export function searchAlbumsByTitle(searchTerm) {
    return albums.filter(function (album) {
      return album.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

//search albums by artist
  export function searchAlbumsByArtist(searchTerm) {
    return albums.filter(function (album) {
      return album.artist.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

//search albums by release year  
export function searchAlbumsByReleaseYear(searchTerm) {
    return albums.filter(function (album) {
      return album.release_year.includes(Number(searchTerm));
    });
  }

//search albums by label  
export function searchAlbumsByLabel(searchTerm) {
    return albums.filter(function (album) {
      return album.label.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  
//get album by ID
export function getAlbumById(id) {
    const found = albums.find(function (album) {
      return album.id === id;
    });
    return found;
  }

//create new album entry
export function createAlbum(album) {
    albums.push(album);
    return albums[albums.length - 1];
  }
  
//update album by ID
export function updateAlbumById(id, updates) {
    const foundIndex = albums.findIndex(function (album) {
      return album.id === id;
    });
    albums[foundIndex] = updates;
    return albums[foundIndex];
  }
  
//delete album by ID
export function deleteAlbumById(id) {
    const foundIndex = albums.findIndex(function (album) {
      return album.id === id;
    });
    const item = albums[foundIndex];
    albums.splice(foundIndex, 1);
    return item;
  }