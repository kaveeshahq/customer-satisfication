const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    food: { type: Number, required: true },
    service: { type: Number, required: true },
    cleanliness: { type: Number, required: true },
    value: { type: Number, required: true },
    comment: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', feedbackSchema);

