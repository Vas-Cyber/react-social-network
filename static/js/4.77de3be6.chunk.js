(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[4],{297:function(t,e,s){t.exports={content_font:"Post_content_font__1Jfj6"}},298:function(t,e,s){t.exports={content_font:"MyPosts_content_font__1DTPt"}},300:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3Ctaw"}},302:function(t,e,s){"use strict";s.r(e);var n=s(5),c=s(36),o=s(37),a=s(39),i=s(38),r=s(0),u=s.n(r),j=s(300),p=s.n(j),d=s(65),l=s(130),b=s(1),f=function(t){var e=Object(r.useState)(!1),s=Object(l.a)(e,2),n=s[0],c=s[1],o=Object(r.useState)(t.status),a=Object(l.a)(o,2),i=a[0],u=a[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsxs)("div",{children:[!n&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"Empty status"})}),n&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(i)},value:i})})]})},O=function(t){return t.profile?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:p.a.descriptionBlock,children:[Object(b.jsx)("img",{src:t.profile.photos.large}),Object(b.jsx)(f,{status:t.status,updateStatus:t.updateStatus})]})}):Object(b.jsx)(d.a,{})},h=s(97),x=s(40),m=s(298),v=s.n(m),P=s(297),g=s.n(P),_=function(t){return Object(b.jsxs)("div",{className:g.a.content_font,children:[Object(b.jsx)("img",{src:"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png"}),t.message,Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"like"}),t.likesCount]})]})},S=s(90),k=s(129),w=s(72),y=s(30),C=Object(w.a)(10),N=Object(k.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(b.jsx)("form",{onSubmit:t.handleSubmit,children:Object(b.jsxs)("div",{className:"".concat(v.a," ").concat(g.a),children:[Object(b.jsx)("div",{children:Object(b.jsx)(S.a,{name:"newPostText",component:y.b,placeholder:"Post message",validate:[w.b,C]})}),Object(b.jsx)("button",{children:"Add post"}),Object(b.jsx)("button",{children:"Remove"})]})})})),T=u.a.memo((function(t){var e=Object(x.a)(t.posts).reverse().map((function(t){return Object(b.jsx)(_,{message:t.message,likesCount:t.likesCount})}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:v.a.content_font,children:"My posts"}),Object(b.jsx)(N,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(b.jsx)("div",{className:"".concat(v.a," ").concat(g.a),children:e})]})})),I=s(18),A=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(T),B=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(A,{})]})},U=s(9),D=s(10),J=function(t){Object(a.a)(s,t);var e=Object(i.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(b.jsx)(B,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(D.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}),U.f)(J)}}]);
//# sourceMappingURL=4.77de3be6.chunk.js.map