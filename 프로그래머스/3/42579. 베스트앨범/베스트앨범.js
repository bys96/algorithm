function solution(genres, plays) {
    var answer = [];
    let dic = {};
    
    for(let i=0; i<genres.length; i++){
       if(dic[genres[i]]) dic[genres[i]].push([plays[i],i]);
       else dic[genres[i]] = [[plays[i],i]];
    }
    
    const genreTotals = Object.entries(dic).map(([genre, songs]) => {
        const total = songs.reduce((acc, [play]) => acc + play, 0);
        return [genre, total];
    });


    genreTotals.sort((a, b) => b[1] - a[1]);


    for (let [genre] of genreTotals) {
        const songs = dic[genre]
        .sort((a, b) => b[0] - a[0])
        .slice(0, 2)
        .map(([_, idx]) => idx);

        answer.push(...songs);
    }   
    return answer;
}