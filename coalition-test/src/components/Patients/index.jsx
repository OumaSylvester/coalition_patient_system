import { useEffect, useState } from "react";
import { ListGroup, Image, Dropdown, Badge } from 'react-bootstrap';

const Patients = ({patients,  setPatientIndex}) => {
    const [activeId, setActiveId] = useState(3);
   
    const handleClick = (e)=>{
        let target =  null;      
        target = e.currentTarget;     
        setActiveId(target.id);  
        setPatientIndex(target.id);        
    }


    return (
                <div class="col  bg-white  mr-3 rounded-radius  patient-list-container scrollable-container">
                    <div class="row pl-2 pt-3">
                       <h4 className="h4 col-10 font-weight-bold">Patients</h4>
                       <div class="pt-2">
                            <img src="assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="Search" class=""/>
                       </div>
                    </div>
                    <ListGroup variant="flush" className="pb-3 patient-list">
                        {patients?.map((patient, index)=>{
                            return (                                
                                    <ListGroup.Item  className={`d-flex border-0 justify-content-between align-items-start cursor-pointer ${index == activeId? 'activePatient' : ''}`} id={index} onClick={handleClick}>
                                        <div className="d-flex align-items-center">
                                            <Image 
                                                src={patient.profile_picture}  
                                                alt={patient.name} 
                                                width="48" 
                                                height="48"
                                            />
                                            <div className="pl-2">
                                                <h5 className="mb-0 small font-weight-bold">{patient.name}</h5>
                                                <small className="text-muted">{patient.gender}, {patient.age}</small>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">                                                     
                                            <Image 
                                                src="assets/more_horiz.svg" 
                                                className="pt-2" 
                                                alt="more" 
                                            />
                                        </div>
                                    </ListGroup.Item>                               
                            ) 
                         })
                        }
                        </ListGroup>                                 
                </div>
    )
}

export default Patients;
