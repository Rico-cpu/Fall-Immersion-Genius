document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById('myForm');

   form.addEventListener("submit", function(event)  {
      event.preventDefualt();
    // Grabbing the values of the input fields from the from

    if (name && email && message) {
        alert("Form submitted successfully!\nName: ${name}\nEmail")
    }
    (make 3 variables)
        

}