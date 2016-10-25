# -*- coding:utf-8 -*-
from urllib import request
from pyquery import PyQuery as pq
import json
import datetime

date = datetime.date.today()
# output.jsonに保存するデータ
data = []

# -----------------------------------------------------------------------------
url = "http://gpscycling.net/fland/latlon/index.htm"

resp = request.urlopen(url)
html = resp.read().decode("utf-8")
query = pq(html)
dates = []
for current_time in range(30):
    dates.append(date)
#print(dates)
for info in query.find('.menu_on'):
    print(pq(info))
# data.append({
    # 'month': monthList[i],
    # 'house': 'bluenote',
    # 'live': [{'time': weeks[j], 'day': days[i][j], 'artist': bluenoteResults[j], 'url': urls[j]} for j in range(len(days[i]))]
# },)



fp = open("output.json", 'w')
json.dump(data, fp, ensure_ascii=False)
