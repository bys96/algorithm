function solution(m, n, board) {
    var answer = 0;
    //배열변환
    board = board.map(row => row.split(""));
    
    while(true){
        // set 초기화
        let set = new Set();
        // 아래,오른쪽,오른쪽 대각선 같은지 확인 후 set에 저장
        for(let i=0; i<m-1; i++){
            for(let j=0; j<n-1; j++){
                let a = board[i][j];
                let b = board[i][j+1];
                let c = board[i+1][j];
                let d = board[i+1][j+1];

                if(a!="" && a==b && a==c && a==d){
                    set.add(`${i},${j}`);
                    set.add(`${i},${j+1}`);
                    set.add(`${i+1},${j}`);
                    set.add(`${i+1},${j+1}`);
                }
            }
        }
        //set size 0 이면 추가된거 없으니 break
        if(!set.size) break;
        // 해당하는거 공백처리
        for(let s of set){
            let [r,c] = s.split(",").map(Number);
            board[r][c] = "";
            answer += 1;
        }
        // 아래서부터 빈칸 아니면 넣고 .shift로 아래부터 채우기
        for(let c=0; c<n; c++){
            let stack = [];
            for(let r=m-1; r>=0; r--){
                if(board[r][c] != ""){
                    stack.push(board[r][c]);
                }
            }
            let rn = m-1;
            while(stack.length){
                board[rn--][c] = stack.shift();
            }
            while(rn >= 0){
                board[rn--][c] = "";
            }
        }
    }
    return answer;
}