import { Table } from 'react-bootstrap';


const DiagnosticList = ({diagnosticList}) => {
    return (
        <div class="row bg-white mt-5 ml-1 mr-1 p-3 rounded-radius">
            <h4 className='mb-4 mt-2 h4 font-weight-bold'>Diagnostic List</h4>
            <div className="table-responsive  diagnostic-list-container scrollable-container">
                <table className="table rounded-pill table-borderless">
                    <thead className='mb-4'>
                        <tr className=''>                    
                            <th className='pl-3 th-rounded'>Problem/Diagnosis</th>
                            <th>Decription</th>
                            <th className='mr-3 th-rounded-last'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='ml-4'>
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