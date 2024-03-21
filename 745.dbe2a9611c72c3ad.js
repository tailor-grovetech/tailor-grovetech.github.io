"use strict";(self.webpackChunkoculus_web=self.webpackChunkoculus_web||[]).push([[745],{8745:(R,m,a)=>{a.r(m),a.d(m,{LeadHomePageModule:()=>H,routes:()=>f});var d=a(6895),_=a(9697),h=a(6476),r=a(4719),u=a(1405),x=a(9496),t=a(4650);let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,u.e7,x.m,r.u5,r.UX]}),o})();var C=a(6907),l=a(7340),b=a(7489),y=a.n(b),P=a(5439),M=a.n(P),O=a(7224),Z=a(6716),w=a(1338),T=a(4766),A=a(7185),U=a(5628);const S=["leadSignupFormEl"],L=["email"],q=["captchaElem"];function k(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.closeModal())}),t.TgZ(1,"span",28),t._uU(2,"\xd7"),t.qZA()()}}function N(o,s){if(1&o&&(t.TgZ(0,"div",29)(1,"p"),t._uU(2),t.qZA()()),2&o){const n=t.oxw();let e;t.xp6(2),t.hij(" ",null!=(e=n.leadSignupForm.get("firstName"))&&null!=e.errors&&e.errors.required?"First Name is required":"First Name is not valid"," ")}}function F(o,s){if(1&o&&(t.TgZ(0,"div",29)(1,"p"),t._uU(2),t.qZA()()),2&o){const n=t.oxw();let e;t.xp6(2),t.hij(" ",null!=(e=n.leadSignupForm.get("lastName"))&&null!=e.errors&&e.errors.required?"Last Name is required":"Last Name is not valid"," ")}}function I(o,s){if(1&o&&(t.TgZ(0,"div",29)(1,"p"),t._uU(2),t.qZA()()),2&o){const n=t.oxw();let e;t.xp6(2),t.hij(" ",null!=(e=n.leadSignupForm.get("email"))&&null!=e.errors&&e.errors.required?"Please enter your company email":"Company Email is not valid"," ")}}function z(o,s){if(1&o&&(t.TgZ(0,"div",29)(1,"p"),t._uU(2),t.qZA()()),2&o){const n=t.oxw();let e;t.xp6(2),t.hij(" ",null!=(e=n.leadSignupForm.get("companyName"))&&null!=e.errors&&e.errors.required?"Company Name is required":"Company Name is not valid"," ")}}function j(o,s){1&o&&t._UZ(0,"span",30)}let E=(()=>{class o{constructor(n,e,i){this.fb=n,this.toastr=e,this.authenticationService=i,this.closedModal=new t.vpe,this.displayLoader=!1,this.type="",this.size="normal",this.lang="en",this.theme="light",this.typeConfig="image",this.isLoading=!1,this.email="",this.enable2fa=!1,this.openLeadSignup=!1,this.recaptchaKey=T.N.recaptchaKey,this.leadSignupForm=this.fb.group({firstName:new r.p4("",[r.kI.required]),lastName:new r.p4("",[r.kI.required]),email:new r.p4("",[r.kI.required,r.kI.pattern(Z.aN)]),companyName:new r.p4("",[r.kI.required]),recaptcha:new r.p4("")})}ngOnInit(){}ngAfterViewInit(){y().delay(()=>{this.emailId&&this.emailId.nativeElement.focus()},400)}handleSuccess(n){console.log(n)}setFormInputFocus(){for(const n of Object.keys(this.leadSignupForm.controls))if(this.leadSignupForm.controls[n].invalid){this.leadSignupFormEl.nativeElement.querySelector('[formcontrolname="'+n+'"]').focus();break}}getLoginTime(n){localStorage.setItem(w.xZ.oculusSession,M()(new Date(n)).unix().toString())}signup(){this.leadSignupForm.invalid?this.setFormInputFocus():this.leadSignupForm.get("recaptcha")?.value?(this.isLoading=!0,this.leadSignupRequest=this.leadSignupForm.value,this.authenticationService.getLeadSignUp(this.leadSignupRequest).pipe((0,O.P)()).subscribe(n=>{this.isLoading=!1,this.captchaElement?.reloadCaptcha(),this.leadSignupForm.get("recaptcha")?.setValue(null),this.toastr.success("Thank you for contacting us. We will get back to you soon.","Success"),this.closedModal.emit(!0),this.leadSignupForm.reset()},n=>{this.isLoading=!1,console.log(n.status),this.captchaElement?.reloadCaptcha()})):this.toastr.error("Please resolve the captcha and submit!","Captcha Error")}addGoogleAnalytics(){}closeModal(){document.body.classList.remove("custom-modal-open"),this.closedModal.emit(!0)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.QS),t.Y36(A._W),t.Y36(U.$h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lead-signup"]],viewQuery:function(n,e){if(1&n&&(t.Gf(S,5),t.Gf(L,5),t.Gf(q,5)),2&n){let i;t.iGM(i=t.CRH())&&(e.leadSignupFormEl=i.first),t.iGM(i=t.CRH())&&(e.emailId=i.first),t.iGM(i=t.CRH())&&(e.captchaElement=i.first)}},inputs:{type:"type"},outputs:{closedModal:"closedModal"},decls:43,vars:16,consts:[[1,"container","login-format"],[1,"row"],[1,"col-12","col-12-sm"],[1,"login-part"],[1,"col-12"],[1,"register-content"],[1,"col-12","modal-header-padding","d-inline-flex","justify-content-between"],["type","button","class","close","aria-label","Close",3,"click",4,"ngIf"],[1,"alreadyAccount","p-2"],[1,"lead-signup-form"],["title","Login form","id","login_form","name","loginForm","role","form",3,"formGroup"],["leadSignupFormEl",""],[1,"col-md-6","col-12"],[1,"form-inputRow"],["type","text","id","firstname","name","firstname","placeholder","First Name","formControlName","firstName","autofocus","",1,"register-input-control"],["class","error mt-1",4,"ngIf"],["type","text","id","lastname","name","lastname","placeholder","Last Name","formControlName","lastName",1,"register-input-control"],[1,"col-md-12","col-12"],["type","email","id","email","name","email","placeholder","Company Email","formControlName","email",1,"register-input-control"],["type","text","id","companyName","name","companyName","placeholder","Company Name","formControlName","companyName",1,"register-input-control"],[1,"col-md-12","col-12","mb-20"],["formControlName","recaptcha","ngDefaultControl","",3,"siteKey","size","hl","theme","type","success"],["captchaElem",""],[1,"alreadyAccount","p-4"],[1,"col-md-12","col-12","mt-2"],["id","submitButton","type","submit",1,"submit_btn",3,"disabled","click"],["class","spinner-border spinner-border-sm mr-2","role","status","aria-hidden","true",4,"ngIf"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error","mt-1"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","mr-2"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",1)(6,"div",4)(7,"div",5)(8,"div",1)(9,"div",6)(10,"h1"),t._uU(11,"Contact Us"),t.qZA(),t.YNc(12,k,3,0,"button",7),t.qZA()(),t._UZ(13,"div",8),t.TgZ(14,"div",9)(15,"form",10,11)(17,"div",1)(18,"div",12)(19,"div",13),t._UZ(20,"input",14),t.YNc(21,N,3,1,"div",15),t.qZA()(),t.TgZ(22,"div",12)(23,"div",13),t._UZ(24,"input",16),t.YNc(25,F,3,1,"div",15),t.qZA()(),t.TgZ(26,"div",17)(27,"div",13),t._UZ(28,"input",18),t.YNc(29,I,3,1,"div",15),t.qZA()(),t.TgZ(30,"div",17)(31,"div",13),t._UZ(32,"input",19),t.YNc(33,z,3,1,"div",15),t.qZA()(),t.TgZ(34,"div",20)(35,"div",13)(36,"ngx-recaptcha2",21,22),t.NdJ("success",function(c){return e.handleSuccess(c)}),t.qZA()()()()()(),t.TgZ(38,"div",23)(39,"div",24)(40,"button",25),t.NdJ("click",function(){return e.signup()}),t.YNc(41,j,1,0,"span",26),t._uU(42," Submit "),t.qZA()()()()()()()()()()()),2&n){let i,c,g,p;t.Q6J("@fade",void 0),t.xp6(12),t.Q6J("ngIf",!e.displayLoader),t.xp6(3),t.Q6J("formGroup",e.leadSignupForm),t.xp6(6),t.Q6J("ngIf",(null==(i=e.leadSignupForm.get("firstName"))?null:i.errors)&&(null==(i=e.leadSignupForm.get("firstName"))?null:i.touched)),t.xp6(4),t.Q6J("ngIf",(null==(c=e.leadSignupForm.get("lastName"))?null:c.errors)&&(null==(c=e.leadSignupForm.get("lastName"))?null:c.touched)),t.xp6(4),t.Q6J("ngIf",(null==(g=e.leadSignupForm.get("email"))?null:g.errors)&&(null==(g=e.leadSignupForm.get("email"))?null:g.touched)),t.xp6(4),t.Q6J("ngIf",(null==(p=e.leadSignupForm.get("companyName"))?null:p.errors)&&(null==(p=e.leadSignupForm.get("companyName"))?null:p.touched)),t.xp6(3),t.Q6J("siteKey",e.recaptchaKey)("size",e.size)("hl",e.lang)("theme",e.theme)("type",e.typeConfig),t.xp6(4),t.ekj("btn-disabled",e.isLoading),t.Q6J("disabled",e.isLoading),t.xp6(1),t.Q6J("ngIf",e.isLoading)}},dependencies:[d.O5,u.to,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".top-bar[_ngcontent-%COMP%]{text-align:center}.form-group[_ngcontent-%COMP%]{background:white;padding:30px 10px}.lable-color[_ngcontent-%COMP%]{padding:5px 0;color:#000}.title-section[_ngcontent-%COMP%]{margin-bottom:40px}.input-group[_ngcontent-%COMP%]{flex-wrap:nowrap}.title-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:26px;color:#fff;line-height:normal;text-align:center;text-transform:capitalize}.title-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:60px;border-style:solid;border-width:2px;border-image-source:linear-gradient(265deg,#0091a7,#ccff90);border-image-slice:1;display:block;margin:14px auto 0}.register-content[_ngcontent-%COMP%]{max-width:380px;margin:auto;color:#bbb!important;border-radius:5px;background-color:#fff;border:1px solid white;box-shadow:0 2px 4px #00000080}.lead-signup-form[_ngcontent-%COMP%]{padding:.5rem 2.625rem}.modal-header-padding[_ngcontent-%COMP%]{padding:.5rem 3.625rem!important}h1[_ngcontent-%COMP%]{color:#000!important;opacity:.78;font-size:30px}.close[_ngcontent-%COMP%]{color:#000!important;font-size:2rem;cursor:pointer;margin-right:.275rem}.close[_ngcontent-%COMP%]:hover{color:#000!important;opacity:.75}.form-inputRow[_ngcontent-%COMP%]{margin-bottom:20px}.register-input-control[_ngcontent-%COMP%]{font-family:roboto;font-size:14px;font-weight:500;line-height:normal;color:#002c60;width:100%;border-radius:3px;outline:none;background-color:#f8fafd;border:solid 1px #cbd3df;padding:16px 10px 15px 20px}.form-inputRow[_ngcontent-%COMP%]{margin-bottom:2rem}.form-inputRow[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;top:48px;position:absolute;font-size:12px;bottom:0}.submit_btn[_ngcontent-%COMP%]{font-family:roboto;font-size:14px;font-weight:500;line-height:45px;height:45px;color:#fff;width:100%;border-radius:3px;border:none;outline:none;cursor:pointer;box-shadow:0 2px 3px #75757580;transition:all .2s ease-in-out}.alreadyAccount[_ngcontent-%COMP%]{border-top:1px solid lightgray}.forgot_password_link[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#002c60;line-height:normal;text-align:center;display:block;padding:16px 0}a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;outline:0;transition:all .2s ease-in-out}a[_ngcontent-%COMP%]:hover, p[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:hover{color:#41b787}.black[_ngcontent-%COMP%], div[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#000}.alreadyAccount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#757575;line-height:normal;text-align:center}.alreadyAccount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;color:#002c60}.login-format[_ngcontent-%COMP%]{min-height:calc(80vh - 260px);margin-top:50px}"],data:{animation:[(0,l.X$)("fade",[(0,l.eR)("void => *",[(0,l.oB)({opacity:0}),(0,l.jt)(700,(0,l.oB)({opacity:1}))])])]}}),o})();function J(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"div",85)(1,"div",86)(2,"div",68)(3,"custom-modal",87),t.NdJ("onClose",function(i){t.CHM(n);const c=t.oxw();return t.KtG(c.closeEvent(i))}),t.ynx(4),t.TgZ(5,"app-lead-signup",88),t.NdJ("closedModal",function(i){t.CHM(n);const c=t.oxw();return t.KtG(c.closeLoginEvent(i))}),t.qZA(),t.BQk(),t.qZA()()()()}2&o&&(t.xp6(5),t.Q6J("type","lead-signup"))}const f=[{path:"",component:(()=>{class o{constructor(){this.click=!0,this.isAuthenticatedUser=!1,this.openLeadSignup=!1,this.onScroll=()=>{const n=document.getElementById("application");setTimeout(()=>{"application"===n?.id&&document.documentElement.scrollTop>=(n?.offsetTop-500||0)&&(n?.classList.add("visibility-visible"),n?.classList.add("animate__animated"),n?.classList.add("animate__fadeIn"))},200);const e=document.getElementById("features");setTimeout(()=>{"features"===e?.id&&document.documentElement.scrollTop>=(e?.offsetTop-500||0)&&(e?.classList.add("visibility-visible"),e?.classList.add("animate__animated"),e?.classList.add("animate__fadeIn"))},200)}}ngOnInit(){}ngAfterViewInit(){this.addAnimationClass()}addAnimationClass(){window.addEventListener("scroll",this.onScroll)}closeEvent(n){document.body.classList.remove("custom-modal-open")}closeLoginEvent(n){document.body.classList.remove("custom-modal-open"),this.openLeadSignup=!1}openDialog(){document.body.classList.add("custom-modal-open"),this.openLeadSignup=!0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lead-home-page"]],decls:200,vars:1,consts:[[1,"top-banner","top-section"],[1,"container"],[1,"navbar","navbar-expand-sm","header-lg"],[1,"d-flex"],["src","assets/images/logo.svg","alt","Oculus Proxies"],[1,"navbar-nav","animate__animated","animate__fadeInRight"],[1,"nav-item","sign-up",3,"click"],["id","signup",1,"nav-link"],["src","assets/images/server-settings.png","alt","server",1,"server"],["src","assets/images/encrypted-database.png","alt","Shield",1,"database"],["src","assets/images/network-security.png","alt","Network security",1,"security"],[1,""],[1,"banner-text"],[1,"animate__animated","animate__fadeInLeft","font-size"],[1,"check"],[1,"highlight","check"],[1,"category","animate__animated","animate__fadeInLeft","d-flex","justify-content-center"],["src","../../../../assets/images/check-green.svg","alt","Unmatched speed",1,"check-mark"],["src","../../../../assets/images/check-green.svg","alt","Affordable Pricing",1,"check-mark"],[1,"category-new","animate__animated","animate__fadeInLeft","d-flex"],[1,"align"],["src","../../../../assets/images/check-green.svg","alt","Target any city in 195 cities"],["src","../../../../assets/images/check-green.svg"],[1,"animate__animated","animate__fadeInRight"],["type","button",1,"btn","btn-theme","btn-lg",3,"click"],["id","choose-plan-container",1,"plan","choose-plan-features","residential","top-section"],[1,"pricing-gradient-bg","animate__animated","animate__fadeInLeft"],[1,"row","justify-content-center"],[1,"col-xs-4","px-4","py-2"],[1,"card"],[1,"card-img",2,"margin-top","20px"],["src","../../../../assets/images/new_home.svg",1,"card-space"],[1,"card-space"],[1,"card-space","card-para",2,"color","#a4a9bb"],[1,"card-isp-img"],["src","../../../../assets/images/new_isp.svg",1,"card-space"],[1,"card-space","isp-margin"],[1,"card-img"],["src","../../../../assets/images/new_data_center.svg",1,"card-space"],[1,"animate__animated","animate__fadeInRight","free-btn-card"],[1,"our-features","datacenter","feature-section"],["id","features",1,"container","visibility-hidden",2,"padding-bottom","40px"],[1,"section-title","visibility-visible","pb-50"],[1,"title-text","mb-3"],[1,"row","p-0","m-0","feature-wrap"],[1,"col-lg-4","col-md-12","col-sm-12","col-12"],[1,"icon-block"],[1,"img-wrap"],["src","assets/images/fastest-proxies.svg","alt","Fastest Proxies"],["src","../../../../assets/images/24-7-call.svg","alt","Flexible Auth"],["src","../../../../assets/images/Affordable-price.svg","alt","Reliable"],["src","assets/images/location.svg","alt","Location"],["src","../../../../assets/images/Highly-compatible.svg","alt","Discord Support"],["src","../../../../assets/images/User-friendly.svg","alt","Flexible Plans"],[1,"animate__animated","animate__fadeInRight","free-btn-feature"],[1,"datacenter","visibility-hidden","visibility-visible","animate__animated","animate__fadeIn",2,"padding-top","90px"],["id","application",1,"container","application-section","visibility-hidden"],[1,"container","pb-30"],[1,"section-title"],[1,"title-text"],[1,"m-b-10"],[1,"container","mobile-support-section","container-section","animate__animated","animate__fadeIn","feature-wrap"],[1,"col-lg-6","col-md-9"],[1,"flex"],[1,"col-lg-1","col-md-12","col-sm-12","col-xs-12","home_page_application_icon"],["src","../../../../assets/images/24-7.svg","alt","Location"],[1,"col-lg-11","col-md-12","col-sm-12","col-xs-12"],[1,"row","row-space"],[1,"col-12"],[1,"font-size-20"],[1,"col-12","gray_paragraph"],[1,"mb-3","p-text"],["src","../../../../assets/images/expert-assistance.svg","alt","Location"],["src","../../../../assets/images/Fast-Response.svg","alt","Location"],[1,"img-wrap","icon-block"],["src","../../../../assets/images/Proactive.svg","alt","Location"],[1,"col-lg-6","col-md-9","col-sm-12","col-xs-12","feature-wrap-support"],["src","../../../../assets/images/support-image.svg"],[1,"pb-10","p-0"],[1,"background"],[1,"text"],[2,"font-weight","500"],[1,"animate__animated","animate__fadeInRight","free-btn-banner"],["type","button",1,"btn-lg","border-0",3,"click"],["class","purchase-dialog",4,"ngIf"],[1,"purchase-dialog"],[1,"row"],["id","lead-signup","width","600px",3,"onClose"],[3,"type","closedModal"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"nav",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",3)(6,"ul",5)(7,"li",6),t.NdJ("click",function(){return e.openDialog()}),t.TgZ(8,"a",7),t._uU(9,"Sign Up"),t.qZA()()()()()(),t._UZ(10,"img",8)(11,"img",9)(12,"img",10),t.TgZ(13,"div",11)(14,"div",12)(15,"h1",13)(16,"span",14),t._uU(17,"Fastest, Most Reliable, Dedicated Proxies"),t.qZA(),t.TgZ(18,"span",15),t._uU(19,"Starting at $15/GB"),t.qZA()(),t.TgZ(20,"div",16)(21,"span"),t._UZ(22,"img",17),t._uU(23,"Unmatched Speed"),t.qZA(),t.TgZ(24,"span"),t._UZ(25,"img",18),t._uU(26,"Affordable Pricing"),t.qZA()(),t.TgZ(27,"div",19)(28,"span",20),t._UZ(29,"img",21),t._uU(30,"Target any city in 195 countries"),t.qZA(),t.TgZ(31,"span",20),t._UZ(32,"img",22),t._uU(33,"Superb 24/7 customer support"),t.qZA(),t.TgZ(34,"span",20),t._UZ(35,"img",22),t._uU(36,"Hassle-free integration"),t.qZA()(),t.TgZ(37,"div",23)(38,"button",24),t.NdJ("click",function(){return e.openDialog()}),t._uU(39," Get Started Now "),t.qZA()()()()(),t.TgZ(40,"section",25)(41,"div",26)(42,"div",27)(43,"div",28)(44,"div",29)(45,"div",30),t._UZ(46,"img",31),t.qZA(),t.TgZ(47,"h4",32),t._uU(48,"Residential Proxies"),t.qZA(),t.TgZ(49,"div",33),t._uU(50," Access the web with IPs of real residential devices. Ideal for ad verification, market research, and geo-specific browsing. "),t.qZA()()(),t.TgZ(51,"div",28)(52,"div",29)(53,"div",34),t._UZ(54,"img",35),t.qZA(),t.TgZ(55,"h4",36),t._uU(56,"ISP Proxies"),t.qZA(),t.TgZ(57,"div",33),t._uU(58," Benefit from our high-quality ISP proxies. Perfect for managing multiple accounts, social media automation, and SEO monitoring. "),t.qZA()()(),t.TgZ(59,"div",28)(60,"div",29)(61,"div",37),t._UZ(62,"img",38),t.qZA(),t.TgZ(63,"h4",32),t._uU(64,"Datacenter Proxies"),t.qZA(),t.TgZ(65,"div",33),t._uU(66," Leverage our lightning-fast data center proxies. Suited for web scraping, competitive data mining, and more. "),t.qZA()()()(),t.TgZ(67,"div",39)(68,"button",24),t.NdJ("click",function(){return e.openDialog()}),t._uU(69," Start Free Today "),t.qZA()()()(),t.TgZ(70,"section",40)(71,"div",41)(72,"div",42)(73,"div",43)(74,"h5"),t._uU(75,"Our Features"),t.qZA(),t.TgZ(76,"h2"),t._uU(77,"Why choose Oculus Proxies?"),t.qZA()()(),t.TgZ(78,"div",44)(79,"div",45)(80,"div",46)(81,"span",47),t._UZ(82,"img",48),t.qZA(),t.TgZ(83,"h3"),t._uU(84,"Unmatched Speed"),t.qZA(),t.TgZ(85,"p"),t._uU(86," Our proxies offer blazing-fast connection speed for all your browsing needs. "),t.qZA()()(),t.TgZ(87,"div",45)(88,"div",46)(89,"span",47),t._UZ(90,"img",49),t.qZA(),t.TgZ(91,"h3"),t._uU(92,"24/7 Customer Support"),t.qZA(),t.TgZ(93,"p"),t._uU(94," We\u2019re always here to help with any questions or issues you might have. "),t.qZA()()(),t.TgZ(95,"div",45)(96,"div",46)(97,"span",47),t._UZ(98,"img",50),t.qZA(),t.TgZ(99,"h3"),t._uU(100,"Affordable Pricing"),t.qZA(),t.TgZ(101,"p"),t._uU(102," We offer a range of packages to suit any budget without compromising on quality. "),t.qZA()()(),t.TgZ(103,"div",45)(104,"div",46)(105,"span",47),t._UZ(106,"img",51),t.qZA(),t.TgZ(107,"h3"),t._uU(108,"Global Coverage"),t.qZA(),t.TgZ(109,"p"),t._uU(110," We provide comprehensive geo-targeting options, allowing you to access localized content from virtually any country. "),t.qZA()()(),t.TgZ(111,"div",45)(112,"div",46)(113,"span",47),t._UZ(114,"img",52),t.qZA(),t.TgZ(115,"h3"),t._uU(116,"Highly Compatible"),t.qZA(),t.TgZ(117,"p"),t._uU(118," Our proxies seamlessly integrate with all major browsers, bots, software, and third-party applications. "),t.qZA()()(),t.TgZ(119,"div",45)(120,"div",46)(121,"span",47),t._UZ(122,"img",53),t.qZA(),t.TgZ(123,"h3"),t._uU(124,"User-Friendly Dashboard"),t.qZA(),t.TgZ(125,"p"),t._uU(126," Manage your proxies, monitor usage, and get real-time reports through our intuitive, easy-to-use dashboard. "),t.qZA()()()(),t.TgZ(127,"div",54)(128,"button",24),t.NdJ("click",function(){return e.openDialog()}),t._uU(129," Try Free Today "),t.qZA()()()(),t.TgZ(130,"section",55)(131,"div",56)(132,"div",57)(133,"div",58)(134,"div",59)(135,"h5",60),t._uU(136,"Our Support"),t.qZA(),t.TgZ(137,"h2"),t._uU(138,"Experience Unmatched Support with Oculus Proxies"),t.qZA()()()()(),t.TgZ(139,"div",61)(140,"div",62)(141,"div",63)(142,"div",64)(143,"span",47),t._UZ(144,"img",65),t.qZA()(),t.TgZ(145,"div",66)(146,"div",67)(147,"div",68)(148,"h4",69),t._uU(149,"24/7 Availability"),t.qZA()(),t.TgZ(150,"div",70)(151,"p",71),t._uU(152," Our dedicated support team is available round the clock, ready to resolve any issues and answer any queries you may have. "),t.qZA()()()()(),t.TgZ(153,"div",63)(154,"div",64)(155,"span",47),t._UZ(156,"img",72),t.qZA()(),t.TgZ(157,"div",66)(158,"div",67)(159,"div",68)(160,"h4",69),t._uU(161,"Expert Assistance"),t.qZA()(),t.TgZ(162,"div",70)(163,"p",71),t._uU(164," Whether you're dealing with technical issues or simply need advice on which proxy is best for your needs, our team is here to help. "),t.qZA()()()()(),t.TgZ(165,"div",63)(166,"div",64)(167,"span",47),t._UZ(168,"img",73),t.qZA()(),t.TgZ(169,"div",66)(170,"div",67)(171,"div",68)(172,"h4",69),t._uU(173,"Fast Response Time"),t.qZA()(),t.TgZ(174,"div",70)(175,"p",71),t._uU(176," We respond to all queries under 10 minutes, so you can get back to what's important. "),t.qZA()()()()(),t.TgZ(177,"div",63)(178,"div",64)(179,"span",74),t._UZ(180,"img",75),t.qZA()(),t.TgZ(181,"div",66)(182,"div",67)(183,"div",68)(184,"h4",69),t._uU(185,"Proactive Problem-Solving"),t.qZA()(),t.TgZ(186,"div",70)(187,"p",71),t._uU(188," Our support team take pride in anticipating our customers' needs and providing solutions before they turn into issues. "),t.qZA()()()()()(),t.TgZ(189,"div",76),t._UZ(190,"img",77),t.qZA()()(),t.TgZ(191,"section",78)(192,"div",79)(193,"div",80)(194,"p",81),t._uU(195,"Best Proxies. Simple Integration. Affordable prices."),t.qZA()(),t.TgZ(196,"div",82)(197,"button",83),t.NdJ("click",function(){return e.openDialog()}),t._uU(198," Try Free Today "),t.qZA()()()(),t.YNc(199,J,6,1,"div",84)),2&n&&(t.xp6(199),t.Q6J("ngIf",e.openLeadSignup))},dependencies:[d.O5,C.R,E],styles:['.header-lg[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:14px 20px 10px}.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:66px 0 25px}.banner-text[_ngcontent-%COMP%]{max-width:1180px}.top-banner[_ngcontent-%COMP%]   .database[_ngcontent-%COMP%]{top:140px;right:0%}.top-section[_ngcontent-%COMP%]{padding:30px 0 90px}.btn-lg[_ngcontent-%COMP%]{font-weight:600!important}.banner-text[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{margin-top:-15px!important;background:-webkit-linear-gradient(#60f9bf,#0099a5);-webkit-background-clip:text;-webkit-text-fill-color:transparent}custom-modal[_ngcontent-%COMP%]   .custom-modal[_ngcontent-%COMP%]{position:fixed;margin:auto;top:.735rem;right:0;bottom:0;left:0;width:auto;justify-content:center;display:flex;align-items:flex-start}custom-modal[_ngcontent-%COMP%]   .custom-modal[_ngcontent-%COMP%]   .custom-modal-body[_ngcontent-%COMP%]{background:transparent;background-color:transparent;overflow:hidden;width:100%}custom-modal[_ngcontent-%COMP%]   .custom-modal[_ngcontent-%COMP%]   .custom-modal-body.theme-dark[_ngcontent-%COMP%]{background-color:#2e3342!important;color:#fff}custom-modal[_ngcontent-%COMP%]   .custom-modal[_ngcontent-%COMP%]   .custom-modal-body.theme-dark[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff}custom-modal[_ngcontent-%COMP%]   .custom-modal-background[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#000;opacity:.75;z-index:900}.column[_ngcontent-%COMP%]{margin-top:0!important;float:left;width:25%;padding:0 10px;display:flex;justify-content:center}.row[_ngcontent-%COMP%]{margin:0 -5px;justify-content:center}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.column[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:20px}}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;padding:16px;display:flex;align-items:center;text-align:center;justify-content:center;background-color:#151824;border:1px solid #2b2f42;width:359px;height:349px;border-radius:12px}.card-img[_ngcontent-%COMP%]{padding-bottom:115px;height:55px;width:55px;height:28%;width:80%}.card-isp-img[_ngcontent-%COMP%]{height:92px;width:92px;margin-top:10px}.card-isp-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:135%;width:100%}h4[_ngcontent-%COMP%]{font-size:25px;padding:5px}.isp-margin[_ngcontent-%COMP%]{margin-top:30px;padding-top:10px}.card-space[_ngcontent-%COMP%]{margin-bottom:20px;font-weight:600}.card-para[_ngcontent-%COMP%]{font-size:16px}.free-btn-card[_ngcontent-%COMP%]{margin-top:70px;display:flex;justify-content:center}.feature-section[_ngcontent-%COMP%]{padding:100px 0 50px!important}.free-btn[_ngcontent-%COMP%]{display:flex;justify-content:center}.feature-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:0 16px}.p-t-b-90[_ngcontent-%COMP%]{padding:90px 0}.section-title[_ngcontent-%COMP%]{margin:0 0 16px;display:flex;justify-content:space-between;align-items:flex-end}.section-title[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700;font-size:24px;line-height:29px;color:#62fcc1;margin:0 0 20px}.home_page_application_img_carousel[_ngcontent-%COMP%]{margin-right:20.5%;width:60%;height:60%;float:right}.icon-block[_ngcontent-%COMP%]{margin:0 0 70px}.icon-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .icon-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600}@media (min-width: 1200px){.container[_ngcontent-%COMP%]{max-width:1180px}}@media screen and (max-width: 1024px){.feature-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}}.height-100-pr[_ngcontent-%COMP%]{height:100%!important}.height-100-pr[_ngcontent-%COMP%]   .home_page_application_img_carousel[_ngcontent-%COMP%]{width:100%;height:100%;float:right}.feature-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:row}.banner-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{margin:8px 0!important}.banner-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-right:0px!important}@media only screen and (min-width: 995px){.banner-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;align-items:center!important}}.container-section[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.home_page_application_icon[_ngcontent-%COMP%]{padding-left:initial}.home_page_application_icon[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%]{background:#202435;border-radius:11px;height:65px;width:65px;display:flex;align-items:center;justify-content:center;margin:0 0 8px}.home_page_application_icon[_ngcontent-%COMP%]   .font-size-20[_ngcontent-%COMP%]{font-size:20px!important}.home_page_application_icon[_ngcontent-%COMP%]   .gray_paragraph[_ngcontent-%COMP%]{color:#a4a9bb;font-weight:600;font-size:14px;line-height:22px;margin:0}@media screen and (max-width: 1024px){.feature-wrap-support[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:100%}}.gray_paragraph[_ngcontent-%COMP%]{color:#a4a9bb;font-weight:600;font-size:14px;line-height:22px;margin:0}.p-text[_ngcontent-%COMP%]{font-size:1rem}.row-space[_ngcontent-%COMP%]{padding-left:25px}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px}.download-section[_ngcontent-%COMP%]{padding-top:6rem}.visibility-visible[_ngcontent-%COMP%]{visibility:visible!important}.pb-30[_ngcontent-%COMP%]{padding-bottom:30px}.pb-50[_ngcontent-%COMP%]{padding-bottom:50px}@media only screen and (max-width: 995px){.application-section[_ngcontent-%COMP%]{padding:0!important}.title-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}.mobile-support-section[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{margin:0!important;font-weight:400;padding:8px 0!important}.flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.feature-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0!important;align-items:flex-start}.row-space[_ngcontent-%COMP%]{padding-left:0;margin-bottom:5px}}@media (min-width: 990px) and (max-width: 1440px){.security[_ngcontent-%COMP%]{bottom:10%!important}}@media screen and (max-width: 768px){.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:28px!important}}.background[_ngcontent-%COMP%]{background:linear-gradient(90deg,#60f9bf 0%,#0099a5 100%);width:100%;height:400px;display:flex;flex-direction:column;justify-content:center;align-items:center}.text[_ngcontent-%COMP%]{color:#fff;font-size:40px;text-align:center}.free-btn-feature[_ngcontent-%COMP%]{display:flex;justify-content:center}.free-btn-banner[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:30px}.our-features[_ngcontent-%COMP%]{background:#151824!important}.choose-plan-features[_ngcontent-%COMP%]{background:#0d0f17!important}.category-new[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]{justify-content:center!important}.category-new[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:15px!important}.category-new[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:22px!important}.category-new[_ngcontent-%COMP%]{gap:50px}.font-size[_ngcontent-%COMP%]{font-size:44px;padding:5px}.d-flex-new[_ngcontent-%COMP%]{display:flex;justify-content:space-between}@media (max-width: 995px){.font-size[_ngcontent-%COMP%]{font-size:30px}.category-new[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]{display:block!important;text-align:start!important}.category-new[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block!important;text-align:center!important;font-size:18px!important}.text-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.banner-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{justify-content:start!important;width:100%;margin:0 auto}.d-flex-new[_ngcontent-%COMP%]{display:flex;justify-content:start!important;width:80%;margin:0 auto 26px}}@media only screen and (max-width: 992px){.navbar[_ngcontent-%COMP%]{gap:1rem}.banner-text[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{margin-top:1rem!important}}']}),o})()}];let H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,_.Bz.forChild(f),h.d,v]}),o})()}}]);