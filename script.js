document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const batteryElement = document.getElementById('battery');
    
    // タイマーのサンプル
    let timer = 0;
    setInterval(() => {
        timer++;
        const hours = String(Math.floor(timer / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
        const seconds = String(timer % 60).padStart(2, '0');
        timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);

    // ウィンドウ操作の基本
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        const header = window.querySelector('.window-header');
        header.addEventListener('mousedown', (e) => {
            const { offsetX, offsetY } = e;
            const moveWindow = (moveEvent) => {
                window.style.left = `${moveEvent.clientX - offsetX}px`;
                window.style.top = `${moveEvent.clientY - offsetY}px`;
            };
            const stopMove = () => {
                document.removeEventListener('mousemove', moveWindow);
                document.removeEventListener('mouseup', stopMove);
            };
            document.addEventListener('mousemove', moveWindow);
            document.addEventListener('mouseup', stopMove);
        });

        const minimizeBtn = window.querySelector('.minimize');
        minimizeBtn.addEventListener('click', () => {
            window.style.display = 'none';
        });

        const maximizeBtn = window.querySelector('.maximize');
        maximizeBtn.addEventListener('click', () => {
            window.style.width = '100%';
            window.style.height = '100%';
            window.style.left = '0';
            window.style.top = '0';
        });

        const closeBtn = window.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            window.remove();
        });
    });
});

    // JavaScript実行環境の処理
    window.executeJS = function() {
        const input = document.getElementById('js-input').value;
        try {
            const output = eval(input);
            document.getElementById('js-output').textContent = output;
        } catch (e) {
            document.getElementById('js-output').textContent = 'エラー: ' + e.message;
        }
    };

    // ターミナルのコマンド実行処理
    window.runCommand = function() {
        const command = document.getElementById('terminal-input').value;
        let output = "";

        switch (command.trim()) {
            case "help":
                output = "利用可能なコマンド: help, echo, clear";
                break;
            case "clear":
                document.getElementById('terminal-output').textContent = "";
                return;
            default:
                output = "Unknown command: " + command;
        }

        document.getElementById('terminal-output').textContent += "\n" + output;
    };

    // Bing検索
    window.searchBing = function() {
        const query = document.getElementById('browser-search').value;
        const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        document.getElementById('browser-iframe').src = url;
    };

    // 電卓の処理
    window.pressCalcButton = function(value) {
        const input = document.getElementById('calc-input');
        if (value === '=') {
            try {
                input.value = eval(input.value);
            } catch (e) {
                input.value = 'エラー';
            }
        } else {
            input.value += value;
        }
    };

    window.clearCalc = function() {
        document.getElementById('calc-input').value = '';
    };

    // ウィンドウ表示のトグル
    window.toggleWindow = function(id) {
        const windowElement = document.getElementById(id);
        windowElement.style.display = windowElement.style.display === 'none' ? 'block' : 'none';
    };
});
