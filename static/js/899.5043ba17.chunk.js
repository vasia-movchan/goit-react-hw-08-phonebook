(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[899],{899:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var r,o,i,a=t(168),c=t(7691),l=c.ZP.div(r||(r=(0,a.Z)(["\n  padding: 8px;\n  width: 400px;\n  margin: 0 auto;\n  background-color: #c2e0fa;\n  border-radius: 4px;\n  box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.73);\n"]))),u=t(885),s=t(2791),d=c.ZP.label(o||(o=(0,a.Z)(["\n  font-size: 16px;\n"]))),f=c.ZP.input(i||(i=(0,a.Z)(["\n  display: block;\n  font-size: 16px;\n  margin-bottom: 12px;\n"]))),p=t(9434),m=t(3384),v=t(7205),h=t(7750),g=t(4942),x=t(3366),b=t(7462),Z=t(8182),z=t(4419),y=t(2065),S=t(7376),w=t(8203),j=t(5616),C=t(9853),k=t(1217);function R(e){return(0,k.Z)("MuiIconButton",e)}var I,P,M,T,_,N,A=(0,t(5878).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),B=t(184),F=["edge","children","className","color","disabled","disableFocusRipple","size"],E=(0,S.ZP)(j.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"default"!==t.color&&n["color".concat((0,C.Z)(t.color))],t.edge&&n["edge".concat((0,C.Z)(t.edge))],n["size".concat((0,C.Z)(t.size))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,b.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,y.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var n=e.theme,t=e.ownerState;return(0,b.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,b.Z)({color:(n.vars||n).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[t.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,y.Fq)(n.palette[t.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,g.Z)({},"&.".concat(A.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),V=s.forwardRef((function(e,n){var t=(0,w.Z)({props:e,name:"MuiIconButton"}),r=t.edge,o=void 0!==r&&r,i=t.children,a=t.className,c=t.color,l=void 0===c?"default":c,u=t.disabled,s=void 0!==u&&u,d=t.disableFocusRipple,f=void 0!==d&&d,p=t.size,m=void 0===p?"medium":p,v=(0,x.Z)(t,F),h=(0,b.Z)({},t,{edge:o,color:l,disabled:s,disableFocusRipple:f,size:m}),g=function(e){var n=e.classes,t=e.disabled,r=e.color,o=e.edge,i=e.size,a={root:["root",t&&"disabled","default"!==r&&"color".concat((0,C.Z)(r)),o&&"edge".concat((0,C.Z)(o)),"size".concat((0,C.Z)(i))]};return(0,z.Z)(a,R,n)}(h);return(0,B.jsx)(E,(0,b.Z)({className:(0,Z.Z)(g.root,a),centerRipple:!0,focusRipple:!f,disabled:s,ref:n,ownerState:h},v,{children:i}))})),O=function(){var e=(0,s.useState)(""),n=(0,u.Z)(e,2),t=n[0],r=n[1],o=(0,s.useState)(""),i=(0,u.Z)(o,2),a=i[0],c=i[1],l=(0,s.useState)(!1),g=(0,u.Z)(l,2),x=g[0],b=g[1],Z=function(e){switch(e.currentTarget.name){case"name":r(e.currentTarget.value);break;case"number":c(e.currentTarget.value)}},z=(0,p.I0)();return(0,B.jsxs)(B.Fragment,{children:[!x&&(0,B.jsx)(V,{"aria-label":"add-contact",style:{margin:"0 auto",display:"block"},type:"button",onClick:function(){return b(!0)},children:(0,B.jsx)(h.Z,{fontSize:"large",color:"primary"})}),x&&(0,B.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t={name:n.elements.name.value,number:n.elements.number.value};z((0,m.uK)(t)),r(""),c("")},children:[(0,B.jsxs)(d,{children:["Name",(0,B.jsx)(f,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:Z,value:t})]}),(0,B.jsxs)(d,{children:["Number",(0,B.jsx)(f,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:Z,value:a})]}),(0,B.jsx)(v.Z,{type:"submit",variant:"contained",size:"small",children:"Add contact"})]})]})},D=t(7247),q=c.ZP.li(I||(I=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n  padding: 4px;\n  margin-bottom: 4px;\n  border: 1px solid gray;\n  border-radius: 4px;\n"]))),H=function(e){var n=e.children;return(0,B.jsx)(q,{children:n})},L=c.ZP.ul(P||(P=(0,a.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),G=c.ZP.p(M||(M=(0,a.Z)(["\n  font-size: 18px;\n  margin: 0;\n"]))),Y=c.ZP.p(T||(T=(0,a.Z)(["\n  font-size: 14px;\n  margin: 0;\n  margin-top: 4px;\n"]))),J=function(e){return e.filter},K=function(e){return e.contacts.items},U=function(){var e=(0,p.v9)(K),n=(0,p.v9)(J),t=e.filter((function(e){return e.name.toLowerCase().includes(n)})),r=(0,p.I0)();return(0,s.useEffect)((function(){r((0,m.yF)())}),[r]),(0,B.jsx)(L,{children:t.map((function(e){return(0,B.jsxs)(H,{children:[(0,B.jsxs)(G,{children:[e.name,(0,B.jsx)(Y,{children:e.number})]}),(0,B.jsx)(v.Z,{variant:"contained",onClick:function(){return r((0,m.zY)(e.id))},startIcon:(0,B.jsx)(D.Z,{}),size:"small",children:"Delete"})]},e.id)}))})},W=c.ZP.label(_||(_=(0,a.Z)(["\n  font-size: 16px;\n"]))),$=c.ZP.input(N||(N=(0,a.Z)(["\n  display: block;\n  font-size: 16px;\n  margin-bottom: 8px;\n"]))),Q=t(1634),X=function(){var e=(0,p.v9)(J),n=(0,p.I0)();return(0,B.jsxs)(W,{children:["Find contacts by name",(0,B.jsx)($,{type:"text",value:e,onChange:function(e){n((0,Q.s)(e.currentTarget.value.toLowerCase()))}})]})},ee=function(){return(0,B.jsxs)(l,{children:[(0,B.jsx)("h1",{style:{textAlign:"center",marginBottom:"8px"},children:"Phonebook"}),(0,B.jsx)(O,{}),(0,B.jsx)("h2",{style:{textAlign:"center",marginBottom:"8px",marginTop:"8px"},children:"Contacts"}),(0,B.jsx)(X,{}),(0,B.jsx)(U,{})]})}},7247:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},7750:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");n.Z=a},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(3111)},3111:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return z},debounce:function(){return y},deprecatedPropType:function(){return S},isMuiElement:function(){return w},ownerDocument:function(){return C},ownerWindow:function(){return k},requirePropFactory:function(){return R},setRef:function(){return I},unstable_ClassNameGenerator:function(){return O},unstable_useEnhancedEffect:function(){return P},unstable_useId:function(){return N},unsupportedProp:function(){return A},useControlled:function(){return B},useEventCallback:function(){return F.Z},useForkRef:function(){return E.Z},useIsFocusVisible:function(){return V.Z}});var r=t(5902),o=t(9853);var i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},a=t(7462),c=t(2791),l=t.t(c,2),u=t(3366),s=t(8182),d=t(4419),f=t(8203),p=t(7376),m=t(1217);function v(e){return(0,m.Z)("MuiSvgIcon",e)}(0,t(5878).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=t(184),g=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],x=(0,p.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,o.Z)(t.color))],n["fontSize".concat((0,o.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,i,a,c,l,u,s,d,f,p,m,v,h,g,x=e.theme,b=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=x.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=x.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=x.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(c=x.typography)||null==(l=c.pxToRem)?void 0:l.call(c,24))||"1.5rem",large:(null==(u=x.typography)||null==(s=u.pxToRem)?void 0:s.call(u,35))||"2.1875rem"}[b.fontSize],color:null!=(d=null==(f=(x.vars||x).palette)||null==(p=f[b.color])?void 0:p.main)?d:{action:null==(m=(x.vars||x).palette)||null==(v=m.action)?void 0:v.active,disabled:null==(h=(x.vars||x).palette)||null==(g=h.action)?void 0:g.disabled,inherit:void 0}[b.color]}})),b=c.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiSvgIcon"}),r=t.children,i=t.className,c=t.color,l=void 0===c?"inherit":c,p=t.component,m=void 0===p?"svg":p,b=t.fontSize,Z=void 0===b?"medium":b,z=t.htmlColor,y=t.inheritViewBox,S=void 0!==y&&y,w=t.titleAccess,j=t.viewBox,C=void 0===j?"0 0 24 24":j,k=(0,u.Z)(t,g),R=(0,a.Z)({},t,{color:l,component:m,fontSize:Z,instanceFontSize:e.fontSize,inheritViewBox:S,viewBox:C}),I={};S||(I.viewBox=C);var P=function(e){var n=e.color,t=e.fontSize,r=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,o.Z)(n)),"fontSize".concat((0,o.Z)(t))]};return(0,d.Z)(i,v,r)}(R);return(0,h.jsxs)(x,(0,a.Z)({as:m,className:(0,s.Z)(P.root,i),focusable:"false",color:z,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:n},I,k,{ownerState:R,children:[r,w?(0,h.jsx)("title",{children:w}):null]}))}));b.muiName="SvgIcon";var Z=b;function z(e,n){var t=function(t,r){return(0,h.jsx)(Z,(0,a.Z)({"data-testid":"".concat(n,"Icon"),ref:r},t,{children:e}))};return t.muiName=Z.muiName,c.memo(c.forwardRef(t))}var y=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var c=function(){e.apply(r,i)};clearTimeout(n),n=setTimeout(c,t)}return r.clear=function(){clearTimeout(n)},r};var S=function(e,n){return function(){return null}};var w=function(e,n){return c.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function j(e){return e&&e.ownerDocument||document}var C=j;var k=function(e){return j(e).defaultView||window};var R=function(e,n){return function(){return null}},I=t(2971).Z,P=t(5721).Z,M=t(885),T=0;var _=l.useId;var N=function(e){if(void 0!==_){var n=_();return null!=e?e:n}return function(e){var n=c.useState(e),t=(0,M.Z)(n,2),r=t[0],o=t[1],i=e||r;return c.useEffect((function(){null==r&&o("mui-".concat(T+=1))}),[r]),i}(e)};var A=function(e,n,t,r,o){return null};var B=function(e){var n=e.controlled,t=e.default,r=(e.name,e.state,c.useRef(void 0!==n).current),o=c.useState(t),i=(0,M.Z)(o,2),a=i[0],l=i[1];return[r?n:a,c.useCallback((function(e){r||l(e)}),[])]},F=t(6702),E=t(792),V=t(2763),O={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=899.5043ba17.chunk.js.map