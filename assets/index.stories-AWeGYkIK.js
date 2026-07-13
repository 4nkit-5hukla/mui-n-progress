import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-uS7UyY4Q.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{S as i,_ as a,a as o,c as s,d as c,f as ee,h as te,l,m as u,n as d,o as f,r as ne,t as p,v as m,x as h}from"./iframe-AhepBcYC.js";var g,_,v,y,re=e((()=>{s(),a(),g=h(l,{shouldForwardProp:e=>e!==`isCustomParent`})(({isCustomParent:e})=>({pointerEvents:`none`,position:e?`absolute`:`fixed`,top:0,left:0,width:`100%`,zIndex:1031})),_=h(`div`)({display:`block`,position:`fixed`,zIndex:1031,top:15,right:15}),v=h(`div`)({overflow:`hidden`,position:`relative`}),y={Container:g,CustomParent:v,SpinnerContainer:_}})),b,x,S,C,ie=e((()=>{b=t(n(),1),u(),d(),c(),re(),x=r(),S=(e,t)=>{let[n,r]=b.useState(e);return b.useEffect(()=>t(()=>{r(e())}),[e,t]),n},C=({getSnapshot:e,subscribe:t,color:n,showSpinner:r,className:i})=>{let{status:a,settings:o}=S(e,t),[s,c]=b.useState(!1),[l,u]=b.useState(`hidden`),d=b.useRef(o.speed);d.current=o.speed;let f=n??o.color,p=r??o.showSpinner;if(b.useEffect(()=>{if(a===null){u(`hidden`),c(!1);return}if(c(!0),u(`visible`),a===1){let e=setTimeout(()=>{u(`fading`);let e=setTimeout(()=>{u(`hidden`),c(!1)},d.current);return()=>{clearTimeout(e)}},d.current);return()=>{clearTimeout(e)}}},[a]),!s)return null;let m=o.parent!==`body`&&o.parent!==document.body;return(0,x.jsxs)(ee,{container:(typeof o.parent==`string`?document.querySelector(o.parent):o.parent)??document.body,children:[(0,x.jsx)(y.Container,{className:i,isCustomParent:m,children:(0,x.jsx)(ne,{color:f,variant:`determinate`,value:a===null?0:a*100,sx:{height:2,opacity:l===`fading`?0:1,transition:l===`fading`?`opacity ${d.current}ms linear`:void 0}})}),p?(0,x.jsx)(y.SpinnerContainer,{children:(0,x.jsx)(te,{color:f,size:18,thickness:4,variant:`determinate`,value:a===null?0:a*100})}):null]})},C.__docgenInfo={description:``,methods:[],displayName:`MuiNProgressContainer`,props:{color:{required:!1,tsType:{name:`MuiNProgressSettings['color']`,raw:`MuiNProgressSettings['color']`},description:``},showSpinner:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``},getSnapshot:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => MuiNProgressStoreState`,signature:{arguments:[],return:{name:`MuiNProgressStoreState`}}},description:``},subscribe:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(listener: () => void) => () => void`,signature:{arguments:[{type:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},name:`listener`}],return:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}}}},description:``}}}}));function w(e,t,n){return e<t?t:e>n?n:e}var ae=e((()=>{}));function oe(){return{status:z,settings:R}}function se(e){return B.add(e),()=>{B.delete(e)}}function T(){B.forEach(e=>{e()})}function ce(e){return typeof HTMLElement==`object`?e instanceof HTMLElement:typeof e==`object`&&!!e&&e.nodeType===1&&typeof e.nodeName==`string`}function E(){return ce(R.parent)?R.parent:document.querySelector(R.parent)??document.body}function D(){V!==null&&(clearTimeout(V),V=null)}function O(){if(!R.trickle)return;D();let e=()=>{V=setTimeout(()=>{z!==null&&(A(),e())},R.trickleSpeed)};e()}function k(e){let t=z;if(t===null)return M();if(t>1)return H;let n=e;return typeof n!=`number`&&(n=t>=0&&t<.2?.1:t>=.2&&t<.5?.04:t>=.5&&t<.8?.02:t>=.8&&t<.99?.005:0),j(w(t+n,0,.994))}function A(){return k()}function j(e){let t=P(),n=w(e,R.minimum,1);if(z=n===1?null:n,!t){let e=E();e!==document.body&&e.classList.add(`mui-nprogress-custom-parent`)}return n===1?(z=1,T(),D(),setTimeout(()=>{F()},R.speed*2)):T(),H}function M(){return z===null&&j(0),O(),H}function N(e){return!e&&z===null?H:k(.3+.5*Math.random()).set(1)}function P(){return typeof z==`number`}function F(){return D(),E().classList.remove(`mui-nprogress-custom-parent`),z=null,T(),H}function I(e){let t=Object.keys(e);for(let n of t){let t=e[n];t!==void 0&&(R[n]=t)}return H}var L,R,z,B,V,H,U,W,le=e((()=>{n(),ie(),ae(),L=r(),R={color:`primary`,minimum:.08,parent:`body`,showSpinner:!0,speed:200,trickle:!0,trickleSpeed:200},z=null,B=new Set,V=null,H={configure:I,done:N,inc:k,isStarted:P,remove:F,set:j,start:M,trickle:A},U=H,W=e=>(0,L.jsx)(C,{...e,getSnapshot:oe,subscribe:se}),W.__docgenInfo={description:``,methods:[],displayName:`MuiNProgress`,props:{color:{required:!1,tsType:{name:`MuiNProgressSettings['color']`,raw:`MuiNProgressSettings['color']`},description:``},showSpinner:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),G,K,q,J,Y,X,Z,Q,$;e((()=>{G=t(n(),1),o(),p(),le(),K=r(),q={title:`MuiNProgress`,component:W},J=i(),Y=()=>(0,K.jsxs)(m,{theme:J,children:[(0,K.jsx)(W,{}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,K.jsx)(f,{variant:`contained`,onClick:()=>{U.start()},children:`Start`}),(0,K.jsx)(f,{variant:`outlined`,onClick:()=>{U.set(.4)},children:`Set 40%`}),(0,K.jsx)(f,{variant:`outlined`,onClick:()=>{U.inc()},children:`Increment`}),(0,K.jsx)(f,{variant:`contained`,color:`success`,onClick:()=>{U.done()},children:`Done`})]})]}),X=()=>{let e=G.useRef(null);return G.useEffect(()=>{U.configure({parent:`#custom-container`})},[]),(0,K.jsxs)(m,{theme:J,children:[(0,K.jsx)(W,{}),(0,K.jsxs)(`div`,{id:`custom-container`,ref:e,style:{border:`2px dashed #ccc`,height:200,overflow:`hidden`,padding:16,position:`relative`},children:[(0,K.jsx)(`p`,{children:`Progress bar will appear inside this container`}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:40},children:[(0,K.jsx)(f,{variant:`contained`,onClick:()=>{U.start()},children:`Start`}),(0,K.jsx)(f,{variant:`contained`,color:`success`,onClick:()=>{U.done()},children:`Done`})]})]})]})},Z=()=>(0,K.jsxs)(m,{theme:J,children:[(0,K.jsx)(W,{showSpinner:!1}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,K.jsx)(f,{variant:`contained`,onClick:()=>{U.start()},children:`Start`}),(0,K.jsx)(f,{variant:`contained`,color:`success`,onClick:()=>{U.done()},children:`Done`})]})]}),Q=()=>(0,K.jsxs)(m,{theme:J,children:[(0,K.jsx)(W,{color:`secondary`}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,K.jsx)(f,{variant:`contained`,onClick:()=>{U.start()},children:`Start`}),(0,K.jsx)(f,{variant:`contained`,color:`success`,onClick:()=>{U.done()},children:`Done`})]})]}),Y.__docgenInfo={description:``,methods:[],displayName:`Basic`},X.__docgenInfo={description:``,methods:[],displayName:`WithCustomParent`},Z.__docgenInfo={description:``,methods:[],displayName:`WithoutSpinner`},Q.__docgenInfo={description:``,methods:[],displayName:`SecondaryColor`},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const handleStart = () => {
    muiNProgress.start();
  };
  const handleDone = () => {
    muiNProgress.done();
  };
  const handleSet = () => {
    muiNProgress.set(0.4);
  };
  const handleInc = () => {
    muiNProgress.inc();
  };
  return <ThemeProvider theme={theme}>
      <MuiNProgress />
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
        <Button variant="outlined" onClick={handleSet}>
          Set 40%
        </Button>
        <Button variant="outlined" onClick={handleInc}>
          Increment
        </Button>
        <Button variant="contained" color="success" onClick={handleDone}>
          Done
        </Button>
      </div>
    </ThemeProvider>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    muiNProgress.configure({
      parent: '#custom-container'
    });
  }, []);
  const handleStart = () => {
    muiNProgress.start();
  };
  const handleDone = () => {
    muiNProgress.done();
  };
  return <ThemeProvider theme={theme}>
      <MuiNProgress />
      <div id="custom-container" ref={containerRef} style={{
      border: '2px dashed #ccc',
      height: 200,
      overflow: 'hidden',
      padding: 16,
      position: 'relative'
    }}>
        <p>Progress bar will appear inside this container</p>
        <div style={{
        display: 'flex',
        gap: 8,
        marginTop: 40
      }}>
          <Button variant="contained" onClick={handleStart}>
            Start
          </Button>
          <Button variant="contained" color="success" onClick={handleDone}>
            Done
          </Button>
        </div>
      </div>
    </ThemeProvider>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const handleStart = () => {
    muiNProgress.start();
  };
  const handleDone = () => {
    muiNProgress.done();
  };
  return <ThemeProvider theme={theme}>
      <MuiNProgress showSpinner={false} />
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
        <Button variant="contained" color="success" onClick={handleDone}>
          Done
        </Button>
      </div>
    </ThemeProvider>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const handleStart = () => {
    muiNProgress.start();
  };
  const handleDone = () => {
    muiNProgress.done();
  };
  return <ThemeProvider theme={theme}>
      <MuiNProgress color="secondary" />
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
        <Button variant="contained" color="success" onClick={handleDone}>
          Done
        </Button>
      </div>
    </ThemeProvider>;
}`,...Q.parameters?.docs?.source}}},$=[`Basic`,`WithCustomParent`,`WithoutSpinner`,`SecondaryColor`]}))();export{Y as Basic,Q as SecondaryColor,X as WithCustomParent,Z as WithoutSpinner,$ as __namedExportsOrder,q as default};