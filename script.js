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
