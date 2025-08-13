function solution(n,a,b)
{
    var answer = 1;
    while(n >= 1){
        a = a%2==1 ? a+=1 : a;
        b = b%2==1 ? b+=1 : b;
        
        if(a == b) return answer;
            
        a/=2;
        b/=2;
        answer++;
        n/=2;
    }
    return answer;
}