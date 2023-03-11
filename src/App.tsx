import useMultiStepForm from "./useMultiStepForm";
import style from "./style.module.css";
import UserForm from "./UserForm";
import AboutForm from "./AboutForm";
import LoginForm from "./LoginForm";
import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  age: string;
  address: string;
  city: string;
  township: string;
  division: string;
  country: string;
  nameL: string;
  emailL: string;
  password: string;
  otp: string;
};
const INITIAL_DATA = {
  name: "",
  email: "",
  age: "",
  address: "",
  city: "",
  township: "",
  division: "",
  country: "",
  nameL: "",
  emailL: "",
  password: "",
  otp: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function UpdateField(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, back, next } = useMultiStepForm([
    <UserForm {...data} UpdateField={UpdateField} />,
    <AboutForm {...data} UpdateField={UpdateField} />,
    <LoginForm {...data} UpdateField={UpdateField} />,
  ]);
  function submitHandler(e: FormEvent) {
    e.preventDefault();
    next();
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        borderRadius: ".35rem",
        margin: "1rem auto",
        padding: "2rem",
        fontFamily: "monospace",
        width: "70%",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={submitHandler}
      >
        <div style={{ position: "absolute", top: ".5rem", right: "1.5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {/* component code go here */}
        {step}

        <div className={style.buttonGroup}>
          {currentStepIndex !== 0 ? (
            <button className={style.button} type="button" onClick={back}>
              Back
            </button>
          ) : (
            <div style={{ opacity: "0" }}>hello</div>
          )}
          {currentStepIndex !== steps.length - 1 ? (
            <button
              className={style.button}
              type="submit"
              style={{ float: "right" }}
            >
              Next
            </button>
          ) : (
            <button
              className={style.button}
              type="button"
              onClick={() => {
                alert(" success!");
              }}
              style={{ float: "right" }}
            >
              Login
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
