import React, { useState } from "react";
import "../App.css";

const Dog = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImage = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      if (data.status === "success") {
        setImageUrl(data.message);
      } else {
        throw new Error("Ошибка API");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="center">
      <h1>Собаки</h1>

      <button onClick={fetchImage} className="counter" disabled={loading}>
        {loading ? "Загрузка..." : "Показать собаку"}
      </button>

      <br />
      <br />

      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {imageUrl && !loading && (
        <img
          src={imageUrl}
          alt="Собака"
        />
      )}
    </div>
  );
};

export default Dog;
