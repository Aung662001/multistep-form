import style from "./style.module.css";
type aboutData = {
  city: string;
  township: string;
  division: string;
  country: string;
};
type AboutFormProps = aboutData & {
  UpdateField: (fields: Partial<aboutData>) => void;
};
export default function aboutForm({
  city,
  township,
  division,
  country,
  UpdateField,
}: AboutFormProps) {
  return (
    <>
      <h1>User Address</h1>
      <label>City:</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={(e) => UpdateField({ city: e.target.value })}
        value={city}
        className={style.input}
        required
      ></input>

      <label>Township:</label>
      <input
        type="text"
        id="township"
        name="township"
        onChange={(e) => UpdateField({ township: e.target.value })}
        value={township}
        required
      ></input>

      <label>Division:</label>
      <input
        type="text"
        id="division"
        name="division"
        onChange={(e) => UpdateField({ division: e.target.value })}
        value={division}
        required
      ></input>

      <label>Country:</label>
      <input
        type="text"
        id="country"
        name="country"
        onChange={(e) => UpdateField({ country: e.target.value })}
        value={country}
        required
      ></input>
    </>
  );
}
