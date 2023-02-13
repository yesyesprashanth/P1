import React, { useState } from "react";
import QrReader from "react-qr-reader";
import {Button, Card, CardContent, Typography} from '@mui/material'
import styles from '../../styles/QRScan.module.css';

const QRScanMUI = () => {
  const [result, setResult] = useState("No result");
  const [scanning, setScanning] = useState(false);
  
  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setScanning(false);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const startScanning = () => {
    setScanning(true);
  };

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography variant="h5">QR Code Scanner</Typography>
        {scanning ? (
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            className={styles.camera1}
          />
        ) : (
          <div>
            <Typography variant="body1">
              Scan a QR code to get the result.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={startScanning}
            >
              Start Scanning
            </Button>
          </div>
        )}
        {result && <Typography variant="body1">Result: {result}</Typography>}
      </CardContent>
    </Card>
  );
};

export default QRScanMUI;