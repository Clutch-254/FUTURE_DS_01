const ChartJS = window.Chart;

function SalesChart({ data }) {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    if (!chartRef.current || !data) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => d.date),
        datasets: [{
          label: 'Revenue',
          data: data.map(d => d.revenue),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => '$' + value.toLocaleString()
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  try {
    return (
      <div className="card" data-name="sales-chart" data-file="components/SalesChart.js">
        <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
        <div style={{ height: '300px' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SalesChart component error:', error);
    return null;
  }
}