import "./style.css";
import searchIcon from "../../assets/searchIcon.svg";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { Uladdress } from "../Uladdress";
import { LoadingData } from "../LoadingData";
import { Error } from "../Errors";

export function Input() {
  const {
    zipCodeValue,
    setZipCodeValue,
    setZipCodeData,
    loading,
    setLoading,
    showUl,
    setShowUl,
    showErro,
    setShowErro,
  } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!zipCodeValue) {
      setShowUl(false);
      alert("Insira um CEP válido!");
      return;
    }
    const baseURL = `https://eurekaviacep-api.herokuapp.com/search/${zipCodeValue}`;
    try {
      setLoading(true);
      setShowErro(false);
      const response = await fetch(baseURL, {
        method: "GET",
      });
      const data = await response.json();

      if (response.status > 200) {
        setLoading(false);
        setShowUl(false);
        setShowErro(true);
        return;
      }

      setLoading(false);
      setZipCodeData(data);
      setShowUl(true);
      setZipCodeValue("");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()} className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Digite o CEP que deseja buscar"
          required
          onChange={(e) => setZipCodeValue(e.target.value.replace(/\D/g, ""))}
          value={zipCodeValue}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          <img src={searchIcon} className="search-icon" alt="" />
        </button>
      </form>
      {loading && <LoadingData />}
      {showErro && <Error />}
      {showUl && <Uladdress />}
    </div>
  );
}
