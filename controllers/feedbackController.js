const Feedback = require('../models/Feedback');

const createFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (error) {
    next(error);
  }
};

const getAllFeedback = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    next(error);
  }
};

module.exports = { createFeedback, getAllFeedback };
