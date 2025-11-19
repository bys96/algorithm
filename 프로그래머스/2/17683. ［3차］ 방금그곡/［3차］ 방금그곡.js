function solution(m, musicinfos) {
    var answer = '';

    let normalize = s => {
        let res = '';
        for (let i = 0; i < s.length; i++) {
            if (i + 1 < s.length && s[i + 1] === '#') {
                res += s[i].toLowerCase();
                i++;
            } else {
                res += s[i];
            }
        }
        return res;
    };

    let target = normalize(m);
    let best = -1;

    for (let info of musicinfos) {
        let [start, end, title, sheet] = info.split(',');
        let [sh, sm] = start.split(':').map(Number);
        let [eh, em] = end.split(':').map(Number);
        let play = eh * 60 + em - (sh * 60 + sm);

        let nSheet = normalize(sheet);
        let played = '';

        for (let i = 0; i < play; i++) played += nSheet[i % nSheet.length];

        if (played.includes(target) && play > best) {
            best = play;
            answer = title;
        }
    }

    if (best === -1) return "(None)";
    return answer;
}