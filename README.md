# Online Code Editor

A modern, feature-rich online code editor with split-screen interface for writing HTML, CSS, and JavaScript with live preview. Built with vanilla HTML, CSS, and JavaScript.

## 🎯 Features

- **Real-Time Preview**: See your code changes instantly as you type
- **Split-Screen Interface**: Editor panels on the left, live preview on the right
- **Separate File Structure**: HTML, CSS, and JavaScript kept in separate sections for better organization
- **Code Persistence**: Your code is automatically saved to browser's local storage
- **Download Functionality**: Export your project as a standalone HTML file
- **Resizable Panels**: Drag the divider to adjust editor and preview sizes
- **Dark Theme**: Professional VS Code-inspired dark interface for comfortable coding
- **Quick Actions**: 
  - Reset to default code samples
  - Clear individual editors
  - Refresh preview manually
- **Responsive Design**: Works on desktop and mobile devices
- **Default Code Samples**: Comes with example HTML, CSS, and JavaScript to get started

## 📁 Project Structure

```
Code Editor/
├── index.html        # Main HTML file with editor structure
├── styles.css        # Stylesheet with dark theme
├── script.js         # JavaScript for editor functionality
└── README.md         # This file
```

## 🚀 How to Use

1. **Open the Editor**
   - Simply open `index.html` in your web browser
   - No installation or server required

2. **Write Code**
   - Enter HTML code in the HTML editor
   - Add CSS styling in the CSS editor
   - Write JavaScript logic in the JavaScript editor
   - Preview updates automatically as you type

3. **Save Your Work**
   - Code is automatically saved to your browser's local storage
   - Your code persists even after closing the browser

4. **Download Your Project**
   - Click the "Download" button to save your work as an `index.html` file
   - The file can be opened directly in any browser

5. **Reset or Clear**
   - Use the "Reset" button to restore default code samples
   - Use the ✕ button next to each language to clear that editor

## 🎮 Keyboard & Mouse Controls

| Action | Method |
|--------|--------|
| Real-time Preview | Type in any editor |
| Resize Panels | Drag the divider between editors and preview |
| Refresh Preview | Click the 🔄 button or modify code |
| Clear Editor | Click the ✕ button next to language name |
| Reset All | Click "Reset" button (confirms before action) |
| Download | Click "Download" button |

## 🌐 Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

**Note**: Requires a modern browser with ES6 support and iframe sandbox capabilities.

## 💾 Local Storage

The editor automatically saves your code to browser local storage under these keys:
- `htmlCode` - Your HTML code
- `cssCode` - Your CSS code
- `jsCode` - Your JavaScript code

To clear saved data, use your browser's Developer Tools (F12) → Application → Local Storage → Clear.

## 🎨 Default Code Examples

The editor comes with sample code that includes:
- A styled heading and welcome message
- A clickable button with event listener
- CSS gradient background
- JavaScript click handler demonstrating DOM manipulation

You can modify or delete the default code anytime.

## 💡 Tips & Tricks

1. **JavaScript Console**: Open your browser's Developer Tools (F12) to see any JavaScript errors or console output
2. **HTML Structure**: Remember to use proper semantic HTML for better accessibility
3. **CSS Styling**: Use CSS classes and IDs for better organization
4. **JavaScript Scope**: Be aware that global variables in your script will have access to the entire document
5. **External Resources**: Currently, external resources (like CDN links) cannot be loaded directly in the iframe for security reasons

## ⚙️ Features in Detail

### Live Preview
- The preview updates in real-time as you type
- Uses an iframe with `srcdoc` for secure code execution
- Sandbox environment isolates your code from the main application

### Persistent Storage
- All three code sections are automatically saved to localStorage
- Survives browser restarts and tab closures
- Clear through browser Developer Tools if needed

### Download Functionality
- Creates a complete, self-contained HTML file
- Includes all HTML, CSS, and JavaScript in one file
- Can be opened directly in any browser or shared

### Resizable Interface
- Drag the vertical divider to balance editor and preview space
- Minimum 20% and maximum 80% editor space to maintain usability
- Position is temporary (resets on page reload)

## 🛠️ Customization

To customize the editor:

1. **Change Colors**: Edit the CSS variables in `styles.css`:
   ```css
   :root {
       --primary-bg: #1e1e1e;
       --accent-color: #007acc;
       /* ... other variables */
   }
   ```

2. **Modify Default Code**: Edit the functions in `script.js`:
   - `getDefaultHtml()`
   - `getDefaultCss()`
   - `getDefaultJs()`

3. **Add New Features**: Extend `script.js` with additional functionality

## 📝 License

This project is free to use and modify.

## 🐛 Known Limitations

- External resources (CDN links, images from URLs) cannot be loaded due to iframe sandbox restrictions
- Local files cannot be imported directly
- Maximum code size is limited by browser's localStorage capacity (typically 5-10MB)
- Some JavaScript security restrictions apply (e.g., cannot access parent window)

## 📞 Support

If you encounter any issues:
1. Check browser console (F12) for JavaScript errors
2. Clear local storage and refresh
3. Try in a different browser
4. Ensure JavaScript is enabled in your browser

---

**Happy Coding! 🚀**
