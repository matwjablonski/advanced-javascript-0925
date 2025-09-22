export function renderChart() {
  const chart = document.createElement("div");
  chart.textContent = "🟢 Wykres został załadowany!";
  chart.style.fontSize = "24px";
  chart.style.marginTop = "20px";
  document.body.appendChild(chart);
  console.log("charts.js załadowany i uruchomiony");
}