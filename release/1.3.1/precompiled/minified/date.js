var V,Ua,Va=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],Wa="({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}(\\d{1,2}(?:[,.]\\d+)?)?{m}(?::?(\\d{1,2}(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",Xa={},Ya,Za,$a,ab=[],bb=[{ba:"f{1,4}|ms|milliseconds",format:function(a){return W(a,"Milliseconds")}},{ba:"ss?|seconds",format:function(a){return W(a,"Seconds")}},{ba:"mm?|minutes",format:function(a){return W(a,"Minutes")}},
{ba:"hh?|hours|12hr",format:function(a){a=W(a,"Hours");return a===0?12:a-P(a/13)*12}},{ba:"HH?|24hr",format:function(a){return W(a,"Hours")}},{ba:"dd?|date|day",format:function(a){return W(a,"Date")}},{ba:"dow|weekday",la:k,format:function(a,b,c){a=W(a,"Day");return b.weekdays[a+(c-1)*7]}},{ba:"MM?",format:function(a){return W(a,"Month")+1}},{ba:"mon|month",la:k,format:function(a,b,c){a=W(a,"Month");return b.months[a+(c-1)*12]}},{ba:"y{2,4}|year",format:function(a){return W(a,"FullYear")}},{ba:"[Tt]{1,2}",
format:function(a,b,c,d){a=W(a,"Hours");b=b.ampm[P(a/12)];if(d.length===1)b=b.slice(0,1);if(d.slice(0,1)==="T")b=b.toUpperCase();return b}},{ba:"z{1,4}|tz|timezone",text:k,format:function(a,b,c,d){a=a.getUTCOffset();if(d=="z"||d=="zz")a=a.replace(/(\d{2})(\d{2})/,function(e,f){return R(f,d.length)});return a}},{ba:"iso(tz|timezone)",format:function(a){return a.getUTCOffset(k)}},{ba:"ord",format:function(a){a=W(a,"Date");return a+pa(a)}}],cb=[{$:"year",method:"FullYear",ja:k,da:function(a){return(365+
(a?a.isLeapYear()?1:0:0.25))*24*60*60*1E3}},{$:"month",method:"Month",ja:k,da:function(a,b){var c=30.4375,d;if(a){d=a.daysInMonth();if(b<=d.days())c=d}return c*24*60*60*1E3}},{$:"week",method:"Week",da:aa(6048E5)},{$:"day",method:"Date",ja:k,da:aa(864E5)},{$:"hour",method:"Hours",da:aa(36E5)},{$:"minute",method:"Minutes",da:aa(6E4)},{$:"second",method:"Seconds",da:aa(1E3)},{$:"millisecond",method:"Milliseconds",da:aa(1)}],db={};function eb(a){na(this,a);this.ga=ab.concat()}
eb.prototype={getMonth:function(a){return B(a)?a-1:this.months.indexOf(a)%12},getWeekday:function(a){return this.weekdays.indexOf(a)%7},oa:function(a){var b;return B(a)?a:a&&(b=this.numbers.indexOf(a))!==-1?(b+1)%10:1},ua:function(a){var b=this;return a.replace(q(this.num,"g"),function(c){return b.oa(c)||""})},sa:function(a){return V.units[this.units.indexOf(a)%8]},Ba:function(a){return this.na(a,a[2]>0?"future":"past")},ra:function(a){return this.na(fb(a),"duration")},va:function(a){a=a||this.code;
return a==="en"||a==="en-US"?k:this.variant},ya:function(a){return a===this.ampm[0]},za:function(a){return a===this.ampm[1]},na:function(a,b){var c=a[0],d=a[1],e=a[2],f,g,j;if(this.code=="ru"){j=c.toString().slice(-1);switch(k){case j==1:j=1;break;case j>=2&&j<=4:j=2;break;default:j=3}}else j=this.plural&&c>1?1:0;g=this.units[j*8+d]||this.units[d];if(this.capitalizeUnit)g=gb(g);f=this.modifiers.filter(function(i){return i.name=="sign"&&i.value==(e>0?1:-1)})[0];return this[b].replace(/\{(.*?)\}/g,
function(i,h){switch(h){case "num":return c;case "unit":return g;case "sign":return f.src}})},ta:function(){return this.ma?[this.ma].concat(this.ga):this.ga},addFormat:function(a,b,c,d,e){var f=c||[],g=this,j;a=a.replace(/\s+/g,"[-,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(i,h){var n=h.match(/\?$/),r=h.match(/(\d)(?:-(\d))?/),y=h.match(/^\d+$/),z=h.replace(/[^a-z]+$/,""),C,ca;if(y)C=g.optionals[y[0]];else if(g[z])C=g[z];else if(g[z+"s"]){C=g[z+"s"];if(r){ca=[];C.forEach(function(da,Da){var Q=Da%
(g.units?8:C.length);if(Q>=r[1]&&Q<=(r[2]||r[1]))ca.push(da)});C=ca}C=hb(C)}if(y)return"(?:"+C+")?";else{c||f.push(z);return"("+C+")"+(n?"?":"")}});if(b){b=ib(Wa,g,e);e=["t","[\\s\\u3000]"].concat(g.timeMarker);j=a.match(/\\d\{\d,\d\}\)+\??$/);jb(g,"(?:"+b+")[,\\s\\u3000]+?"+a,Va.concat(f),d);jb(g,a+"(?:[,\\s]*(?:"+e.join("|")+(j?"+":"*")+")"+b+")?",f.concat(Va),d)}else jb(g,a,f,d)}};
function kb(a,b){var c;D(a)||(a="");c=db[a]||db[a.slice(0,2)];if(b===m&&!c)throw Error("Invalid locale.");return c||Ua}
function lb(a,b){function c(i){var h=g[i];if(D(h))g[i]=h.split(",");else h||(g[i]=[])}function d(i,h){i=i.split("+").map(function(n){return n.replace(/(.+):(.+)$/,function(r,y,z){return z.split("|").map(function(C){return y+C}).join("|")})}).join("|");return i.split("|").forEach(h)}function e(i,h,n){var r=[];g[i].forEach(function(y,z){if(h)y+="+"+y.slice(0,3);d(y,function(C,ca){r[ca*n+z]=C.toLowerCase()})});g[i]=r}function f(i,h,n){i="\\d{"+i+","+h+"}";if(n)i+="|(?:"+hb(g.numbers)+")+";return i}var g,
j;g=new eb(b);c("modifiers");"months,weekdays,units,numbers,articles,optionals,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(c);j=!g.monthSuffix;e("months",j,12);e("weekdays",j,7);e("units",m,8);e("numbers",m,10);g.code=a;g.date=f(1,2,g.digitDate);g.year=f(4,4);g.num=function(){var i=["\\d+"].concat(g.articles);if(g.numbers)i=i.concat(g.numbers);return hb(i)}();(function(){var i=[];g.ha={};g.modifiers.forEach(function(h){var n=h.name;d(h.src,function(r){var y=g[n];g.ha[r]=h;
i.push({name:n,src:r,value:h.value});g[n]=y?y+"|"+r:r})});g.day+="|"+hb(g.weekdays);g.modifiers=i})();if(g.monthSuffix){g.month=f(1,2);g.months=N(1,12).map(function(i){return i+g.monthSuffix})}g.full_month=f(1,2)+"|"+hb(g.months);g.timeSuffixes.length>0&&g.addFormat(ib(Wa,g),m,Va);g.addFormat("{day}",k);g.addFormat("{month}"+(g.monthSuffix||""));g.addFormat("{year}"+(g.yearSuffix||""));g.timeParse.forEach(function(i){g.addFormat(i,k)});g.dateParse.forEach(function(i){g.addFormat(i)});return db[a]=
g}function jb(a,b,c,d){a.ga.unshift({Ca:d,xa:a,Aa:q("^"+b+"$","i"),to:c})}function gb(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function hb(a){return a.filter(function(b){return!!b}).join("|")}function mb(a,b){var c;if(L(a[0]))return a;else if(B(a[0])&&!B(a[1]))return[a[0]];else if(D(a[0])&&b)return[nb(a[0]),a[1]];c={};Za.forEach(function(d,e){c[d.$]=a[e]});return[c]}
function nb(a,b){var c={};if(match=a.match(/^(\d+)?\s?(\w+?)s?$/i)){if(K(b))b=parseInt(match[1])||1;c[match[2].toLowerCase()]=b}return c}function ob(a,b){var c={},d,e;b.forEach(function(f,g){d=a[g+1];if(!(K(d)||d==="")){if(f==="year")c.Da=d;e=parseFloat(d.replace(/,/,"."));c[f]=!isNaN(e)?e:d.toLowerCase()}});return c}function pb(a){a=a.trim().replace(/^(just )?now|\.+$/i,"");return qb(a)}
function qb(a){return a.replace(Ya,function(b,c,d){var e=0,f=1,g,j;if(c)return b;d.split("").reverse().forEach(function(i){i=Xa[i];var h=i>9;if(h){if(g)e+=f;f*=i/(j||1);j=i}else{if(g===m)f*=10;e+=f*i}g=h});if(g)e+=f;return e})}
function rb(a,b,c,d){var e=new s,f=m,g,j,i,h,n,r,y,z,C;e.utc(d);if(ha(a))e=a.clone();else if(B(a))e=new s(a);else if(L(a)){e.set(a,k);h=a}else if(D(a)){g=kb(b);a=pb(a);g&&H(g.ta(),function(ca,da){var Da=a.match(da.Aa);if(Da){i=da;j=i.xa;h=ob(Da,i.to,j);h.utc&&e.utc();j.ma=i;if(h.timestamp){h=h.timestamp;return m}if(i.Ca&&!D(h.month)&&(D(h.date)||g.va(b))){z=h.month;h.month=h.date;h.date=z}if(h.year&&h.Da.length===2)h.year=O(W(new s,"FullYear")/100)*100-O(h.year/100)*100+h.year;if(h.month){h.month=
j.getMonth(h.month);if(h.shift&&!h.unit)h.unit=j.units[7]}if(h.weekday&&h.date)delete h.weekday;else if(h.weekday){h.weekday=j.getWeekday(h.weekday);if(h.shift&&!h.unit)h.unit=j.units[5]}if(h.day&&(z=j.ha[h.day])){h.day=z.value;e.reset();f=k}else if(h.day&&(r=j.getWeekday(h.day))>-1){delete h.day;if(h.num&&h.month){C=function(){var Q=e.getWeekday();e.setWeekday(7*(h.num-1)+(Q>r?r+7:r))};h.day=1}else h.weekday=r}if(h.date&&!B(h.date))h.date=j.ua(h.date);if(j.za(h.ampm)&&h.hour<12)h.hour+=12;else if(j.ya(h.ampm)&&
h.hour===12)h.hour=0;if("offset_hours"in h||"offset_minutes"in h){e.utc();h.offset_minutes=h.offset_minutes||0;h.offset_minutes+=h.offset_hours*60;if(h.offset_sign==="-")h.offset_minutes*=-1;h.minute-=h.offset_minutes}if(h.unit){f=k;y=j.oa(h.num);n=j.sa(h.unit);if(h.shift||h.edge){y*=(z=j.ha[h.shift])?z.value:0;if(n==="month"&&J(h.date)){e.set({day:h.date},k);delete h.date}if(n==="year"&&J(h.month)){e.set({month:h.month,day:h.date},k);delete h.month;delete h.date}}if(h.sign&&(z=j.ha[h.sign]))y*=z.value;
if(J(h.weekday)){e.set({weekday:h.weekday},k);delete h.weekday}h[n]=(h[n]||0)+y}if(h.year_sign==="-")h.year*=-1;$a.slice(1,4).forEach(function(Q,Ub){var zb=h[Q.$],Ab=zb%1;if(Ab){h[$a[Ub].$]=O(Ab*(Q.$==="second"?1E3:60));h[Q.$]=P(zb)}});return m}});if(i)if(f)e.advance(h);else{e._utc&&e.reset();sb(e,h,k,m,c)}else e=a?new s(a):new s;if(h&&h.edge){z=j.ha[h.edge];H($a.slice(4),function(ca,da){if(J(h[da.$])){n=da.$;return m}});if(n==="year")h.fa="month";else if(n==="month"||n==="week")h.fa="day";e[(z.value<
0?"endOf":"beginningOf")+gb(n)]();z.value===-2&&e.reset()}C&&C()}return{ea:e,set:h}}function fb(a){var b,c=v.abs(a),d=c,e=0;$a.slice(1).forEach(function(f,g){b=P(O(c/f.da()*10)/10);if(b>=1){d=b;e=g+1}});return[d,e,a]}
function tb(a,b,c,d){var e,f=kb(d),g=q(/^[A-Z]/);if(a.isValid())if(Date[b])b=Date[b];else{if(A(b)){e=fb(a.millisecondsFromNow());b=b.apply(a,e.concat(f))}}else return"Invalid Date";if(!b&&c){e=e||fb(a.millisecondsFromNow());if(e[1]===0){e[1]=1;e[0]=1}return f.Ba(e)}b=b||"long";b=f[b]||b;bb.forEach(function(j){b=b.replace(q("\\{("+j.ba+")(\\d)?\\}",j.la?"i":""),function(i,h,n){i=j.format(a,f,n||1,h);n=h.length;var r=h.match(/^(.)\1+$/);if(j.la){if(n===3)i=i.slice(0,3);if(r||h.match(g))i=gb(i)}else if(r&&
!j.text)i=(B(i)?R(i,n):i.toString()).slice(-n);return i})});return b}
function ub(a,b,c,d){var e=rb(b,l,l,d),f=0;d=b=0;var g;if(c>0){b=d=c;g=k}if(!e.ea.isValid())return m;if(e.set&&e.set.fa){cb.forEach(function(i){if(i.$===e.set.fa)f=i.da(e.ea,a-e.ea)-1});c=gb(e.set.fa);if(e.set.edge||e.set.shift)e.ea["beginningOf"+c]();if(e.set.fa==="month")j=e.ea.clone()["endOf"+c]().getTime();if(!g&&e.set.sign&&e.set.fa!="millisecond"){b=50;d=-50}}g=a.getTime();c=e.ea.getTime();var j=j||c+f;return g>=c-b&&g<=j+d}
function sb(a,b,c,d,e){function f(i){return J(b[i])?b[i]:b[i+"s"]}var g,j;if(B(b)&&d)b={milliseconds:b};else if(B(b)){a.setTime(b);return a}if(b.date)b.day=b.date;H($a,function(i,h){var n=h.$==="day";if(J(f(h.$))||n&&J(f("weekday"))){b.fa=h.$;j=+i;return m}else if(c&&h.$!=="week"&&(!n||!J(f("week"))))X(a,h.method,n?1:0)});cb.forEach(function(i){var h=i.$;i=i.method;var n;n=f(h);if(!K(n)){if(d){if(h==="week"){n=(b.day||0)+n*7;i="Date"}n=n*d+W(a,i)}else h==="month"&&J(f("day"))&&X(a,"Date",15);X(a,
i,n);if(d&&h==="month"){h=n;if(h<0)h+=12;h%12!=W(a,"Month")&&X(a,"Date",0)}}});if(!d&&!J(f("day"))&&J(f("weekday"))){g=f("weekday");a.setWeekday(g)}(function(){var i=new s;return e===-1&&a>i||e===1&&a<i})()&&H($a.slice(j+1),function(i,h){if((h.ja||h.$==="week"&&J(f("weekday")))&&!J(f(h.$))){a[h.ia](e);return m}});return a}function W(a,b){return a["get"+(a._utc?"UTC":"")+b]()}function X(a,b,c){return a["set"+(a._utc?"UTC":"")+b](c)}
function ib(a,b,c){var d={h:0,m:1,s:2},e;b=b||V;return a.replace(/{([a-z])}/g,function(f,g){var j=[],i=g==="h",h=i&&!c;if(g==="t")return b.ampm.join("|");else{i&&j.push(":");if(e=b.timeSuffixes[d[g]])j.push(e+"\\s*");return j.length===0?"":"(?:"+j.join("|")+")"+(h?"":"?")}})}function vb(a,b){var c,d,e;if(B(a[1]))c=mb(a)[0];else{c=a[0];d=a[1];e=a[2]}return rb(c,d,b,e).ea}
s.extend({create:function(){return vb(arguments)},past:function(){return vb(arguments,-1)},future:function(){return vb(arguments,1)},addLocale:function(a,b){return lb(a,b)},setLocale:function(a){var b=kb(a,m);Ua=b;if(a&&a!=b.code)b.code=a;return b},getLocale:function(a){return!a?Ua:kb(a,m)},addFormat:function(a,b,c){jb(kb(c),a,b)}},m,m);
s.extend({set:function(){var a=mb(arguments);return sb(this,a[0],a[1])},setWeekday:function(a){if(!K(a))return X(this,"Date",W(this,"Date")+a-W(this,"Day"))},setWeek:function(a){if(!K(a)){W(this,"Date");X(this,"Month",0);X(this,"Date",a*7+1);return this.getTime()}},getWeek:function(){var a=this;a=a.clone();var b=W(a,"Day")||7;a.addDays(4-b).reset();return 1+P(a.daysSince(a.clone().beginningOfYear())/7)},getUTCOffset:function(a){var b=this._utc?0:this.getTimezoneOffset(),c=a===k?":":"";if(!b&&a)return"Z";
return R(O(-b/60),2,k)+c+R(b%60,2)},utc:function(a){this._utc=a===k||arguments.length===0;return this},isUTC:function(){return!!this._utc||this.getTimezoneOffset()===0},advance:function(){var a=mb(arguments,k);return sb(this,a[0],a[1],1)},rewind:function(){var a=mb(arguments,k);return sb(this,a[0],a[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(a,b){return this.getTime()>s.create(a).getTime()-(b||0)},isBefore:function(a,b){return this.getTime()<s.create(a).getTime()+(b||
0)},isBetween:function(a,b,c){var d=this.getTime();a=s.create(a).getTime();var e=s.create(b).getTime();b=v.min(a,e);a=v.max(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=W(this,"FullYear");return a%4===0&&a%100!==0||a%400===0},daysInMonth:function(){return 32-W(new s(W(this,"FullYear"),W(this,"Month"),32),"Date")},format:function(a,b){return tb(this,a,m,b)},relative:function(a,b){if(D(a)){b=a;a=l}return tb(this,a,k,b)},is:function(a,b,c){var d,e;if(this.isValid()){if(D(a)){a=a.trim().toLowerCase();
e=this.clone().utc(c);switch(k){case a==="future":return this.getTime()>(new s).getTime();case a==="past":return this.getTime()<(new s).getTime();case a==="weekday":return W(e,"Day")>0&&W(e,"Day")<6;case a==="weekend":return W(e,"Day")===0||W(e,"Day")===6;case (d=V.weekdays.indexOf(a)%7)>-1:return W(e,"Day")===d;case (d=V.months.indexOf(a)%12)>-1:return W(e,"Month")===d}}return ub(this,a,b,c)}},reset:function(a){var b={},c;a=a||"hours";if(a==="date")a="days";c=cb.some(function(d){return a===d.$||
a===d.$+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,k):this},clone:function(){var a=new s(this.getTime());a._utc=this._utc;return a}});s.extend({iso:function(){return this.toISOString()},getWeekday:s.prototype.getDay,getUTCWeekday:s.prototype.getUTCDay});
function wb(a,b){function c(){return O(this*b)}function d(){return vb(arguments)[a.ia](this)}function e(){return vb(arguments)[a.ia](-this)}var f=a.$,g={};g[f]=c;g[f+"s"]=c;g[f+"Before"]=e;g[f+"sBefore"]=e;g[f+"Ago"]=e;g[f+"sAgo"]=e;g[f+"After"]=d;g[f+"sAfter"]=d;g[f+"FromNow"]=d;g[f+"sFromNow"]=d;u.extend(g)}u.extend({duration:function(a){return kb(a).ra(this)}});
V=Ua=s.addLocale("en",{plural:k,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",optionals:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"day",src:"yesterday",value:-1},{name:"day",src:"today",value:0},{name:"day",src:"tomorrow",value:1},{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",
value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{num} {unit=4-5} {sign} {day}","{month} {year}","{shift} {unit=5-7}","{0} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1} {year?}","{date} {month} {year}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2} {shift} week","{0} {date}{1} of {month}","{0}{month?} {date?}{1} of {shift} {unit=6-7}"]});$a=cb.concat().reverse();Za=cb.concat();
Za.splice(2,1);
I(s,k,m,cb,function(a,b,c){var d=b.$,e=gb(d),f=b.da(),g,j;b.ia="add"+e+"s";g=function(i,h){return O((this.getTime()-s.create(i,h).getTime())/f)};j=function(i,h){return O((s.create(i,h).getTime()-this.getTime())/f)};a[d+"sAgo"]=j;a[d+"sUntil"]=j;a[d+"sSince"]=g;a[d+"sFromNow"]=g;a[b.ia]=function(i,h){var n={};n[d]=i;return this.advance(n,h)};wb(b,f);c<3&&["Last","This","Next"].forEach(function(i){a["is"+i+e]=function(){return this.is(i+" "+d)}});if(c<4){a["beginningOf"+e]=function(){var i={};switch(d){case "year":i.year=
W(this,"FullYear");break;case "month":i.month=W(this,"Month");break;case "day":i.day=W(this,"Date");break;case "week":i.weekday=0}return this.set(i,k)};a["endOf"+e]=function(){var i={hours:23,minutes:59,seconds:59,milliseconds:999};switch(d){case "year":i.month=11;i.day=31;break;case "month":i.day=this.daysInMonth();break;case "week":i.weekday=6}return this.set(i,k)}}});V.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",k,["year_sign","year","month","date"],m,k);
V.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",k,["date","month","year"],k);V.addFormat("{full_month}[-.](\\d{4,4})",m,["month","year"]);V.addFormat("\\/Date\\((\\d+(?:\\+\\d{4,4})?)\\)\\/",m,["timestamp"]);V.addFormat(ib(Wa,V),m,Va);ab=V.ga.slice(0,7).reverse();V.ga=V.ga.slice(7).concat(ab);I(s,k,m,"short,long,full",function(a,b){a[b]=function(c){return tb(this,b,m,c)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){if(b>9)b=v.pow(10,b-9);Xa[a]=b});"\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".split("").forEach(function(a,b){Xa[a]=b});Ya=q("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19]+)(?!\u6628)","g");
(function(){var a="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),b=V.weekdays.slice(0,7),c=V.months.slice(0,12);I(s,k,m,a.concat(b).concat(c),function(d,e){d["is"+gb(e)]=function(f){return this.is(e,0,f)}})})();s.extend({RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"},m,m);
