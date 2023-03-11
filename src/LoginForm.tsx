import style from "./style.module.css";
type LoginData = {
  nameL: string;
  emailL: string;
  password: string;
  otp: string;
};
type LoginDataProps = LoginData & {
  UpdateField: (fields: Partial<LoginData>) => void;
};
export default function loginForm({
  nameL,
  emailL,
  password,
  otp,
  UpdateField,
}: LoginDataProps) {
  return (
    <>
      <h1>Login</h1>
      <label>Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={nameL}
        onChange={(e) => UpdateField({ nameL: e.target.value })}
        className={style.input}
        required
      ></input>

      <label>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) =>
          UpdateField({
            emailL: e.target.value,
          })
        }
        value={emailL}
        required
      ></input>

      <label>Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => UpdateField({ password: e.target.value })}
        value={password}
        required
      ></input>

      <label>Otp Code:</label>
      <input
        type="number"
        id="otp"
        name="opt"
        onChange={(e) => UpdateField({ otp: e.target.value })}
        value={otp}
        maxLength={6}
        required
      ></input>
    </>
  );
}
