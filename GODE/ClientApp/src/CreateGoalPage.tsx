import React, { ReactElement } from 'react';
import CreateGoal from './components/CreateGoalComponents/CreateGoal';
import NavMenu from './components/CreateGoalComponents/NavMenu';


interface Props {
    
}


export default function CreateGoalPage({}: Props): ReactElement {

    

    return (
        <div>
           <NavMenu />
           <CreateGoal />
        </div>
    )
}