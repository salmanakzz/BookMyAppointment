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
      CREATE TABLE IF NOT EXISTS timeslot (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR (25) NOT NULL,
        lastname VARCHAR (25) NOT NULL,
        email VARCHAR (25) NOT NULL,
        mobile VARCHAR (25) NOT NULL,
        location VARCHAR (25) NOT NULL,
        consultancyDepartment VARCHAR (25) NOT NULL,
        doctor VARCHAR (25) NOT NULL,
        state VARCHAR (25) NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        notes VARCHAR (50)
      );

      ALTER TABLE timeslot
      ADD CONSTRAINT unique_email UNIQUE (email);

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
