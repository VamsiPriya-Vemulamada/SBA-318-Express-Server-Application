
import { Router } from "express";
import {characters }from "../data/characters.js"

const characterRouter = Router();
// Get all characters
characterRouter.get('/api/characters', (req, res) => {
    res.json(characters);
  });
  
  // Add a new character
  characterRouter.post('/api/characters', (req, res) => {
    const { name, role } = req.body;
    const newCharacter = { id: characters.length + 1, name, role };
    characters.push(newCharacter);
    res.redirect('/');
  });
  
  // Update an existing character
  characterRouter.put('/api/characters/:id', (req, res) => {
    const characterId = parseInt(req.params.id, 10);
    const { name, role } = req.body;
    const character = characters.find(c => c.id === characterId);
  
    if (character) {
      character.name = name;
      character.role = role;
      res.json({ success: true, message: 'Character updated', character });
    } else {
      res.status(404).json({ success: false, message: 'Character not found' });
    }
  });
  
  // Delete a character
  characterRouter.delete('/api/characters/:id', (req, res) => {
    const characterId = parseInt(req.params.id, 10);
    const characterIndex = characters.findIndex(c => c.id === characterId);
  
    if (characterIndex !== -1) {
      characters.splice(characterIndex, 1);
      res.json({ success: true, message: 'Character deleted' });
    } else {
      res.status(404).json({ success: false, message: 'Character not found' });
    }
  });
  
  export default characterRouter;