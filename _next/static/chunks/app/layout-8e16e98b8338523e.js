(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6601:function(){},5602:function(e,t,r){Promise.resolve().then(r.t.bind(r,2445,23)),Promise.resolve().then(r.bind(r,5676)),Promise.resolve().then(r.bind(r,2828)),Promise.resolve().then(r.bind(r,2127))},5676:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var s=r(7437),n=r(2265),a=r(703),o=r(8792),i=r(7907);function d(){let[e,t]=(0,n.useState)(""),r=(0,i.usePathname)();return(0,n.useEffect)(()=>{r&&t(r)},[r]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("header",{className:"sticky flex top-0 z-40 w-screen border-b px-0 md:px-12 opacity-0 animate-fade-in bg-[#ff00ec]",children:(0,s.jsx)("div",{className:"container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 ",children:(0,s.jsx)("div",{className:"flex flex-1 justify-center",children:(0,s.jsx)(o.default,{href:"/",rel:"noreferrer",className:"hidden: sm-block",children:(0,s.jsx)(a.default,{alt:"",src:"/images/iconp.webp",width:50,height:50})})})})})})}},2828:function(e,t,r){"use strict";r.r(t),r.d(t,{Toaster:function(){return h}});var s=r(7437),n=r(2265),a=r(2869),o=r(7742),i=r(2235),d=r(1657);let u=a.zt,l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.l_,{ref:t,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...n})});l.displayName=a.l_.displayName;let c=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),f=n.forwardRef((e,t)=>{let{className:r,variant:n,...o}=e;return(0,s.jsx)(a.fC,{ref:t,className:(0,d.cn)(c({variant:n}),r),...o})});f.displayName=a.fC.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.aU,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...n})}).displayName=a.aU.displayName;let p=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.x8,{ref:t,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...n,children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=a.x8.displayName;let m=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.Dx,{ref:t,className:(0,d.cn)("text-sm font-semibold",r),...n})});m.displayName=a.Dx.displayName;let x=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.dk,{ref:t,className:(0,d.cn)("text-sm opacity-90",r),...n})});x.displayName=a.dk.displayName;var v=r(7788);function h(){let{toasts:e}=(0,v.pm)();return(0,s.jsxs)(u,{children:[e.map(function(e){let{id:t,title:r,description:n,action:a,...o}=e;return(0,s.jsxs)(f,{...o,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[r&&(0,s.jsx)(m,{children:r}),n&&(0,s.jsx)(x,{children:n})]}),a,(0,s.jsx)(p,{})]},t)}),(0,s.jsx)(l,{})]})}},7788:function(e,t,r){"use strict";r.d(t,{pm:function(){return f}});var s=r(2265);let n=0,a=new Map,o=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],u={toasts:[]};function l(e){u=i(u,e),d.forEach(e=>{e(u)})}function c(e){let{...t}=e,r=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=s.useState(u);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},2127:function(e,t,r){"use strict";r.r(t),r.d(t,{ContextProvider:function(){return b}});var s=r(7437),n=r(2265),a=r(4232),o=r(9641),i=r(3387),d=r(7754),u=r(3610),l=r(6538),c=r(7355),f=r(7228);let p=(0,n.createContext)({}),m=e=>{let{children:t}=e,[r,n]=(0,f._)("autoConnect",!0);return(0,s.jsx)(p.Provider,{value:{autoConnect:r,setAutoConnect:n},children:t})},x=(0,n.createContext)({}),v=e=>{let{children:t}=e,[r,n]=(0,f._)("network","devnet");return(0,s.jsx)(x.Provider,{value:{networkConfiguration:r,setNetworkConfiguration:n},children:t})},h=(0,a.default)(async()=>(await r.e(108).then(r.bind(r,5108))).WalletModalProvider,{loadableGenerated:{webpack:()=>[null]},ssr:!1}),g=e=>{let{children:t}=e,{autoConnect:r}=(0,n.useContext)(p),{networkConfiguration:a}=(0,n.useContext)(x),f=(0,n.useMemo)(()=>(0,c.clusterApiUrl)(a),[a]),m=(0,n.useMemo)(()=>[new d.O,new u.e,new l.x],[a]),v=(0,n.useCallback)(e=>{console.error(e)},[]);return(0,s.jsx)(o.U,{endpoint:f,children:(0,s.jsx)(i.n,{wallets:m,onError:v,autoConnect:r,children:(0,s.jsx)(h,{children:t})})})},b=e=>{let{children:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(v,{children:(0,s.jsx)(m,{children:(0,s.jsx)(g,{children:t})})})})}},1657:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var s=r(3167),n=r(1367);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.W)(t))}},2445:function(){}},function(e){e.O(0,[814,150,175,703,880,821,971,69,744],function(){return e(e.s=5602)}),_N_E=e.O()}]);