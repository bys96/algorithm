function solution(expression) {
    var answer = 0;
    let numArr = [];
    let opArr = [];
    let num = "";
    for(let w of expression){
        if(["+","-","*"].includes(w)){
            numArr.push(num);
            num=""
            opArr.push(w);
        }else{
            num+=w;
        }
    }
    if(num.length>0){
        numArr.push(num);
    }
    numArr = numArr.map(Number);
    let op = Array.from(new Set(opArr));
    let arr = makePriorityOrders(op);

    for(let order of arr){
        let nums = [...numArr];
        let ops = [...opArr];
        for(let op of order){
            while(ops.includes(op)){
                const idx = ops.indexOf(op);
                const result = calc(nums[idx], nums[idx+1], op);
                nums.splice(idx, 2, result);
                ops.splice(idx, 1);
            }
        }
        answer = Math.max(answer, Math.abs(nums[0]));
    }

    return answer;
}

function makePriorityOrders(operators) {
  if (operators.length === 1) return [operators];
  const allOrders = [];
  operators.forEach((current, idx) => {
    const rest = operators.filter((_, i) => i !== idx);
    const subOrders = makePriorityOrders(rest);
    subOrders.forEach(order => {
      allOrders.push([current, ...order]);
    });
  });
  return allOrders;
}

function calc(a, b, op) {
  a = Number(a);
  b = Number(b);
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
}
