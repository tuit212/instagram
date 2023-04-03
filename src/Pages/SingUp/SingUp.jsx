import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from '../../Assets/img/logo.png'
import '../Login/Login.scss'

const SingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch("example"));

  return (
    <div className='section-login'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={logo} className='logo' alt="" />
          <label>First Name</label>
          <input
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors?.firstName?.type === "required" && <p>This field is required</p>}
          {errors?.firstName?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label>Laste Name</label>
          <input {...register("lastName", {required: true, pattern: /^[A-Za-z]+$/i })} />
          {errors?.lastName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label>Age</label>
          <input {...register("age", {required: true, min: 18, max: 99 })} />
          {errors.age && (
            <p>You Must be older then 18 and younger then 99 years old</p>
          )}
          <input type="submit" value={"Sing up"} />
          <div className="bottom">
            <Link className='link' to='/login' >Login</Link>
          </div>
        </form>
    </div>
  )
}

export default SingUp