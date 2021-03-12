import axios from 'axios';
import React, { ReactElement } from 'react';
import {useForm} from 'react-hook-form';

interface Props {
    
}

interface Goal {
    name: string;
}

export default function CreateGoal({}: Props): ReactElement {

    const {register, handleSubmit} = useForm<Goal>();

    const showFormValues = (formValues: Goal) => {
        axios.post(`https://localhost:44383/api/Goal/create`, formValues);
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(showFormValues)}>
                <input ref = {register} name = "Name" type = "text"/>
                <button type = "submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
