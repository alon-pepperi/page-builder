(self["webpackJsonpclient-side"]=self["webpackJsonpclient-side"]||[]).push([[441],{2441:(e,t,s)=>{"use strict";s.d(t,{c:()=>i,N:()=>r});var c=s(9765),n=s(7574),u=s(5319),o=s(1307);class i extends n.y{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new u.w,e.add(this.source.subscribe(new l(this.getSubject(),this))),e.closed&&(this._connection=null,e=u.w.EMPTY)),e}refCount(){return(0,o.x)()(this)}}const r=(()=>{const e=i.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class l extends c.Yc{constructor(e,t){super(e),this.connectable=t}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}}}]);