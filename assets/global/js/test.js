(function() {
    MCommonHeaderBottom = function(b) {
        var g = "2.1";
        var h = "";
        var c = {
            useDefaultImp: true,
            css: ["//st.360buyimg.com/common/commonH_B/css/header.css?v=" + g],
            js: []
        };
        if (b) {
            if (typeof(b.useDefaultImp) == "boolean") {
                c.useDefaultImp = b.useDefaultImp
            }
            if (b.css) {
                c.css = b.css
            }
            if (b.js) {
                c.js = b.js
            }
        }
        var f = {
            _isIncludedCss: false,
            debug: false,
            getSid: function(j, k) {
                if (this._isNotBlank(k)) {
                    return j + "sid=" + k
                }
                return ""
            },
            getParam: function(l, j, k) {
                if (typeof(k) != "undefined") {
                    if (this._isNotBlank(l)) {
                        return "&" + j + "=" + k
                    } else {
                        return "?" + j + "=" + k
                    }
                } else {
                    return ""
                }
            },
            templeteOutput: function(l) {
                var j = l.templete;
                var n = l.param;
                var k = j;
                for (var m in n) {
                    k = k.replace(new RegExp("{" + m + "}", "g"), n[m])
                }
                return k
            },
            hasClass: function(k, j) {
                if (k) {
                    return k.className.match(new RegExp("(\\s|^)" + j + "(\\s|$)"))
                } else {
                    return false
                }
            },
            addClass: function(k, j) {
                if (k) {
                    if (!this.hasClass(k, j)) {
                        k.className += " " + j
                    }
                }
            },
            removeClass: function(l, j) {
                if (this.hasClass(l, j)) {
                    var k = new RegExp("(\\s|^)" + j + "(\\s|$)");
                    l.className = l.className.replace(k, " ")
                }
            },
            removeClassBatch: function(l, j) {
                for (var k in l) {
                    this.removeClass(this.getElementById(l[k]), j)
                }
            },
            includeCss: function() {
                if (!this._isIncludedCss) {
                    for (var j = 0; j < c.css.length; j++) {
                        this._includeCss(c.css[j])
                    }
                    this._isIncludedCss = true
                }
            },
            innerHtml: function(j) {
                var l = j.sid;
                var o = j.htmlStr;
                var m = j.prefix;
                var k = j.divId;
                var n = this.templeteOutput({
                    templete: o,
                    param: {
                        prefix: m,
                        sid: l
                    }
                });
                this.getElementById(k).innerHTML = n
            },
            getElementById: function(j) {
                return document.getElementById(j)
            },
            addEvent: function(l, k, j) {
                var m = this.getElementById(l);
                if (m) {
                    m.addEventListener(k, j, false)
                }
            },
            removeEvent: function(l, k, j) {
                var m = this.getElementById(l);
                if (m) {
                    m.removeEventListener(k, j, false)
                }
            },
            divShow: function(j) {
                if (j) {
                    j.style.display = ""
                }
            },
            divHide: function(j) {
                if (j) {
                    j.style.display = "none"
                }
            },
            loadJS: function(j, m) {
                var l = document.createElement("script");
                l.type = "text/javascript";
                l.src = j;
                l.onload = l.onreadystatechange = function() {
                    if (this.readyState && this.readyState == "loading") {
                        return
                    }
                    m()
                };
                l.onerror = function() {
                    k.removeChild(l);
                    m()
                };
                var k = document.getElementsByTagName("head")[0];
                k.appendChild(l)
            },
            runFunction: function(j) {
                if (j) {
                    j()
                }
            },
            loadDownloadAppPlugIn: function(j) {
                if (c.useDefaultImp) {
                    this.loadJS(c.js[1],
                    function() {
                        j()
                    })
                }
            },
            executeDefaultFunCtion: function(j, k) {
                if (j && c.useDefaultImp) {
                    if (k) {
                        j(k)
                    } else {
                        j()
                    }
                }
            },
            _includeCss: function(l) {
                var n = function(q, p) {
                    for (var o = 0; o < q.length; o++) {
                        if (q[o].href && q[o].href.indexOf(p) != -1) {
                            return true
                        }
                    }
                    return false
                };
                var j = document.getElementsByTagName("link");
                if (n(j, l)) {
                    return true
                }
                var m = document.createElement("link");
                m.setAttribute("rel", "stylesheet");
                m.setAttribute("type", "text/css");
                m.setAttribute("charset", "utf-8");
                m.setAttribute("href", l);
                var k = document.getElementsByTagName("head")[0];
                k.appendChild(m)
            },
            _isNotBlank: function(j) {
                if (j && j != "") {
                    return true
                }
                return false
            },
            printDeugInfo: function(j) {
                if (this.debug) {
                    console.log(j)
                }
            }
        };
        var i = {
            shortcutIds: [],
            args: {
                hrederId: "m_common_header",
                sid: "",
                isShowShortCut: false,
                selectedShortCut: ""
            },
            create: function(l) {
                this.args = l;
                if (!this._validate()) {
                    return false
                }
                var k = f.getSid("?", this.args.sid);
                var p = this.getTempleteHtml(this.args);
                var n = this.args.hrederId;
                var j = this.args.hrederId;
                this._initShortcutId(n);
                f.innerHtml({
                    divId: j,
                    sid: k,
                    htmlStr: p,
                    prefix: n
                });
                this._setCutrrentSelectedSyle(this.args.selectedShortCut);
                this._initShortCutShow(this.args.isShowShortCut, n);
                var m = this;
                f.addEvent(n + "_goback", "click",
                function() {
                    if (m.args && m.args.gobackUrl) {
                        window.location.href = m.args.gobackUrl
                    } else {
                        f.runFunction(m.args.onClickGoback);
                        f.executeDefaultFunCtion(pageBack)
                    }
                });
                f.addEvent(n + "_jdkey", "click",
                function() {
                    f.runFunction(m.args.onClickJdkey);
                    f.executeDefaultFunCtion(m.shortCutShowHide, n)
                });
                f.addEvent(n + "_shortcut_m_index", "click",
                function() {
                    f.runFunction(m.args.onClickIndex)
                });
                f.addEvent(n + "_shortcut_category_search", "click",
                function() {
                    f.runFunction(m.args.onClickSearch)
                });
                f.addEvent(n + "_shortcut_p_cart", "click",
                function() {
                    f.runFunction(m.args.onClickCart)
                });
                f.addEvent(n + "_shortcut_h_home", "click",
                function() {
                    f.runFunction(m.args.onClickHome)
                });
                try {
                    this.args.call && this.args.call()
                } catch(o) {}
            },
            getShortcutId: function(j) {
                return this.shortcutIds[j - 1]
            },
            getTempleteHtml: function(o) {
                var r = false;
                var k = navigator.userAgent;
                if (k.indexOf("baiduboxapp") > 0) {
                    if (k.indexOf("light") > 0) {
                        r = true
                    }
                }
                var u = '<header class="jd-header">    <div class="jd-header-bar">' + (r ? "": '        <div report-eventid="MCommonHead_Back" id="{prefix}_goback" class="jd-header-icon-back J_ping"><span></span></div>') + '        <div class="jd-header-title">{title}</div>';
                var t = (r ? "": '        <div report-eventid="MCommonHead_NavigateButton"  report-eventparam="" page_name="' + h + '" id="{prefix}_jdkey" class="jd-header-icon-shortcut J_ping"><span></span></div>');
                var s = "    </div>";
                var q = '    <ul id="{prefix}_shortcut" class="jd-header-shortcut" style="display: none">        <li id="{prefix}_shortcut_m_index">            <a class="J_ping" report-eventid="MCommonHead_home"  report-eventparam="" page_name="' + h + '" href="//m.jd.com/index.html{sid}">                <span class="shortcut-home"></span>                <strong>首页</strong>            </a>        </li>        <li class="J_ping" report-eventid="MCommonHead_CategorySearch"  report-eventparam="" page_name="' + h + '" id="{prefix}_shortcut_category_search">            <a href="//so.m.jd.com/category/all.html{sid}">                <span class="shortcut-categories"></span>                <strong>分类搜索</strong>            </a>        </li>        <li class="J_ping" report-eventid="MCommonHead_Cart"  report-eventparam="" page_name="' + h + '"  id="{prefix}_shortcut_p_cart">            <a href="//p.m.jd.com/cart/cart.action{sid}" id="html5_cart">                <span class="shortcut-cart"></span>                <strong>购物车</strong>            </a>        </li>        <li id="{prefix}_shortcut_h_home">            <a class="J_ping" report-eventid="MCommonHead_MYJD"  report-eventparam="" page_name="' + h + '"  href="//home.m.jd.com/myJd/home.action{sid}">                <span class="shortcut-my-account"></span>                <strong>我的京东</strong>            </a>        </li>    </ul></header>';
                var p = "";
                if (this.args.title) {
                    p = this.args.title
                }
                var j = "";
                var m = o.isShowShortCutButton;
                var l = navigator.userAgent.indexOf("jdmsxh");
                var n = navigator.userAgent.indexOf("jdmsxh2");
                if (l >= 0 && l != n) {
                    m = false
                }
                if (typeof(m) == "undefined" || m) {
                    j = u + t + s + q
                } else {
                    j = u + s
                }
                j = f.templeteOutput({
                    templete: j,
                    param: {
                        title: p
                    }
                });
                return j
            },
            shortCutShowHide: function(j) {
                var k = f.getElementById(j + "_shortcut");
                var l = k.style.display;
                if (l == "none") {
                    f.divShow(k)
                } else {
                    f.divHide(k)
                }
            },
            _initShortcutId: function(k) {
                var j = [k + "_shortcut_m_index", k + "_shortcut_category_search", k + "_shortcut_p_cart", k + "_shortcut_h_home"];
                this.shortcutIds = j
            },
            _initShortCutShow: function(k, j) {
                var l = f.getElementById(j + "_shortcut");
                if (k) {
                    f.divShow(l)
                } else {
                    f.divHide(l)
                }
            },
            _setCutrrentSelectedSyle: function(j) {
                f.removeClassBatch(this.shortcutIds, "current");
                if (f._isNotBlank(this.getShortcutId(j))) {
                    f.addClass(f.getElementById(this.getShortcutId(j)), "current")
                }
            },
            _validate: function() {
                var j = true;
                if (!this._isHasHeaderId()) {
                    j = false
                }
                return j
            },
            _isHasHeaderId: function() {
                var j = false;
                if (f.getElementById(this.args.hrederId)) {
                    j = true
                } else {
                    f.printDeugInfo("请正确拼写或添加通用头ID.")
                }
                return j
            }
        };
        var d = {
            args: {
                bottomId: "m_common_bottom",
                sid: "",
                isShowBottom: true,
                footerPlatforms: ""
            },
            create: function(l) {
                this.args = l;
                if (!this._validate()) {
                    return false
                }
                var k = f.getSid("?", this.args.sid);
                var p = this.getTempleteHtml(this.args);
                var n = this.args.bottomId;
                var j = this.args.bottomId;
                f.innerHtml({
                    divId: j,
                    htmlStr: p,
                    prefix: n
                });
                var m = this;
                this._addFooterPlatformEvent();
                try {
                    this.args.call && this.args.call()
                } catch(o) {}
            },
            getTempleteHtml: function(j) {
                var k = '<footer id="{prefix}_jd_footer" class="jd-footer">' + this._getLinksHtml(j) + this._getPlatformsHtml(j) + this._getCopyrightHtml(j) + "</footer>";
                return k
            },
            _getLinksHtml: function(n) {
                var k = "";
                if (n.pin && n.pin != "") {
                    k = '        <li class=""><a class="J_ping" report-eventid="MCommonHTail_Account"  report-eventparam="" page_name="' + h + '" rel="nofollow"  href="//home.m.jd.com/myJd/home.action{sid}">{pin}</a></li>        <li><a class="J_ping" report-eventid="MCommonHTail_Exit"  report-eventparam="" page_name="' + h + '" rel="nofollow" href="https://passport.m.jd.com/user/logout.action{sid}">退出</a></li>'
                } else {
                    k = '        <li class=""><a class="J_ping" report-eventid="MCommonHTail_Login"  report-eventparam="" page_name="' + h + '" rel="nofollow" href="https://passport.m.jd.com/user/login.action{sid}{returnurl}">登录</a></li>        <li><a class="J_ping" report-eventid="MCommonHTail_Register"  report-eventparam="" page_name="' + h + '" rel="nofollow"  href="https://passport.m.jd.com/register/mobileRegister.action{sid}">注册</a></li>'
                }
                var o = '	<div class="jd-1px-line-up"></div>    <ul class="jd-footer-links">' + k + '        <li><a class="J_ping" report-eventid="MCommonHTail_Feedback"  report-eventparam="" page_name="' + h + '" rel="nofollow" href="//m.jd.com/showvote.html{sid}">反馈</a></li>        <li><a class="J_ping" report-eventid="MCommonHTail_ToTop"  report-eventparam="" page_name="' + h + '" rel="nofollow" href="#top">回到顶部</a></li>    </ul>';
                var j = f.getSid("?", n.sid);
                var m = n.pin;
                var l = f.getParam(j, "returnurl", n.returnurl);
                o = f.templeteOutput({
                    templete: o,
                    param: {
                        sid: j,
                        pin: m,
                        returnurl: l
                    }
                });
                return o
            },
            _getPlatformsHtml: function(j) {
                var n = this.args.bottomId;
                var q = j.footerPlatforms;
                if (q.length <= 0) {
                    return ""
                }
                var p = "";
                var m = "";
                for (var l = 0; l < q.length; l++) {
                    m = q[l];
                    var k = "";
                    if (m.href) {
                        k = "href='" + m.href + "'"
                    }
                    if (m.name == "standard") {
                        p += '<li id="{prefix}_standard"  class="jd-footer-icon-standard"><a ' + k + ">标准版</a></li>"
                    } else {
                        if (m.name == "touchscreen") {
                            p += '<li id="{prefix}_touchscreen" class="jd-footer-icon-touchscreen current"><a ' + k + ' class="J_ping" report-eventid="MCommonHTail_TouchEdition"  report-eventparam="" page_name="' + h + '">触屏版</a></li>'
                        } else {
                            if (m.name == "pc") {
                                p += '<li id="{prefix}_pc" class="jd-footer-icon-pc"><a ' + k + ' class="J_ping" report-eventid="MCommonHTail_PCEdition"  report-eventparam="" page_name="' + h + '">电脑版</a></li>'
                            } else {
                                if (m.name == "apps") {
                                    p += '<li id="{prefix}_apps"  class="jd-footer-icon-apps"><a class="badge" "' + k + ' class="J_ping" report-eventid="MCommonHTail_ClientApp"  report-eventparam="" page_name="' + h + '">客户端</a></li>'
                                }
                            }
                        }
                    }
                }
                var o = '<div class="jd-1px-line-up"></div>    <ul class="jd-footer-platforms">' + p + "    </ul>";
                return o
            },
            _getCopyrightHtml: function(j) {
                var k = new Date();
                var l = '<div class="jd-1px-line-up"></div><div class="jd-footer-copyright">Copyright © 2004-' + k.getFullYear() + " 京东JD.com 版权所有 </div>";
                return l
            },
            _initDefaultFooterPlatforms: function() {
                this.args.footerPlatforms = this.platformEnum(this.args.sid).enum4
            },
            _addFooterPlatformEvent: function() {
                var k = this;
                var m = this.args.footerPlatforms;
                var l = this.args.bottomId;
                var j = function(o, n) {
                    var p = o + "_" + n;
                    if (f.getElementById(p)) {
                        f.addEvent(p, "click",
                        function() {
                            for (var q = 0; q < m.length; q++) {
                                if (m[q].name == n) {
                                    f.runFunction(m[q].onClickX);
                                    break
                                }
                            }
                        })
                    }
                };
                j(l, "standard");
                j(l, "pc");
                j(l, "touchscreen");
                j(l, "apps");
                downloadAppPlugInForBottom(l + "_apps", k.args.downloadAppPlugIn)
            },
            _initBottomShow: function(k, j) {
                var l = f.getElementById(j + "_jd_footer");
                if (k) {
                    f.divShow(l)
                } else {
                    f.divHide(l)
                }
            },
            _validate: function() {
                var j = true;
                if (!this._isHasBottomId()) {
                    j = false
                }
                return j
            },
            _isHasBottomId: function() {
                var j = false;
                if (f.getElementById(this.args.bottomId)) {
                    j = true
                } else {
                    f.printDeugInfo("请正确拼写或添加通用尾ID.")
                }
                return j
            }
        };
        var a = {
            args: {
                tipId: "m_common_tip",
                sid: "",
                isShowTip: true,
                isfloat: true,
                onClickTrynow: function() {}
            },
            create: function(l) {
                this.args = l;
                if (!this._validate()) {
                    return false
                }
                var m = window.localStorage ? true: false;
                var k = f.getSid("?", this.args.sid);
                var j = this.getTempleteHtml(l);
                var n = this.args.tipId;
                var s = this.args.tipId;
                var q = "_" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
                var r = document.getElementById(s);
                r.setAttribute("id", "content" + q);
                s = "content" + q;
                r = document.getElementById(s);
                n = s;
                this.args.tipId = s;
                f.innerHtml({
                    divId: s,
                    sid: k,
                    htmlStr: j,
                    prefix: n
                });
                this._setFloat(this.args.isfloat, n);
                var o = this;
                f.addEvent(n + "_x", "click",
                function() {
                    f.runFunction(o.args.onClickTipX)
                });
                f.addEvent(n + "_trynow", "click",
                function() {
                    f.runFunction(o.args.onClickTrynow)
                });
                if (!this.args.isUseCustomDownloadApp) {
                    downloadAppPlugInForFloat(n + "_trynow", n + "_x", n + "_div", o.args.downloadAppPlugIn)
                }
                try {
                    this.args.call && this.args.call()
                } catch(p) {}
            },
            getTempleteHtml: function(l) {
                var j = "打开京东APP购物";
                var o = "新人领188元红包";
                var m = "";
                if (l.copyWrite) {
                    cw = l.copyWrite;
                    if (l.copyWrite.up) {
                        j = l.copyWrite.up;
                        if (l.copyWrite.down) {
                            o = l.copyWrite.down
                        }
                    }
                }
                if (l.location) {
                    var k = l.location;
                    m = ' style = "' + localStyle + '"'
                }
                var n = '	<div  id="{prefix}_div" ' + m + ' class="download-pannel download-noBg">	    <div class="pannel-bg"><img src="//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png"></div>	    <div id="{prefix}_x" class="download-close"><img src="//st.360buyimg.com/common/commonH_B/images/2015/icon-close.png"></div>	    <div class="download-logo"><img src="//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"></div>	    <div class="download-txt">	            <span class="download-content">	                <em class="content-up">' + j + '</em>	                <em class="content-down">' + o + '</em>	            </span>	    </div>	    <div id="{prefix}_trynow" class="download-action">	        <span class="font-large">立即打开</span>	    </div>	</div>';
                return n
            },
            _setFloat: function(k, j) {
                var l = f.getElementById(j + "_div");
                if (l) {
                    if (k) {} else {}
                }
            },
            _showTip: function(k, j) {
                var l = f.getElementById(j + "_div");
                if (k) {
                    f.divShow(l)
                } else {
                    f.divHide(l)
                }
            },
            _validate: function() {
                var j = true;
                if (!this._isHasTipId()) {
                    j = false
                }
                return j
            },
            _isHasTipId: function() {
                var j = false;
                if (f.getElementById(this.args.tipId)) {
                    j = true
                } else {
                    f.printDeugInfo("请正确拼写或添加通用提示ID.")
                }
                return j
            }
        };
        var e = {
            args: {
                tipId: "m_common_tip",
                sid: "",
                isShowTip: true,
                isfloat: true,
                onClickTrynow: function() {}
            },
            create: function(k) {
                this.args = k;
                if (!this._validate()) {
                    return false
                }
                var j = this.args.tipId;
                var m = "_" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
                var l = document.getElementById(j);
                l.setAttribute("id", "content" + m);
                j = "content" + m;
                this.args.tipId = j;
                $.downloadAppLayerConfigData(this.args)
            },
            _validate: function() {
                var j = true;
                if (!this._isHasTipId()) {
                    j = false
                }
                return j
            },
            _isHasTipId: function() {
                var j = false;
                if (f.getElementById(this.args.tipId)) {
                    j = true
                } else {
                    f.printDeugInfo("请正确拼写或添加通用提示ID.")
                }
                return j
            }
        };
        f.includeCss();
        return {
            header: function(j) {
                i.create(j)
            },
            bottom: function(k) {
                var l = navigator.userAgent.indexOf("jdmsxh");
                var j = navigator.userAgent.indexOf("jdmsxh2");
                if (l >= 0 && l != j) {} else {
                    d.create(k)
                }
            },
            jdTip: function(j) {
                a.create(j)
            },
            jdTipNew: function(j) {
                e.create(j)
            },
            platformEnum: function(l, j) {
                var k = "";
                if (j) {
                    k = f.getSid("&", j)
                }
                return {
                    enum0: [],
                    enum1: [{
                        id: 4,
                        name: "apps",
                        href: "",
                        onClickX: function() {}
                    }],
                    enum2: [{
                        id: 2,
                        name: "touchscreen",
                        href: "",
                        onClickX: function() {}
                    },
                    {
                        id: 4,
                        name: "apps",
                        href: "",
                        onClickX: function() {}
                    }],
                    enum2_1: [{
                        id: 2,
                        name: "touchscreen",
                        href: "",
                        onClickX: function() {}
                    },
                    {
                        id: 3,
                        name: "pc",
                        href: "",
                        onClickX: function() {
                            skip(l)
                        }
                    }],
                    enum2_2: [{
                        id: 4,
                        name: "apps",
                        href: "",
                        onClickX: function() {}
                    },
                    {
                        id: 2,
                        name: "touchscreen",
                        href: "",
                        onClickX: function() {}
                    }],
                    enum3: [{
                        id: 4,
                        name: "apps",
                        href: "",
                        onClickX: function() {}
                    },
                    {
                        id: 2,
                        name: "touchscreen",
                        href: "",
                        onClickX: function() {}
                    },
                    {
                        id: 3,
                        name: "pc",
                        href: "",
                        onClickX: function() {
                            skip(l)
                        }
                    }],
                    enum3_1: [{
                        id: 3,
                        name: "pc",
                        href: "",
                        onClickX: function() {
                            skip(l)
                        }
                    },
                    {
                        id: 2,
                        name: "touchscreen",
                        href: "",
                        onClickX: function() {}
                    },
                    {
                        id: 4,
                        name: "apps",
                        href: "",
                        onClickX: function() {}
                    }],
                    enum3_2: [{
                        id: 2,
                        name: "touchscreen",
                        href: "",
                        onClickX: function() {}
                    },
                    {
                        id: 3,
                        name: "pc",
                        href: "",
                        onClickX: function() {
                            skip(l)
                        }
                    },
                    {
                        id: 4,
                        name: "apps",
                        href: "",
                        onClickX: function() {}
                    }]
                }
            },
            version: g
        }
    }
})();
setTimeout(function() {
    try {
        MPing.inputs.Click.attachEvent()
    } catch(a) {}
},
100);