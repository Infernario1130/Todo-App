import React,{useState} from "react"

export function TodoCreator() {
    const [Id,setId] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")
    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleChange2(e) {
        setDescription(e.target.value)
    }

    function handleChange3(e) {
        setId(e.target.value)
    }

    async function ClickHandler(){
        const data = {id: Id, title: title, description: description}
        try {const response =  await fetch("http://localhost:3000/todo",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            const result = await response.json();
            console.log(result)
        } catch(error) {
            console.error("Something went wrong: ",error)
        }
    }

    return(
        <>
        <input type="text" placeholder="Enter the Id." onChange={handleChange3}></input> <br></br>
        <input type="text" placeholder="Enter the title." onChange={handleChange}></input> <br></br>
        <input type="text" placeholder="Enter the description" onChange={handleChange2}></input> <br></br>
        <button onClick={ClickHandler}>Add Todo</button>
        </>
    )
}