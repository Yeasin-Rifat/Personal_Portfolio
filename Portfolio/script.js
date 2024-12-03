document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Full-stack Web Developer", "SQA Engineer", "Java Developer" ];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing");
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenTexts = 2000; // Delay before switching to the next text

    function type() {
        if (charIndex < texts[index].length) {
            typingElement.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            index = (index + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    type(); // Start the typing animation
});

// contactme

function submitForm() {
    // Getting form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Show alert confirming data submission
    alert("Data Sent Successfully!");
  
    // Display the input data in the output div
    document.getElementById('outputName').innerText = "Name: " + name;
    document.getElementById('outputEmail').innerText = "Email: " + email;
    document.getElementById('outputMessage').innerText = "Message: " + message;
  
    // Show the output div
    document.getElementById('outputDiv').style.display = 'block';
  
    // Clear the form fields
    document.getElementById('contactForm').reset();
  }
  
  function closeOutput() {
    // Hide the output div when the close button is clicked
    document.getElementById('outputDiv').style.display = 'none';
  }
  

//   ---------------------------------------------------------------


window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section'); // Select all sections (home, about, etc.)
    let links = document.querySelectorAll('.nav-links li a'); // Select all nav links
    
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; // Get scroll position

    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop - 60; // Adjust for any fixed navbar height
        let sectionHeight = section.offsetHeight;

        // Check if the current scroll position is within the section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            links.forEach(link => link.classList.remove('active')); // Remove active class from all links
            links[index].classList.add('active'); // Add active class to the current section's link
        }
    });
});

