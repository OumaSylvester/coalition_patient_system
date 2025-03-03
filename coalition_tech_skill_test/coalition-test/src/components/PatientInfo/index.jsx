import { useEffect} from "react";
import DiagnosisHistory from "../DiagnosisHistory";
import DiagnosticList from "../DiagnosticList";
import PatientProfile from "../PatientProfile";

const PatientInfo = ({patient}) => {
    useEffect(() => {
        
    }, [patient])
   
    return (
        <>
            <div className="col-6 pl-3 mb- patient-info">
                <DiagnosisHistory diagnosisHistory={patient?.diagnosis_history}/>  
                <DiagnosticList diagnosticList={patient?.diagnostic_list}/> 
            </div>
            <div className="col-3 border-0">
                <PatientProfile patient={patient} />
            </div>
        </>       
    )
}

export default PatientInfo;