import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Use yupResolver
import * as Yup from "yup"; // Import Yup for validation
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PasswordInput, TextInput } from "@mantine/core";
import { Button, Group } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineDateRange } from "react-icons/md";
import "@mantine/dates/styles.css";
import "../../styles/registerLogin.css";

const RegisterForm = ({ setLoginRegister }) => {
  // Define Yup schema for form validation
  const schema = Yup.object().shape({
    fname: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),
    lname: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    dateOfBirth: Yup.date()
      .nullable()
      .typeError("Invalid date format")
      .required("Date of birth is required"),
    phone: Yup.string()
      .matches(/^\+?\d{10,15}$/, "Invalid phone number")
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Initialize react-hook-form with Yup resolver
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use Yup for validation
    mode: "onSubmit", // Validate on submit only
    defaultValues: {
      fname: "",
      lname: "",
      dateOfBirth: null,
      phone: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <div className="paper-register-login">
      <h1 className="login-h1">Sign Up</h1>
      <p className="para1">Create an account to continue! </p>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        {/* First Name */}
        <TextInput
          withAsterisk
          placeholder="Your First Name"
          {...register("fname")}
          className="input-field"
          style={{ width: "100%" }}
          radius={"10px"}
        />
        {errors.fname && <div className="error">{errors.fname.message}</div>}

        {/* Last Name */}
        <TextInput
          withAsterisk
          placeholder="Your Last Name"
          {...register("lname")}
          className="input-field"
          style={{ width: "100%" }}
          radius={"10px"}
        />
        {errors.lname && <div className="error">{errors.lname.message}</div>}

        {/* Date Picker */}
        <DatePickerInput
          value={getValues("dateOfBirth")}
          onChange={(date) => setValue("dateOfBirth", date)}
          placeholder="Date of Birth"
          className="input-field"
          style={{ width: "100%" }}
          radius={"10px"}
          rightSection={<MdOutlineDateRange />}
        />
        {errors.dateOfBirth && (
          <div className="error">{errors.dateOfBirth.message}</div>
        )}

        {/* Phone Input */}
        <PhoneInput
          defaultCountry="sy"
          value={getValues("phone")}
          onChange={(phone) => setValue("phone", phone)}
          className="input-field"
          style={{ width: "100%" }}
        />
        {errors.phone && <div className="error">{errors.phone.message}</div>}

        {/* Password */}
        <PasswordInput
          placeholder="Your Password"
          radius={"10px"}
          {...register("password")}
          className="input-field"
          style={{ width: "100%" }}
        />
        {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}

        {/* Submit Button */}
        <Group justify="center">
          <Button type="submit" className="submit-btn">
            Register
          </Button>
        </Group>
      </form>
      <div className="switch">
        <p className="switch-text">Already have an account?</p>
        <p className="switch-link" onClick={() => setLoginRegister("login")}>
          Login
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
