(function () {
  const container = document.currentScript.parentElement;

  container.innerHTML = `
    <div class="gc-widget" style="
      background:#ffffff;
      padding:20px;
      border-radius:12px;
      border:1px solid #ddd;
      max-width:400px;
      font-family:Arial;
    ">
      <h2 style="margin-top:0;font-size:22px;">Grade Calculator</h2>
      <p>Enter your score and total marks to calculate your grade instantly.</p>

      <input id="gc-score" placeholder="Score" style="width:100%;padding:10px;margin:5px 0;">
      <input id="gc-total" placeholder="Total Marks" style="width:100%;padding:10px;margin:5px 0;">

      <button id="gc-calc" style="width:100%;padding:10px 15px;margin:10px 0;background:black;color:white;border:0;border-radius:8px;">
        Calculate
      </button>

      <h3 id="gc-result"></h3>

      <p style="font-size:12px;color:#777;margin-top:15px;">
        Powered by <a href="https://example.com" target="_blank">example.com</a>
      </p>
    </div>
  `;

  const btn = container.querySelector("#gc-calc");
  btn.onclick = function () {
    let s = parseFloat(container.querySelector("#gc-score").value);
    let t = parseFloat(container.querySelector("#gc-total").value);

    if (isNaN(s) || isNaN(t) || t <= 0) {
      container.querySelector("#gc-result").innerText = "Invalid input.";
      return;
    }

    let percentage = (s / t) * 100;
    container.querySelector("#gc-result").innerText = `Percentage: ${percentage.toFixed(2)}%`;
  };
})();
