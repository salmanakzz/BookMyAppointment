import React, { useRef, useState } from "react";
import { CalendarForm } from "../Calender/Calendar";
import { bookTime } from "../../api/bookTime";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Toast } from 'primereact/toast';

export const Booking = () => {
  const toast = useRef(null);

  const [consultancyDep, setConsultancyDep] = useState("");
  const [doctor, setDoctor] = useState("");
  const [state, seState] = useState("online");
  const [location, setLocation] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Time Slot Book', detail:'Slot Booked Successfully!', life: 3000});
}

  const onSubmit = () => {

    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }

    const date2 = new Date(time);

    const hours = date2.getHours().toString().padStart(2, "0");
    const minutes = date2.getMinutes().toString().padStart(2, "0");
    const seconds = date2.getSeconds().toString().padStart(2, "0");

    const time2 = `${hours}:${minutes}:${seconds}`;

    const data = {
      consultancyDep: consultancyDep.name,
      doctor: doctor.name,
      state,
      location: location.name,
      firstname,
      lastname,
      email,
      phone,
      date: formatDate(date),
      time: time2,
      notes,
    };

    bookTime(data).then((res) => {
      if (res.status === "ok") {
        showSuccess()
      }
    });
  };


  const departments = [
    { name: "department1" },
    { name: "department2" },
    { name: "department3" },
  ];

  const doctors = [
    { name: "doctor1" },
    { name: "doctor2" },
    { name: "doctor3" },
  ];

  const locations = [
    { name: "location1" },
    { name: "location2" },
    { name: "location3" },
  ];

  const options = ["Online", "In Office"];

  return (
    <div
      className="absolute top-[50%] left-[66%] translate-y-[-50%] translate-x-[-50%] p-2"
      style={{ background: "linear-gradient(45deg, #1f378f, transparent)" }}
    >
      <Toast ref={toast} position="top-left"/>
      <div className="flex justify-center items-center">
        <h1>
          <b className="text-[1.4rem] text-[white]">
            HELLO, BOOK YOUR APPOINTMENT
          </b>
        </h1>
      </div>
      <div className="flex justify-center">
        <form action="" className="mx-4 mt-2">
          <Dropdown
            value={consultancyDep}
            onChange={(e) => setConsultancyDep(e.target.value)}
            options={departments}
            optionLabel="name"
            placeholder="Consultancy Department"
            className="w-full md:w-14rem"
          />

          <Dropdown
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            options={doctors}
            optionLabel="name"
            placeholder="Select a doctor"
            className="w-full md:w-14rem my-2"
          />

          <SelectButton
            value={state}
            onChange={(e) => seState(e.target.value)}
            options={options}
          />

          <Dropdown
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            options={locations}
            optionLabel="name"
            placeholder="Choose a Location"
            className="w-full md:w-14rem my-2"
          />

          <div className="my-2 input-details">
            <InputText
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="my-2 input-details">
            <InputText
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div div className="my-2 input-details">
            <InputText
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div div className="my-2 input-details">
            <InputText
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>

        <div className="mt-2 mx-2 ">
          <CalendarForm date={date} setDate={setDate} />
          <div className="mt-1 mb-1 time-div">
            <span className="ml-[15px]">Set a time : </span>
            <Calendar
              value={time}
              onChange={(e) => setTime(e.value)}
              timeOnly
            />
          </div>
          <div className="card flex justify-content-center">
            <InputTextarea
              placeholder="Notes(optional)"
              autoResize
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={5}
              cols={30}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center">
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-[white] w-[100%] p-2 mb-2"
        >
          Confirm Your Booking
        </button>
      </div>
    </div>
  );
};
