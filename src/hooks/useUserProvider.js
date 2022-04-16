import { useState } from "react";

function useUserProvider() {
  const [zipCodeData, setZipCodeData] = useState([]);
  const [zipCodeValue, setZipCodeValue] = useState("");
  const [showUl, setShowUl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErro, setShowErro] = useState(false);

  return {
    zipCodeData,
    setZipCodeData,
    zipCodeValue,
    setZipCodeValue,
    showUl,
    setShowUl,
    loading,
    setLoading,
    showErro,
    setShowErro,
  };
}

export default useUserProvider;
