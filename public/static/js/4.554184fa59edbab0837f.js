webpackJsonp([4],{HM61:function(t,e){},PjRp:function(t,e,s){"use strict";var i={props:{pitures:{type:Array},size:Number},methods:{deleteItem:function(t){this.$emit("deleteItem",t)},deleteAll:function(){this.$emit("deleteAll")}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-picture-view-com"},[s("div",{staticClass:"picture-view-heder"},[s("span",{staticClass:"info"},[s("i",{staticClass:"icon el-icon-picture"}),s("span",{staticClass:"statstics secondary-font"},[t._v("图片"+t._s(t.pitures.length)+"/"+t._s(t.size))])]),t._v(" "),s("span",{staticClass:"delete"},[s("i",{staticClass:"icon close el-icon-close",attrs:{title:"关闭"},on:{click:t.deleteAll}})])]),t._v(" "),s("div",{staticClass:"picture-list"},t._l(t.pitures,function(e,i){return s("div",{key:e.guid,staticClass:"picture-item"},[s("i",{staticClass:"close el-icon-close",on:{click:function(e){return t.deleteItem(i)}}}),t._v(" "),s("img",{staticClass:"img",attrs:{src:e.url,alt:"",srcset:""}}),t._v(" "),e.uploading&&!e.uploadPercent?s("div",{staticClass:"all0 img-cover"},[t._v("图片上传中...")]):t._e(),t._v(" "),e.uploadPercent?s("div",{staticClass:"all0 img-cover progress"},[s("div",{staticClass:"content"},[s("el-progress",{attrs:{width:50,type:"circle",percentage:e.uploadPercent}})],1)]):t._e()])}),0)])},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("HM61")},null,null);e.a=a.exports},TaNu:function(t,e){},Th63:function(t,e){},kgwE:function(t,e){},n54n:function(t,e){},ui26:function(t,e,s){"use strict";var i=s("Dd8w"),n=s.n(i),a=s("mvHQ"),r=s.n(a),o=s("Xxa5"),c=s.n(o),l=s("exGp"),p=s.n(l),d=(s("NWtE"),s("BD68")),u=s("1CRn"),m=s("0xDb"),f={props:["commentlist","pyqid"],data:function(){return{IMG_URL:"https://zcraft.us.kg/api/",replyContent:"",replyAreaShowMap:{},replyContentMap:{},viewMoreReplyMap:{},replyContentPlaceholderMap:{},showMaxReply:3,currentReplyCommentLevel:0,currentReplyToAuthorId:{},viewMoreComment:!1}},methods:{doReplyComment:function(t){var e=this,s=this.pyqid,i=this.replyContentMap[t],a=this.userInfo._id,r=t,o=2===this.currentReplyCommentLevel?this.currentReplyCommentLevel:this.currentReplyCommentLevel+1,c=this.currentReplyToAuthorId;this.$http.doComment({pyqId:s,content:i,authorId:a,parentId:r,level:o,replyToAuthorInfo:c}).then(function(s){var i=s.data;if(200===s.status&&2e3===i.status){var a=n()({},i.data[0],{authorId:{photo:e.userInfo.photo,signature:e.userInfo.signature,nickname:e.userInfo.nickname,_id:e.userInfo._id}});e.$emit("addchild",e.pyqid,t,a),e.$message({message:"回复成功！",type:"success"})}else e.$message({message:"回复失败！",type:"error"});e.replyContentMap[t]=""})},showReplyArea:function(t,e,s){var i=this,a=this.replyAreaShowMap,r=n()({},a);for(var o in r)r.hasOwnProperty(o)&&(r[o]=!1);r[t]=!0,this.replyAreaShowMap=r;var c="reply-inp"+t;this.$nextTick(function(){i.$refs[c]&&i.$refs[c][0].focus()}),this.currentReplyCommentLevel=e,this.currentReplyToAuthorId=s,this.replyContentPlaceholderMap[t]="回复 @"+this.currentReplyToAuthorId.nickname+"（请文明发言）"},viewMoreReply:function(t){this.viewMoreReplyMap[t]=!0}},computed:{userInfo:function(){return this.$store.state.user.userInfo},paginationCommentList:function(){return this.viewMoreComment?this.commentlist.slice():this.commentlist.slice(0,3)}},filters:{formatDate:function(t){return Object(m.i)(t)}},created:function(){var t=this;this.commentlist.forEach(function(e){t.$set(t.replyAreaShowMap,e._id,!1),t.$set(t.replyContentMap,e._id,""),t.$set(t.viewMoreReplyMap,e._id,!1),t.$set(t.replyContentPlaceholderMap,e._id,"请文明发言")})}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-comment-list-com"},[s("div",{staticClass:"comment-list-wrapper"},[t._l(t.paginationCommentList,function(e){return s("div",{key:e._id,staticClass:"comment-item"},[s("div",{staticClass:"avatar"},[s("el-avatar",{attrs:{size:40,src:t.IMG_URL+e.authorId.photo},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"user-content ellipsis"},[s("span",[s("el-popover",{attrs:{placement:"top",width:"240",trigger:"hover"}},[s("div",{staticClass:"user-card-body"},[s("div",{staticClass:"header"},[s("div",{staticClass:"user-card-avatar"},[s("el-avatar",{attrs:{size:50,src:t.IMG_URL+e.authorId.photo},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),t._v(" "),s("div",{staticClass:"user-card-info"},[s("p",{staticClass:"info-item-nickname ellipsis"},[t._v(t._s(e.authorId.nickname))]),t._v(" "),s("p",{staticClass:"info-item-signature ellipsis secondary-font"},[t._v(t._s(e.authorId.signature))])])])]),t._v(" "),s("router-link",{staticClass:"user-content-link",attrs:{slot:"reference",to:"/user/"+e.authorId._id},slot:"reference"},[t._v("\n                "+t._s(e.authorId.nickname)+"  \n              ")])],1)],1),t._v("：\n          "),s("span",[t._v(t._s(e.content))])]),t._v(" "),s("span",{staticClass:"time-content secondary-font"},[t._v(t._s(t._f("formatDate")(e.createDate)))]),t._v(" "),s("span",{staticClass:"reply secondary-font operation-text",on:{click:function(s){return t.showReplyArea(e._id,e.level,e.authorId)}}},[t._v("回复")]),t._v(" "),s("div",{staticClass:"reply-box"},[t._l(e.reply.slice(0,t.showMaxReply),function(i){return s("div",{key:i._id,staticClass:"reply-item"},[s("div",{staticClass:"reply-item-avatar"},[s("el-avatar",{attrs:{size:40,src:t.IMG_URL+i.authorId.photo},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),t._v(" "),s("div",{staticClass:"reply-item-content"},[s("p",{staticClass:"content-header"},[s("span",{staticClass:"name"},[t._v(t._s(i.authorId.nickname)+"\n                  "),2===i.level?s("span",{staticClass:"reply-to-author"},[t._v("\n                    回复@"+t._s(i.replyToAuthorInfo&&i.replyToAuthorInfo.nickname)+"\n                  ")]):t._e(),t._v("：\n                ")]),t._v("\n                "+t._s(i.content)+"\n              ")]),t._v(" "),s("span",{staticClass:"time secondary-font"},[t._v(t._s(t._f("formatDate")(i.createDate)))]),t._v(" "),s("span",{staticClass:"reply secondary-font operation-text",on:{click:function(s){return t.showReplyArea(e._id,i.level,i.authorId)}}},[t._v("回复")])])])}),t._v(" "),t.viewMoreReplyMap[e._id]?s("transition-group",t._l(e.reply.slice(t.showMaxReply),function(i){return s("div",{key:i._id,staticClass:"reply-item"},[s("div",{staticClass:"reply-item-avatar"},[s("el-avatar",{attrs:{size:40,src:t.IMG_URL+i.authorId.photo},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),t._v(" "),s("div",{staticClass:"reply-item-content"},[s("p",{staticClass:"content-header"},[s("span",{staticClass:"name"},[t._v(t._s(i.authorId.nickname)+"\n                    "),2===i.level?s("span",{staticClass:"reply-to-author"},[t._v("\n                      回复@"+t._s(i.replyToAuthorInfo&&i.replyToAuthorInfo.nickname)+"\n                    ")]):t._e(),t._v("：\n                  ")]),t._v("\n                  \n                  "+t._s(i.content)+"\n                ")]),t._v(" "),s("span",{staticClass:"time secondary-font"},[t._v(t._s(t._f("formatDate")(i.createDate)))]),t._v(" "),s("span",{staticClass:"reply secondary-font operation-text",on:{click:function(s){return t.showReplyArea(e._id,i.level,i.authorId)}}},[t._v("回复")])])])}),0):t._e(),t._v(" "),s("span",{staticClass:"view-more-reply-item secondary-font"},[e.reply.length?s("span",{staticClass:"reply-count"},[t._v("\n              共"+t._s(e.reply.length)+"条回复"+t._s(e.reply.length>t.showMaxReply?"，":"")+"\n            ")]):t._e(),t._v(" "),!t.viewMoreReplyMap[e._id]&&e.reply.length>t.showMaxReply?s("span",{staticClass:"operation-text",on:{click:function(s){t.viewMoreReplyMap[e._id]=!t.viewMoreReplyMap[e._id]}}},[t._v("查看")]):t._e(),t._v(" "),t.viewMoreReplyMap[e._id]&&e.reply.length>t.showMaxReply?s("span",{staticClass:"operation-text",on:{click:function(s){t.viewMoreReplyMap[e._id]=!t.viewMoreReplyMap[e._id]}}},[t._v("收起")]):t._e()])],2),t._v(" "),t.replyAreaShowMap[e._id]?s("div",{staticClass:"reply-area"},[s("el-input",{ref:"reply-inp"+e._id,refInFor:!0,staticStyle:{"margin-right":"5px"},attrs:{placeholder:t.replyContentPlaceholderMap[e._id]},model:{value:t.replyContentMap[e._id],callback:function(s){t.$set(t.replyContentMap,e._id,s)},expression:"replyContentMap[item._id]"}}),t._v(" "),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.doReplyComment(e._id)}}},[t._v("回复")])],1):t._e()])])}),t._v(" "),s("div",{staticClass:"comment-operation-list secondary-font"},[t.commentlist.length>3&&!t.viewMoreComment?s("span",{staticClass:"operation-text expand",on:{click:function(e){t.viewMoreComment=!0}}},[t._v("点击查看更多")]):t._e(),t._v(" "),t.viewMoreComment?s("span",{staticClass:"operation-text fold",on:{click:function(e){t.viewMoreComment=!1}}},[t._v("点击收起评论")]):t._e()])],2)])},staticRenderFns:[]};var h=s("VU/8")(f,v,!1,function(t){s("n54n")},null,null).exports,y=s("PjRp"),_=s("9wvJ"),C=s("kD8Z"),g={props:["pyqid"],data:function(){return{pyqInfo:C.f,IMG_URL:"https://zcraft.us.kg/api/",pictureLimit:2,isLoading:!1}},computed:{userInfo:function(){return this.$store.state.user.userInfo},device:function(){return this.$store.state.device.deviceType}},methods:{getPyqInfo:function(){var t=this;this.isLoading=!0;var e={pyqId:this.pyqid,userId:this.userInfo._id};this.$http.getPyqItemInfo(e).then(function(e){t.isLoading=!1;var s=e.data;2e3===s.status&&(t.pyqInfo=s.data[0])})},modifyPyq:function(){var t=this,e=this.pyqInfo,s=e.content,i=e.pictures;if(s.trim()||0!==i.length){this.isLoading=!0;var n={userId:this.userInfo._id,pyqId:this.pyqid,content:s,pictures:i};this.$http.modifyPyqItem(n).then(function(e){t.isLoading=!1,2e3===e.data.status?(t.$message({message:"更新成功！",type:"success"}),t.$emit("modify",t.pyqid,{content:s,pictures:i}),t.$emit("close")):t.$message({message:"更新失败！",type:"error"})})}else this.$message({message:"不能更新为空哦！",type:"warning"})},deletePictureItem:function(t){this.pyqInfo.pictures.splice(t,1)},deletePictures:function(){this.pyqInfo.pictures=[]},close:function(){this.$emit("close")}},filters:{formatDateToZH:function(t){return Object(m.i)(t)}},components:{pictureView:y.a,partTitle:_.a},created:function(){this.getPyqInfo()}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],class:"Mobile"===t.device?"mzone-pyq-edit mobile hor-ver-center":"mzone-pyq-edit hor-ver-center"},[s("i",{staticClass:"close-box el-icon-close",on:{click:t.close}}),t._v(" "),s("div",{staticClass:"header"},[s("router-link",{attrs:{to:"/user/"+t.pyqInfo.userId._id}},[s("el-avatar",{attrs:{size:60,src:t.IMG_URL+t.pyqInfo.userId.photo},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),t._v(" "),s("div",{staticClass:"user-info"},[s("div",{staticClass:"nickname"},[s("router-link",{staticClass:"nickname-link",attrs:{slot:"reference",to:"/user/"+t.pyqInfo.userId._id},slot:"reference"},[t._v("\n          "+t._s(t.pyqInfo.userId.nickname)+"\n        ")])],1),t._v(" "),s("div",{staticClass:"time secondary-font"},[s("span",[t._v(t._s(t._f("formatDateToZH")(t.pyqInfo.createDate)))])])])],1),t._v(" "),s("div",{staticClass:"body"},[s("part-title",{attrs:{text:"内容"}}),t._v(" "),s("div",{staticClass:"content"},[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.pyqInfo.content,callback:function(e){t.$set(t.pyqInfo,"content",e)},expression:"pyqInfo.content"}})],1),t._v(" "),s("part-title",{attrs:{text:"图片"}}),t._v(" "),t.pyqInfo.pictures.length?s("div",{staticClass:"pictures"},[s("picture-view",{attrs:{size:t.pictureLimit,pitures:t.pyqInfo.pictures},on:{deleteItem:t.deletePictureItem,deleteAll:t.deletePictures}})],1):t._e(),t._v(" "),s("div",[t.pyqInfo.pictures.length?t._e():s("el-alert",{attrs:{title:"未添加图片",type:"info",center:"",closable:!1}})],1)],1),t._v(" "),s("div",{staticClass:"footer"},[s("part-title",{attrs:{text:"操作"}}),t._v(" "),s("div",{staticClass:"operation"},[s("el-button",{attrs:{type:"success",size:"medium"},on:{click:t.modifyPyq}},[t._v("保存")]),t._v(" "),s("el-button",{attrs:{type:"danger",size:"medium"},on:{click:t.close}},[t._v("取消")])],1)],1)])},staticRenderFns:[]};var q=s("VU/8")(g,I,!1,function(t){s("TaNu")},null,null).exports,w=s("wA/d"),k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-card-cmp"},[s("div",{staticClass:"header"},[s("div",{staticClass:"user-card-avatar"},[s("el-avatar",{attrs:{size:50,src:t.IMG_URL+t.userDetails.photo},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),t._v(" "),s("div",{staticClass:"user-card-info"},[s("p",{staticClass:"info-item-nickname ellipsis"},[t._v(t._s(t.userDetails.nickname))]),t._v(" "),s("p",{staticClass:"info-item-signature ellipsis secondary-font"},[t._v(t._s(t.userDetails.signature))])])])])},staticRenderFns:[]};var L=s("VU/8")({props:["userDetails"],data:function(){return{IMG_URL:"https://zcraft.us.kg/api/"}}},k,!1,function(t){s("Th63")},null,null).exports,M={props:{newpyqitem:{type:Object,default:function(){return{}}},pyqListData:{type:Array,default:function(){return[]}},hasMore:{type:Boolean,default:!0}},data:function(){return{pyqList:[],IMG_URL:"https://zcraft.us.kg/api/",page:0,pageSize:7,isLoading:!1,currentImgUrl:"",showPicturePreview:!1,commentsObj:{},showEmojiCom:!1,currentPyq:"",emojiTop:"",emojiLeft:"",showOperationListObj:{},commentTips:C.d,showEditPyq:!1,currentEditPyqId:"",handlerElement:null}},computed:{userInfo:function(){return this.$store.state.user.userInfo},hasILike:function(){var t={};return this.pyqList.forEach(function(e){var s=(e.likes||[]).map(function(t){return t.authorId._id});t[e._id]=s}),t}},methods:{deleteItemPyq:function(t){var e=this;return p()(c.a.mark(function s(){return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e.$confirm("删除后不可恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p()(c.a.mark(function s(){var i,n,a,r;return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.$http.deletePyqItem({pyqId:t,userId:e.userInfo._id});case 2:i=s.sent,2e3===(n=i.data).status&&(e.$message({message:"删除成功！",type:"success"}),a=n.data._id,r=e.pyqList.filter(function(t){return t._id!==a}),e.pyqList=r);case 5:case"end":return s.stop()}},s,e)}))).catch(function(){e.$message({type:"info",message:"已取消删除"})});case 1:case"end":return s.stop()}},s,e)}))()},handleClickOperation:function(t){this.showOperationListObj[t]=!this.showOperationListObj[t]},getFriendlyPyq:function(){this.$emit("getPyq")},setCurrentImgUrl:function(t){this.currentImgUrl=t,this.showPicturePreview=!0},setshowPicturePreview:function(t){this.showPicturePreview=t},doLike:Object(m.f)(function(t,e){var s=this,i={authorId:this.userInfo._id,pyqId:t};this.$http.doLike(i).then(function(t){var i=t.data;if(t.status<400&&2e3===i.status){s.$message({message:"点赞成功！",type:"success"});var a=JSON.parse(r()(s.pyqList));a[e].likes.push(n()({},i.data[0],{authorId:{_id:s.userInfo._id,nickname:s.userInfo.nickname,photo:s.userInfo.photo,signature:s.signature}})),s.pyqList=a}else t.status<400&&2004===i.status&&s.$message({message:"你已经点过赞了",type:"warning"})})},500),doComment:function(t,e){var s=this;if(this.commentsObj[t]){var i={pyqId:t,content:this.commentsObj[t],authorId:this.userInfo._id};this.$http.doComment(i).then(function(i){var a=i.data;if(i.status<400&&2e3===a.status){s.$message({message:"评论成功！",type:"success"});var o=JSON.parse(r()(s.pyqList));o[e].comments.push(n()({},a.data[0],{authorId:{nickname:s.userInfo.nickname,photo:s.userInfo.photo},reply:[]})),s.pyqList=o}s.commentsObj[t]=""})}},addEmoji:function(t){this.commentsObj[this.currentPyq]+=t},handlerShowEmoji:function(t,e){this.currentPyq=e,this.emojiTop=t.pageY-100+"px",this.emojiLeft=t.pageX-200+"px",this.showEmojiCom=!0},handleDocmentScroll:Object(m.f)(function(){document.documentElement.scrollTop+document.documentElement.clientHeight+10>=document.documentElement.scrollHeight&&this.hasMore&&this.getFriendlyPyq()},500),handleDocmentClick:function(){for(var t in this.showEmojiCom=!1,this.showOperationListObj)this.showOperationListObj.hasOwnProperty(t)&&(this.showOperationListObj[t]=!1)},handleClickComment:function(t){var e="commentInp"+t;this.$refs[e][0].focus()},handleEmojiMouseenter:function(){var t=this;this.$refs.emojiCom&&this.$refs.emojiCom.addEventListener("mouseleave",function(){t.showEmojiCom=!1})},addChildComment:function(t,e,s){var i=JSON.parse(r()(this.pyqList)),n=this.pyqList.findIndex(function(e){return e._id===t}),a=this.pyqList[n].comments.findIndex(function(t){return t._id===e});i[n].comments[a].reply.push(s),this.pyqList=i},editPyq:function(t){this.currentEditPyqId=t,this.showEditPyq=!this.showEditPyq},closeEditPyq:function(){this.showEditPyq=!1},modifyPyqItem:function(t,e){var s=JSON.parse(r()(this.pyqList));s.forEach(function(s){s._id===t&&(s.content=e.content,s.pictures=e.pictures)}),this.pyqList=s}},components:{picturePreview:d.a,customEmoji:u.a,commentList:h,pyqEdit:q,EmptySvg:w.a,userCard:L},filters:{formatDateToZH:function(t){return Object(m.i)(t)}},watch:{pyqListData:{handler:function(t){var e=this;Array.isArray(t)&&(this.pyqList=t,t.forEach(function(t){e.$set(e.commentsObj,t._id,""),e.$set(e.showOperationListObj,t._id,!1)}))},deep:!0,immediate:!0},pyqList:{handler:function(t,e){t!==e&&this.$emit("modifyPyq",t)},deep:!0}},mounted:function(){this.getFriendlyPyq(),document.addEventListener("click",this.handleDocmentClick);var t=document.querySelector(".mzone-page");t&&(this.handlerElement=t,t.addEventListener("scroll",this.handleDocmentScroll))},beforeDestroy:function(){document.removeEventListener("click",this.handleDocmentClick),this.handlerElement&&this.handlerElement.removeEventListener("scroll",this.handleDocmentScroll)}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pyq-com"},[s("div",{staticClass:"pyq-com-wrapper"},[t._l(t.pyqList,function(e,i){return s("div",{key:e._id,staticClass:"item"},[s("div",{staticClass:"header"},[s("router-link",{attrs:{to:"/user/"+e.userId._id}},[s("el-avatar",{attrs:{size:60,src:t.IMG_URL+e.userId.photo},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"nickname"},[s("el-popover",{attrs:{placement:"top",width:"240",trigger:"hover"}},[s("user-card",{attrs:{"user-details":e.userId}}),t._v(" "),s("router-link",{staticClass:"nickname-link",attrs:{slot:"reference",to:"/user/"+e.userId._id},slot:"reference"},[t._v("\n                "+t._s(e.userId.nickname)+"\n              ")])],1)],1),t._v(" "),s("div",{staticClass:"time secondary-font"},[s("span",[t._v(t._s(t._f("formatDateToZH")(e.createDate)))])])]),t._v(" "),e.userId._id===t.userInfo._id?s("div",{staticClass:"pyq-item-operation"},[s("i",{staticClass:"el-icon-more",on:{click:function(s){return s.stopPropagation(),t.handleClickOperation(e._id)}}}),t._v(" "),t.showOperationListObj[e._id]?s("div",{staticClass:"operation-list"},[s("span",{staticClass:"operation-list-item operation-text",on:{click:function(s){return t.deleteItemPyq(e._id)}}},[s("i",{staticClass:"el-icon-delete-solid item-icon"}),t._v("删除\n            ")]),t._v(" "),s("span",{staticClass:"operation-list-item operation-text",on:{click:function(s){return t.editPyq(e._id)}}},[s("i",{staticClass:"el-icon-edit-outline item-icon"}),t._v("编辑\n            ")])]):t._e()]):t._e()],1),t._v(" "),s("div",{staticClass:"body"},[s("div",{staticClass:"content"},[s("span",[t._v(t._s(e.content))])]),t._v(" "),s("div",{staticClass:"pictures"},t._l(e.pictures,function(e){return s("span",{key:e.guid,staticClass:"picture-item",on:{click:function(e){return t.setCurrentImgUrl(t.imgSrc)}}},[s("img",{staticClass:"img",attrs:{src:e.url,alt:"",srcset:""}})])}),0)]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"read"},[s("span",{staticClass:"secondary-font"},[t._v("阅读："+t._s(e.readCount?e.readCount:0)+"次")])]),t._v(" "),s("div",{staticClass:"operation"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.commentTips,placement:"top"}},[s("i",{staticClass:"item iconfont icon-pinglun1 comment",attrs:{title:"评论"},on:{click:function(s){return t.handleClickComment(e._id)}}})]),t._v(" "),s("i",{staticClass:"item iconfont icon-dianzan like",style:(t.hasILike[e._id]||[]).includes(t.userInfo._id)?"color: #c35673":"",attrs:{title:"点赞"},on:{click:function(s){return t.doLike(e._id,i)}}}),t._v(" "),s("i",{staticClass:"item iconfont icon-zhuanfa farward",attrs:{title:"转发"}})],1)]),t._v(" "),s("div",{staticClass:"comment-like"},[e.likes.length>0?s("div",{staticClass:"like iconfont icon-dianzan"},t._l(e.likes,function(i,n){return s("span",{key:i._id},[s("el-popover",{attrs:{placement:"top",width:"240",trigger:"hover"}},[s("user-card",{attrs:{"user-details":i.authorId}}),t._v(" "),s("router-link",{staticClass:"like-user-link",attrs:{slot:"reference",to:"/user/"+i.authorId._id},slot:"reference"},[t._v("\n                "+t._s(i.authorId.nickname)+t._s(n+1===e.likes.length?"":"、")+"\n              ")])],1)],1)}),0):t._e(),t._v(" "),s("div",{staticClass:"comments"},[s("comment-list",{attrs:{pyqid:e._id,commentlist:e.comments},on:{addchild:t.addChildComment}})],1)]),t._v(" "),s("div",{staticClass:"comment-area"},[s("el-input",{ref:"commentInp"+e._id,refInFor:!0,attrs:{placeholder:"说点什么吧~"},model:{value:t.commentsObj[e._id],callback:function(s){t.$set(t.commentsObj,e._id,s)},expression:"commentsObj[item._id]"}}),t._v(" "),s("i",{staticClass:"iconfont icon-emoji",staticStyle:{margin:"0 10px","font-size":"20px",cursor:"pointer"},attrs:{title:"添加表情"},on:{click:function(s){return s.stopPropagation(),t.handlerShowEmoji(s,e._id)}}}),t._v(" "),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.doComment(e._id,i)}}},[t._v("评论")])],1)])}),t._v(" "),s("div",{staticClass:"loading"},[t.isLoading?s("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:t.isLoading}},[t._v("加载中")]):t._e()],1),t._v(" "),s("div",{staticStyle:{"margin-bottom":"10px"}},[t.hasMore||t.isLoading||!t.pyqList.length?t._e():s("el-alert",{attrs:{title:"没有更多了...",type:"info",center:"","show-icon":"",closable:!1}})],1),t._v(" "),s("transition",{attrs:{name:"roll"}},[t.showEmojiCom?s("div",{ref:"emojiCom",staticClass:"emoji-com",style:"left:"+t.emojiLeft+"; top: "+t.emojiTop,on:{mouseenter:t.handleEmojiMouseenter}},[s("custom-emoji",{attrs:{tabposition:"top"},on:{addemoji:t.addEmoji}})],1):t._e()])],2),t._v(" "),t.pyqList.length||t.isLoading?t._e():s("div",{staticClass:"no-data hor-ver-center"},[s("empty-svg",{attrs:{width:"200",height:"200"}})],1),t._v(" "),s("transition",[t.showPicturePreview?s("picture-preview",{attrs:{"show-oper":!1,"current-img":t.currentImgUrl},on:{setshow:t.setshowPicturePreview}}):t._e()],1),t._v(" "),t.showEditPyq?s("div",{staticClass:"pyq-edit-box"},[s("pyq-edit",{attrs:{pyqid:t.currentEditPyqId},on:{close:t.closeEditPyq,modify:t.modifyPyqItem}})],1):t._e()],1)},staticRenderFns:[]};var P=s("VU/8")(M,b,!1,function(t){s("wybV")},"data-v-68ca9c87",null);e.a=P.exports},vA1L:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Xxa5"),n=s.n(i),a=s("exGp"),r=s.n(a),o=s("Gu7T"),c=s.n(o),l={name:"UserDetails",data:function(){return{userDetails:{},IMG_URL:"https://zcraft.us.kg/api/",pyqList:[],hasMorePyq:!0,pyqPage:0,pyqPageSize:7}},computed:{device:function(){return this.$store.state.device.deviceType}},methods:{getUserPyq:function(){var t=this,e={userId:this.$route.params.id,page:this.pyqPage,pageSize:this.pyqPageSize};this.$http.getUserPyq(e).then(function(e){var s=e.data,i=s.data;2e3===s.status&&e.status<400&&(t.pyqList=[].concat(c()(t.pyqList),c()(i)),t.pyqLoading=!1,i.length<7?t.hasMorePyq=!1:(t.hasMorePyq=!0,t.pyqPage++))})}},components:{pyqListCmp:s("ui26").a},created:function(){var t=this;return r()(n.a.mark(function e(){var s,i,a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.$route.params.id,e.next=3,t.$http.getUserInfo(s);case 3:i=e.sent,a=i.data,r=a.data,2e3===a.status&&(r.avatar=t.IMG_URL+r.photo,t.userDetails=r);case 7:case"end":return e.stop()}},e,t)}))()}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-details-page"},[s("div",{staticClass:"wrapper"},[s("div",{class:"Mobile"===t.device?"details-top mobile":"details-top"},[s("div",{staticClass:"carousel"},[s("el-carousel",{attrs:{"indicator-position":"none",height:"315px"}},t._l(t.userDetails.cover,function(e,i){return s("el-carousel-item",{key:i},[s("img",{staticClass:"carousel-img",attrs:{src:t.IMG_URL+e,alt:""}})])}),1)],1),t._v(" "),s("div",{staticClass:"info"},[s("el-avatar",{staticClass:"avatar",attrs:{size:"large",src:t.userDetails.avatar},on:{error:function(){return!0}}},[s("img",{attrs:{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}})]),t._v(" "),s("span",{staticClass:"nickname"},[t._v(t._s(t.userDetails.nickname))])],1)]),t._v(" "),s("div",{staticClass:"details-body"},[s("el-tabs",{attrs:{type:"border-card"}},[s("el-tab-pane",[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-date"}),t._v(" TA的动态")]),t._v(" "),s("pyq-list-cmp",{attrs:{"pyq-list-data":t.pyqList,"has-more":t.hasMorePyq},on:{getPyq:t.getUserPyq}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:"消息中心"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-date"}),t._v(" TA的资料")])]),t._v(" "),s("el-tab-pane",{attrs:{label:"角色管理"}},[t._v("角色管理")]),t._v(" "),s("el-tab-pane",{attrs:{label:"定时任务补偿"}},[t._v("定时任务补偿")])],1)],1)])])},staticRenderFns:[]};var d=s("VU/8")(l,p,!1,function(t){s("kgwE")},null,null);e.default=d.exports},wybV:function(t,e){}});
//# sourceMappingURL=4.554184fa59edbab0837f.js.map