(this.webpackJsonpstock=this.webpackJsonpstock||[]).push([[0],{158:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a(0),c=a.n(s),o=a(30),r=a.n(o),i=a(148),l=a(51),d=a(52),j=a(59),h=a(58),u=(a(158),a(14)),b=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return console.log("data->",this.props.graphData),Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsxs)(u.d,{width:1200,height:600,data:this.props.graphData,margin:{top:5,right:10,left:10,bottom:5},children:[Object(n.jsx)(u.a,{strokeDasharray:"3 3"}),Object(n.jsx)(u.f,{dataKey:"name"}),Object(n.jsx)(u.g,{}),Object(n.jsx)(u.e,{}),Object(n.jsx)(u.b,{}),Object(n.jsx)(u.c,{type:"monotone",dataKey:"open",stroke:"#8884d8",activeDot:{r:8}}),Object(n.jsx)(u.c,{type:"monotone",dataKey:"high",stroke:"#82ca9d"}),Object(n.jsx)(u.c,{type:"monotone",dataKey:"low",stroke:"#00FFFF"}),Object(n.jsx)(u.c,{type:"monotone",dataKey:"close",stroke:" #FF6700"})]})})}}]),a}(s.PureComponent),p=a(146);var f=function(e){var t=Object(p.useJsonToCsv)().saveAsCsv,a=e.data,s=e.fields,c=e.filename;return console.log("values passed -> ",a,s,c),Object(n.jsx)("button",{className:"button-style mt-2 p-2 px-2",onClick:function(){return t({data:a,fields:s,filename:c})},children:"Create excel report"})},O=a(147),m=a.n(O),v={name:"Date",open:"Open",high:"High",low:"Low",close:"Close"},x={padding:"5px"},y=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isloading:!0,data:[],error:!1},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo").then((function(e){return e.json()})).then((function(t){e.setState({isloading:!1,data:t})})).catch((function(t){return e.setState({isloading:!1,error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isloading,a=e.data;delete a["Meta Data"];var s=[],c=[],o=Object.values(a)[0];if(o){Object.keys(o).forEach((function(e){return s.push(Object(i.a)({name:e},Object.values(o[e])))}));for(var r=0;r<s.length;r+=14)c.push(s[r]);for(var l=0;l<c.length;l++)c[l].open=c[l][0],c[l].high=c[l][1],c[l].low=c[l][2],c[l].close=c[l][3],delete c[l][0],delete c[l][1],delete c[l][2],delete c[l][3],delete c[l][4]}return t?Object(n.jsxs)("div",{className:" d-flex flex-column justify-content-center",style:{color:"white"},children:[Object(n.jsx)("div",{className:"App-header",children:"Type of Stock Time Series"}),Object(n.jsx)("hr",{style:{backgroundColor:"#6d6d6d"}}),Object(n.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(n.jsx)(m.a,{type:"Bars",color:"#00BFFF",height:100,width:100,timeout:3e3})})]}):Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"App-header",children:"Type of Stock Time Series"}),Object(n.jsx)("hr",{style:{backgroundColor:"#6d6d6d"}}),this.state.error?Object(n.jsx)("div",{children:" There was some error fetching data. Please check your internet connection."}):Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{data:c,filename:"Csv-file",fields:v,style:x,text:"Convert Json to Csv"}),Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)(b,{graphData:c})})," "]})]})}}]),a}(s.PureComponent);r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[330,1,2]]]);
//# sourceMappingURL=main.071d0568.chunk.js.map