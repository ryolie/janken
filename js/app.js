let janken = document.getElementById('play');

let arrHand = ['グー', 'チョキ', 'パー'];

// 勝敗のデータ
let yourwin = 0;
let pcwin = 0;

janken.addEventListener('click', function (event) {
    if (event.target.src) {
        let yourHand = event.target.getAttribute('src').charAt(4);
        let pcHand = Math.floor(Math.random() * 3);
        let resultElm = document.getElementById('result');
        resultElm.textContent = '';
        let hrElm = document.createElement('hr');
        let parElm1 = document.createElement('p');
        parElm1.innerHTML = 'あんたの手は<img src="img/' + yourHand + '.jpg" alt="' + arrHand[yourHand] + '">ね。私の手は<img src="img/' + pcHand + '.jpg" alt="' + arrHand[pcHand] + '">よ！';

        // じゃんけんの勝敗
        let parElm2 = document.createElement('p');
        let judge = yourHand - pcHand;
        if (judge === 0) {
            parElm2.textContent = 'もう１回勝負よ！';
        } else if (judge === -1 || judge === 2) {
            parElm2.textContent = 'それで勝ったつもり？';
            yourwin++;
        } else {
            parElm2.textContent = 'ぷぷっｗざぁこざぁこｗ';
            pcwin++;
        }
        let parElm3 = document.createElement('p');
        let parElm3content = 'あんたのゴミ勝ち回数：<span class="yourW">';
        for (let i = 0; i < yourwin; i++) {
            parElm3content += '★ ';
        }
        parElm3content += '</span>';
        parElm3.innerHTML = parElm3content;


        let parElm4 = document.createElement('p');
        let parElm4content = '私の圧倒的勝利回数：<span class="yourW">';
        for (let j = 0; j < pcwin; j++) {
            parElm4content += '★ ';
        }
        parElm4content += '</span>';
        parElm4.innerHTML = parElm4content;


        // ブラウザ表示
        resultElm.insertBefore(hrElm, null);
        resultElm.insertBefore(parElm1, null);
        resultElm.insertBefore(parElm2, null);
        resultElm.insertBefore(parElm3, null);
        resultElm.insertBefore(parElm4, null);


        // ５回勝った時の表示
        let parElm5 = document.createElement('p');
        let parElm6 = document.createElement('p');
        if(yourwin ===5 || pcwin === 5){
            if(yourwin ===5){
                parElm5.textContent = '運だけ雑魚のくせに生意気！';
            }else{
                parElm5.textContent = '弱すぎなんだけどｗ';
            }
            yourwin = 0;
            pcwin = 0;
            let anchorElm = document.createElement('a');
            anchorElm.setAttribute('href','index.html');
            anchorElm.textContent = 'もういっかいやるの？';
            parElm6.insertBefore(anchorElm,null);
            janken.style.display = 'none';
            resultElm.insertBefore(parElm5,null);
            resultElm.insertBefore(hrElm,null);
            resultElm.insertBefore(parElm6,null);
        }

    }
});