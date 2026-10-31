export const topics = ['Design', 'Food', 'Music', 'Technology', 'Outdoors', 'Photography'];
export const topicCN = {Design:'设计', Food:'食物', Music:'音乐', Technology:'科技', Outdoors:'户外', Photography:'摄影'};
export const algorithms = [
  {id:'serendipity',symbol:'✳',name:'Serendipity',cn:'偶然相遇',description:'A familiar world, with a few unexpected turns.',zh:'熟悉的兴趣里，留一点偶然。'},
  {id:'chronological',symbol:'◷',name:'Chronological',cn:'时间顺序',description:'The latest posts. Nothing rearranged.',zh:'按发布时间，看看刚刚发生的事。'},
  {id:'focus',symbol:'◉',name:'Deep Focus',cn:'深入阅读',description:'Ideas worth slowing down for.',zh:'值得停下来，慢慢读的想法。'},
  {id:'local',symbol:'⌁',name:'Local Pulse',cn:'附近的声音',description:'A little closer to your corner of the world.',zh:'和你所在的城市，靠近一点。'},
  {id:'boost',symbol:'↗',name:'Creator Boost',cn:'新鲜创作者',description:'Make room for a voice you haven’t heard.',zh:'给还没听过的声音，多一点空间。'}
];
export const creators = [
  {id:'ava',name:'Ava Park',handle:'ava.cooks',initials:'AP',color:'avocado',city:'London',emerging:0.6,bio:'Cooking slowly. Noticing the small things.',zh:'慢慢做饭，留意小事。'},
  {id:'noah',name:'Noah Kim',handle:'noah.makes',initials:'NK',color:'lilac',city:'San Francisco',emerging:0.4,bio:'Objects, type, and a little room to play.',zh:'物件、字体，和一点玩的空间。'},
  {id:'mila',name:'Mila Chen',handle:'mila.listens',initials:'MC',color:'peach',city:'London',emerging:0.9,bio:'Collecting sounds for unhurried afternoons.',zh:'收集适合悠闲午后的声音。'},
  {id:'leo',name:'Leo Santos',handle:'leo.outside',initials:'LS',color:'sun',city:'Lisbon',emerging:0.8,bio:'Taking the long way home.',zh:'绕一点远路回家。'},
  {id:'jules',name:'Jules Park',handle:'jules.light',initials:'JP',color:'blue',city:'Seoul',emerging:1,bio:'Photographs of places between places.',zh:'拍下那些路过的地方。'},
  {id:'eli',name:'Eli Turner',handle:'eli.builds',initials:'ET',color:'pink',city:'San Francisco',emerging:0.3,bio:'Making technology feel a little more human.',zh:'让技术多一点人的温度。'}
];
export const samplePosts = [
  {id:'slow-morning',author:'ava',topic:'Food',age:3,minutes:3,art:'food',likes:24,title:'An ode to the slow morning.',zhTitle:'写给一个慢下来的早晨。',body:'An orange, a coffee, and nowhere to rush. Some mornings don’t need improving. They just need noticing.',zhBody:'一个橙子，一杯咖啡，不急着去哪里。有些早晨不需要变得更好，只需要被好好看见。',more:'I used to treat breakfast as a gap between waking up and doing something useful. This week I put my phone in another room and sat by the window. Nothing remarkable happened. The coffee got cold. The light moved across the table. I stayed a little longer.\n\nMaybe a good ritual is just an ordinary thing we decide to give our attention to.',zhMore:'以前，早餐只是起床和开始做正事之间的一段空隙。这周我把手机放在另一个房间，坐在窗边。也没发生什么特别的事。咖啡凉了，光慢慢移过桌面，我多坐了一会儿。\n\n也许所谓仪式，就是决定认真对待一件平常的小事。'},
  {id:'soft-edges',author:'noah',topic:'Design',age:1,minutes:5,art:'design',likes:18,title:'What if the internet had softer edges?',zhTitle:'如果互联网也能柔软一点？',body:'Not every interface needs to demand something from us. A small experiment in making digital spaces feel calm, open, and a little imperfect.',zhBody:'不是每个界面都要催我们做点什么。试着让数字空间安静、开放，也允许一点不完美。',more:'I started by removing the red notification badges. Then the automatic refresh. Then the infinite scroll. What was left felt surprisingly different.\n\nThere was an end to the page. There was time to read. A button could be useful without being urgent.\n\nDesigning for attention can also mean giving it back. This is a sketch of that idea, not a finished answer.',zhMore:'我先去掉了红色通知，再去掉自动刷新和无限滚动。剩下的页面感觉完全不同。\n\n页面有尽头，阅读有时间。一个按钮可以有用，却不必让人着急。\n\n为注意力设计，也可以是把注意力还给人。这只是一个方向，还不是完整的答案。'},
  {id:'side-b',author:'mila',topic:'Music',age:8,minutes:2,art:'music',likes:9,title:'For the afternoon that has no plans.',zhTitle:'留给没有安排的午后。',body:'A little ambient, a little jazz, a little silence between tracks. My favourite kind of listening is the kind that lets a room breathe.',zhBody:'一点氛围音乐，一点爵士，还有曲目之间的一点安静。我喜欢能让房间喘口气的音乐。',more:'Today’s listening note: start with a piano, let a bass line arrive slowly, and leave space before you press play again. A playlist does not have to fill every second. Sometimes the window provides the next sound.',zhMore:'今天的听歌笔记：从钢琴开始，让低音慢慢出现，不必马上按下播放下一首。歌单不用填满每一秒，有时下一段声音会从窗外传来。'},
  {id:'long-way',author:'leo',topic:'Outdoors',age:2,minutes:2,art:'outdoors',likes:16,title:'The long way is sometimes the point.',zhTitle:'有时，绕路本身就是目的。',body:'Took the path without a destination today. Found a little sunlight, a very good tree, and absolutely no reason to check my phone.',zhBody:'今天走了一条不知道通向哪里的路。碰到一点阳光、一棵很好的树，以及完全不用看手机的理由。',more:'A walk can be a way of finding something. It can also be a way of letting things stay unfound for an hour. I’m trying the second one more often.',zhMore:'散步可以是为了找到什么，也可以是允许自己一个小时都不用找到答案。我正在试着多做后者。'},
  {id:'own-connections',author:'eli',topic:'Technology',age:12,minutes:7,art:'tech',likes:32,title:'What does it mean to own a connection?',zhTitle:'“拥有自己的连接”，到底是什么意思？',body:'Your community shouldn’t disappear when you leave an app. But making a social graph portable means thinking about consent, privacy, and the people on both sides.',zhBody:'离开一个应用，不该意味着失去整个社区。但社交关系的可迁移性，也需要认真考虑同意、隐私，以及关系两端的人。',more:'An export button is a beginning. It gives you a copy of your information. It does not, by itself, create a shared protocol or permission to copy another person’s private data.\n\nA portable social network needs a way for people to identify themselves across services, verify the connections they choose to share, and revoke access when they want.\n\nThat is the longer-term Flownet direction. In this preview, exporting is intentionally smaller: your own local profile, settings, posts, and the sample creators you follow.',zhMore:'导出按钮是一个起点。它让你拿到自己信息的副本，但不会自动创建一个共享协议，也不代表可以复制他人的私人数据。\n\n可迁移的社交网络，需要跨服务识别身份、验证自愿分享的关系，并允许用户撤回授权。\n\n这是 Flownet 的长期方向。当前预览的导出范围更具体：你在本地建立的资料、设置、帖子，以及关注的示例创作者。'},
  {id:'borrowed-light',author:'jules',topic:'Photography',age:5,minutes:3,art:'photo',likes:7,title:'Borrowed light, 4:17 pm.',zhTitle:'借来的光，下午 4:17。',body:'The same window, every afternoon. I thought I was taking the same picture. Looking back, nothing was ever quite the same.',zhBody:'每天下午，同一扇窗。我以为自己一直在拍同一张照片，回头看，原来没有一天完全一样。',more:'The wall changes colour. A cloud becomes a softbox. A neighbour opens a curtain. Photographing one small thing repeatedly has taught me more about looking than going somewhere new every day.',zhMore:'墙壁变了颜色，云变成柔光箱，邻居拉开窗帘。反复拍一件小事，比每天去一个新地方更能教会我如何观察。'},
  {id:'small-tools',author:'eli',topic:'Technology',age:20,minutes:6,art:null,likes:21,title:'Small tools. Clear intentions.',zhTitle:'小工具，清楚的目的。',body:'My favourite software does one thing, explains itself, and knows when to get out of the way. What’s a tool that makes your day quietly better?',zhBody:'我最喜欢的软件只做好一件事，讲得清自己如何工作，也知道什么时候该退到一旁。有什么工具在悄悄让你的一天变好？',more:'A timer with no account. A text file I can open anywhere. A map that works offline. These tools earn trust by being understandable.\n\nWhen a feed orders posts, I want the same kind of clarity: what is being counted, how much each thing matters, and what I can change. A simple formula I can inspect is a useful place to start.',zhMore:'不用注册的计时器、随处可以打开的文本文件、离线地图。这些工具靠容易理解来赢得信任。\n\n信息流排序也可以这样：计算了什么、每个因素占多少、哪些能由我调整。一个可以查看的简单公式，就是不错的起点。'},
  {id:'handmade',author:'noah',topic:'Design',age:16,minutes:4,art:null,likes:12,title:'Leave a little trace of the hand.',zhTitle:'留一点手做的痕迹。',body:'A line that wobbles. A shape that doesn’t quite match. Sometimes the things we try to polish away are the things that make something feel alive.',zhBody:'一根有点晃的线，一个不太规整的形状。有时，我们想修掉的东西，正是作品的生命力。',more:'This week I am making sketches with a pen I cannot undo. It is not a rejection of digital tools; it is a reminder to make decisions and stay curious about where they lead.',zhMore:'这周我用一支不能撤销的笔画草图。不是拒绝数字工具，而是提醒自己：做一个决定，再好奇它会把自己带去哪里。'}
];
export const defaults = {algorithm:'serendipity',topics:['Design','Music','Technology'],discovery:65,freshness:35,city:'London'};
const clamp = n => Math.max(0,Math.min(1,n));
export function scorePost(post, settings) {
  const author=creators.find(c=>c.id===post.author);
  const interest=settings.topics.includes(post.topic)?1:0.1;
  const signals={interest,discovery:1-interest,freshness:clamp(1-post.age/24),depth:clamp(post.minutes/7),local:author?.city===settings.city?1:0,emerging:author?.emerging??1};
  const fresh=clamp(settings.freshness/100)*.6;
  const explore=clamp(settings.discovery/100);
  let weights;
  switch(settings.algorithm){
    case 'chronological':weights={freshness:1};break;
    case 'focus':weights={depth:.65,interest:.35*(1-fresh),freshness:.35*fresh};break;
    case 'local':weights={local:.7,interest:.3*(1-fresh),freshness:.3*fresh};break;
    case 'boost':weights={emerging:.65,interest:.35*(1-fresh),freshness:.35*fresh};break;
    default:weights={interest:(1-fresh)*(1-explore),discovery:(1-fresh)*explore,freshness:fresh};
  }
  const parts=Object.entries(weights).map(([key,weight])=>({key,weight,signal:signals[key],contribution:signals[key]*weight}));
  return {total:parts.reduce((s,p)=>s+p.contribution,0),parts};
}
export function rankPosts(posts, settings) {
  return posts.map(p=>({...p,score:scorePost(p,settings)})).sort((a,b)=>settings.algorithm==='chronological'?a.age-b.age:b.score.total-a.score.total||a.age-b.age);
}
export function filterPosts(posts,{view='feed',saved=[],following=[],query='',topic='all'}={}){
  const q=query.toLocaleLowerCase().trim();
  return posts.filter(p=>
    (view!=='saved'||saved.includes(p.id)) &&
    (view!=='following'||following.includes(p.author)||p.author==='you') &&
    (topic==='all'||p.topic===topic) &&
    (!q||[p.title,p.zhTitle,p.body,p.zhBody,p.topic,topicCN[p.topic],creators.find(c=>c.id===p.author)?.name].join(' ').toLocaleLowerCase().includes(q))
  );
}
export function parseRecipe(text){
  const q=text.toLowerCase();
  const patterns={Design:/\bdesign\b|设计/,Food:/\bfood\b|\bcook|食物|美食|做饭/,Music:/\bmusic\b|音乐/,Technology:/\btech|科技|技术/,Outdoors:/\boutdoor|\bnature\b|户外|自然/,Photography:/\bphoto|\bcamera|摄影|相机/};
  const matched=topics.filter(t=>patterns[t].test(q));
  const chronological=/\blatest\b|\bnewest\b|\bchronological\b|最新|时间顺序/.test(q);
  const focus=/\blong|\bdeep|\bfocus\b|长文|深入|长一点/.test(q);
  const grid=/\bgrid\b|网格/.test(q),list=/\blist\b|列表/.test(q),magazine=/\bmagazine\b|杂志/.test(q);
  return {topics:matched,algorithm:chronological?'chronological':focus?'focus':'serendipity',layout:grid?'grid':list?'list':'magazine',recognized:matched.length>0||chronological||focus||grid||list||magazine};
}
