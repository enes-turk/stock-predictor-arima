import yfinance as yf
from statsmodels.tsa.arima.model import ARIMA
from flask import Flask, request, jsonify, render_template
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict_stock():
    data = request.json
    ticker = data['ticker']
    start_date = data['start_date']
    end_date = data['end_date']
    forecast_days = int(data['forecast_days'])
    p, d, q = map(int, data['arima_params'].split(','))

    # Fetch stock data
    stock_data = yf.download(ticker, start=start_date, end=end_date)
    
    # Prepare data for ARIMA model
    close_data = stock_data['Close'].values
    
    # Fit ARIMA model
    model = ARIMA(close_data, order=(p, d, q))
    results = model.fit()
    
    # Make forecast
    forecast = results.forecast(steps=forecast_days)
    
    # Prepare dates for historical data and forecast
    historical_dates = stock_data.index.strftime('%Y-%m-%d').tolist()
    last_date = datetime.strptime(end_date, '%Y-%m-%d')
    forecast_dates = [(last_date + timedelta(days=i+1)).strftime('%Y-%m-%d') for i in range(forecast_days)]
    
    # Prepare response
    response = {
        'historical_data': close_data.tolist(),
        'historical_dates': historical_dates,
        'forecast': forecast.tolist(),
        'forecast_dates': forecast_dates
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)