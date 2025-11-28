function ProductTable({ products }) {
  try {
    return (
      <div className="card" data-name="product-table" data-file="components/ProductTable.js">
        <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-3 px-2 text-sm font-semibold text-[var(--text-secondary)]">Rank</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-[var(--text-secondary)]">Product</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-[var(--text-secondary)]">Category</th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-[var(--text-secondary)]">Units Sold</th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-[var(--text-secondary)]">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)]">
                  <td className="py-3 px-2">
                    <span className="font-bold text-[var(--primary-color)]">#{index + 1}</span>
                  </td>
                  <td className="py-3 px-2 font-medium">{product.name}</td>
                  <td className="py-3 px-2 text-[var(--text-secondary)]">{product.category}</td>
                  <td className="py-3 px-2 text-right">{product.unitsSold.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right font-semibold">${product.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductTable component error:', error);
    return null;
  }
}