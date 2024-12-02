const auth = {
    isPasswordVisible: false,


    toggleForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        
        loginForm.classList.remove('slide-in', 'slide-out');
        registerForm.classList.remove('slide-in', 'slide-out');
        
        if (loginForm.classList.contains('hidden')) {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            loginForm.classList.add('slide-in');  
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            registerForm.classList.add('slide-in');  
        }
    },

  