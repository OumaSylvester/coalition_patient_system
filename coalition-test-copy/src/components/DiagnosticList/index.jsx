import { Table } from 'react-bootstrap';


const DiagnosticList = ({diagnosticList}) => {
    return (
        <div class="row bg-white mt-3 ml-1 mr-1 p-3 rounded-radius">
            <h4 className='mb-3 h4 font-weight-bold'>Diagnostic List</h4>
            <div className="table-responsive  diagnostic-list-container scrollable-container">
            <table className="table table-borderless caption-top" hover responsive>
                <thead className='rounded-pill table-header'>
                    <tr className=''>                    
                        <th>Problem/Diagnosis</th>
                        <th>Decription</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {diagnosticList?.map((diagnosis, index) => (
                        <tr  className='' key={index}>
                            <td>{diagnosis.name}</td>
                            <td>{diagnosis.description}</td>
                            <td>{diagnosis.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default DiagnosticList;