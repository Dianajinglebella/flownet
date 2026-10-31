import json, urllib.request, urllib.parse, re, sys
UA={'User-Agent':'FlownetPrototype/1.0 (dian@uni.minerva.edu)'}
def get(u): return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30).read()
Q={'p1':'Shibuya crossing night','p2':'Golden Gai night','p3':'Tokyo train night','p4':'Shinjuku rain umbrellas','p5':'Tokyo night alley lanterns','p6':'Ginza 1960s',
'p7':'Hong Kong tram night','p8':'New York street morning','p10':'black and white portrait old woman','p11':'portrait window light','p12':'railway platform waiting black and white',
'p13':'miso soup','p14':'rice bowl','p15':'bread loaf','p17':'ramen restaurant Japan','p18':'New York night rain'}
used=set(); out={}
for pid,q in Q.items():
  try: d=json.loads(get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({'action':'query','generator':'search','gsrsearch':'filetype:bitmap '+q,'gsrnamespace':6,'gsrlimit':25,'prop':'imageinfo','iiprop':'url|extmetadata|size','iiurlwidth':1400,'format':'json'})))
  except Exception as e: print('FAIL',e); sys.exit(1)
  for pg in sorted(d.get('query',{}).get('pages',{}).values(), key=lambda p:p.get('index',99)):
    ii=pg.get('imageinfo',[{}])[0]; md=ii.get('extmetadata',{}); lic=md.get('LicenseShortName',{}).get('value','')
    if not re.match(r'(Public domain|CC0)',lic,re.I) or pg['title'] in used or ii.get('width',0)<1000: continue
    try: open(pid+'.jpg','wb').write(get(ii['thumburl']))
    except Exception: continue
    out[pid]={'file':pg['title'],'artist':re.sub('<[^>]+>','',md.get('Artist',{}).get('value','Unknown')).strip()[:60],'license':lic}; used.add(pg['title']); break
json.dump(out,open('credits.json','w'),indent=1); print(len(out),'of',len(Q))
