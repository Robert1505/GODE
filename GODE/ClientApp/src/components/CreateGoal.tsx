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
        console.log(formValues);
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
