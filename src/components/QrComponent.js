import React from "react";
import "../index.css";
import QRCode from "react-qr-code";

const QrComponent = ({url}) => {
  return (
    <div className="qr_code">
      <h3>QR code</h3>
      <div className="qr">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={url}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default QrComponent;
