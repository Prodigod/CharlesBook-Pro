// PriceWidget.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Draggable from "react-draggable";

const COINMARKETCAP_API_KEY = "c2073aaf-ba53-4ce0-a7e8-69236f995df6"; // Get this from https://pro.coinmarketcap.com/
const COINMARKETCAP_URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ADA`;

function PriceWidget() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true);
        const response = await axios.get(COINMARKETCAP_URL, {
          headers: {
            "X-CMC_PRO_API_KEY": COINMARKETCAP_API_KEY,
          },
        });
        const cardanoData = response.data.data.ADA.quote.USD.price.toFixed(2);
        setPrice(cardanoData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Cardano price:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchPrice();

    const interval = setInterval(() => {
      fetchPrice(); // Fetch every 1 minute
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Draggable>
      <div
        className="price-widget"
        style={{
          padding: "16px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          cursor: "move",
          width: "200px",
        }}
      >
        <h4 style={{ margin: 0, fontWeight: 600 }}>Cardano (ADA) Price</h4>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Failed to load price.</p>
        ) : (
          <p style={{ fontSize: "1.5rem", margin: 0 }}>${price} USD</p>
        )}
      </div>
    </Draggable>
  );
}

export default PriceWidget;
