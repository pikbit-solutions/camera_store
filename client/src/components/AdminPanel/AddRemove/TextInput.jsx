import React,{useState} from 'react'

const TextInput = () => {
    const [changeFocus,setChangeFocus] = useState("")

    const getFocus = () => {
        setChangeFocus(Event.AT_TARGET.value)
    }

  return (
    <div>
        <input type='text' value={changeFocus} onChange={getFocus}></input>
    </div>
  )
}

export default TextInput