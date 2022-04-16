import "./style.css";
import locationIcon from "../../assets/locationIcon.svg";

export function Header() {
  return (
    <div className="header">
      <img src={locationIcon} alt="logo" />
      <h1>Busca CEP</h1>
    </div>
  );
}
