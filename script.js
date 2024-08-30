document.addEventListener('DOMContentLoaded', () => {
    // タイマーとウィンドウの初期化などは以前のコードと同様です

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
