const button = document.getElementById("show-hours");
const hours = document.getElementById("hours");

button.addEventListener("click", function () {
  hours.textContent = "Открыто ежедневно с 8:00 до 22:00.";
});
const booking = document.getElementById("booking");
const guestName = document.getElementById("guest-name");
const bookingResult = document.getElementById("booking-result");

booking.addEventListener("submit", function (event) {
  event.preventDefault();
  bookingResult.textContent = "Пробная заявка от: " + guestName.value;
});