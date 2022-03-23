import React, {useState, useEffect,forwardRef,useImperativeHandle} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CancelIcon from '@mui/icons-material/Cancel';
// scss are in _addProduct.scss
const SpecDetails = forwardRef(({placehold,giveSpecs},ref) => {
    const [changeFocus,setChangeFocus] = useState("")
    let [addSpec, setAddSpec] = useState([])
    let [filteredArray, setFilteredArray] = useState([]);

    useEffect(()=>{giveSpecs(addSpec)},[filteredArray]);

    useImperativeHandle(ref, ()=>({
        clearSpecs(){
            setAddSpec([]);
            setFilteredArray([]);
        }
    }))
    
    const renderSpec = () => {
            setFilteredArray(addSpec.map((specification)=>{return (<div style={{display:"flex",alignContent:"center"}} key={specification}>
                    <div className='spec-name'>{specification}</div>
                    <div className='spec-cancel-icon'><CancelIcon style={{fontSize:"20px"}} onClick={()=>{delSpec(specification)}}/></div>
                </div>)}))
    }

    const addSpecItem = () => {
        changeFocus!=="" && changeFocus!==" " && addSpec.push(changeFocus);
        setAddSpec(addSpec);
        renderSpec();
        setChangeFocus("");
    }

    const delSpec = (val) => {
        let ind = addSpec.indexOf(val);
        addSpec.splice(ind,1);
        setAddSpec(addSpec);
        renderSpec();
    }


    

    return (
        <div>
            <div className="spec-item">
                {filteredArray.map((item)=>{return item})}
            </div>
            <div className='add-spec'>
                <input type='text' 
                       placeholder={placehold}
                       value={changeFocus} 
                       onChange={(e)=>{setChangeFocus(e.target.value)}} />
                <div className='add-spec-btn' onClick={addSpecItem}>
                    <AddCircleOutlineIcon />
                </div>
            </div>
        </div>

    )
})

export default SpecDetails