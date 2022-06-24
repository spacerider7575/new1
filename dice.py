n=int(input())
def countWays(n,s):
    arr = list(range(1,n+1))
    count = [0 for i in range(s+1)]
    count[0] = 1
    for i in range(1, s+1):
        for j in range(n):
            if(i >= arr[j]):
                count[i] += count[i - arr[j]]
    return count[s] 


for i in range(n):
    s, m = map(int,input().split())
    count = countWays(m,s)
    print(count)
