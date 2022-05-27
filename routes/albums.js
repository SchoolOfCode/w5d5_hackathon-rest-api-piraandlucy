//imports express library
import express from "express";

//calls an instance of express.Router method and stores in variable (`router`)
const router = express.Router();

//imports functions from models
import {
    getAlbums
} from "../models/albums.js";

//exports router
export default router;