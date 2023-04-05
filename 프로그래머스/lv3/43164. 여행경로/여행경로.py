def solution(tickets):
    graph={i[0]:[] for i in tickets}
    for i in tickets:
        graph[i[0]].append(i[1])
        
    for i in graph.keys():
        graph[i].sort(reverse=True)
    
    ans = []
    stack = ["ICN"]

    while stack:
        top = stack[-1]
        
        if top not in graph or len(graph[top]) == 0:
            ans.append(stack.pop())
        else:
            stack.append(graph[top].pop())
            
    ans.reverse()
    return ans