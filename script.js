const form = document.getElementById("waitlistForm");
const message = document.getElementById("message");

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxKOLL6idhmVyGlLbcA6wvAoW7sMO_Y_e5wGFzi3_vBts-ujTxjAtLBUm-XLpbaf-NhAg/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        role,
      }),
    });

    const data = await response.json();

    if (data.success) {
      message.textContent = "🎉 You're on the SwiftCab waitlist!";
      form.reset();
    } else {
      message.textContent = data.message;
    }
  } catch (error) {
    message.textContent = "Something went wrong. Please try again.";
  }
});
