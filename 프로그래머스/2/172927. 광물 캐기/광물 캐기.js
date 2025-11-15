function solution(picks, minerals) {
    var answer = 0;
    let groups = [];
    for (let i = 0; i < minerals.length; i += 5) {
        let g = minerals.slice(i, i + 5);
        let score = 0;
        for (let m of g) {
            if (m === "diamond") score += 25;
            else if (m === "iron") score += 5;
            else score += 1;
        }
        groups.push({ g, score });
    }
    const maxGroups = picks[0] + picks[1] + picks[2];
    groups = groups.slice(0, maxGroups);
    groups.sort((a, b) => b.score - a.score);
    let pickList = [];
    for (let i = 0; i < picks[0]; i++) pickList.push("dia");
    for (let i = 0; i < picks[1]; i++) pickList.push("iron");
    for (let i = 0; i < picks[2]; i++) pickList.push("stone");
    for (let i = 0; i < groups.length && i < pickList.length; i++) {
        let pick = pickList[i];
        for (let m of groups[i].g) {
            if (pick === "dia") {
                answer += 1;
            } else if (pick === "iron") {
                if (m === "diamond") answer += 5;
                else answer += 1;
            } else {
                if (m === "diamond") answer += 25;
                else if (m === "iron") answer += 5;
                else answer += 1;
            }
        }
    }
    return answer;
}