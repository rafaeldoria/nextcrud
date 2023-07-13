import { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
    client: Client,
    changeClient?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps){
    const id = props.client?.id
    
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? '')
    const [email, setEmail] = useState(props.client?.email ?? '')
    return (
        <div>
            {id ? (
                <Input readonly text="number" value={id} type="text"/>
            ) : false}

            <Input text="Name" value={name} type="text" changeValue={setName} className="mb-4"/>

            <Input text="Age" value={age} type="number" changeValue={setAge} className="mb-4"/>

            <Input text="Email" value={email} type="text" changeValue={setEmail} className="mb-4"/>

            <div className="flex justify-end mt-3">
                <Button collor="blue" className="mr-2" 
                    onClick={() => props.changeClient?.(
                        new Client(name, +age, email, id)
                    )}
                >
                    {id ? 'Edit' : 'Save'}
                </Button>
                <Button collor="orange" onClick={props.canceled}>
                    Cancel 
                </Button>
            </div>
        </div>
    )
}