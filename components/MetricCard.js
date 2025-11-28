function MetricCard({ title, value, change, icon }) {
  try {
    const isPositive = change >= 0;
    
    return (
      <div className="metric-card" data-name="metric-card" data-file="components/MetricCard.js">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
            <div className={`icon-${icon} text-xl text-[var(--primary-color)]`}></div>
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-[var(--accent-color)]' : 'text-[var(--danger-color)]'}`}>
            <div className={`icon-${isPositive ? 'arrow-up' : 'arrow-down'} text-sm`}></div>
            {Math.abs(change)}%
          </div>
        </div>
        <h3 className="text-[var(--text-secondary)] text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-[var(--text-primary)]">{value}</p>
      </div>
    );
  } catch (error) {
    console.error('MetricCard component error:', error);
    return null;
  }
}