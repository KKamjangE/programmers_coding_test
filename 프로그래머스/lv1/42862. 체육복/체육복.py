def solution(n, lost, reserve):
    g = [0] * (n + 1)
    for i in lost:
        g[i] -= 1
    for i in reserve:
        g[i] += 1
    print(g[1:])
    
    for i in range(1, len(g)):
            if g[i - 1] < 0 and g[i] > 0:
                g[i] -= 1
                g[i - 1] += 1
            if i < len(g)-1 and g[i] > 0:
                if g[i + 1] < 0:
                    g[i] -= 1
                    g[i + 1] += 1
    print(g[1:])
    return(len([i for i in g[1:] if i >= 0]))