let display = document.getElementById('display');
        let currentInput = '';

        function appendValue(val) {
            if (display.innerText === '0' && val !== '.') {
                currentInput = '';
            }
            currentInput += val;
            display.innerText = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            display.innerText = '0';
        }

        function calculateResult() {
            try {
                // Evaluate, but replace ×, ÷, − with JS operators
                let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
                let result = eval(expression);
                display.innerText = result;
                currentInput = result.toString();
            } catch (e) {
                display.innerText = 'Error';
                currentInput = '';
            }
        }