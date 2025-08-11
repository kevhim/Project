const { Router } = require('express');
const { sequelize } = require('../db.js');

const router = Router();
const { Event } = sequelize.models;

router.get('/active-event', async (req, res) => {
  try {
    const activeEvent = await Event.findOne({ where: { status: 'ACTIVE' } });
    if (activeEvent) {
      res.status(200).json(activeEvent);
    } else {
      res.status(404).json({ message: 'There is no active event at this time.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
