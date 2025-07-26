document.getElementById("chat-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");
  output.textContent = "Generando...";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  output.textContent = data.result || "No se pudo generar.";
});
