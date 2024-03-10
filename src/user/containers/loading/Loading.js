import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function Loading(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {

        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {
                data.map((v) => (
                    <div>
                        <h1>{v.text}</h1>
                        <h2>{v.author}</h2>
                    </div>
                ))
            }



        </div>
    );
}

export default Loading;
