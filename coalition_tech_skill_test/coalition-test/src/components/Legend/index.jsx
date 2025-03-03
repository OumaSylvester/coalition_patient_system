const Legend = ({ labels }) => {
    return (
        <div className="legend">
            {labels.map((label, index) =>{
                console.log('Label', label)
                return (
                <div key={index} className="legend-item">
                    <div className={`legend-label ${label.name}`}>
                        <div className="media">
                                <div className="media-body">
                                    <img src={`assets/${label.name}-icon.svg`} className={`legend-icon`}/>
                                    <span className="font-weight-bold legend-text">{label.name}</span>
                                </div>
                            </div>                           
                    </div>
                    <div className="label-data">
                        <span className="font-weight-bold legend-text legend-levels">{label.value}</span>
                        <div className="media pt-2">
                            <div className="media-body">
                                <img src={`assets/${label.name === 'Systolic'? 'ArrowUp.svg' : 'ArrowDown.svg'}`} alt="Up" className="pr-2"/>
                                <span >{label.levels}</span>
                            </div>
                        </div>
                    </div>
                    {label.name === 'Systolic' && <hr />}
                </div>
            )})}
        </div>
    );
};

export default Legend;