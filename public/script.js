// cameraRental.js

// Function to load cameras
async function loadCameras() {
    try {
        const response = await fetch('/api/cameras');
        const cameras = await response.json();
        displayCameras(cameras);
    } catch (error) {
        console.error('Error loading cameras:', error);
    }
}

// Function to handle booking form submission
async function handleBookingForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData);

    try {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookingData)
        });
        if (response.ok) {
            alert('Booking successful!');
        } else {
            alert('Booking failed. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting booking:', error);
    }
}

// Admin authentication with JWT tokens
async function adminLogin(username, password) {
    try {
        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('adminToken', data.token);
            alert('Login successful!');
        } else {
            alert('Invalid credentials.');
        }
    } catch (error) {
        console.error('Error during admin login:', error);
    }
}

// Function to display statistics
async function displayStatistics() {
    try {
        const response = await fetch('/api/statistics');
        const stats = await response.json();
        document.getElementById('stats').innerText = JSON.stringify(stats);
    } catch (error) {
        console.error('Error loading statistics:', error);
    }
}

// Function to manage camera data
async function manageCamera(cameraId, data) {
    try {
        const response = await fetch(`/api/cameras/${cameraId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Camera updated successfully!');
        } else {
            alert('Failed to update camera.');
        }
    } catch (error) {
        console.error('Error managing camera:', error);
    }
}

// Function to manage booking data
async function manageBooking(bookingId, action) {
    try {
        const response = await fetch(`/api/bookings/${bookingId}`, {
            method: action === 'delete' ? 'DELETE' : 'PUT',
        });
        if (response.ok) {
            alert('Booking updated successfully!');
        } else {
            alert('Failed to update booking.');
        }
    } catch (error) {
        console.error('Error managing booking:', error);
    }
}
