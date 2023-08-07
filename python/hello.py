print('hello')

a = "현재 온도는 18도입니다."
a[:7] 
# 현재 온도는 
a[9:]
# 도입니다.
a[:7] +'20'+ a[9:]
# 현재 온도는 20도입니다.

# %d = 숫자열 %s = 문자열

b = "I eat %d apples." % 3
# 'I eat 3 apples.'
c = "I eat %s apples." % "five"
# 'I eat five apples.'

# 2개 이상의 값 넣기
number = 10
day = "three"
"I ate %d apples. so I was sick for %s days." % (number, day)
# 'I ate 10 apples. so I was sick for three days.'


