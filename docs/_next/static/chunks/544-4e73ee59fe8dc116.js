"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{5544:function(n,t,r){r.d(t,{Bq:function(){return u},zC:function(){return _},KU:function(){return O},B3:function(){return j},DI:function(){return J},EI:function(){return I},_H:function(){return E},bI:function(){return m},SD:function(){return l},cG:function(){return k},bA:function(){return W},Ts:function(){return v},aO:function(){return U},AV:function(){return M},xK:function(){return g},cY:function(){return s},v:function(){return y},ln:function(){return x},J2:function(){return $},vu:function(){return p},Lk:function(){return z},w8:function(){return h},eh:function(){return T},pG:function(){return F},F1:function(){return w},L9:function(){return D},vp:function(){return S},Tu:function(){return b},T:function(){return R},Gv:function(){return C},jW:function(){return L},gM:function(){return A},Of:function(){return a},Jj:function(){return i},U1:function(){return K},Gu:function(){return o},Cz:function(){return f},s8:function(){return d},K2:function(){return c},nN:function(){return e}});let u="192.168.88.1",e=n=>`ws://${n}:9900`,c=n=>`http://${n}:8092/thirdstream`,i=n=>`http://${n}:8092/mainstream`,f=n=>`http://${n}:8092/date?date=`,o=1e4,a=0,d=1,m=0,l=1,g=10001,s=10003,I=0,$=10004,p=10005,h=10203,_=0,D=10215,b=10022,S=10217,w=11203,A=10011,C=10015,O=1,k=10014,v=10027;function G(){let n=new Date,t=n.getFullYear(),r=n.getMonth()+1,u=n.getDate(),e=n.getHours(),c=n.getMinutes(),i=n.getSeconds(),f=n=>n.toString().padStart(2,"0");return`${t}-${f(r)}-${f(u)} ${f(e)}:${f(c)}:${f(i)}`}function N(){let n=G().match(/\d+/g);if(n)return n.join("")}function T(n,t){n.send(JSON.stringify(t))}function E(n){return`${f(n)}${new Date().toISOString().replace("T"," ").slice(0,19)}`}function F(n,t,r,u,e){let c={interface:w,camId:a,lon:e,lat:u,date:G(),path:`DWARF_GOTO_${N()}`};return null!=n?c.planet=n:(c.ra=t,c.dec=r),c}function L(n,t,r,u,e=O,c=1,i=1,f=`DWARF_RAW_${N()}`){return{interface:A,camId:a,target:"NULL",RA:n,DEC:t,exp:r,gain:u,binning:e,count:c,name:f,overlayCount:1,format:i}}function R(){return{interface:C}}function W(n){return{interface:v,camId:a,binning:n}}function j(n=a){return{interface:n===a?D:S,camId:n}}function J(n=a){if(n===a)return{interface:b,camId:a}}function K(n=O,t=a){return{interface:o,camId:t,binning:n}}function M(n=a,t=l){return{interface:g,camId:n,mode:t}}function U(n=a,t){return{interface:s,camId:n,value:t}}function x(n=a,t=l){return{interface:$,camId:n,mode:t}}function y(n=a,t){return{interface:p,camId:n,value:t}}function z(n=_){return{interface:h,camId:a,value:n}}}}]);