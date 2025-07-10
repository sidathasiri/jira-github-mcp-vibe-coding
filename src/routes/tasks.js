const express = require('express');
const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const tasks = [];

const taskSchema = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean().default(false)
});

// Create a task
router.post('/', (req, res, next) => {
  const { error, value } = taskSchema.validate(req.body);
  if (error) return next(error);
  const task = { id: uuidv4(), ...value };
  tasks.push(task);
  res.status(201).json(task);
});

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Update a task
router.put('/:id', (req, res, next) => {
  const { error, value } = taskSchema.validate(req.body);
  if (error) return next(error);
  const idx = tasks.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });
  tasks[idx] = { ...tasks[idx], ...value };
  res.json(tasks[idx]);
});

// Delete a task
router.delete('/:id', (req, res) => {
  const idx = tasks.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });
  const deleted = tasks.splice(idx, 1);
  res.json(deleted[0]);
});

module.exports = router;
