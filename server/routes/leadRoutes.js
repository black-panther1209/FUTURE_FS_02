const express = require('express');

const Lead = require('../models/Lead');

const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const leads = await Lead.find().sort({
    createdAt: -1,
  });

  res.json(leads);
});

router.post('/', auth, async (req, res) => {
  const lead = new Lead(req.body);

  await lead.save();

  res.json(lead);
});

router.put('/:id', auth, async (req, res) => {
  const updatedLead =
    await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(updatedLead);
});

router.delete('/:id', auth, async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);

  res.json({
    message: 'Lead deleted',
  });
});

module.exports = router;