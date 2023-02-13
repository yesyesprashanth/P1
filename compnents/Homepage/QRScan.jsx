import React, { useState } from "react";
import QrReader from "react-qr-reader";

export default function QRScan(){
    const [result, setResult] = useState("No result");
      
    const handleScan = (data) => {
      if (data) {
        setResult(data);
      }
    };
    
    const handleError = (error) => {
      console.error(error);
    };

        
    return<>
        <div>Scan</div>
        <div>
          <QrReader 
          delay={300}
          onError = {handleError}
          onScan = {handleScan}
          />         
        </div>
    </>
}