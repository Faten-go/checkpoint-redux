import React, { useState } from 'react';
import Task from '../Task/Task';
import { useSelector } from "react-redux";
import { CustomInput } from 'reactstrap';


function ListTask() {  

    const tasks = useSelector((state) => state);
    const [ filterCompleted , setFilterCompleted ] = useState(false);

    const activateFilter = () => setFilterCompleted(true);
    const desactivateFilter = () => setFilterCompleted(false);

    function customInputSwitched () {
      
      if (filterCompleted) {
        activateFilter();
      } else {
        desactivateFilter();
      }   
    
    };

    return (

      <div className="my-3">
        {tasks.map((el) => {
          if (!filterCompleted) {
            return <Task key={el.id} task={el} />;
          } else {
            return (el.isCompleted? '': <Task key={el.id} task={el} />)
          }

        })
        // .filter((el) =>
        //   !el.isCompleted
        // )
        }

        <div style={{ display: "flex", justifyContent: "left" }}>
          <CustomInput type="switch" id="switchFilter" name="switchFilter" label="Filter non completed Tasks" 
              onClick={(e) => {
                customInputSwitched();
              }}
          />
        </div>
      </div>

);

  
}

export default ListTask
