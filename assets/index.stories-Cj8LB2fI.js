import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{C as i,D as a,S as o,T as ee,_ as s,a as te,b as ne,c,d as l,g as u,i as d,m as re,n as f,p,s as m,t as h,u as g,y as _}from"./iframe-CCGabUex.js";var v,y,b,x,ie=t((()=>{g(),ee(),v=a(l,{shouldForwardProp:e=>e!==`isCustomParent`})(({isCustomParent:e})=>({pointerEvents:`none`,position:e?`absolute`:`fixed`,top:0,left:0,width:`100%`,zIndex:1031})),y=a(`div`)({display:`block`,position:`fixed`,zIndex:1031,top:15,right:15}),b=a(`div`)({overflow:`hidden`,position:`relative`}),x={Container:v,CustomParent:b,SpinnerContainer:y}})),S,C,ae,w,oe=t((()=>{S=e(n(),1),_(),d(),p(),ie(),C=r(),ae=(e,t)=>{let[n,r]=S.useState(e);return S.useEffect(()=>t(()=>{r(e())}),[e,t]),n},w=({getSnapshot:e,subscribe:t,className:n,color:r,height:i,showSpinner:a,size:o,thickness:ee})=>{let{status:s,settings:c}=ae(e,t),[l,u]=S.useState(!1),[d,f]=S.useState(`hidden`),p=S.useRef(c.speed);p.current=c.speed;let m=r??c.color,h=i??c.height,g=a??c.showSpinner,_=o??c.size,v=ee??c.thickness;if(S.useEffect(()=>{if(s===null){f(`hidden`),u(!1);return}if(u(!0),f(`visible`),s===1){let e=setTimeout(()=>{f(`fading`);let e=setTimeout(()=>{f(`hidden`),u(!1)},p.current);return()=>{clearTimeout(e)}},p.current);return()=>{clearTimeout(e)}}},[s]),!l)return null;let y=c.parent!==`body`&&c.parent!==document.body;return(0,C.jsxs)(re,{container:(typeof c.parent==`string`?document.querySelector(c.parent):c.parent)??document.body,children:[(0,C.jsx)(x.Container,{className:n,isCustomParent:y,children:(0,C.jsx)(te,{color:m,variant:`determinate`,value:s===null?0:s*100,sx:{height:h,opacity:d===`fading`?0:1,transition:d===`fading`?`opacity ${p.current}ms linear`:void 0}})}),g?(0,C.jsx)(x.SpinnerContainer,{children:(0,C.jsx)(ne,{color:m,size:_,thickness:v,variant:`determinate`,value:s===null?0:s*100})}):null]})},w.__docgenInfo={description:``,methods:[],displayName:`MuiNProgressContainer`,props:{className:{required:!1,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`| 'error'
| 'info'
| 'inherit'
| 'primary'
| 'secondary'
| 'success'
| 'warning'`,elements:[{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'inherit'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},showSpinner:{required:!1,tsType:{name:`boolean`},description:``},size:{required:!1,tsType:{name:`number`},description:``},thickness:{required:!1,tsType:{name:`number`},description:``},getSnapshot:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => MuiNProgressStoreState`,signature:{arguments:[],return:{name:`MuiNProgressStoreState`}}},description:``},subscribe:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(listener: () => void) => () => void`,signature:{arguments:[{type:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},name:`listener`}],return:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}}}},description:``}}}}));function T(e,t,n){return e<t?t:e>n?n:e}var se=t((()=>{}));function ce(){return{status:L,settings:I}}function le(e){return R.add(e),()=>{R.delete(e)}}function E(){R.forEach(e=>{e()})}function ue(e){return typeof HTMLElement==`object`?e instanceof HTMLElement:typeof e==`object`&&!!e&&e.nodeType===1&&typeof e.nodeName==`string`}function D(){return ue(I.parent)?I.parent:document.querySelector(I.parent)??document.body}function O(){z!==null&&(clearTimeout(z),z=null)}function de(){if(!I.trickle)return;O();let e=()=>{z=setTimeout(()=>{L!==null&&(A(),e())},I.trickleSpeed)};e()}function k(e){let t=L;if(t===null)return M();if(t>1)return B;let n=e;return typeof n!=`number`&&(n=t>=0&&t<.2?.1:t>=.2&&t<.5?.04:t>=.5&&t<.8?.02:t>=.8&&t<.99?.005:0),j(T(t+n,0,.994))}function A(){return k()}function j(e){let t=N(),n=T(e,I.minimum,1);if(L=n===1?null:n,!t){let e=D();e!==document.body&&e.classList.add(`mui-nprogress-custom-parent`)}return n===1?(L=1,E(),O(),setTimeout(()=>{P()},I.speed*2)):E(),B}function M(){return L===null&&j(0),de(),B}function fe(e){return!e&&L===null?B:k(.3+.5*Math.random()).set(1)}function N(){return typeof L==`number`}function P(){return O(),D().classList.remove(`mui-nprogress-custom-parent`),L=null,E(),B}function pe(e){let t=Object.keys(e);for(let n of t){let t=e[n];t!==void 0&&(I[n]=t)}return B}var F,I,L,R,z,B,V,H,me=t((()=>{oe(),se(),F=r(),I={color:`primary`,height:2,minimum:.08,parent:`body`,showSpinner:!0,size:18,speed:200,thickness:4,trickle:!0,trickleSpeed:200},L=null,R=new Set,z=null,B={configure:pe,done:fe,inc:k,isStarted:N,remove:P,set:j,start:M,trickle:A},V=B,H=e=>(0,F.jsx)(w,{...e,getSnapshot:ce,subscribe:le}),H.__docgenInfo={description:``,methods:[],displayName:`MuiNProgress`,props:{className:{required:!1,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`| 'error'
| 'info'
| 'inherit'
| 'primary'
| 'secondary'
| 'success'
| 'warning'`,elements:[{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'inherit'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},showSpinner:{required:!1,tsType:{name:`boolean`},description:``},size:{required:!1,tsType:{name:`number`},description:``},thickness:{required:!1,tsType:{name:`number`},description:``}}}})),U,W,G,K,q,J,Y,X,Z,Q,$,he;t((()=>{U=e(n(),1),g(),m(),o(),h(),u(),me(),W=r(),G=({code:e})=>(0,W.jsx)(i,{component:`pre`,variant:`outlined`,sx:{backgroundColor:`grey.100`,borderRadius:1,fontSize:`0.8rem`,lineHeight:1.5,mb:2,mt:0,overflow:`auto`,p:2},children:(0,W.jsx)(`code`,{children:e})}),K={component:H,parameters:{docs:{description:{component:"A MUI-powered progress bar with the nprogress API. Mount the component once at your app root, then call `muiNProgress.start()` / `.done()` / `.set()` from anywhere."}}},title:`MuiNProgress`},q={render:()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(G,{code:`// 1. Mount the component once at your app root
<MuiNProgress />

// 2. Call the API from anywhere
muiNProgress.start()    // Show the bar and begin auto-trickle
muiNProgress.set(0.4)   // Set to 40%
muiNProgress.inc()      // Smart increment based on current position
muiNProgress.done()     // Jump to 80–95%, then 100%, then fade out`}),(0,W.jsxs)(f,{direction:`row`,spacing:1,children:[(0,W.jsx)(c,{variant:`contained`,onClick:()=>{V.start()},children:`Start`}),(0,W.jsx)(c,{variant:`outlined`,onClick:()=>{V.set(.4)},children:`Set 40%`}),(0,W.jsx)(c,{variant:`outlined`,onClick:()=>{V.inc()},children:`Increment`}),(0,W.jsx)(c,{variant:`contained`,color:`success`,onClick:()=>{V.done()},children:`Done`})]})]})},J={render:()=>{let e=[`primary`,`secondary`,`error`,`warning`,`info`,`success`,`inherit`],t=e=>{V.configure({color:e}),V.start(),setTimeout(()=>{V.done()},1500)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(G,{code:`// All MUI color literals are supported
muiNProgress.configure({ color: 'error' })
muiNProgress.start()

// Or via the component prop
<MuiNProgress color="warning" />`}),(0,W.jsx)(l,{sx:{display:`flex`,flexWrap:`wrap`,gap:1},children:e.map(e=>(0,W.jsx)(c,{color:e===`inherit`?void 0:e,size:`small`,variant:`outlined`,onClick:()=>t(e),children:e},e))})]})}},Y={render:()=>{let e=[{height:1,label:`1px`},{height:2,label:`2px (default)`},{height:4,label:`4px`},{height:8,label:`8px`},{height:12,label:`12px`}],t=e=>{V.configure({height:e}),V.start(),setTimeout(()=>{V.done()},1500)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(G,{code:`// Customize the bar height via configure or component prop
muiNProgress.configure({ height: 8 })   // thick bar
<MuiNProgress height={4} />             // or via prop
<MuiNProgress height="0.5rem" />        // CSS units also work`}),(0,W.jsx)(l,{sx:{display:`flex`,flexWrap:`wrap`,gap:1},children:e.map(e=>(0,W.jsx)(c,{size:`small`,variant:`outlined`,onClick:()=>t(e.height),children:e.label},e.label))})]})}},X={render:()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(G,{code:`// Customize the spinner size and thickness
muiNProgress.configure({ size: 32, thickness: 6 })
// Or via component props
<MuiNProgress size={12} thickness={2} showSpinner />`}),(0,W.jsxs)(f,{direction:`row`,spacing:1,children:[(0,W.jsx)(c,{size:`small`,variant:`outlined`,onClick:()=>{V.configure({size:12,thickness:2}),V.start()},children:`Small (12px / thin)`}),(0,W.jsx)(c,{size:`small`,variant:`outlined`,onClick:()=>{V.configure({size:18,thickness:4}),V.start()},children:`Default (18px)`}),(0,W.jsx)(c,{size:`small`,variant:`outlined`,onClick:()=>{V.configure({size:32,thickness:6}),V.start()},children:`Large (32px / thick)`}),(0,W.jsx)(c,{color:`success`,size:`small`,variant:`contained`,onClick:()=>{V.done()},children:`Done`})]})]})},Z={render:()=>(U.useEffect(()=>(V.configure({parent:`#story-custom-container`}),()=>{V.remove()}),[]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(G,{code:`// Scope the bar to a specific container
muiNProgress.configure({ parent: '#sidebar' })
// Or pass a DOM element directly
muiNProgress.configure({ parent: document.getElementById('app') })`}),(0,W.jsxs)(l,{id:`story-custom-container`,sx:{border:`2px dashed`,borderColor:`grey.300`,borderRadius:2,height:200,overflow:`hidden`,p:2,position:`relative`},children:[(0,W.jsx)(s,{gutterBottom:!0,variant:`body2`,children:`Bar renders inside this container (position: absolute)`}),(0,W.jsxs)(f,{direction:`row`,spacing:1,sx:{mt:2},children:[(0,W.jsx)(c,{variant:`contained`,onClick:()=>{V.start()},children:`Start`}),(0,W.jsx)(c,{color:`success`,variant:`contained`,onClick:()=>{V.done()},children:`Done`})]})]})]}))},Q={render:()=>(U.useEffect(()=>()=>{V.remove()},[]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(G,{code:`import axios from 'axios'
import { muiNProgress } from 'mui-n-progress'

axios.interceptors.request.use((config) => {
  muiNProgress.start()
  return config
})

axios.interceptors.response.use(
  (response) => {
    muiNProgress.done()
    return response
  },
  (error) => {
    muiNProgress.done()
    return Promise.reject(error)
  }
)`}),(0,W.jsxs)(f,{spacing:2,children:[(0,W.jsx)(s,{color:`text.secondary`,variant:`body2`,children:`Simulates a 2-second API call. The bar auto-trickles while waiting.`}),(0,W.jsx)(c,{variant:`contained`,onClick:()=>{V.start(),setTimeout(()=>{V.done()},2e3)},children:`Simulate API Call`})]})]}))},$={render:()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(H,{showSpinner:!1}),(0,W.jsx)(G,{code:`// Hide the circular spinner
<MuiNProgress showSpinner={false} />
// Or via configure
muiNProgress.configure({ showSpinner: false })`}),(0,W.jsxs)(f,{direction:`row`,spacing:1,children:[(0,W.jsx)(c,{variant:`contained`,onClick:()=>{V.start()},children:`Start`}),(0,W.jsx)(c,{color:`success`,variant:`contained`,onClick:()=>{V.done()},children:`Done`})]})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleStart = () => {
      muiNProgress.start();
    };
    const handleSet = () => {
      muiNProgress.set(0.4);
    };
    const handleInc = () => {
      muiNProgress.inc();
    };
    const handleDone = () => {
      muiNProgress.done();
    };
    return <>
        <MuiNProgress />
        <CodeBlock code={\`// 1. Mount the component once at your app root
<MuiNProgress />

// 2. Call the API from anywhere
muiNProgress.start()    // Show the bar and begin auto-trickle
muiNProgress.set(0.4)   // Set to 40%
muiNProgress.inc()      // Smart increment based on current position
muiNProgress.done()     // Jump to 80–95%, then 100%, then fade out\`} />
        <Stack direction="row" spacing={1}>
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
        </Stack>
      </>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'] as const;
    const handleClick = (color: string) => {
      muiNProgress.configure({
        color: color as never
      });
      muiNProgress.start();
      setTimeout(() => {
        muiNProgress.done();
      }, 1500);
    };
    return <>
        <MuiNProgress />
        <CodeBlock code={\`// All MUI color literals are supported
muiNProgress.configure({ color: 'error' })
muiNProgress.start()

// Or via the component prop
<MuiNProgress color="warning" />\`} />
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1
      }}>
          {colors.map(c => {
          return <Button key={c} color={c === 'inherit' ? undefined : c} size="small" variant="outlined" onClick={() => {
            return handleClick(c);
          }}>
                {c}
              </Button>;
        })}
        </Box>
      </>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = [{
      height: 1,
      label: '1px'
    }, {
      height: 2,
      label: '2px (default)'
    }, {
      height: 4,
      label: '4px'
    }, {
      height: 8,
      label: '8px'
    }, {
      height: 12,
      label: '12px'
    }];
    const handleClick = (height: number | string) => {
      muiNProgress.configure({
        height
      });
      muiNProgress.start();
      setTimeout(() => {
        muiNProgress.done();
      }, 1500);
    };
    return <>
        <MuiNProgress />
        <CodeBlock code={\`// Customize the bar height via configure or component prop
muiNProgress.configure({ height: 8 })   // thick bar
<MuiNProgress height={4} />             // or via prop
<MuiNProgress height="0.5rem" />        // CSS units also work\`} />
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1
      }}>
          {sizes.map(s => {
          return <Button key={s.label} size="small" variant="outlined" onClick={() => {
            return handleClick(s.height);
          }}>
                {s.label}
              </Button>;
        })}
        </Box>
      </>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSmall = () => {
      muiNProgress.configure({
        size: 12,
        thickness: 2
      });
      muiNProgress.start();
    };
    const handleDefault = () => {
      muiNProgress.configure({
        size: 18,
        thickness: 4
      });
      muiNProgress.start();
    };
    const handleLarge = () => {
      muiNProgress.configure({
        size: 32,
        thickness: 6
      });
      muiNProgress.start();
    };
    const handleDone = () => {
      muiNProgress.done();
    };
    return <>
        <MuiNProgress />
        <CodeBlock code={\`// Customize the spinner size and thickness
muiNProgress.configure({ size: 32, thickness: 6 })
// Or via component props
<MuiNProgress size={12} thickness={2} showSpinner />\`} />
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={handleSmall}>
            Small (12px / thin)
          </Button>
          <Button size="small" variant="outlined" onClick={handleDefault}>
            Default (18px)
          </Button>
          <Button size="small" variant="outlined" onClick={handleLarge}>
            Large (32px / thick)
          </Button>
          <Button color="success" size="small" variant="contained" onClick={handleDone}>
            Done
          </Button>
        </Stack>
      </>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    React.useEffect(() => {
      muiNProgress.configure({
        parent: '#story-custom-container'
      });
      return () => {
        muiNProgress.remove();
      };
    }, []);
    const handleStart = () => {
      muiNProgress.start();
    };
    const handleDone = () => {
      muiNProgress.done();
    };
    return <>
        <MuiNProgress />
        <CodeBlock code={\`// Scope the bar to a specific container
muiNProgress.configure({ parent: '#sidebar' })
// Or pass a DOM element directly
muiNProgress.configure({ parent: document.getElementById('app') })\`} />
        <Box id="story-custom-container" sx={{
        border: '2px dashed',
        borderColor: 'grey.300',
        borderRadius: 2,
        height: 200,
        overflow: 'hidden',
        p: 2,
        position: 'relative'
      }}>
          <Typography gutterBottom variant="body2">
            Bar renders inside this container (position: absolute)
          </Typography>
          <Stack direction="row" spacing={1} sx={{
          mt: 2
        }}>
            <Button variant="contained" onClick={handleStart}>
              Start
            </Button>
            <Button color="success" variant="contained" onClick={handleDone}>
              Done
            </Button>
          </Stack>
        </Box>
      </>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    React.useEffect(() => {
      return () => {
        muiNProgress.remove();
      };
    }, []);
    const handleSimulateRequest = () => {
      muiNProgress.start();
      setTimeout(() => {
        muiNProgress.done();
      }, 2000);
    };
    return <>
        <MuiNProgress />
        <CodeBlock code={\`import axios from 'axios'
import { muiNProgress } from 'mui-n-progress'

axios.interceptors.request.use((config) => {
  muiNProgress.start()
  return config
})

axios.interceptors.response.use(
  (response) => {
    muiNProgress.done()
    return response
  },
  (error) => {
    muiNProgress.done()
    return Promise.reject(error)
  }
)\`} />
        <Stack spacing={2}>
          <Typography color="text.secondary" variant="body2">
            Simulates a 2-second API call. The bar auto-trickles while waiting.
          </Typography>
          <Button variant="contained" onClick={handleSimulateRequest}>
            Simulate API Call
          </Button>
        </Stack>
      </>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleStart = () => {
      muiNProgress.start();
    };
    const handleDone = () => {
      muiNProgress.done();
    };
    return <>
        <MuiNProgress showSpinner={false} />
        <CodeBlock code={\`// Hide the circular spinner
<MuiNProgress showSpinner={false} />
// Or via configure
muiNProgress.configure({ showSpinner: false })\`} />
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={handleStart}>
            Start
          </Button>
          <Button color="success" variant="contained" onClick={handleDone}>
            Done
          </Button>
        </Stack>
      </>;
  }
}`,...$.parameters?.docs?.source}}},he=[`Basic`,`Colors`,`CustomHeight`,`SpinnerCustomization`,`CustomParent`,`AxiosInterceptor`,`WithoutSpinner`]}))();export{Q as AxiosInterceptor,q as Basic,J as Colors,Y as CustomHeight,Z as CustomParent,X as SpinnerCustomization,$ as WithoutSpinner,he as __namedExportsOrder,K as default};