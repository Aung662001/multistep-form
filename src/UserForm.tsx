import style from "./style.module.css";

type userData = {
  name: string;
  email: string;
  age: string;
  address: string;
};

type userFormProps = userData & {
  UpdateField: (fields: Partial<userData>) => void;
};

export default function userForm({
  name,
  email,
  age,
  address,
  UpdateField,
}: userFormProps) {
  return (
    <>
      <h1>User Info</h1>
      <label>Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        className={style.input}
        onChange={(e) => UpdateField({ name: e.target.value })}
        required
      ></input>

      <label>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => UpdateField({ email: e.target.value })}
        value={email}
        required
      ></input>

      <label>Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        min={15}
        max={100}
        onChange={(e) => UpdateField({ age: e.target.value })}
        value={age}
        required
      ></input>

      <label>Address:</label>
      <input
        type="textarea"
        id="add"
        name="add"
        value={address}
        onChange={(e) => UpdateField({ address: e.target.value })}
        required
      ></input>
    </>
  );
}
