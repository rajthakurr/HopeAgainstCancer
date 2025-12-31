// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    fetchQuote();
    setupEventListeners();
});

// Quote API Integration
const fetchQuote = async () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    
    // Show loading state
    newQuoteBtn.disabled = true;
    quoteText.textContent = 'Loading inspiration...';
    
    try {
        // Using ZenQuotes API (free, reliable, no authentication required)
        const response = await fetch('https://zenquotes.io/api/random');
        
        if (!response.ok) throw new Error('Failed to fetch quote');
        
        const data = await response.json();
        const quoteData = data[0]; // ZenQuotes returns an array
        
        // Add animation when quote changes
        quoteText.style.animation = 'none';
        setTimeout(() => {
            quoteText.textContent = `"${quoteData.q}"`;
            quoteAuthor.textContent = `— ${quoteData.a.replace(/,\s*$/, '')}`; // Remove trailing comma
            quoteText.style.animation = 'fadeIn 0.6s ease';
            console.log('Quote fetched successfully:', { quote: quoteData.q, author: quoteData.a });
        }, 50);
        
    } catch (error) {
        console.error('Error fetching quote from ZenQuotes:', error);
        // Fallback quotes if API fails
        const fallbackQuotes = [
            { q: "Life is not about waiting for the storm to pass, it's about learning to dance in the rain.", a: "Vivian Greene" },
            { q: "The only way out is through.", a: "Robert Frost" },
            { q: "Courage is fear that has said its prayers.", a: "Dorothy Bernard" },
            { q: "Hope is the thing with feathers that perches in the soul.", a: "Emily Dickinson" }
        ];
        const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        quoteText.textContent = `"${randomQuote.q}"`;
        quoteAuthor.textContent = `— ${randomQuote.a}`;
        console.log('Using fallback quote:', randomQuote);
    } finally {
        // Re-enable button
        newQuoteBtn.disabled = false;
    }
};

// Setup Event Listeners
const setupEventListeners = () => {
    // Get new quote button
    const newQuoteBtn = document.getElementById('new-quote-btn');
    newQuoteBtn.addEventListener('click', fetchQuote);
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmit);
};

// Handle Contact Form Submission
const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusElement = document.getElementById('form-status');
    
    // Validation
    if (!name || !email || !message) {
        showStatus('Please fill out all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (no backend)
    showStatus('Processing...', '');
    
    setTimeout(() => {
        // Store form data in localStorage for demonstration
        const formData = {
            name,
            email,
            message,
            timestamp: new Date().toLocaleString()
        };
        
        // Get existing submissions or create new array
        let submissions = JSON.parse(localStorage.getItem('cancerAwarenessSubmissions')) || [];
        submissions.push(formData);
        localStorage.setItem('cancerAwarenessSubmissions', JSON.stringify(submissions));
        
        // Show success message
        showStatus('✓ Thank you for reaching out! We appreciate your message and will respond soon.', 'success');
        
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Log to console for demonstration
        console.log('Form submission:', formData);
    }, 500);
};

// Show status message
const showStatus = (message, className) => {
    const statusElement = document.getElementById('form-status');
    statusElement.textContent = message;
    statusElement.className = 'form-status ' + className;
};

// Email validation
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Log submissions to console (for demonstration)
console.log('Cancer Awareness & Support Web App Loaded');
console.log('Form submissions are stored in localStorage with key: cancerAwarenessSubmissions');
