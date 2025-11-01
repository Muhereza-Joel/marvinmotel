import{r as l,j as e,L as re}from"./app-CKsMlCqo.js";import{c as j,m as r,A as F}from"./PublicLayout-CHUfjQX7.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],R=j("chevron-right",ne);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ie=j("sparkles",se);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],le=j("zap",oe);function ue({titles:a=[],images:u=[],subtitle:k,bgImage:o,bgColor:V="bg-gray-100 dark:bg-gray-800",textColor:q="text-gray-900 dark:text-gray-100",typingSpeed:N=150,rotationSpeed:x=3e3,animationDirection:g="top",titleGradient:$="",animationMode:d="fade",buttonText:y="",buttonLink:h="",buttonColor:I="bg-blue-600 text-white hover:bg-blue-700",imageWidth:z="100%",imageHeight:b="24rem",imageObjectFit:E="cover",imageShape:f="rectangle",imageAnimationDirection:O="right",enableMorph:M=!1,pattern:P="none",glowEffect:v=!1,particleEffect:H=!1,focusRing:Y="hover",decorativeElements:Z=!0}){const[n,S]=l.useState(0),[B,A]=l.useState(""),[J,C]=l.useState(!0),[K,m]=l.useState(!1),L=o?"text-white":q,c=Array.isArray(u)?u:u?[u]:[],Q=c.length>1;l.useEffect(()=>{if(d!=="typing"||!a.length)return;const t=a[n%a.length]||"";let i=0;A(""),C(!0);const p=setInterval(()=>{A(t.slice(0,++i)),i===t.length&&(clearInterval(p),C(!1),a.length>1&&setTimeout(()=>S(w=>(w+1)%a.length),x))},N);return()=>clearInterval(p)},[n,a,N,x,d]),l.useEffect(()=>{d==="fade"&&a.length&&setTimeout(()=>S(t=>(t+1)%a.length),x)},[n,a,x,d]);const _=()=>{switch(P){case"grid":return{backgroundImage:`
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,backgroundSize:"50px 50px"};case"dots":return{backgroundImage:"radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",backgroundSize:"30px 30px"};case"circuit":return{backgroundImage:`
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,backgroundSize:"40px 40px"};case"topography":return{backgroundImage:`
                        linear-gradient(90deg, transparent 79px, rgba(255,255,255,0.1) 79px, rgba(255,255,255,0.1) 81px, transparent 81px),
                        linear-gradient(rgba(255,255,255,0.02) 79px, transparent 79px)
                    `,backgroundSize:"100% 80px"};default:return{}}},U=()=>{switch(Y){case"hover":return"focus-ring-hover";case"always":return"focus-ring-always";case"pulse":return"focus-ring-pulse";default:return""}},W={animate:{borderRadius:["60% 40% 30% 70% / 60% 30% 70% 40%","50% 50% 60% 40% / 50% 60% 40% 50%","40% 60% 70% 30% / 40% 70% 30% 60%","60% 40% 30% 70% / 60% 30% 70% 40%"],transition:{borderRadius:{duration:10,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}}}},X=t=>{switch(t){case"left":return{hidden:{opacity:0,x:-100,scale:.95},visible:{opacity:1,x:0,scale:1,transition:{type:"spring",stiffness:100,damping:15,duration:.8}}};case"right":return{hidden:{opacity:0,x:100,scale:.95},visible:{opacity:1,x:0,scale:1,transition:{type:"spring",stiffness:100,damping:15,duration:.8}}};case"top":return{hidden:{opacity:0,y:-100,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:15,duration:.8}}};case"bottom":return{hidden:{opacity:0,y:100,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:15,duration:.8}}};default:return{hidden:{opacity:0,scale:.9,rotateY:10},visible:{opacity:1,scale:1,rotateY:0,transition:{type:"spring",stiffness:120,damping:12,duration:.6}}}}},G=()=>{const t="relative overflow-hidden shadow-2xl";switch(f){case"oval":return`${t} rounded-[50%] border-4 border-white/20`;case"circle":return`${t} rounded-full border-4 border-white/20`;case"pentagon":return`${t} clip-pentagon border-4 border-white/20`;case"hexagon":return`${t} clip-hexagon border-4 border-white/20`;case"diamond":return`${t} clip-diamond rotate-45 border-4 border-white/20`;case"morph":return`${t} rounded-3xl border-4 border-white/20`;case"rectangle":default:return`${t} rounded-3xl border-4 border-white/20 ${U()}`}},D=({children:t,currentIndex:i})=>{const p=G(),w=f==="morph"||M,te=X(O);return w?e.jsxs(r.div,{className:`${p} relative group`,style:{width:z,height:b,maxHeight:b},variants:W,animate:"animate",whileHover:{scale:1.05,transition:{duration:.4,type:"spring"}},onHoverStart:()=>m(!0),onHoverEnd:()=>m(!1),children:[v&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"}),t,H&&e.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-3xl",children:[...Array(5)].map((ae,s)=>e.jsx(r.div,{className:"absolute w-2 h-2 bg-white/30 rounded-full",animate:{x:[0,100,0],y:[0,50,0],opacity:[0,1,0]},transition:{duration:3,repeat:1/0,delay:s*.6,ease:"easeInOut"},style:{left:`${20+s*15}%`,top:`${10+s*10}%`}},s))})]}):e.jsxs(r.div,{className:`${p} relative group`,style:{width:z,height:b,maxHeight:b},variants:te,whileHover:{scale:1.05,transition:{duration:.4,type:"spring"}},onHoverStart:()=>m(!0),onHoverEnd:()=>m(!1),children:[v&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"}),t,H&&e.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-3xl",children:[...Array(5)].map((ae,s)=>e.jsx(r.div,{className:"absolute w-2 h-2 bg-white/30 rounded-full",animate:{x:[0,100,0],y:[0,50,0],opacity:[0,1,0]},transition:{duration:3,repeat:1/0,delay:s*.6,ease:"easeInOut"},style:{left:`${20+s*15}%`,top:`${10+s*10}%`}},s))})]})},ee={hidden:{opacity:0,y:g==="top"?-40:g==="bottom"?40:0,x:g==="left"?-40:g==="right"?40:0},visible:{opacity:1,y:0,x:0,transition:{duration:.8,type:"spring",stiffness:100,damping:15}}},T=c.length===0?null:Q?c[n%c.length]:c[0];return e.jsxs("section",{className:`${!o&&V} relative pt-10 overflow-hidden`,style:o?{background:`url(${o}) center/cover no-repeat`,..._()}:_(),children:[o&&e.jsx("div",{className:"absolute inset-0 bg-black/65 dark:bg-black/70"}),Z&&e.jsxs(e.Fragment,{children:[e.jsxs(r.div,{className:"absolute top-10 left-24 text-blue-400/20",animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},style:{width:"100px",height:"100px"},children:[e.jsx(ie,{size:300})," "]}),e.jsxs(r.div,{className:"absolute bottom-20 right-20 text-purple-400/20",animate:{scale:[1,1.2,1]},transition:{duration:4,repeat:1/0},style:{width:"80px",height:"80px"},children:[e.jsx(le,{size:60})," "]})]}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 grid lg:grid-cols-2 gap-10 items-center relative z-10",children:[e.jsxs(r.div,{initial:"hidden",animate:"visible",variants:ee,className:"flex flex-col relative",children:[v&&e.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300"}),e.jsx("h1",{className:`font-extrabold text-white text-5xl sm:text-8xl mb-6 min-h-[4.5rem] relative ${$?`bg-clip-text text-transparent ${$}`:L}`,children:d==="typing"?e.jsxs(e.Fragment,{children:[B,a.length>0&&e.jsx("span",{className:`ml-1 w-1 ${J?"opacity-100":"opacity-0"} bg-current inline-block animate-pulse`})]}):e.jsx(F,{mode:"wait",children:e.jsx(r.span,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:1.05},transition:{duration:.6,type:"spring"},className:"inline-block",children:a[n%a.length]||""},n)})}),k&&e.jsx(r.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.6},className:`text-lg font-extralight max-w-lg mb-6 relative z-10 ${o?"text-gray-200":"text-gray-300 dark:text-gray-300"}`,children:k}),y&&h&&e.jsx(r.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.5,duration:.6},whileHover:{scale:1.05},whileTap:{scale:.95},className:"relative group/btn",children:h.startsWith("#")?e.jsxs("button",{onClick:t=>{t.preventDefault();const i=document.querySelector(h);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},className:`relative inline-flex max-w-fit items-center gap-2 font-semibold px-8 py-4 rounded-2xl shadow-2xl ${I} transition-all duration-300 overflow-hidden group`,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"}),y,e.jsx(R,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"})]}):e.jsxs(re,{href:h,className:`relative inline-flex max-w-fit items-center gap-2 font-semibold px-8 py-4 rounded-2xl shadow-2xl ${I} transition-all duration-300 overflow-hidden group`,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"}),y,e.jsx(R,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"})]})})]}),T&&e.jsx(r.div,{initial:"hidden",animate:"visible",className:"flex justify-center relative",children:e.jsx(F,{mode:"wait",children:e.jsx(r.div,{initial:"hidden",animate:"visible",exit:"hidden",className:"w-full",children:e.jsxs(D,{currentIndex:n,children:[e.jsx("img",{src:T,alt:a[n%a.length]||"Hero image",className:`w-full h-full transition-all duration-500 ${f==="diamond"?"-rotate-45":""} ${K?"brightness-110":"brightness-100"}`,style:{objectFit:E},loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 group-hover:to-black/10 transition-all duration-500"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"})]})},n)})})]}),e.jsx("style",{jsx:!0,children:`
                .clip-pentagon {
                    clip-path: polygon(
                        50% 0%,
                        100% 38%,
                        82% 100%,
                        18% 100%,
                        0% 38%
                    );
                }
                .clip-hexagon {
                    clip-path: polygon(
                        25% 0%,
                        75% 0%,
                        100% 50%,
                        75% 100%,
                        25% 100%,
                        0% 50%
                    );
                }
                .clip-diamond {
                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                }

                /* Focus ring effects */
                .focus-ring-hover {
                    transition: all 0.3s ease;
                }
                .focus-ring-hover:hover {
                    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
                }

                .focus-ring-always {
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                    animation: gentle-pulse 3s infinite;
                }

                .focus-ring-pulse {
                    animation: gentle-pulse 2s infinite;
                }

                @keyframes gentle-pulse {
                    0%,
                    100% {
                        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.1);
                    }
                }

                /* Enhanced pattern backgrounds */
                .pattern-grid {
                    background-image: linear-gradient(
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        );
                    background-size: 50px 50px;
                }

                .pattern-dots {
                    background-image: radial-gradient(
                        rgba(255, 255, 255, 0.1) 1px,
                        transparent 1px
                    );
                    background-size: 30px 30px;
                }
            `})]})}export{ue as H};
