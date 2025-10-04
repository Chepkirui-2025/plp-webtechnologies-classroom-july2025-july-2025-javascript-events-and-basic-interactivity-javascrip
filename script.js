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
