# 🎗️ Cancer Awareness & Support

A responsive web application dedicated to cancer awareness, education, and support with real-time inspirational quotes.

## 🌟 Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Live Quotes API** - Fetches real-time inspirational quotes from ZenQuotes API
- **Contact Form** - Get in touch with validation and localStorage integration
- **Modern UI** - Beautiful gradient design with smooth animations
- **Educational Content** - Information about cancer prevention and support
- **Accessibility** - Clean, intuitive navigation and user experience

## 📋 Sections

1. **Navigation Bar** - Sticky navigation with smooth scrolling links
2. **Hero Banner** - Eye-catching banner with inspiring message
3. **Daily Inspiration** - Real-time quotes with "Get New Quote" functionality
4. **How We Can Help** - Three information cards about education, support groups, and resources
5. **Contact Form** - Submit your name, email, and message
6. **Footer** - Copyright and appreciation message

## 🚀 Live Demo

Visit the live website: [Cancer Awareness & Support](https://rajthakurr.github.io/HopeAgainstCancer/)

## 💻 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients, animations, and flexbox/grid
- **JavaScript (ES6)** - Dynamic functionality and API integration
- **ZenQuotes API** - Free quotes API for real-time inspirational messages

## 📂 Project Structure

```
cancer-awareness/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## 🔧 Getting Started

### Option 1: Local Development
1. Clone the repository
   ```bash
   git clone https://github.com/rajthakurr/HopeAgainstCancer.git
   cd HopeAgainstCancer
   ```

2. Start a local server
   ```bash
   python -m http.server 8000
   ```

3. Open your browser and navigate to `http://localhost:8000`

### Option 2: Direct File Access
Simply open `index.html` in your web browser.

## 📝 Form Submissions

Form submissions are stored in your browser's **localStorage** with the key: `cancerAwarenessSubmissions`

To view submissions in the browser console:
```javascript
JSON.parse(localStorage.getItem('cancerAwarenessSubmissions'))
```

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #e74c3c;        /* Main red color */
    --secondary-color: #3498db;      /* Secondary blue color */
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
}
```

### Change API
Modify the `fetchQuote()` function in `script.js` to use a different quotes API:
- **ZenQuotes**: `https://zenquotes.io/api/random`
- **Type.fit**: `https://type.fit/api/random`
- **Advice Slip**: `https://api.adviceslip.com/advice`

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (> 1200px)
- **Tablet**: Optimized grid layout (768px - 1200px)
- **Mobile**: Single column layout (< 768px)

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 💌 Support

If you or anyone you know is affected by cancer, please reach out to:
- [National Cancer Institute](https://www.cancer.gov/)
- [American Cancer Society](https://www.cancer.org/)
- [Cancer Research UK](https://www.cancerresearchuk.org/)

## 👨‍💻 Author

Created with ❤️ for cancer awareness and support.

---

**Together, we fight cancer with hope, knowledge, and compassion.**
