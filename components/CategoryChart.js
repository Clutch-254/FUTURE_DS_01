const ChartJS2 = window.Chart;

function CategoryChart({ data }) {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    if (!chartRef.current || !data) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new ChartJS2(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.category),
        datasets: [{
          label: 'Revenue',
          data: data.map(d => d.revenue),
          backgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
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
      <div className="card" data-name="category-chart" data-file="components/CategoryChart.js">
        <h3 className="text-lg font-semibold mb-4">Revenue by Category</h3>
        <div style={{ height: '300px' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategoryChart component error:', error);
    return null;
  }
}