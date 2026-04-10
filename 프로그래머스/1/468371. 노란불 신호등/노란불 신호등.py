def solution(signals):
    answer = 0
    cycle = []
    
    for signal in signals:
        cycle.append(signal[0] + signal[1] + signal[2])
    
    total = 1
    for c in cycle:
        total *= c
    
    for t in range(1, total + 1):
        ok = True
        
        for i in range(len(signals)):
            G, Y, R = signals[i]
            cur = (t - 1) % cycle[i]
            
            if not (G <= cur < G + Y):
                ok = False
                break
        
        if ok:
            return t
    
    return -1