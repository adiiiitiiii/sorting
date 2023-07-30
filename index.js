const chartx = document.getElementById('animation');
const labelx = [10, 9, 8, 7, 6, 5, 4,5,6,56,67,56,34,23,8,3, 2, 1];

new Chart(chartx, {
    type: 'bar',
    data: {
        labels: labelx,
        datasets: [{
            label: '# of Votes',
            data: labelx,
            borderWidth: 1,
            backgroundColor: "#8A2BE2",
            barThickness: 10,
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Remove x-axis grid lines
                },
                barPercentage: 10,     
                categoryPercentage: 10
            },
            y: {
                grid: {
                    display: false // Remove y-axis grid lines
                },
                beginAtZero: true
                
                }
                
            }
           
    }
    
    
});