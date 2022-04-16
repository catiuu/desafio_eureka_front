import "./style.css";
import useUser from "../../hooks/useUser";

export function LoadingData() {
  const { loading } = useUser();
  return <p className="loading">Carregando...</p>;
}
