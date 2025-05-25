import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";

export default function Form({onSubmit}) {

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get('search');
    if (searchValue !== '') {
      onSubmit(searchValue)
    }
    toast.error('Please fill in the search field')
  }

  return (
    <form className={style.form} onSubmit={handleClick}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit" onClick={handleClick}>
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
