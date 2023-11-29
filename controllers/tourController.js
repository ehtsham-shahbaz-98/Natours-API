const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    return res.status(200).json({
      status: 'success',
      results: tours?.length,
      data: {
        tours: tours,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const id = req.params.id;

    const tour = await Tour.findById(id);

    return res.status(200).json({
      status: 'success',
      data: {
        tour: tour,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    // const newTour = new Tour({});
    // newTour.save();

    const newTour = await Tour.create(req.body);

    return res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Data Sent!',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: 'success',
      data: {
        tour: '<Updated tour here...>',
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Data Sent!',
    });
  }
};

exports.deleteTour = (req, res) => {
  // if (req.params.id * 1 > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }

  return res.status(204).json({
    status: 'success',
    data: null,
  });
};
