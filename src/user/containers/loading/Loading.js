import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Loading(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const handleClose = () => {
        setLoading(false);
    };


    const getData = async () => {
  
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();
            setData(data);
            setTimeout(()=>{
                setLoading(false);
            }, 3000);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
        { loading ? (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            ) : (
                data.map((v, index) => (
                    <div key={index}>
                        <h1>{v.text}</h1>
                        <h2>{v.author}</h2>
                    </div>
                ))
            )}
        </div>
    );
}

export default Loading;
