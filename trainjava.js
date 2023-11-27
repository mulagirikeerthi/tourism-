function bookTrain(){

    const trainName= document.getElementById('trainName').value;

    const departureDate= document.getElementById('departureDate').value;

    const passengerName= document.getElementById('passengerName').value;

 

    const bookingResult= document.getElementById('bookingResult');

    //booking process

    const bookingDetails='Train Name: ${trainName}<br>Departure Date: ${departureDate}<br>Passenger Name: ${passengerName}';

    bookingResult.innerHTML='<p>Booking Successful!</p><p>${bookingDetails}</p>';

   

 

}