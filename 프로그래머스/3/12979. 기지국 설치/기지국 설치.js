function solution(n, stations, w) {
  let answer = 0;
  let coverage = 2 * w + 1; // 기지국 하나가 커버하는 범위
  let position = 1; // 현재 확인할 아파트 위치 (1번부터 시작)

  for (let station of stations) {
    const left = station - w;
    if (position < left) {
      const gap = left - position;
      answer += Math.ceil(gap / coverage);
    }
    position = station + w + 1;
  }

  if (position <= n) {
    const gap = n - position + 1;
    answer += Math.ceil(gap / coverage);
  }

  return answer;
}
