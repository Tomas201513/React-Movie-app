import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const person = { name: "" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          person.name = data;
        })}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true, minLength: 5 })}
            id="name"
            type="text"
          />
        </div>
        {errors.name?.type === "required" && <p>name is required</p>}
        <button type="submit">submit</button>
      </form>
      {}
    </>
  );
};

export default Form;
