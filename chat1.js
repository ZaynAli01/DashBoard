const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Youtube', 'Facebook', 'Instagram'],
        datasets: [{
            label: '# of Votes',
            data: [19, 9, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
     Responsive:true
    }
});


const myChart2 = document.getElementById('myChart2').getContext('2d');
const myChart3 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: ['jan', 'Feb', 'Mar','apr', 'May', 'June','july','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: '# of Votes',
            data: [19, 9, 14 ,17,7,13,11,16,15,17,19,14],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
        }]
    },
    options: {
     Responsive:true
    }
});