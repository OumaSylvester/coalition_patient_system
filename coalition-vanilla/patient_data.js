
function init(){
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
        console.log('data', data);
        updateChart(data);
        
    })
}
init();
function updateChart(chartData){
    const ctx = document.getElementById('diagnosisChart');
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}