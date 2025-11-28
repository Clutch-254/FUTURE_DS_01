function generateMockData(dateRange) {
  const days = dateRange === '7days' ? 7 : dateRange === '30days' ? 30 : dateRange === '90days' ? 90 : 365;
  
  const dailySales = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dailySales.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      revenue: Math.floor(Math.random() * 5000) + 2000
    });
  }

  const categories = [
    { category: 'Electronics', revenue: 45000 },
    { category: 'Clothing', revenue: 32000 },
    { category: 'Home & Garden', revenue: 28000 },
    { category: 'Sports', revenue: 22000 },
    { category: 'Books', revenue: 15000 }
  ];

  const products = [
    { name: 'Wireless Headphones', category: 'Electronics', unitsSold: 1250, revenue: 62500 },
    { name: 'Smart Watch Pro', category: 'Electronics', unitsSold: 890, revenue: 53400 },
    { name: 'Running Shoes', category: 'Sports', unitsSold: 1120, revenue: 44800 },
    { name: 'Yoga Mat Premium', category: 'Sports', unitsSold: 780, revenue: 23400 },
    { name: 'Coffee Maker Deluxe', category: 'Home & Garden', unitsSold: 560, revenue: 22400 },
    { name: 'Designer T-Shirt', category: 'Clothing', unitsSold: 1450, revenue: 21750 },
    { name: 'LED Desk Lamp', category: 'Home & Garden', unitsSold: 920, revenue: 18400 },
    { name: 'Bluetooth Speaker', category: 'Electronics', unitsSold: 670, revenue: 16750 }
  ];

  return {
    totalRevenue: 142000,
    revenueChange: 12.5,
    totalOrders: 3240,
    ordersChange: 8.2,
    avgOrderValue: 43.83,
    aovChange: 5.3,
    conversionRate: 3.2,
    conversionChange: -1.2,
    dailySales,
    categoryRevenue: categories,
    topProducts: products
  };
}