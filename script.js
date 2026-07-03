const form = document.getElementById("waitlistForm");
const message = document.getElementById("message");

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxKOLL6idhmVyGlLbcA6wvAoW7sMO_Y_e5wGFzi3_vBts-ujTxjAtLBUm-XLpbaf-NhAg/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();

    message.innerHTML = "✅ Successfully joined!";
    form.reset();
  } catch (err) {
    message.innerHTML = "❌ Something went wrong.";
  }
});
