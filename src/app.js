const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(express.json());

app.use('/tasks', tasksRouter);

// Error handler
app.use((err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json({ error: err.details[0].message });
  }
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
