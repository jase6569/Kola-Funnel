// script.js

const chatLog = document.getElementById("chat-log");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleChat();
});

function handleChat() {
  const userInput = chatInput.value.trim();
  if (!userInput) return;

  appendMessage("You", userInput, "user");
  chatInput.value = "";

  // Simulate AI response
  const response = getAIResponse(userInput.toLowerCase());
  setTimeout(() => {
    appendMessage("KolaBot", response, "bot");
  }, 500);
}

function appendMessage(sender, text, type) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", type);
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatLog.appendChild(msgDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getAIResponse(input) {
  if (input.includes("resin") && input.includes("benefit")) {
    return "Resin driveways are durable, permeable, low-maintenance, and visually stunning. They’re also SuDS-compliant!";
  } else if (input.includes("quote")) {
    return "To get a free quote, simply visit our form or provide your postcode and service type. We’ll call you to arrange a visit.";
  } else if (input.includes("properla")) {
    return "ProPERLA is a hydrophobic coating that protects walls from damp, improves insulation, and comes with a 10–20 year guarantee.";
  } else if (input.includes("10%")) {
    return "Yes! All new projects are eligible for a 10% discount when booked within 7 days of your quote.";
  } else if (input.includes("patio")) {
    return "We install porcelain, sandstone, and natural stone patios — all fully guaranteed and tailored to your outdoor space.";
  } else if (input.includes("follow up") || input.includes("lead")) {
    return "To follow up on a lead, send a friendly message reminding them of their 10% discount and offer to book a visit.";
  } else if (input.includes("facebook") && input.includes("post")) {
    return "Try this: '🏡 Dreaming of a new patio this summer? Book now with Kola Construction and get 10% off your install!'";
  } else if (input.includes("how much") && input.includes("resin")) {
    return "Resin-bound driveways start from approx. £60 per m², but we always offer a free, no-obligation site quote.";
  } else {
    return "I'm KolaBot – ask me anything about driveways, patios, ProPERLA, quotes, or marketing ideas!";
  }
}
