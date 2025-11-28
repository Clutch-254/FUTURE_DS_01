class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [dateRange, setDateRange] = React.useState('30days');
    const [salesData, setSalesData] = React.useState(null);

    React.useEffect(() => {
      const data = generateMockData(dateRange);
      setSalesData(data);
    }, [dateRange]);

    if (!salesData) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
      <div className="min-h-screen bg-[var(--bg-secondary)]" data-name="app" data-file="app.js">
        <Header dateRange={dateRange} onDateRangeChange={setDateRange} />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Total Revenue" 
              value={`$${salesData.totalRevenue.toLocaleString()}`}
              change={salesData.revenueChange}
              icon="dollar-sign"
            />
            <MetricCard 
              title="Total Orders" 
              value={salesData.totalOrders.toLocaleString()}
              change={salesData.ordersChange}
              icon="shopping-cart"
            />
            <MetricCard 
              title="Avg Order Value" 
              value={`$${salesData.avgOrderValue}`}
              change={salesData.aovChange}
              icon="trending-up"
            />
            <MetricCard 
              title="Conversion Rate" 
              value={`${salesData.conversionRate}%`}
              change={salesData.conversionChange}
              icon="target"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <SalesChart data={salesData.dailySales} />
            <CategoryChart data={salesData.categoryRevenue} />
          </div>

          <ProductTable products={salesData.topProducts} />
        </main>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);