let currentTheme = 'light';

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function calculate() {
    try {
        let expression = document.getElementById('display').textContent;
        
        // Replace Persian/Arabic characters with standard ones
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        
        // Handle trigonometric functions
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        
        const result = eval(expression);
        document.getElementById('display').textContent = result;
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}

function toggleTheme() {
    const body = document.body;
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', currentTheme);
}