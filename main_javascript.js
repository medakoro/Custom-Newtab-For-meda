// 検索バーの要素を取得
var searchInput = document.getElementById('text3');
var searchValue = ''; // 検索値を保存する変数

// Enterキーが押された時の処理
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // 入力された値を変数に代入
        searchValue = searchInput.value;
        
        //値が取得できていることを確認（開発時の確認用）
        console.log('検索値:', searchValue);
        
        //URLがhttpsから始まるなら直接リダイレクト
        if (searchValue.substring(0,4) == "http") {
            //URLリダイレクト
            window.location.href = searchValue;
        } else {
            // プレフィックスと値を分離する関数
            function parseInput(input) {
                //Prefixを:に設定
                const colonIndex = input.indexOf(':');
                if (colonIndex === -1) {
                    return {
                        prefix: '',
                        value: input
                    };
                }
                return {
                    prefix: input.substring(0, colonIndex),
                    value: input.substring(colonIndex + 1)
                };
            }
            
            //入力値に基づいて処理を振り分ける関数
            function processSearch(input) {
                const { prefix, value } = parseInput(input);
                
                // prefixに基づいて処理を振り分け
                switch(prefix) {
                    //PrefixがGoogleならGoogle検索
                    case "Google":
                        window.location.href = `https://www.google.com/search?q=${value}`;
                        break;
                    case "Yahoo":
                        console.log(`Yahoo Enter! Input : ${value}`)
                        window.location.href = `https://search.yahoo.co.jp/search?p=${value}`;
                        break;
                    default:
                        // デフォルトの処理
                        window.location.href = `https://www.google.com/search?q=${value}`;
                        break;
                }
            }
            
            //入力値を処理
            processSearch(searchValue);
        }
    }
});
