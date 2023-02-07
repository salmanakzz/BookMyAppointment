// user helper operation
const { client } = require("../config/connection");

module.exports = {
  // tome solt booking operations
  bookingTime: (
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
  ) => {
    return new Promise((resolve, reject) => {

      const query = `
      INSERT INTO timeslot (firstname,lastname,email,mobile,location,consultancyDepartment,doctor,state,date,time,notes)
      VALUES ('${firstname}','${lastname}','${email}','${phone}','${location}','${consultancyDep}','${doctor}','${state}',DATE '${date}',TIME '${time}','${notes}');`

    client.query(query).then(() => {
        resolve({ status: "ok", timeslotBooked : true })
    }).catch((error)=>{
        resolve({ status: "error", timeslotBooked : false, error })
    })
    });
  },
};
