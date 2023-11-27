function submitForm() {

    // Fetch form values

    var name = document.getElementById('name').value;

    var email = document.getElementById('email').value;

    var destination = document.getElementById('destination').value;

    var date = document.getElementById('date').value;

    var seats = document.getElementById('seats').value;

 

    // You can perform further validation here if needed

 

    // Display booking information (you can modify this part as needed)

    alert('Booking Details:\n\nName: ' + name + '\nEmail: ' + email + '\nDestination: ' + destination + '\nDate of Travel: ' + date + '\nNumber of Seats: ' + seats);

  }

  function bookHotel() {

    const hotelName = document.getElementById('hotelName').value;

    const checkInDate = document.getElementById('checkInDate').value;

    const checkOutDate = document.getElementById('checkOutDate').value;

    const numOfGuests = document.getElementById('numOfGuests').value;

 

    const bookingResult = document.getElementById('bookingResult');

 

    // Simulate booking process

    const bookingDetails = `Hotel Name: ${hotelName}<br>Check-In Date: ${checkInDate}<br>Check-Out Date: ${checkOutDate}<br>Number of Guests: ${numOfGuests}`;

   

    bookingResult.innerHTML = `<p class="success">Booking Successful!</p><p>${bookingDetails}</p>`;

}

 

function login() {

    const username = document.getElementById('username').value;

    const password = document.getElementById('password').value;

    const loginResult = document.getElementById('loginResult');

 

    // Simulate login process

    if (username === 'demo' && password === 'password') {

        loginResult.innerHTML = `<p class="success">Login Successful! Welcome, ${username}.</p>`;

    } else {

        loginResult.innerHTML = `<p class="error">Invalid username or password. Please try again.</p>`;

    }

}


