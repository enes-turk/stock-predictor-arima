let chart;

document
  .getElementById("predictionForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      ticker: document.getElementById("ticker").value,
      start_date: document.getElementById("startDate").value,
      end_date: document.getElementById("endDate").value,
      forecast_days: document.getElementById("forecastDays").value,
      arima_params: document.getElementById("arimaParams").value,
    };

    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Destroy the existing chart if it exists
      if (chart) {
        chart.destroy();
      }

      // Create new chart
      chart = new Chart(document.getElementById("predictionChart"), {
        type: "line",
        data: {
          labels: [...data.historical_dates, ...data.forecast_dates],
          datasets: [
            {
              label: "Historical Data",
              data: data.historical_data,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
              pointRadius: 0,
            },
            {
              label: "Forecast",
              data: [
                ...Array(data.historical_data.length).fill(null),
                ...data.forecast,
              ],
              borderColor: "rgb(255, 99, 132)",
              borderDash: [5, 5],
              tension: 0.1,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `Stock Data and Forecast for ${formData.ticker}`,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
