def solution(today, terms, privacies):
    answer = []
    termsInfo = dict()
    
    def dateToDay(date):
        year, month, day = map(int, date.split("."))
        return (year * 12 * 28) + (month * 28) + day
    
    today = dateToDay(today)
    
    for term in terms:
        term = term.split()
        termsInfo[term[0]] = int(term[1]) * 28
    
    for i in range(len(privacies)):
        date, term = privacies[i].split()
        if dateToDay(date) + termsInfo[term] <= today:
            answer.append(i + 1)
    
    return answer