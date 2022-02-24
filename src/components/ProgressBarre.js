import React, { useEffect, useState } from 'react';

const ProgressBarre = ({done}) => {

    const [style, setStyle] = useState({});

    useEffect(()=>{

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width:`${done}%`
            }
            setStyle(newStyle);
        },100);

    },[])


    return (
        <div>
             <div className='progress'>
                <div className='progressDone' style={style}></div>
             </div>
            
        </div>
    );
};

export default ProgressBarre;