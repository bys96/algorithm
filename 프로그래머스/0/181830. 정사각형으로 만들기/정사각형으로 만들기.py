def solution(arr):
    answer = [[]]
    
    while(True):
        row = len(arr)
        col = len(arr[0])
    
        if row > col :
            for i in range(row):
                arr[i].append(0)
        
        elif row < col :
            arr.append([0]*col)
        
        elif row == col :
            answer = arr
            break;
    
    return answer