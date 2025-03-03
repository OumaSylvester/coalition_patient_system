import { ListGroup, Image } from "react-bootstrap";

const PatientProfile = ({patient}) => {
    return(
            <div>
                <div className="ro bg-white rounded-radius mb-4">               
                    <div class="col-12 rounded-radius border-0 card">
                        <img src={patient.profile_picture} class="card-img-top profile-picture pt-4 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold text-center">{patient.name}</h5>
                            <div id="">
                                <div class="media pt-1">
                                    <img src="assets/BirthIcon.svg" alt="Date of birth" class="mr-3"/>
                                    <div class="media-body">
                                        <p class="mt-1 pb-0  mb-0">Date of birth</p>
                                        <span class="font-weight-bold">{patient.date_of_birth}</span>
                                    </div>
                                </div>
                                <div class="media pt-2">
                                    <img src="assets/FemaleIcon.svg" alt="Gender" class="mr-3"/>
                                    <div class="media-body">
                                        <p class="mt-1  pb-0  mb-0">Gender</p>
                                        <span class="font-weight-bold">{patient.gender}</span>
                                    </div>
                                </div>
                                <div class="media pt-2">
                                    <img src="assets/PhoneIcon.svg" alt="Contact Info" class="mr-3"/>
                                    <div class="media-body">
                                        <p class="mt-1 pb-0  mb-0">Contact Info</p>
                                        <span class="font-weight-bold">{patient.phone_number}</span>
                                    </div>
                                </div>
                                <div class="media pt-2">
                                    <img src="assets/PhoneIcon.svg" alt="Emergency Contact" class="mr-3"/>
                                    <div class="media-body">
                                        <p class="mt-1   pb-0  mb-0">Emergency Contact</p>
                                        <span class="font-weight-bold">{patient.emergency_contact}</span>
                                    </div>
                                </div>
                                <div class="media pt-2">
                                    <img src="assets/InsuranceIcon.svg" alt="Insurance Provider" class="mr-3"/>
                                    <div class="media-body">
                                        <p class="mt-1   pb-0  mb-0">Insurance provider</p>
                                        <span class="font-weight-bold">{patient.insurance_type}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p class="row mt-3 mx-auto  card-text"><a href="#" class="btn active p-2 px-4 rounded-pill">Show All Information</a></p>
                            
                        </div>
                    </div>
                </div>
                <div class="ro bg-white mt-3 rounded-radius border-0 ">
                    <h4 class="h4 pt-3 pl-3 font-weight-bold">Lab Results</h4>
                    <ListGroup variant="flush" className="scrollable-container lab-results-container">
                        {
                            patient.lab_results.map((result, index) => {
                            return (
                                <ListGroup.Item  className="d-flex p-3 border-0 justify-content-between align-items-end">
                                    <div className="d-flex align-items-start">
                                        <p className="mb-0 small">{result}</p>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <Image 
                                            src="assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                                            alt="Download"
                                        />  
                                    </div>                                                                        
                                </ListGroup.Item>                                
                            )})
                        }
                    </ListGroup>                      
                </div>                   
            </div>
    )
}

export default PatientProfile;