(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{241:function(e,t,a){e.exports=a(465)},246:function(e,t,a){},464:function(e,t,a){},465:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a(26),o=a(27),s=a(29),c=a(28),m=a(30),d=a(37),p=a(64),u=a(2),g=a(22),E=a(6),y=a.n(E),h=a(157),b=a.n(h),f=a(158),v=a.n(f),w=a(159),x=a.n(w),j=a(155),C=a.n(j),B=a(47),O=a.n(B),k=a(156),D=a.n(k),S=(a(246),a(46)),T=function(e){var t=e.open;return r.a.createElement("div",null,t&&r.a.createElement(u.m,{style:{color:"white"},className:"listItem",inset:!0},"Metrix"),r.a.createElement(S.b,{to:"/"},r.a.createElement(u.n,{className:"listItem",button:!0},r.a.createElement(u.k,{style:{paddingLeft:7}},r.a.createElement(C.a,null)),r.a.createElement(u.l,{primary:"Dashboard"}))),r.a.createElement(S.b,{to:"/overview"},r.a.createElement(u.n,{className:"listItem",button:!0},r.a.createElement(u.k,{style:{paddingLeft:7}},r.a.createElement(D.a,null)),r.a.createElement(u.l,{primary:"Overview"}))))},I=function(e){var t=e.open;return r.a.createElement("div",null,t&&r.a.createElement(u.m,{style:{color:"white"},inset:!0},"Tracker"),r.a.createElement(u.j,{className:"listItem",button:!0},r.a.createElement(u.k,{style:{paddingLeft:7}},r.a.createElement(O.a,null)),r.a.createElement(u.l,{primary:"Loan Assignment"})),r.a.createElement(u.j,{className:"listItem",button:!0},r.a.createElement(u.k,{style:{paddingLeft:7}},r.a.createElement(O.a,null)),r.a.createElement(u.l,{primary:"Workflow Setup"})),r.a.createElement(u.j,{className:"listItem",button:!0},r.a.createElement(u.k,{style:{paddingLeft:7}},r.a.createElement(O.a,null)),r.a.createElement(u.l,{primary:"Reporting"})),r.a.createElement(u.j,{className:"listItem",button:!0},r.a.createElement(u.k,{style:{paddingLeft:7}},r.a.createElement(O.a,null)),r.a.createElement(u.l,{primary:"Users"})))},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{position:"absolute",className:y()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(u.q,{disableGutters:!0,className:e.toolbar},r.a.createElement(u.h,{color:"inherit","aria-label":"Open drawer",onClick:this.state.open?this.handleDrawerClose:this.handleDrawerOpen,className:y()(e.menuButton)},this.state.open?r.a.createElement(v.a,null):r.a.createElement(b.a,null)),r.a.createElement(u.r,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"),r.a.createElement(u.h,{color:"inherit"},r.a.createElement(u.b,{badgeContent:4,color:"secondary"},r.a.createElement(x.a,null)),r.a.createElement(u.r,{style:{color:"white",paddingLeft:15}},"Hello Tim!")))),r.a.createElement(u.f,{variant:"permanent",classes:{paper:y()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},open:this.state.open},r.a.createElement(u.e,null),r.a.createElement(u.o,null,r.a.createElement(T,{open:this.state.open})),r.a.createElement(u.e,null),r.a.createElement(u.i,null,r.a.createElement(I,{open:this.state.open})," ")))}}]),t}(r.a.Component),N=Object(g.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,position:"fixed"},appBarShift:{width:"100%"},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",height:"100%",backgroundColor:"#51505c",overflowX:"hidden",overflowY:"hidden",paddingTop:60,whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),content:{flexGrow:1,padding:3*e.spacing.unit,overflow:"auto"},h5:{marginBottom:2*e.spacing.unit}}})(L),W=a(65),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={data:{labels:["1","2","3","4","5"],datasets:[{label:"Loans Made",backgroundColor:"rgba(255,0,255,0.75)",data:[4,12,1,10,6,4]},{label:"Potential",backgroundColor:"rgba(0,255,0,0.75)",data:[1,12,21,18,30,43]}]},datapie:{labels:["Loans","Potential","Leads","Finished"],datasets:[{data:[4,12,1,10],backgroundColor:["#C297B8","#FDCFF3","#DE89BE","#40434E"]}]}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.g,{container:!0,spacing:24},r.a.createElement(u.g,{item:!0,xs:12},r.a.createElement(u.p,{style:{padding:20}},r.a.createElement(u.r,{style:{display:"flex",justifyContent:"center",paddingBottom:20},variant:"title"},"BDO Stages"),r.a.createElement(u.e,{style:{backgroundColor:"rgba(0,0,0,0.2)",height:2},variant:"fullWidth"}),r.a.createElement(u.g,{style:{paddingTop:20},container:!0,spacing:24},r.a.createElement(u.g,{item:!0,xs:12,md:4},r.a.createElement(u.p,null,r.a.createElement(u.r,{style:{display:"flex",justifyContent:"center",padding:10},variant:"body1"},"Prospects"),r.a.createElement("div",{style:{backgroundColor:"#51505c",padding:10}},r.a.createElement(u.r,{style:{color:"white",textAlign:"center"}},"3",r.a.createElement("br",null),"Total Value: $2,065,234.21",r.a.createElement("br",null),"Average Age: 152 Days",r.a.createElement("br",null),"Time to Submit: 92 Days"),r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",paddingTop:15}},r.a.createElement(u.c,{color:"primary",variant:"contained"},"View Details"))))),r.a.createElement(u.g,{item:!0,xs:12,md:4},r.a.createElement(u.p,null,r.a.createElement(u.r,{style:{display:"flex",justifyContent:"center",padding:10},variant:"body1"},"Submitted to FormWRX"),r.a.createElement("div",{style:{backgroundColor:"#51505c",padding:10}},r.a.createElement(u.r,{style:{color:"white",textAlign:"center"}},"3",r.a.createElement("br",null),"Total Value: $2,065,234.21",r.a.createElement("br",null),"Average Age: 152 Days",r.a.createElement("br",null),"Time to Submit: 92 Days"),r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",paddingTop:15}},r.a.createElement(u.c,{color:"primary",variant:"contained"},"View Details"))))),r.a.createElement(u.g,{item:!0,xs:12,md:4},r.a.createElement(u.p,null,r.a.createElement(u.r,{style:{display:"flex",justifyContent:"center",padding:10},variant:"body1"},"Suspects"),r.a.createElement("div",{style:{backgroundColor:"#51505c",padding:10}},r.a.createElement(u.r,{style:{color:"white",textAlign:"center"}},"3",r.a.createElement("br",null),"Total Value: $2,065,234.21",r.a.createElement("br",null),"Average Age: 152 Days",r.a.createElement("br",null),"Time to Submit: 92 Days"),r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",paddingTop:15}},r.a.createElement(u.c,{color:"primary",variant:"contained"},"View Details")))))))),r.a.createElement(u.g,{item:!0,xs:12},r.a.createElement(u.p,{style:{padding:20}},r.a.createElement(u.g,{container:!0,spacing:24},r.a.createElement(u.g,{style:{position:"relative"},item:!0,xs:12,md:6,lg:4},r.a.createElement(u.p,null,r.a.createElement(W.a,{options:{responsive:!0},data:this.state.data}))),r.a.createElement(u.g,{style:{position:"relative"},item:!0,xs:12,md:6,lg:4},r.a.createElement(u.p,null,r.a.createElement(W.b,{options:{responsive:!0},data:this.state.data}))),r.a.createElement(u.g,{style:{position:"relative"},item:!0,xs:12,md:6,lg:4},r.a.createElement(u.p,null,r.a.createElement(W.c,{options:{responsive:!0},data:this.state.datapie})))))))}}]),t}(r.a.Component),P=a(66),V=a.n(P),R=a(67),F=a.n(R),G=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.g,{container:!0,spacing:24},r.a.createElement(u.g,{item:!0,xs:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement(u.r,{variant:"title"},"Overview")),r.a.createElement(u.g,{item:!0,xs:12,md:4},r.a.createElement(u.p,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:10,paddingBottom:0}},r.a.createElement(V.a,null),r.a.createElement(u.r,{variant:"body2"},"Tracker Metrix"),r.a.createElement(F.a,{style:{marginTop:7}})),r.a.createElement("div",{style:{backgroundColor:"#51505c",padding:10,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement(u.r,{style:{color:"white",marginBottom:10,marginTop:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"98")," loans overdue"),r.a.createElement(u.r,{style:{color:"white",marginBottom:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"15")," loans on time"),r.a.createElement(u.r,{style:{color:"white",marginBottom:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"5")," loans closing today"),r.a.createElement(u.c,{variant:"contained",color:"primary"},"View Details")))),r.a.createElement(u.g,{item:!0,xs:12,md:4},r.a.createElement(u.p,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:10,paddingBottom:0}},r.a.createElement(V.a,null),r.a.createElement(u.r,{variant:"body2"},"BDO Metrix"),r.a.createElement(F.a,{style:{marginTop:7}})),r.a.createElement("div",{style:{backgroundColor:"#51505c",padding:10,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement(u.r,{style:{color:"white",marginBottom:10,marginTop:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"100")," applications"),r.a.createElement(u.r,{style:{color:"white",marginBottom:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"45")," suspects"),r.a.createElement(u.r,{style:{color:"white",marginBottom:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"30")," prospects"),r.a.createElement(u.c,{variant:"contained",color:"primary"},"View Details")))),r.a.createElement(u.g,{item:!0,xs:12,md:4},r.a.createElement(u.p,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:10,paddingBottom:0}},r.a.createElement(V.a,null),r.a.createElement(u.r,{variant:"body2"},"Enterprise Metrix"),r.a.createElement(F.a,{style:{marginTop:7}})),r.a.createElement("div",{style:{backgroundColor:"#51505c",padding:10,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement(u.r,{style:{color:"white",marginBottom:10,marginTop:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"40")," SBA loans"),r.a.createElement(u.r,{style:{color:"white",marginBottom:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"45")," write offs"),r.a.createElement(u.r,{style:{color:"white",marginBottom:10},variant:"body1"},r.a.createElement("span",{style:{fontWeight:700}},"30")," liquidated loans"),r.a.createElement(u.c,{variant:"contained",color:"primary"},"View Details")))))}}]),t}(n.Component),M=a(33),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(S.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(u.d,null),r.a.createElement(N,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer},r.a.createElement(M.a,{path:"/",exact:!0,component:A}),r.a.createElement(M.a,{path:"/overview",component:G})))))}}]),t}(r.a.Component),H=Object(g.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,minHeight:"100vh",overflow:"hidden",marginTop:50},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit}}})(z);a(464);Object(i.render)(r.a.createElement(H,null),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.b0773bda.chunk.js.map