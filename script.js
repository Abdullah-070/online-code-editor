// Get DOM elements
const htmlEditor = document.getElementById('htmlEditor');
const cssEditor = document.getElementById('cssEditor');
const jsEditor = document.getElementById('jsEditor');
const preview = document.getElementById('preview');
const resetBtn = document.getElementById('resetBtn');
const downloadBtn = document.getElementById('downloadBtn');
const refreshBtn = document.getElementById('refreshBtn');
const clearBtns = document.querySelectorAll('.clear-btn');
const divider = document.querySelector('.divider');

// Initialize - Load saved code or use default
function initializeCode() {
    const savedHtml = localStorage.getItem('htmlCode') || getDefaultHtml();
    const savedCss = localStorage.getItem('cssCode') || getDefaultCss();
    const savedJs = localStorage.getItem('jsCode') || getDefaultJs();

    htmlEditor.value = savedHtml;
    cssEditor.value = savedCss;
    jsEditor.value = savedJs;

    updatePreview();
}

// Default code samples
function getDefaultHtml() {
    return `<h1>Welcome to Online Code Editor</h1>
<p>Edit HTML, CSS, and JavaScript to see live preview!</p>
<button id="myBtn">Click Me</button>
<div id="output"></div>`;
}

function getDefaultCss() {
    return `body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

h1 {
    color: white;
    margin-bottom: 10px;
}

p {
    color: #e0e0e0;
    font-size: 16px;
}

button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

button:hover {
    background-color: #ff5252;
}

#output {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: white;
    min-height: 20px;
}`;
}

function getDefaultJs() {
    return `// JavaScript code here
document.getElementById('myBtn').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.textContent = 'Button clicked! ' + new Date().toLocaleTimeString();
});`;
}

// Update preview in real-time
function updatePreview() {
    const html = htmlEditor.value;
    const css = cssEditor.value;
    const js = jsEditor.value;

    const previewContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            </script>
        </body>
        </html>
    `;

    // Save to localStorage
    localStorage.setItem('htmlCode', html);
    localStorage.setItem('cssCode', css);
    localStorage.setItem('jsCode', js);

    try {
        preview.srcdoc = previewContent;
    } catch (error) {
        console.error('Error updating preview:', error);
    }
}

// Event listeners for real-time preview
htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);
jsEditor.addEventListener('input', updatePreview);

// Clear individual editor
clearBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).value = '';
        updatePreview();
    });
});

// Reset all code to default
resetBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to reset all code to default?')) {
        htmlEditor.value = getDefaultHtml();
        cssEditor.value = getDefaultCss();
        jsEditor.value = getDefaultJs();
        updatePreview();
    }
});

// Refresh preview
refreshBtn.addEventListener('click', updatePreview);

// Download as HTML file
downloadBtn.addEventListener('click', function() {
    const html = htmlEditor.value;
    const css = cssEditor.value;
    const js = jsEditor.value;

    const fullContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
    <script>
        ${js}
    </script>
</body>
</html>`;

    const blob = new Blob([fullContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'index.html';
    link.click();
});

// Resizable divider functionality
let isResizing = false;

divider.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

    const container = document.querySelector('.editor-container');
    const rect = container.getBoundingClientRect();
    const newLeft = ((e.clientX - rect.left) / rect.width) * 100;

    if (newLeft > 20 && newLeft < 80) {
        document.querySelector('.editor-panel').style.flex = `0 0 ${newLeft}%`;
        document.querySelector('.preview-panel').style.flex = `0 0 ${100 - newLeft}%`;
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeCode);
