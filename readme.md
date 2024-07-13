# Stock Price Forecaster with ARIMA Model

## Purpose

This project is a web application that allows users to forecast stock prices using the ARIMA (AutoRegressive Integrated Moving Average) model. It provides a user-friendly interface for inputting stock data parameters and visualizes both historical data and forecasted prices.

## Features

- Fetch historical stock data using a specified ticker symbol and date range
- Apply ARIMA model for time series forecasting
- Visualize historical and forecasted stock prices using an interactive chart
- User-friendly web interface for easy interaction

## Tools and Libraries

- **Python**: The core programming language used for backend development
- **Flask**: A micro web framework for Python, used to create the web application
- **yfinance**: A library to fetch stock data from Yahoo Finance
- **statsmodels**: Used for implementing the ARIMA model
- **Chart.js**: A JavaScript library for creating interactive charts
- **HTML/CSS/JavaScript**: For frontend development

## Methodology

1. **Data Retrieval**: The application uses yfinance to fetch historical stock data based on user input.
2. **ARIMA Modeling**: The fetched data is then fed into an ARIMA model, which is fitted using the specified parameters.
3. **Forecasting**: The fitted ARIMA model is used to forecast future stock prices for the specified number of days.
4. **Visualization**: Both historical and forecasted data are visualized using Chart.js, providing an intuitive representation of the stock's price trend.

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/stock-price-forecaster.git
   cd stock-price-forecaster
   ```

2. Install the required Python packages:

   ```
   pip install flask yfinance statsmodels
   ```

3. Run the Flask application:

   ```
   python app.py
   ```

4. Open a web browser and navigate to `http://localhost:5000` to use the application.

## Usage

1. Enter the stock ticker symbol (e.g., AAPL for Apple Inc.)
2. Specify the start and end dates for historical data
3. Enter the number of days to forecast
4. Input the ARIMA parameters (p, d, q)
5. Click "Predict" to generate the forecast and view the chart

## Project Structure

- `app.py`: The main Flask application file
- `templates/index.html`: The HTML template for the web interface
- `static/script.js`: JavaScript file for handling user interactions and chart rendering
- `static/styles.css`: CSS file for styling the web interface

## What I Learned

Through this project, I gained experience in:

1. Implementing time series forecasting using the ARIMA model
2. Integrating Python backend (Flask) with a JavaScript frontend
3. Working with financial data using the yfinance library
4. Creating interactive visualizations with Chart.js
5. Designing a user-friendly web interface for data input and result display
6. Handling asynchronous operations in JavaScript for smooth user experience

## Future Improvements

- Implement error handling and input validation
- Add support for multiple stock comparisons
- Incorporate more advanced forecasting models (e.g., SARIMA, Prophet)
- Optimize performance for handling larger datasets
- Add user authentication and the ability to save forecasts

## Live Test

Currently, only the frontend live test is accessible at [www.enesturk.com/stock-predictor-arima](http://www.enesturk.com/stock-predictor-arima). Unfortunately, the backend is temporarily unavailable due to hosting limitations but will be restored soon. Thank you!
