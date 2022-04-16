import "./style.css";
import useUser from "../../hooks/useUser";

export function Uladdress() {
  const { zipCodeData } = useUser();
  return (
    <ul key={zipCodeData.id} className="ul-container">
      <li>CEP: {zipCodeData.zip_code}</li>
      <li>Rua: {zipCodeData.address}</li>
      <li>Cidade: {zipCodeData.city}</li>
      <li>Bairro: {zipCodeData.district}</li>
      <li>UF: {zipCodeData.uf}</li>
    </ul>
  );
}
