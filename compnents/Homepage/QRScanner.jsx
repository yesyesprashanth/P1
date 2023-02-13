import { useState, useRef } from "react";
import styles from '../../styles/QRScan.module.css';
import QrReader from 'react-qr-reader';

export default function QRScanner(){
    const qrRef = useRef(null);
    const [fileResult, setFileResult] = useState();

    function handleOpenDialoge(){
        qrRef.current.openImageDialog();
    }

    function handleReadError(error){
        if(error)console.error(error)
    }

    function handleRead(result){
        if(result)setFileResult(result)
    }

    return<>
        <div className = {styles.scancontainer}>            
            <div className = {styles.camera}>
                <QrReader 
                ref={qrRef} 
                delay = {300} 
                onError={handleReadError} 
                onScan = {handleRead} 
                legacyMode = {true} 
                />
            </div>
            <div className = {styles.scancontrol}>
                <button onClick={handleOpenDialoge} className ={styles.btnQR}>Scan QR</button>            
                <div className={styles.result}>Qr Result : {fileResult}</div>
            </div>
        </div>
    </>
}