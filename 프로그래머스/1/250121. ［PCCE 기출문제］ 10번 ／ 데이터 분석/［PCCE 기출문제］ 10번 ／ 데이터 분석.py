def solution(data, ext, val_ext, sort_by):
    answer = []
    
    type_map = {
        "code": 0,
        "date": 1,
        "maximum": 2,
        "remain": 3
    }
    
    ext_idx = type_map[ext]
    sort_idx = type_map[sort_by]
    
    for d in data:
        if d[ext_idx] < val_ext:
            answer.append(d)
    
    answer.sort(key=lambda x: x[sort_idx])
    
    return answer