import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import Legend from "../Legend";

const DiagnosisHistory = ({diagnosisHistory}) => {
    const [systolicLable, setsystolicLable] = useState({'name': 'Systolic', value: 0, level: ''});
    const [diastolicLable, setDiastolicLabel] = useState({'name': 'Diastolic', value: 0, level: ''});
    diagnosisHistory = diagnosisHistory.slice(0, 6);

    ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);    

    const makeChartData = () => {
        let systolic = [];
        let diastolic = [];
        let  period = []

        diagnosisHistory?.map((history, index) => {
            systolic.push(history.blood_pressure.systolic.value);
            diastolic.push(history.blood_pressure.diastolic.value);
            period.push(history.month.slice(0, 3) + ', ' + history.year);
            if(systolicLable.value < history.blood_pressure.systolic.value){
                setsystolicLable({...history.blood_pressure.systolic, 'name': 'Systolic'})
            }
            if(diastolicLable.value < history.blood_pressure.diastolic.value){
                setDiastolicLabel({...history.blood_pressure.diastolic, 'name': 'Diastolic'})
            }
            
        })
       
        const data = {
            labels: period,
            datasets: [
                {
                  label: 'Systolic',
                  data: systolic,
                  backgroundColor: '#E66FD2',    
                  borderColor: '#E66FD2',              
                  borderWidth: 1,
                  tension: 0.4
                },
                {
                    label: 'Diastolic',
                    data: diastolic,
                    backgroundColor: "#8C6FE6",
                    borderColor: "#8C6FE6",
                    borderWidth: 1,
                    tension: 0.4,
                  }
            ]
        }
       
        return data;
    }
    
    return (
        <div className="row bg-white ml-0  mx-auto rounded-radius">
            <div className="ro  mt-0  pb-0  chart-container">
                <h4 class="row h4 m-3 pt-0 font-weight-bold">Diagnosis History</h4>
                <div class="row rounded-radius line-chart m-3"> 
                    <div className="col-9">    
                        <div className="row mt-3">
                            <h5 className="col-8">Blood Pressure</h5>   
                            <p className="small">                              
                                <span className="mr-1">Last 6 months</span>
                                <img src="assets/ArrowDown.svg" alt="Heart Beat Rate" class=""/>
                            </p>
                        </div>
                                       
                        <Line
                            data={makeChartData()}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: false,
                                    },
                                    legend: {
                                        display: false,                                                 
                                    }
                                },
                                scales: {
                                    y: {
                                        min: 60,
                                        fontWeight: 'regular',
                                        ticks: {
                                            stepSize: 20, 
                                        }
                                    }
                                }
                            }}
                        />     
                    </div>     
                    <div className="col-3">
                            <Legend labels={[systolicLable, diastolicLable]}/>
                    </div>        
                </div>
            </div>
            
            <div class="row mx-auto pb-4">
                <div class="col card pt-2 mr-3 border-0 rounded-radius diagnosis-card respiratory">
                    <img src="assets/respiratory rate.svg" alt="respiratory rate" class="card-img-top  diagnosis-card-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Respiratory Rate</h5>
                        <p className="card-text font-weight-bold">{diagnosisHistory[0].respiratory_rate.value} bpm</p>
                        <p className="card-text">{diagnosisHistory[0].respiratory_rate.levels}</p>
                    </div>
                    
                </div>
                <div class="col card pt-2 mr-3 border-0 rounded-radius diagnosis-card temperature">
                    <img src="assets/temperature.svg" alt="Temperature" class="card-img-top diagnosis-card-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Temperature</h5>
                        <p className="card-text font-weight-bold">{diagnosisHistory[0].temperature.value}<sup>o</sup>F</p>
                        <p className="card-text">{diagnosisHistory[0].temperature.levels}</p>
                    </div>
                    
                </div>
                <div class="col card pt-2 border-0 rounded-radius diagnosis-card heart-rate">
                    <img src="assets/HeartBPM.svg" alt="Heart Beat Rate" class="card-img-top  diagnosis-card-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Heart Rate</h5>
                        <p className="card-text font-weight-bold">{diagnosisHistory[0].heart_rate.value}</p>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img src="assets/ArrowDown.svg" alt="Heart Beat Rate" class=""/>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p className="card-text pl-1">{diagnosisHistory[0].heart_rate.levels}</p>                                
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}

export default DiagnosisHistory;