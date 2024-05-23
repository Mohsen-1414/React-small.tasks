import { useState } from "react"


function RandomColor(){

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function utility(lenght){
        return Math.floor(Math.random()*lenght)
    }


    function handleCreateRandomHexColor(){
        const hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        let hexColor = '#';

        for(let i=0; i<6; i++){
            hexColor += hex[utility(hex.length)]
        }
        setColor(hexColor);
    }
    
    function handleCreateRandomRgbColor(){
        const r = utility(256);
        const g = utility(256);
        const b = utility(256);
        const rgbColor = `rgb(${r},${g},${b})`;
        
        setColor(rgbColor);
    }

    return <div style={{
        width: "100vw", 
        height: "100vh", 
        background:color
    }}>
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random color </button>
        <div style={{
            display:"flex",
            justifyContent: 'center',
            alignItems:'center',
            margin:'50px',
            color: 'white'
        }}>
            <h3>{typeOfColor === 'rgb'? 'RGB': 'HEX'}</h3><br/>
            <h1>{color}</h1>
        </div>
    </div>
};

export default RandomColor