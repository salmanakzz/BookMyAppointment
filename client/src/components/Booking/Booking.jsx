import React, { useState } from "react";
import { CalendarForm } from "../Calender/Calendar";
import { useForm } from "react-hook-form";
import { Form } from "../Form/Form";
import { bookTime } from "../../api/bookTime";

export const Booking = () => {
  const [consultancyDep, setConsultancyDep] = useState("");
  const [doctor, setDoctor] = useState("");
  const [state, seState] = useState("online");
  const [location, setLocation] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  
  const onSubmit = () => {

    function formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
  }
    
    const data = {
      consultancyDep,
      doctor,
      state,
      location,
      firstname,
      lastname,
      email,
      phone,
      date: formatDate(date)
    };

    bookTime(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <form action="">
          <select
            name=""
            id=""
            value={consultancyDep}
            onChange={(e) => setConsultancyDep(e.target.value)}
          >
            <option value="one">Consultancy Dep</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
          <br />
          <select
            name=""
            id=""
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option value="choose a doctor">choose a doctor</option>
            <option value="doctortwo">doctortwo</option>
            <option value="doctrthree">doctrthree</option>
          </select>
          <br />
          <label htmlFor="">Online</label>
          <input
            type="radio"
            value="online"
            checked={state === "online"}
            name="state"
            onChange={(e) => seState(e.target.value)}
            id=""
          />
          <label htmlFor="">in office</label>
          <input
            type="radio"
            value="inoffice"
            checked={state === "inoffice"}
            name="state"
            id=""
            onChange={(e) => seState(e.target.value)}
          />
          <br />
          <select
            name=""
            id=""
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="c">choose a location</option>
            <option value="location1">location1</option>
            <option value="location2">location2</option>
          </select>
          <br />
          <input
            type="text"
            placeholder="First name"
            name=""
            id=""
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          <input
            type="text"
            name=""
            placeholder="Lastname"
            id=""
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <input
            type="tel"
            name=""
            placeholder="Phone"
            id=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <input
            type="email"
            value={email}
            name=""
            placeholder="Email Address"
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        {/* <Form register={register} handleSubmit={handleSubmit}/> */}
        <CalendarForm date={date} setDate={setDate}/>
      </div>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};
