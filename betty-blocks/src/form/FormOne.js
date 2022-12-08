import React, { useState } from "react";

function FormOne(){
    const [name, setName] = useState({firstName: '', lastName:''})
    return(
        <form>
            <input
            type='text'
            value={name.firstname}
            onChange={e => setName({ ...name, firstName: e.target.value})}
            />
            <input
            type='text'
            value={name.lastName}
            onChange={e => setName({ ...name, lastName: e.target.value})}
            />
            
            <h2>The first name is: {name.firstName}</h2>
            <h2>The second name is: {name.lastName}</h2>
            
        </form>
    )
}

export default FormOne