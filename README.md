# E-Commerce Sales Dashboard
    2 
    3 This project is an interactive e-commerce sales dashboard built with React and Tailwind CSS. It provides a
      comprehensive overview of sales data, including key metrics, sales trends, and top-selling products.
    4 
    5 ## Features
    6 
    7 -   **At-a-glance Metrics**: Key performance indicators (KPIs) such as Total Revenue, Total Orders, Average Order
      Value, and Conversion Rate are prominently displayed.
    8 -   **Sales Trends**: A line chart visualizes daily sales data, allowing for easy identification of trends and
      patterns.
    9 -   **Category Performance**: A doughnut chart shows the revenue distribution across different product categories.
   10 -   **Top Products**: A table lists the best-selling products, including their price, number of sales, and total
      revenue.
   11 -   **Date Range Filtering**: The dashboard data can be filtered by different date ranges (e.g., last 30 days).
   12 
   13 ## Technologies Used
   14 
   15 -   **React**: For building the user interface.
   16 -   **Tailwind CSS**: For styling the application.
   17 -   **Chart.js**: For creating the charts.
   18 -   **Lucide Icons**: For the icons used in the dashboard.
   19 
   20 ## How to Run
   21 
   22 To run this project, you need a local web server. You can use any simple server, like Python's built-in HTTP
      server.
   23 
   24 1.  **Navigate to the project directory**:
      cd FUTURE_DS_01

   1 
   2 2.  **Start a local web server**:
   3     If you have Python 3, you can run:
      python -m http.server
   1     If you have Python 2, you can run:
      python -m SimpleHTTPServer

   1 
   2 3.  **Open the dashboard in your browser**:
   3     Navigate to `http://localhost:8000` (or the address provided by your web server) in your web browser.
   4 
   5 ## File Structure
  .
  ├── app.js                  # Main React application component
  ├── components/             # Directory for React components
  │   ├── CategoryChart.js    # Chart for category-wise revenue
  │   ├── Header.js           # Dashboard header
  │   ├── Icon.js             # Icon component
  │   ├── MetricCard.js       # Card for displaying a single metric
  │   ├── ProductTable.js     # Table for top products
  │   └── SalesChart.js       # Chart for daily sales
  ├── index.html              # Main HTML file
  ├── trickle/                # Additional project files
  └── utils/                  # Directory for utility functions
      └── mockData.js         # Generates mock data for the dashboard
