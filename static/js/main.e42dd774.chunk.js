(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(59)},34:function(e,t){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),o=n(9),i=n(2),u=function(){return String(Date.now())},c=function(e){return{type:"TOGGLE_SETTINGS",data:{show:e}}},l=n(18),m=n.n(l),s=n(5),f=n(15),d=function(e){return Object(i.a)({},e,{opened:!0})},b=function(e){return Object(i.a)({},e,{mined:!0})},v=function(e){return Object(i.a)({},e,{flagged:!e.flagged})},p={opened:!1,flagged:!1,mined:!1,neighborMineCount:0};b(p);function g(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(e,t){return new Array(e*t).fill(p)},O=function(e,t,n){return[].concat(Object(f.a)(e.slice(0,t)),[n(e[t])],Object(f.a)(e.slice(t+1)))},y=function(e,t){return O(e,t,d)},S=function(e,t){return O(e,t,b)},j=function(e,t,n,r){var a=r>0&&t>1,o=r<t-1&&t>1,i=n>0&&e>1,u=n<e-1&&e>1,c=[];return a&&i&&c.push([n-1,r-1]),a&&c.push([n,r-1]),a&&u&&c.push([n+1,r-1]),i&&c.push([n-1,r]),u&&c.push([n+1,r]),o&&i&&c.push([n-1,r+1]),o&&c.push([n,r+1]),o&&u&&c.push([n+1,r+1]),c};function N(e){return e-2}var C={showSettings:!1,seed:"DEFAULT_SEED",mineCount:20,boardWidth:12,boardHeight:12,boardCells:E(12,12),isGameStarted:!1,isGameOver:!1,didWin:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;if(function(e){return"SET_BOARD_DIMENSIONS"===e.type}(t)){var n=t.data,r=n.width,a=n.height;return Object(i.a)({},e,{boardWidth:r,boardHeight:a,boardCells:E(r,a),isGameStarted:!1,isGameOver:!1,didWin:!1})}if(function(e){return"OPEN_CELL"===e.type}(t)){var o=t.data,u=o.x,c=o.y,l=D(e,u,c),f=e.boardCells,d=e.isGameOver,b=e.isGameStarted,p=e.didWin;if(d)return e;var h=f[l];if(h.flagged||h.opened)return e;var G=e.seed,M=e.mineCount,w=e.boardWidth,T=e.boardHeight;return f=y(f,l),b?h.mined&&(d=!0):(b=!0,f=function(e,t,n){for(var r=function(t){var r=Object(s.a)(t,2),a=r[0],o=r[1];return e[a+o*n].mined},a=function(a){var o=a%t,u=Math.floor(a/t),c=j(t,n,o,u).filter(r).length;e=O(e,a,function(e){return Object(i.a)({},e,{neighborMineCount:c})})},o=0;o<e.length;o++)a(o);return e}(f=function(e,t,n){var r=e.length;if(t>N(r))throw new Error("Too many mines");for(;;){var a=Math.floor(n()*r),o=e[a];if(!o.opened&&!o.mined&&(e=S(e,a),--t<=0))break}return e}(f,M,function(e){return m()(e)}(G)),w,T)),h.mined||(f=function e(t,n,r,a,o){var i=a+o*n,u=t[i];if(t=y(t,i),u.neighborMineCount>0)return t;var c,l=g(j(n,r,a,o));try{for(l.s();!(c=l.n()).done;){var m=c.value,f=Object(s.a)(m,2),d=f[0],b=f[1],v=t[d+b*n];v.flagged||v.opened||(t=e(t,n,r,d,b))}}catch(p){l.e(p)}finally{l.f()}return t}(f,w,T,u,c)),p=f.every(function(e){return(e.mined||e.opened)&&e.mined!==e.opened}),d=d||p,Object(i.a)({},e,{boardCells:f,isGameStarted:b,isGameOver:d,didWin:p})}if(function(e){return"FLAG_CELL"===e.type}(t)){var A=t.data,W=A.x,x=A.y;if(e.isGameOver)return e;var _=e.boardCells;return _=function(e,t){return O(e,t,v)}(_,D(e,W,x)),Object(i.a)({},e,{boardCells:_})}if(function(e){return"RESTART_GAME"===e.type}(t))return Object(i.a)({},e,{seed:t.data.seed,boardCells:E(e.boardWidth,e.boardHeight),isGameStarted:!1,isGameOver:!1,didWin:!1});if(function(e){return"NEW_GAME"===e.type}(t)){var L=t.data,k=L.rows,I=L.cols,U=L.mines;return Object(i.a)({},e,{boardWidth:I,boardHeight:k,mineCount:U,showSettings:!1,boardCells:E(I,k),isGameStarted:!1,isGameOver:!1,didWin:!1})}return function(e){return"SET_SEED"===e.type}(t)?Object(i.a)({},e,{seed:t.data.seed}):function(e){return"TOGGLE_SETTINGS"===e.type}(t)?Object(i.a)({},e,{showSettings:t.data.show}):e},M=function(e){return e.showSettings},w=function(e){return e.boardWidth},T=function(e){return e.boardHeight},A=function(e){return[e.boardWidth,e.boardHeight]},W=function(e){return e.boardCells},D=function(e,t,n){return e.boardWidth*n+t},x=function(e){return e.isGameStarted},_=function(e){return e.isGameOver},L=function(e){return e.didWin},k=function(e){return e.mineCount},I=function(e){return Math.max(0,k(e)-function(e){return e.boardCells.map(function(e){return e.flagged}).filter(Boolean).length}(e))},U=n(19),B=n(1),H=n(11),F=function(e){return r.createElement("button",Object.assign({type:"button",className:"btn btn-light"},e))},R=function(e){var t=Object(H.a)({},e),n=Object(B.b)(),a=r.useCallback(function(e){e.preventDefault(),n(function(){return{type:"RESTART_GAME",data:{seed:arguments.length>0&&void 0!==arguments[0]?arguments[0]:u()}}}())},[n]);return r.createElement(F,Object.assign({onClick:a},t))},z=function(e){var t=Object(H.a)({},e),n=Object(B.b)(),a=r.useCallback(function(e){e.preventDefault(),n(c(!0))},[n]);return r.createElement(F,Object.assign({onClick:a},t))},J=function(){var e=Object(B.b)(),t=r.useState(String(Object(B.c)(w))),n=Object(s.a)(t,2),a=n[0],o=n[1],i=r.useState(String(Object(B.c)(k))),u=Object(s.a)(i,2),l=u[0],m=u[1];return r.createElement("div",{className:"NewGameMenu card card-body",style:{maxWidth:"20em"}},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"NewGameMenu-size"},"Size"),r.createElement("br",null),r.createElement("input",{id:"NewGameMenu-size",className:"form-control",type:"number",value:a,onChange:function(e){var t=e.currentTarget.value;o(t||"")},onBlur:function(){var e=Math.max(5,Math.min(20,Number(a)||0));o(String(e)),m(String(Math.max(1,Math.min(N(Number(e)*Number(e)),Number(l)))))}})),r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"NewGameMenu-mines"},"Mines"),r.createElement("br",null),r.createElement("input",{id:"NewGameMenu-mines",className:"form-control",type:"number",value:l,onChange:function(e){var t=e.currentTarget.value;m(t||"")},onBlur:function(){m(String(Math.max(1,Math.min(N(Number(a)*Number(a)),Number(l)))))}})),r.createElement("div",null,r.createElement(F,{onClick:function(t){t.preventDefault(),e(c(!1))}},"Cancel")," ",r.createElement(F,{className:"btn btn-primary",onClick:function(t){t.preventDefault(),e(function(e,t,n){return{type:"NEW_GAME",data:{rows:e,cols:t,mines:n}}}(a,a,l))}},"Start game")))},P=n(21),Y=n.n(P),$=(n(39),function(e){var t=e.count;return r.createElement("span",{className:"NeighborMineCount NeighborMineCount--".concat(t)},t)}),q=(n(41),function(e){var t=e.cell;return r.createElement("div",{className:"GameCellOpened"},r.createElement("span",{className:"GameCellOpened-content"},t.mined?"\ud83d\udca5":t.neighborMineCount>0?r.createElement($,{count:t.neighborMineCount}):null))}),K=(n(43),function(e){return e.preventDefault()}),Q=function(e){var t=e.cell,n=e.onMouseUp,a=e.children;return r.createElement("button",{className:"GameCellUnopened",type:"button",tabIndex:-1,onContextMenu:K,onMouseDown:K,onMouseUp:n},t?t.flagged&&t.mined?"\ud83d\udea9":t.flagged&&!t.mined?"\ud83d\udca5":!t.flagged&&t.mined?"\ud83d\udca3":null:a)},V=(n(45),function(e){var t=e.isGameOver,n=e.cell,a=e.onMouseUp;return r.createElement("div",{className:"GameCell"},n.opened?r.createElement(q,{cell:n}):r.createElement(Q,{cell:t?n:null,onMouseUp:a},n.flagged?"\ud83d\udea9":null))}),X=(n(47),function(e){return e.preventDefault()}),Z=function(){for(var e=Object(B.c)(A),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(B.c)(W),i=Object(B.c)(_),u=Object(B.b)(),c=[],l="repeat(".concat(a,", 1fr) / repeat(").concat(n,", 1fr)"),m=Y()("GameBoard",i&&"GameBoard--is-game-over"),f=function(e){var t=o[e],a=e%n,l=Math.floor(e/n);c.push(r.createElement(V,{key:e,isGameOver:i,cell:t,onMouseUp:function(e){e.preventDefault();var t=e.getModifierState("Meta")||e.getModifierState("Control")||2===e.button;u(t?function(e,t){return{type:"FLAG_CELL",data:{x:e,y:t}}}(a,l):function(e,t){return{type:"OPEN_CELL",data:{x:e,y:t}}}(a,l))}}))},d=0;d<n*a;d++)f(d);return r.createElement("div",{className:m,style:{gridTemplate:l},onContextMenu:X},c)},ee=(n(49),function(){return r.createElement("p",null,"You win")}),te=function(){return r.createElement("p",null,"You lose")},ne=function(){return r.createElement("p",null,"Mines: ",Object(B.c)(I))},re=function(){return r.createElement("p",null,"Click any cell to start game")},ae=function(){var e=Object(B.c)(x),t=Object(B.c)(_),n=Object(B.c)(L);return r.createElement("div",{className:"GameStatus"},n?r.createElement(ee,null):t?r.createElement(te,null):e?r.createElement(ne,null):r.createElement(re,null))},oe=(n(51),function(){var e=Object(B.c)(w),t=Object(B.c)(T);return r.createElement("div",{className:"Game"},r.createElement("div",{className:"Game-board mt-4 mb-4",style:{width:40*e,height:40*t}},r.createElement(Z,null)),r.createElement(ae,null))}),ie=(n(53),function(){var e=Object(B.c)(M);return r.createElement("div",{className:"App container pt-5 pb-5"},r.createElement("nav",{className:"navbar navbar-light bg-light"},r.createElement(R,{className:"btn btn-dark mr-auto"},"New game"),r.createElement(z,{className:"btn btn-light ml-1"},"Options")),r.createElement("div",{className:"d-flex flex-column align-items-center"},e&&r.createElement("div",{className:"mt-4 mb-4"},r.createElement(J,null)),!e&&r.createElement(oe,null)))}),ue=(n(55),n(57),Object(o.createStore)(G,Object(U.composeWithDevTools)()));"DEFAULT_SEED"===ue.getState().seed&&ue.dispatch(function(){return{type:"SET_SEED",data:{seed:arguments.length>0&&void 0!==arguments[0]?arguments[0]:u()}}}());var ce=document.getElementById("root");Object(a.render)(r.createElement(B.a,{store:ue},r.createElement(ie,null)),ce)}},[[22,2,1]]]);
//# sourceMappingURL=main.e42dd774.chunk.js.map