import React from "react";

const getApiUrl = () => {
  let apiUrl = "";
  if (process.env.REACT_APP_API_URL) {
    apiUrl = process.env.REACT_APP_API_URL;
  } else {
    apiUrl = import.meta.env.VITE_API_URL;
  }
  return apiUrl;
};

export default function Demo() {
  const apiUrl = getApiUrl();
  return (
    <div>
      <h2>
        From Demo Component <br />
        {apiUrl}
      </h2>
    </div>
  );
}
