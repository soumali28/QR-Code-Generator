import React, { useState } from "react";
import "../index.css";
import QrComponent from "./QrComponent";

const UrlComponent = () => {
  const [url, setUrl] = useState("");
  const [isValidUrl, setValidUrl] = useState(false);
  const urlRegex = /https:\/\//i;
  const handleUrl = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    setValidUrl(urlRegex.test(inputUrl));
  };

  return (
    <div className="qr_generator">
      <div className="qr_searchbox">
        <label>Enter the Url:</label>
        <input
          type="text"
          placeholder="https://www.example.com"
          value={url}
          onChange={handleUrl}
        />
        {url !== "" && !isValidUrl && <p>Enter valid url!</p>}
      </div>

      {url && isValidUrl && <QrComponent url={url} />}
    </div>
  );
};

export default UrlComponent;
