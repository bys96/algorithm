function solution(my_string, indices) {
    return my_string.split("").filter((val,idx)=> !indices.includes(idx)).join("");

}