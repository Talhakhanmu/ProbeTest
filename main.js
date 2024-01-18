function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function updateEmoji(mood) {
  let emojiElement = document.getElementById("emoji");
  let hiddenMsgElement = document.getElementById("hiddenMsg");

  if (mood === "good") {
    emojiElement.innerHTML = '<span style="font-size: 5rem;">😊</span>';
    hiddenMsgElement.innerHTML = "Great! Thanks for your positive feedback.";
  } else if (mood === "bad") {
    emojiElement.innerHTML = '<span style="font-size: 5rem;">😞</span>';
    hiddenMsgElement.innerHTML =
      "We're sorry to hear that. We'll work on improving.";
  } else {
    emojiElement.innerHTML = '<span style="font-size: 5rem;">😐</span>';
    hiddenMsgElement.innerHTML = "";
  }

  hiddenMsgElement.style.display = "block";
}
