def solution(phone_number):
    length = len(phone_number)
    ans = "*" * (length - 4)
    ans += phone_number[-4:]
    return ans