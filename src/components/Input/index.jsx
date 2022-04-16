import "./style.css";
import searchIcon from "../../assets/searchIcon.svg";

export function Input() {
  return (
    <form className="input-container">
      <input
        type="text"
        className="input"
        placeholder="Digite o CEP que deseja buscar"
        required
      ></input>
      <button>
        <img src={searchIcon} className="search-icon" alt="" />
      </button>
    </form>
  );
}
