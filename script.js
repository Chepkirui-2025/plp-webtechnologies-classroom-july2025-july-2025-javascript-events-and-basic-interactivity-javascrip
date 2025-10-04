// ============================================
        // PART 1: EVENT HANDLING DEMONSTRATIONS
        // ============================================

        // Click Counter - Demonstrates basic click event
        let clickCount = 0;
        const clickBtn = document.getElementById('click-btn');
        const clickCountDisplay = document.getElementById('click-count');

        clickBtn.addEventListener('click', function() {
            clickCount++;
            clickCountDisplay.textContent = clickCount;
            
            // Add visual feedback with animation
            clickBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                clickBtn.style.transform = 'scale(1)';
            }, 100);
        });

        // Hover Event - Shows mouseenter and mouseleave events
        const hoverCard = document.getElementById('hover-card');
        const hoverMsg = document.getElementById('hover-msg');
        let hoverCount = 0;

        hoverCard.addEventListener('mouseenter', function() {
            hoverCount++;
            hoverMsg.textContent = `Hovered ${hoverCount} times! 🎉`;
            hoverMsg.style.color = '#10b981';
        });

        hoverCard.addEventListener('mouseleave', function() {
            hoverMsg.textContent = 'Come back!';
            hoverMsg.style.color = '#6366f1';
        });

        // Keyboard Event - Captures keypress events
        const keyInput = document.getElementById('key-input');
        const lastKeyDisplay = document.getElementById('last-key');

        keyInput.addEventListener('keydown', function(event) {
            lastKeyDisplay.textContent = event.key;
            
            // Add special styling for special keys
            if (event.key === 'Enter') {
                lastKeyDisplay.style.color = '#10b981';
            } else if (event.key === 'Backspace') {
                lastKeyDisplay.style.color = '#ef4444';
            } else {
                lastKeyDisplay.style.color = '#6366f1';
            }
        });

        // Double Click Event - Demonstrates dblclick event
        const dblClickBox = document.getElementById('dblclick-box');
        const dblClickStatus = document.getElementById('dblclick-status');

        dblClickBox.addEventListener('dblclick', function() {
            dblClickStatus.textContent = '✨ Activated! Great job!';
            dblClickStatus.style.color = '#10b981';
            dblClickBox.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                dblClickStatus.textContent = 'Not activated';
                dblClickStatus.style.color = '#64748b';
                dblClickBox.style.background = 'linear-gradient(135deg, #ec4899, #8b5cf6)';
            }, 2000);
        });

        // ============================================
        // DARK MODE TOGGLE - Interactive Feature
        // ============================================
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.querySelector('.theme-icon');

        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Update icon based on current theme
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.textContent = '☀️';
            } else {
                themeIcon.textContent = '🌙';
            }
        });

        // ============================================
        // PART 2: INTERACTIVE COMPONENTS
        // ============================================

        // Tabbed Interface - Switches between different content sections
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // FAQ Accordion - Collapsible question/answer sections
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                
                // Toggle active state - allows one or multiple items open
                faqItem.classList.toggle('active');
            });
        });

        // Reaction Time Game - Interactive button clicking game
        let gameScore = 0;
        let gameTimer = 10;
        let gameInterval;
        let highScore = 0;

        const gameStartBtn = document.getElementById('game-start');
        const gameClickBtn = document.getElementById('game-click');
        const gameScoreDisplay = document.getElementById('game-score');
        const gameTimerDisplay = document.getElementById('game-timer');
        const highScoreDisplay = document.getElementById('high-score');

        gameStartBtn.addEventListener('click', function() {
            // Reset game state
            gameScore = 0;
            gameTimer = 10;
            gameScoreDisplay.textContent = gameScore;
            gameTimerDisplay.textContent = gameTimer;
            
            // Show game button and hide start button
            gameStartBtn.style.display = 'none';
            gameClickBtn.style.display = 'block';
            
            // Start countdown timer
            gameInterval = setInterval(() => {
                gameTimer--;
                gameTimerDisplay.textContent = gameTimer;
                
                // End game when timer reaches 0
                if (gameTimer === 0) {
                    endGame();
                }
            }, 1000);
        });

        gameClickBtn.addEventListener('click', function() {
            gameScore++;
            gameScoreDisplay.textContent = gameScore;
            
            // Visual feedback on click
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });

        function endGame() {
            clearInterval(gameInterval);
            gameClickBtn.style.display = 'none';
            gameStartBtn.style.display = 'block';
            
            // Update high score if current score is higher
            if (gameScore > highScore) {
                highScore = gameScore;
                highScoreDisplay.textContent = highScore;
            }
            
            // Show game over message
            alert(`Game Over! Your score: ${gameScore}\nHigh Score: ${highScore}`);
        }

        // Collapsible Panels - Show/hide information sections
        const collapseHeaders = document.querySelectorAll('.collapse-header');

        collapseHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const collapseItem = this.parentElement;
                
                // Toggle the active state for smooth animation
                collapseItem.classList.toggle('active');
            });
        });

        // ============================================
        // PART 3: FORM VALIDATION
        // ============================================

        const registrationForm = document.getElementById('registration-form');
        const successMessage = document.getElementById('success-message');

        // Form field references
        const fullnameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('email');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const phoneInput = document.getElementById('phone');
        const termsCheckbox = document.getElementById('terms');

        // Error message references
        const fullnameError = document.getElementById('fullname-error');
        const emailError = document.getElementById('email-error');
        const usernameError = document.getElementById('username-error');
        const passwordError = document.getElementById('password-error');
        const confirmPasswordError = document.getElementById('confirm-password-error');
        const phoneError = document.getElementById('phone-error');
        const termsError = document.getElementById('terms-error');

        // Password visibility toggle
        const togglePasswordBtn = document.getElementById('toggle-password');
        
        togglePasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type');
            
            if (type === 'password') {
                passwordInput.setAttribute('type', 'text');
                this.textContent = '🙈';
            } else {
                passwordInput.setAttribute('type', 'password');
                this.textContent = '👁️';
            }
        });

        // Real-time validation on input (blur event)
        fullnameInput.addEventListener('blur', validateFullName);
        emailInput.addEventListener('blur', validateEmail);
        usernameInput.addEventListener('blur', validateUsername);
        passwordInput.addEventListener('blur', validatePassword);
        confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
        phoneInput.addEventListener('blur', validatePhone);

        // Also validate confirm password when main password changes
        passwordInput.addEventListener('input', function() {
            if (confirmPasswordInput.value) {
                validateConfirmPassword();
            }
        });

        // Validation Functions

        function validateFullName() {
            const value = fullnameInput.value.trim();
            
            if (value === '') {
                showError(fullnameInput, fullnameError, 'Full name is required');
                return false;
            } else if (value.length < 2) {
                showError(fullnameInput, fullnameError, 'Name must be at least 2 characters');
                return false;
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                showError(fullnameInput, fullnameError, 'Name can only contain letters and spaces');
                return false;
            } else {
                showSuccess(fullnameInput, fullnameError);
                return true;
            }
        }

        function validateEmail() {
            const value = emailInput.value.trim();
            // Regular expression for email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (value === '') {
                showError(emailInput, emailError, 'Email address is required');
                return false;
            } else if (!emailRegex.test(value)) {
                showError(emailInput, emailError, 'Please enter a valid email address');
                return false;
            } else {
                showSuccess(emailInput, emailError);
                return true;
            }
        }

        function validateUsername() {
            const value = usernameInput.value.trim();
            // Username: 3-20 characters, alphanumeric only
            const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
            
            if (value === '') {
                showError(usernameInput, usernameError, 'Username is required');
                return false;
            } else if (!usernameRegex.test(value)) {
                showError(usernameInput, usernameError, 'Username must be 3-20 characters, letters and numbers only');
                return false;
            } else {
                showSuccess(usernameInput, usernameError);
                return true;
            }
        }

        function validatePassword() {
            const value = passwordInput.value;
            
            if (value === '') {
                showError(passwordInput, passwordError, 'Password is required');
                return false;
            } else if (value.length < 8) {
                showError(passwordInput, passwordError, 'Password must be at least 8 characters');
                return false;
            } else if (!/[A-Z]/.test(value)) {
                showError(passwordInput, passwordError, 'Password must contain at least one uppercase letter');
                return false;
            } else if (!/[a-z]/.test(value)) {
                showError(passwordInput, passwordError, 'Password must contain at least one lowercase letter');
                return false;
            } else if (!/[0-9]/.test(value)) {
                showError(passwordInput, passwordError, 'Password must contain at least one number');
                return false;
            } else {
                showSuccess(passwordInput, passwordError);
                return true;
            }
        }

        function validateConfirmPassword() {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            if (confirmPassword === '') {
                showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password');
                return false;
            } else if (password !== confirmPassword) {
                showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
                return false;
            } else {
                showSuccess(confirmPasswordInput, confirmPasswordError);
                return true;
            }
        }

        function validatePhone() {
            const value = phoneInput.value.trim();
            // Phone format: +1 (XXX) XXX-XXXX
            const phoneRegex = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/;
            
            if (value === '') {
                showError(phoneInput, phoneError, 'Phone number is required');
                return false;
            } else if (!phoneRegex.test(value)) {
                showError(phoneInput, phoneError, 'Phone must match format: +1 (XXX) XXX-XXXX');
                return false;
            } else {
                showSuccess(phoneInput, phoneError);
                return true;
            }
        }

        function validateTerms() {
            if (!termsCheckbox.checked) {
                termsError.textContent = 'You must agree to the terms and conditions';
                return false;
            } else {
                termsError.textContent = '';
                return true;
            }
        }

        // Helper functions to show error/success states
        function showError(input, errorElement, message) {
            input.classList.add('error');
            input.classList.remove('valid');
            errorElement.textContent = message;
        }

        function showSuccess(input, errorElement) {
            input.classList.remove('error');
            input.classList.add('valid');
            errorElement.textContent = '';
        }

        // Form submission handler
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Validate all fields
            const isFullNameValid = validateFullName();
            const isEmailValid = validateEmail();
            const isUsernameValid = validateUsername();
            const isPasswordValid = validatePassword();
            const isConfirmPasswordValid = validateConfirmPassword();
            const isPhoneValid = validatePhone();
            const areTermsValid = validateTerms();
            
            // Check if all validations passed
            const isFormValid = isFullNameValid && isEmailValid && isUsernameValid && 
                               isPasswordValid && isConfirmPasswordValid && isPhoneValid && 
                               areTermsValid;
            
            if (isFormValid) {
                // Hide form and show success message
                registrationForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Log form data (in real application, this would be sent to server)
                console.log('Form submitted successfully!');
                console.log({
                    fullname: fullnameInput.value,
                    email: emailInput.value,
                    username: usernameInput.value,
                    phone: phoneInput.value,
                    terms: termsCheckbox.checked
                });
                
                // Reset form after 5 seconds (optional)
                setTimeout(() => {
                    registrationForm.reset();
                    registrationForm.style.display = 'block';
                    successMessage.style.display = 'none';
                    
                    // Remove validation classes
                    const inputs = registrationForm.querySelectorAll('input');
                    inputs.forEach(input => {
                        input.classList.remove('error', 'valid');
                    });
                }, 5000);
            } else {
                // Scroll to first error
                const firstError = registrationForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });

        //============================================
        // ADDITIONAL ENHANCEMENTS
        // ============================================

        // Add smooth scroll behavior for page navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Add animation on scroll for sections
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });


