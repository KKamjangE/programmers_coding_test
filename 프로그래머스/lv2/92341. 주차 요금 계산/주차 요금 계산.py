import math

def solution(fees, records):
    ans = []
    park = dict()
    defTime, defPrice, overTime, overPrice = fees
    maxTime = (23 * 60) + 59
    
    def hourToMinute(time):
        hour, minute = map(int, time.split(":"))
        return (hour * 60) + minute
    
    for record in records:
        time, car, state = record.split()
        time = hourToMinute(time)
        if state == "IN":
            if car in park:
                park[car][0] = time
                park[car][1] = "IN"
            else:
                park[car] = [time, "IN", 0]
        elif state == "OUT":
            park[car][2] = park.get(car)[2] + (time - park[car][0])
            park[car][1] = "OUT"
                
    sortPark = sorted(park.items())
    
    for num, info in sortPark:
        if info[1] == "IN":
            info[2] += maxTime - info[0]
        if info[2] <= defTime:
            ans.append(defPrice)
        else:
            ans.append(defPrice + math.ceil((info[2] - defTime) / overTime) * overPrice)
        
    return ans