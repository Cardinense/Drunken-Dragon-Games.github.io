(()=>{"use strict";class e{constructor(e){this.run=e}then(t){return new e((()=>{this.run(),t.run()}))}}new e((()=>null));class t{constructor(e,t,o){this.app=e.Main.init({node:t,flags:o}),this.subscribeCopyToClipboard()}subscribeCopyToClipboard(){const t=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};return this.app.ports.copyToClipboard.subscribe(t),new e((()=>this.app.ports.copyToClipboard.unsubscribe(t)))}}window.addEventListener("load",(async()=>{new t(Elm,document.getElementById("app"),elmConfig)}))})();