const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {

    try {

      const { username, email, password } = req.body;
      const user = new User({ username, email, password });

      await user.save();

      res.status(201).send({ message: 'User created successfully!' });
    } 
    
    catch (error) {
      res.status(400).send({ error: error.message });
    }


  });
