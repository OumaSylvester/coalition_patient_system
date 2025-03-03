import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Patients from './components/Patients'
import PatientInfo from './components/PatientInfo'

function App() {
  const [patients, setPatients] = useState([]) 
  const [patientIndex, setPatientIndex] = useState(3);

  const  getData = () => {
    // Fetch data from API
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);

    fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    }).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
    }) .then(function (data) {
        setPatients(data);
        
    }).catch((error) => {
     console.error("Error fetching data:", error);
   });
 }

 
  useEffect(() => {
    getData()
  }, [])
    
  return (
    <div className="container-fluid bg-light m-3 main-container">
      <NavBar />
      <div className='row  mt-4 mx-auto'>
          <Patients patients={patients} setPatientIndex={setPatientIndex}/>
          {patients.length > 0 && <PatientInfo patient={patients[patientIndex]}/>}

      </div>
    </div>
     
    
  )
}

export default App
