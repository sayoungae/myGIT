# 날씨 API
# Application Programming Interface - 응용 프로그래밍 접속자

from tkinter import BROWSE
import requests
import json


# select 의 val 값 cityName 에 넣기
# 현재온도 = temper 
# 강수량 = preci(precip_mm)
# 습도 = humi(humidity)
# 풍속 = wind(wind_kph)
# condi_icon = 이미지 불러오기{background-image:url(condi_icon)}


inputVal = input('국가를 입력하세요: ')
cityName = inputVal
# if int(inputVal) == 2:
#     cityName = 'busan'
# elif int(inputVal) == 3:
#     cityName = 'busan'
# else:
#     cityName = 'seoul'

response = requests.get('http://api.weatherapi.com/v1/current.json?key=3161ef5ec16246d097020741232807&q='+cityName+'&aqi=yes')
jsonObj = json.loads(response.text)
# print(json.dumps(jsonObj, indent=4))

temper = jsonObj['current']['temp_c']
condi_icon = jsonObj['current']['condition']['icon'] 
preci = jsonObj['current']['precip_mm'] 
humi = jsonObj['current']['humidity']
wind = jsonObj['current']['wind_kph']

# print("현재온도 :", temper, "강수량 :",preci, "습도: ",humi,"풍속 :", wind)
print("icon :", condi_icon)

itemlist = BROWSE.find_element(By.CLASS_NAME,'weather_icon')


