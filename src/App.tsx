import { ChangeEvent, useState } from "react";
import styles from "./home.module.css";
import { data } from "./components/contstants";
import { IData } from "./components/interfaces";

function App(): JSX.Element {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: "description",
    };
    console.log(newData);
    setArr([...arr, newData]);
    setTitle("");
  };

  const dleteItem = (id: number): void => {
    const newData = arr.filter((i) => i.id != id);
    setArr(newData);
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.titel}>Ap Todo</h1>
      <input
        placeholder="Enter todo"
        className={styles.input}
        value={title}
        onChange={changeHandler}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Add todo
      </button>
      <div className={styles.card}>
        {arr.map((i) => (
          <div key={i.id} className={styles.cardItem}>
            <p>{i.title}</p>
            <div className={styles.btn}>
              <button onClick={() => dleteItem(i.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
