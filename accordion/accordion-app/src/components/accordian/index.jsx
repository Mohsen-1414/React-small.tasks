import { useState } from 'react';
import data from './data';
import './styles.css'

export default function Accordian (){
    const [selected, setSelected] = useState(null);
    const [multipleSelected, setMultipleSelected] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const [buttonLabel, setButtonLabel] = useState('Enable');

    function handleSingleSelection(currentId){
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultipleSelected (currentId){
        let copyMultiple = [...multiple];
        const indexOfCurrentId = copyMultiple.indexOf(currentId);
        if(indexOfCurrentId === -1) {
            copyMultiple.push(currentId)
        }else {
            copyMultiple.splice(indexOfCurrentId, 1)
        } 
        setMultiple(copyMultiple);
    }

    return (
        <div className="warpper">
            <button onClick={()=>{setMultipleSelected(!multipleSelected); 
                                  setButtonLabel((text)=> text === 'Enable'? 'Disable': 'Enable')}}
                                   className='btn-selector'>{buttonLabel} Multiple selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem =><div className="item">
                        <div onClick={multipleSelected 
                            ? () => handleMultipleSelected(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} 
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            multipleSelected ?
                            multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div>
                            : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                    </div>)
                    :<div className='noData'> data doesn not exist</div>
                }
            </div>
        </div>
    )
}