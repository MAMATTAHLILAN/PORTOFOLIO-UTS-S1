function showNotification() {
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Thank you for booking the film! We will contact you shortly.";
  
    document.body.appendChild(popup);
  
    setTimeout(function() {
      document.body.removeChild(popup);
    }, 3000);
  }
  