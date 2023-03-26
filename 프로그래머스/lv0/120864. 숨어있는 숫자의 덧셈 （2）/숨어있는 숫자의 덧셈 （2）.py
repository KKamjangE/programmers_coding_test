def solution(my_string):
    ans = 0
    for i in my_string:
        if i.isalpha():
            my_string = my_string.replace(i, " ")
    return sum(list(map(int, my_string.split())))