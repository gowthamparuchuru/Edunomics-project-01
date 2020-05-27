(this["webpackJsonpedunomics-project-01"]=this["webpackJsonpedunomics-project-01"]||[]).push([[0],{127:function(e,t,a){e.exports=a(212)},149:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),s=a.n(l),c=a(111),o=a(112),i=a(125),u=a(124),m=a(237),d=a(234),E=a(115),k=a(116),g=a(238),b=a(244),f=a(239),h=a(43),v=a.n(h),p=(a(149),a(242)),y=a(243),S=a(232);var O=function(){return r.a.createElement(p.a,{bg:"dark",variant:"dark"},r.a.createElement(y.a,{placement:"right",overlay:r.a.createElement(S.a,null,"Know about Kanban")},r.a.createElement("a",{href:"https://www.digite.com/kanban/what-is-kanban/",target:"__blank",style:{marginLeft:"15px"}},r.a.createElement("i",{class:"fab fa-jira fa-2x jira-icon"}))),r.a.createElement(p.a.Brand,{className:"ml-auto mr-auto",align:"center"},r.a.createElement("h4",{className:"main-heading"},"Kanban Dashboard")),r.a.createElement(y.a,{placement:"left",overlay:r.a.createElement(S.a,null,"View Source Code")},r.a.createElement("a",{href:"https://github.com/ESLABS101/cx-deployer-team-beta",target:"__blank",style:{marginRight:"15px"}},r.a.createElement("i",{class:"fab fa-github fa-2x github-icon"}))))};var j=function(){return r.a.createElement(p.a,{bg:"dark",variant:"dark",fixed:"bottom",className:"footer"},r.a.createElement(p.a.Brand,{className:"ml-auto mr-auto footer"},r.a.createElement("a",{className:"footer-link",href:"https://edunomics.in/",target:"__blank"},"Edunomics")," ",r.a.createElement("span",{style:{fontFamily:"Arial, Helvetica, sans-serif"}},"\xa9")," ",(new Date).getFullYear()))},N=a(51),w=a(240),_=a(241);var C=function(e){var t=r.a.useState(""),a=Object(N.a)(t,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(w.a,{size:"md",centered:!0,show:e.visibility,onHide:function(){return e.hideModal()}},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Add New Modal")),r.a.createElement(w.a.Body,null,r.a.createElement(_.a,null,r.a.createElement(_.a.Group,null,r.a.createElement(_.a.Label,null,"Name :"),r.a.createElement(_.a.Control,{type:"text",onChange:function(e){return l(e.target.value)},value:n})))),r.a.createElement(w.a.Footer,null,r.a.createElement(k.a,{block:!0,variant:"primary",onClick:function(){e.saveFunction(n),l("")},disabled:""===n},"Save Bucket"))))},D=a(9),x=a(233),B=a(114),M=a(235),I=a(236),T=a(81),A=a(52),K=a.n(A);a(103);var z=function(e){var t=Object(n.useState)(e.taskData),a=Object(N.a)(t,2),l=a[0],s=a[1];return Object(n.useEffect)((function(){s(e.taskData)}),[e.taskData]),r.a.createElement(w.a,{size:"lg",centered:!0,show:e.visibility,onHide:function(){return e.hideModal()}},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Edit Task")),r.a.createElement(w.a.Body,null,r.a.createElement(x.a,{size:"sm"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,null,"Name")),r.a.createElement(B.a,{type:"text",size:"sm",onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{name:e.target.value}))},value:l.name})),r.a.createElement("hr",null),r.a.createElement(d.a,null,r.a.createElement(E.a,{xs:2,className:"text-center"},r.a.createElement("i",{class:"fas fa-user-plus"})," Assignees:"),r.a.createElement(E.a,null,r.a.createElement(x.a,{className:"w-50",size:"sm"},r.a.createElement(B.a,{placeholder:"Add Assignee",onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{assignee:e.target.value}))},value:l.assignee}),r.a.createElement(x.a.Append,null,r.a.createElement(k.a,{variant:"outline-info",onClick:function(){var e=l.assignees;e.push(l.assignee),s(Object(D.a)(Object(D.a)({},l),{},{assignees:e,assignee:""}))}},"Add"),r.a.createElement(k.a,{variant:"outline-danger",onClick:function(){s(Object(D.a)(Object(D.a)({},l),{},{assignees:[],assignee:""}))}},"Delete"))))),r.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mt-3 w-80 text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,l.assignees?l.assignees.map((function(e){return r.a.createElement("th",null,e)})):null))),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"text-center"},"Bucket:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:l.bucket,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{bucket:e}))}},e.buckets?e.buckets.map((function(e){return r.a.createElement(T.a.Item,{eventKey:e},e)})):null))),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement("span",{className:"ml-4"},"Start Date:")),r.a.createElement(E.a,{style:{padding:"0"}},r.a.createElement(K.a,{selected:l.start_date,onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{start_date:e}))}})))),r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"text-center"},"Proress:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:""===l.progress?"select...":l.progress,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{progress:e}))}},r.a.createElement(T.a.Item,{eventKey:"Not Started"},"Not Started"),r.a.createElement(T.a.Item,{eventKey:"In Progress"},"In Progress"),r.a.createElement(T.a.Item,{eventKey:"Completed"},"Completed")))),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement("span",{className:"ml-4"},"Due Date:")),r.a.createElement(E.a,{style:{padding:"0 15px 0 0"}},r.a.createElement("div",{className:"customDatePickerWidth"},r.a.createElement(K.a,{selected:l.due_date,onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{due_date:e}))}})))))),r.a.createElement("hr",null),r.a.createElement(x.a,{className:"mt-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,null,"Description :")),r.a.createElement(B.a,{size:"sm",as:"textarea",rows:"2",onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{description:e.target.value}))},value:l.description})),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,{className:"text-center"},"Label Colour:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:"#3797a4"===l.label_color?"default":l.label_color,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{label_color:e}))}},r.a.createElement(T.a.Item,{eventKey:"Tomato"},"Tomato"),r.a.createElement(T.a.Item,{eventKey:"MediumSeaGreen"},"MediumSeaGreen"),r.a.createElement(T.a.Item,{eventKey:"Orange"},"Orange"),r.a.createElement(T.a.Item,{eventKey:"DodgerBlue"},"DodgerBlue"))),r.a.createElement(E.a,{className:"text-center"},"priority:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:""===l.priority?"select...":l.priority,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{priority:e}))}},r.a.createElement(T.a.Item,{eventKey:"low"},"low"),r.a.createElement(T.a.Item,{eventKey:"medium"},"medium"),r.a.createElement(T.a.Item,{eventKey:"high"},"high"))))),r.a.createElement(w.a.Footer,null,r.a.createElement(k.a,{variant:"danger",onClick:function(){e.deleteFunction(l)}},r.a.createElement("i",{class:"far fa-trash-alt mr-2"}),"Delete Task"),r.a.createElement(k.a,{variant:"primary",onClick:function(){return e.saveFunction(l)},disabled:""===l.name},"Save Edits")))};var F=function(e){var t=Object(n.useState)({name:"",description:"",assignees:[],assignee:"",rank:"",bucket:e.buckets[0],start_date:new Date,due_date:new Date,progress:"",label_color:"#3797a4",priority:""}),a=Object(N.a)(t,2),l=a[0],s=a[1];return Object(n.useEffect)((function(){s({name:"",description:"",assignees:[],rank:"",bucket:"To do",start_date:new Date,due_date:new Date,progress:"",label_color:"#3797a4",priority:""})}),[e.visibility]),r.a.createElement(w.a,{size:"lg",centered:!0,show:e.visibility,onHide:function(){return e.hideModal()}},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Enter Task")),r.a.createElement(w.a.Body,null,r.a.createElement(x.a,{size:"sm"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,null,"Name")),r.a.createElement(B.a,{type:"text",size:"sm",onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{name:e.target.value}))}})),r.a.createElement("hr",null),r.a.createElement(d.a,null,r.a.createElement(E.a,{xs:2,className:"text-center"},r.a.createElement("i",{class:"fas fa-user-plus"})," Assignees:"),r.a.createElement(E.a,null,r.a.createElement(x.a,{className:"w-50",size:"sm"},r.a.createElement(B.a,{placeholder:"Add Assignee",onChange:function(e){return s(Object(D.a)(Object(D.a)({},l),{},{assignee:e.target.value}))},value:l.assignee}),r.a.createElement(x.a.Append,null,r.a.createElement(k.a,{variant:"outline-info",onClick:function(){var e=l.assignees;e.push(l.assignee),s(Object(D.a)(Object(D.a)({},l),{},{assignees:e,assignee:""}))}},"Add"),r.a.createElement(k.a,{variant:"outline-danger",onClick:function(){s(Object(D.a)(Object(D.a)({},l),{},{assignees:[],assignee:""}))}},"Delete"))))),r.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mt-3 w-80 text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,l.assignees?l.assignees.map((function(e){return r.a.createElement("th",null,e)})):null))),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"text-center"},"Bucket:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:l.bucket,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{bucket:e}))}},e.buckets?e.buckets.map((function(e){return r.a.createElement(T.a.Item,{eventKey:e},e)})):null))),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement("span",{className:"ml-4"},"Start Date:")),r.a.createElement(E.a,null,r.a.createElement(K.a,{selected:l.start_date,onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{start_date:e}))}})))),r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"text-center"},"Progress:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:""===l.progress?"select...":l.progress,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{progress:e}))}},r.a.createElement(T.a.Item,{eventKey:"Not Started"},"Not Started"),r.a.createElement(T.a.Item,{eventKey:"In Progress"},"In Progress"),r.a.createElement(T.a.Item,{eventKey:"Completed"},"Completed")))),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement("span",{className:"ml-5"},"Due Date:")),r.a.createElement(E.a,null,r.a.createElement(K.a,{selected:l.due_date,onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{due_date:e}))}}))))),r.a.createElement("hr",null),r.a.createElement(x.a,{className:"mt-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,null,"Description :")),r.a.createElement(B.a,{as:"textarea",rows:"2",onChange:function(e){s(Object(D.a)(Object(D.a)({},l),{},{description:e.target.value}))}})),r.a.createElement("hr",null),r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(E.a,{className:"text-center"},"Label Colour:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:"#3797a4"===l.label_color?"default":l.label_color,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{label_color:e}))}},r.a.createElement(T.a.Item,{eventKey:"Tomato"},"Tomato"),r.a.createElement(T.a.Item,{eventKey:"MediumSeaGreen"},"MediumSeaGreen"),r.a.createElement(T.a.Item,{eventKey:"Orange"},"Orange"),r.a.createElement(T.a.Item,{eventKey:"DodgerBlue"},"DodgerBlue"))),r.a.createElement(E.a,{className:"text-center"},"priority:"),r.a.createElement(E.a,null,r.a.createElement(I.a,{title:""===l.priority?"select...":l.priority,size:"sm",onSelect:function(e){s(Object(D.a)(Object(D.a)({},l),{},{priority:e}))}},r.a.createElement(T.a.Item,{eventKey:"low"},"low"),r.a.createElement(T.a.Item,{eventKey:"medium"},"medium"),r.a.createElement(T.a.Item,{eventKey:"high"},"high"))))),r.a.createElement(w.a.Footer,null,r.a.createElement(k.a,{block:!0,variant:"info",onClick:function(){return e.saveFunction(l)},disabled:""===l.name},"Add Task")))},P=a(119),H=a.n(P);var L=function(e){return r.a.createElement(w.a,{show:e.visibility,onHide:function(){return e.hideModal()}},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Settings")),r.a.createElement(w.a.Body,null,r.a.createElement(m.a,{fluid:!0},r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("p",{className:"float-right mr-3"},"Auto Save :")),r.a.createElement(E.a,null,r.a.createElement("span",{className:"float-left ml-3"},r.a.createElement(H.a,{checked:e.autoSave,onstyle:"success",offstyle:"danger",size:"sm",onChange:function(t){e.toggleAutoSave(t)}})))),r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"text-center mt-3"},r.a.createElement(k.a,{variant:"success",disabled:!!e.autoSave,onClick:function(){return e.saveFunction()}},r.a.createElement("i",{class:"fas fa-save mr-2"}),"Save Chart"))))))},G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).saveData=function(){n.setState({showSettings:!1}),v.a.post("https://kanban-back-end.herokuapp.com/buckets/save",Object.assign({},n.state.buckets_array)).then((function(e){console.log(e.data)}),(function(e){console.log(e),alert("Error. Can not Load Data.")})),v.a.post("https://kanban-back-end.herokuapp.com/tasks/save",n.state.tasks).then((function(e){console.log(e.data)}),(function(e){console.log(e),alert("Error. Can not Load Data.")})),n.setState({showSettings:!1})},n.addTask=function(e){console.log(e);var t=n.state.tasks,a=Object.keys(t).length+1,r=1;for(var l in t)t[l].bucket===e.bucket&&r++;e.id=a,e.rank=r,t[e.id]=e,n.setState({tasks:t,showAddModal:!1})},n.saveEditTask=function(e){var t=n.state.tasks;t[e.id]=e,n.setState({tasks:t,showEditModal:!1})},n.deleteTask=function(e){var t=e.bucket,a=e.id,r=n.state.tasks;for(var l in r)r[l].bucket===t&&r[l].rank>e.rank&&r[l].rank--;delete r[a],n.setState({tasks:r,showEditModal:!1})},n.saveBucket=function(e){var t=n.state.buckets_array;t.push(e),n.setState({buckets_array:t,showBucketModal:!1,bucketName:""})},n.state={buckets_array:[],tasks:{},bucketName:"",showBucketModal:!1,showAddModal:!1,editModal:{},showEditModal:!1,showSettings:!1,draggedCard:null,dragOn:!1,draggedBucket:null,autoSave:!1},n}return Object(o.a)(a,[{key:"autoSaveData",value:function(){window.localStorage.setItem("autoSave",this.state.autoSave),this.state.autoSave&&v.a.post("https://kanban-back-end.herokuapp.com/buckets/save",Object.assign({},this.state.buckets_array)).then((function(e){}),(function(e){console.log(e),alert("Error. Can not Load Data.")})),this.state.autoSave&&v.a.post("https://kanban-back-end.herokuapp.com/tasks/save",this.state.tasks).then((function(e){}),(function(e){console.log(e),alert("Error. Can not Load Data.")}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({autoSave:"true"===window.localStorage.getItem("autoSave")}),v.a.get("https://kanban-back-end.herokuapp.com/buckets").then((function(t){var a=Object.values(t.data);for(var n in a)a[n]=a[n].name;e.setState({buckets_array:a})}),(function(e){console.log(e)})),v.a.get("https://kanban-back-end.herokuapp.com/tasks").then((function(t){var a=t.data;for(var n in a)a[n].start_date=new Date(a[n].start_date),a[n].due_date=new Date(a[n].due_date);e.setState({tasks:a})})),setInterval((function(){e.autoSaveData()}),5e3)}},{key:"editTask",value:function(e){this.setState({editModal:e}),this.setState({name:e.name,description:e.description,bucket:e.bucket,assignees:e.assignees,start_date:e.start_date,due_date:e.due_date,progress:e.progress,label_color:e.label_color,priority:e.priority,showEditModal:!0})}},{key:"dragStart",value:function(e,t){this.setState({draggedCard:t,dragOn:!0})}},{key:"dragEnd",value:function(e){this.setState({draggedCard:null,dragOn:!1})}},{key:"dragOver",value:function(e,t){e.preventDefault()}},{key:"dropCard",value:function(e,t){if(null!==this.state.draggedBucket){var a=this.state.draggedBucket,n=this.state.buckets_array,r=n[t],l=n.indexOf(r);return n=n.filter((function(e){return e!==a})),console.log(n,l),n.splice(l,0,a),void this.setState({buckets_array:n})}if(this.state.draggedCard.bucket!==this.state.buckets_array[t]){var s=this.state.draggedCard,c=s.id,o=t,i=this.state.tasks,u=this.state.buckets_array[o],m=1;for(var d in i)i[d].bucket===u&&(m+=1);for(d in i)i[d].bucket===s.bucket&&Number(i[d].rank)>Number(s.rank)&&i[d].rank--;i[c].bucket=this.state.buckets_array[o],i[c].rank=m,this.setState({tasks:i,dragOn:!1})}}},{key:"dropVertical",value:function(e,t){if(null===this.state.draggedBucket&&this.state.draggedCard.bucket===t.bucket){var a=this.state.draggedCard.rank,n=t.rank,r=this.state.tasks;if(a>n){for(var l in r)r[l].bucket===t.bucket&&r[l].rank>=n&&r[l].rank<=a&&r[l].rank++;r[this.state.draggedCard.id].rank=n,this.setState({tasks:r})}else if(a<n){for(l in r)r[l].bucket===t.bucket&&r[l].rank<=n&&r[l].rank>=a&&r[l].rank--;r[this.state.draggedCard.id].rank=n,this.setState({tasks:r})}}}},{key:"bucketDrop",value:function(e,t){if(null!==this.state.draggedBucket){var a=this.state.draggedBucket,n=this.state.buckets_array,r=n.indexOf(t);n=n.filter((function(e){return e!==a})),console.log(n,r),n.splice(r,0,a),this.setState({buckets_array:n})}}},{key:"render",value:function(){var e=this,t=[],a=this.state.tasks,n=this.state.buckets_array,l=Object.keys(a).length;for(var s in n)for(var c=1;c<=l;c++)for(var o in a)Number(a[o].rank)===c&&a[o].bucket===n[s]&&t.push(a[o]);return r.a.createElement("html",null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(m.a,{className:"board",fluid:!0},r.a.createElement(d.a,{className:"mt-2 mb-2"},r.a.createElement(E.a,null),r.a.createElement(E.a,{align:"center"},r.a.createElement(k.a,{className:"mr-3",onClick:function(){return e.setState({showAddModal:!0})},variant:"info"},r.a.createElement("i",{class:"fas fa-plus-circle  mr-2"}),"Add Task"),r.a.createElement(k.a,{onClick:function(){return e.setState({showBucketModal:!0})},variant:"secondary"},r.a.createElement("i",{class:"fas fa-plus-circle  mr-2"}),"Add Bucket")),r.a.createElement(E.a,null,r.a.createElement(k.a,{variant:"outline-dark",className:"float-right mr-4",onClick:function(){return e.setState({showSettings:!0})}},"Settings",r.a.createElement("i",{class:"fas fa-cog  settings-icon ml-2"})))),r.a.createElement(d.a,{className:"board"},this.state.buckets_array.map((function(a){return r.a.createElement(E.a,{id:e.state.buckets_array.indexOf(a),className:"bucket",onDragOver:function(t){return e.dragOver(t)},onDrop:function(t){return e.dropCard(t,e.state.buckets_array.indexOf(a))}},r.a.createElement(f.a,{elevation:3,className:"paper-list"},r.a.createElement(g.a,{variant:"primary",style:{padding:"5px"},draggable:"true",onDragStart:function(t){e.setState({draggedBucket:a})},onDragEnd:function(t){e.setState({draggedBucket:null,dragOn:!1})},onDragOver:function(e){e.preventDefault()},onDrop:function(t){return e.bucketDrop(t,a)}},r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("h6",{style:{margin:"0"},className:"float-left ml-2"},a)),r.a.createElement(E.a,null,r.a.createElement("span",{style:{cursor:"pointer"}},r.a.createElement("i",{class:"fas fa-trash float-right bucket-edit",onClick:function(){var t=e.state.buckets_array;t=t.filter((function(e){return e!==a}));var n=e.state.tasks;for(var r in n)n[r].bucket===a&&delete n[r];e.setState({buckets_array:t,tasks:n})}}))))),Object.values(t).map((function(t){return t.bucket===a?r.a.createElement(b.a,{style:{backgroundColor:"#fdf5e8",opacity:e.state.draggedCard===t&&e.state.dragOn?.3:1},className:"mt-2 task-card",draggable:"true",onDragStart:function(a){return e.dragStart(a,t)},onDragEnd:function(t){return e.dragEnd(t)},onDrop:function(a){return e.dropVertical(a,t)}},r.a.createElement(b.a.Body,{style:{padding:"3% 1% 3% 3%"},onClick:function(){return e.editTask(t)}},r.a.createElement(b.a.Text,{style:{width:"90%"},className:"float-left mb-0 mt-1"},r.a.createElement("svg",{style:{color:t.label_color},class:"bi bi-bookmark-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z"}))," ",t.name))):null}))))})))),r.a.createElement(C,{visibility:this.state.showBucketModal,saveFunction:this.saveBucket,hideModal:function(){return e.setState({showBucketModal:!1})}}),r.a.createElement(z,{visibility:this.state.showEditModal,buckets:this.state.buckets_array,taskData:this.state.editModal,saveFunction:this.saveEditTask,deleteFunction:this.deleteTask,hideModal:function(){return e.setState({showEditModal:!1})}}),r.a.createElement(F,{visibility:this.state.showAddModal,buckets:this.state.buckets_array,saveFunction:this.addTask,hideModal:function(){return e.setState({showAddModal:!1})}}),r.a.createElement(L,{visibility:this.state.showSettings,autoSave:this.state.autoSave,toggleAutoSave:function(t){return e.setState({autoSave:t})},saveFunction:this.saveData,hideModal:function(){return e.setState({showSettings:!1})}}),r.a.createElement(j,null)))}}]),a}(n.Component);var V=function(){return r.a.createElement("div",null,r.a.createElement(G,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.d1035aed.chunk.js.map