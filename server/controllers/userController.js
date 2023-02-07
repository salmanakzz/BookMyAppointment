// user controlling functions

const userHelper = require("../helpers/userHelper");


// user time slot booking route controlling
const bookTime = async (req, res) => {
    console.log(req.body);
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      location,
      consultancyDep,
      doctor,
      state,
      date,
      time,
      notes
    } = req.body;
    const response = await userHelper.bookingTime(
      firstname,
      lastname,
      email,
      phone,
      location,
      consultancyDep,
      doctor,
      state,
      date,
      time,
      notes
    );
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = {
  bookTime,
};
