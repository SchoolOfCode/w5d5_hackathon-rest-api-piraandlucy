//imports express library
import express from "express";

//calls an instance of express.Router method and stores in variable (`router`)
const router = express.Router();

//imports functions from models
import {
    getAlbums,
    searchAlbumsByTitle,
    searchAlbumsByArtist,
    searchAlbumsByReleaseYear,
    searchAlbumsByLabel,
    getAlbumById,
    createAlbum,
    updateAlbumById,
    deleteAlbumById
} from "../models/albums.js";

router.get("/", function (req, res) {
    if (req.query.search !== undefined) {
      const result = searchAlbumsByTitle(req.query.search);
      return res.json({ success: true, payload: result });
    }
  
    if (req.query.artist !== undefined) {
      const result = searchAlbumsByArtist(req.query.artist);
      return res.json({ success: true, payload: result });
    }

    if (req.query.releaseYear !== undefined) {
      const result = searchAlbumsByReleaseYear(req.query.releaseYear);
      return res.json({ success: true, payload: result });
    }

    if (req.query.label !== undefined) {
      const result = searchAlbumsByLabel(req.query.label);
      return res.json({ success: true, payload: result });
    }
  
    const result = getAlbums();
    res.json({ success: true, payload: result });
  });

router.get("/:id", function (req, res) {
    const id = Number(req.params.id);
    const album = getAlbumById(id);
    res.json({ success: true, payload: album });
  });

router.post("/", function (req, res) {
    const newAlbum = req.body;
    const result = createAlbum(newAlbum);
    res.json({ success: true, payload: result });
  });
  
router.put("/:id", function (req, res) {
    const id = Number(req.params.id);
    const data = req.body;
    const result = updateAlbumById(id, data);
    res.json({ success: true, payload: result });
  });
  
router.delete("/:id", function (req, res) {
    const id = Number(req.params.id);
    const result = deleteAlbumById(id);
    res.json({ success: true, payload: result });
  });

//exports router
export default router;