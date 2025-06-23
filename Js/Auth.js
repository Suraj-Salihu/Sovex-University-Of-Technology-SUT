// Login Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this to your backend
            console.log('Login attempt:', { email, password, remember });
            
            // Simulate successful login
            // Redirect based on user type (in a real app, this would come from the backend)
            const userType = determineUserType(email);
            
            switch(userType) {
                case 'student':
                    window.location.href = 'portals/student/dashboard.html';
                    break;
                case 'lecturer':
                    window.location.href = 'portals/lecturer/dashboard.html';
                    break;
                case 'admin':
                    window.location.href = 'portals/admin/dashboard.html';
                    break;
                default:
                    alert('Invalid credentials or user type');
            }
        });
    }
    
    // Helper function to determine user type (simplified for demo)
    function determineUserType(email) {
        if (email.includes('admin@sut.edu.ng')) return 'admin';
        if (email.includes('lecturer@sut.edu.ng')) return 'lecturer';
        if (email.includes('student@sut.edu.ng')) return 'student';
        return null;
    }
});