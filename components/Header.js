function Header({ dateRange, onDateRangeChange }) {
  try {
    return (
      <header className="bg-[var(--bg-primary)] border-b border-[var(--border-color)] sticky top-0 z-10" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-chart-bar text-xl text-[var(--primary-color)]"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">Sales Dashboard</h1>
                <p className="text-sm text-[var(--text-secondary)]">E-Commerce Analytics</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <select 
                value={dateRange} 
                onChange={(e) => onDateRangeChange(e.target.value)}
                className="px-4 py-2 border border-[var(--border-color)] rounded-lg bg-white text-sm"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}