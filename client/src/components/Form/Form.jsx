import React from 'react'
import './Form.css'

export const Form = ({register,errors}) => {
  return (
    <div className='form-div'>
        <form action="">
            <select name="" id=""
               {...register("consDep", {
                required: true,
              })}
            >
                <option value="one">Consultancy Dep</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
            <br />
            <select name="" id=""
               {...register("doctor", {
                required: true,
              })}
            >
                <option value="choose a doctor">choose a doctor</option>
                <option value="doctortwo">doctortwo</option>
                <option value="doctrthree">doctrthree</option>
            </select>
            <br />
            <label htmlFor="">Online</label>
            <input type="radio" name="" id="" />
            <label htmlFor="">in office</label>
            <input type="radio" name="" id="" />
            <br />
            <select name="" id="" 
               {...register("location", {
                required: true,
              })}
            >
                <option value="choose a doctor">choose a location</option>
                <option value="location1">location1</option>
                <option value="location2">location2</option>
            </select>
            <br />
            <input type="text" placeholder='First name' name="" id="" 
               {...register("firstname", {
                required: true,
              })}
            />
            <br />
            <input type="text" name="" placeholder='Lastname' id="" 
               {...register("lastname", {
                required: true,
              })}
            />
            <br />
            <input type="tel" name="" placeholder='Phone' id="" 
               {...register("number", {
                required: true,
              })}
            />
            <br />
            <input type="email" name="" placeholder='Email Address' id="" 
             {...register("email", {
                required: true,
              })}
         
            />
        </form>
    </div>
  )
}
