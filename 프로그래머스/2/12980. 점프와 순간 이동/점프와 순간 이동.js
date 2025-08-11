function solution(n)
{
    var ans = 0;
    
    ans = n.toString(2).split("0").join("").length;

    return ans;
}