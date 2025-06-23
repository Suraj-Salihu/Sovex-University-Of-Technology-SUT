// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle for dashboard
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn dashboard-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const dashboardHeader = document.querySelector('.dashboard-header .flex');
    if (dashboardHeader) {
        dashboardHeader.prepend(mobileMenuBtn);
        
        mobileMenuBtn.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    }
    
    // Simulate loading data
    setTimeout(() => {
        // This would be replaced with actual API calls in a real application
        console.log('Dashboard data loaded');
    }, 1000);
    
    // Notification bell click
    const notificationBtn = document.querySelector('.header-actions .btn:nth-child(1)');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Notifications would appear here in a real application');
        });
    }
    
    // Message button click
    const messageBtn = document.querySelector('.header-actions .btn:nth-child(2)');
    if (messageBtn) {
        messageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Messages would appear here in a real application');
        });
    }
});