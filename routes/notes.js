const express = require('express');
const Note = require('../models/Note');
const auth = require('../auth/auth');

const router = express.Router();

router.post('/create', auth, async (req, res) => {
    try {
      const { title, content } = req.body;

      const note = new Note({
        title,
        content,
        owner: req.user._id,
      });
      
      await note.save();
      res.status(201).send(note);
    } 
    
    catch (error) {
      res.status(400).send({ error: error.message });
    }

  });