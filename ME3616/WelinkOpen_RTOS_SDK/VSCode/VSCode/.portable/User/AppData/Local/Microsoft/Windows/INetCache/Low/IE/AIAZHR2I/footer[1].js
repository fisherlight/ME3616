(function(){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.charset = 'gbk';
	script.src = 'http://img1.2345.com/2345ie/js/top_banner.js?'+ new Date().getTime();
	document.getElementsByTagName('head')[0].appendChild(script);
})();
	
(function(){
	var global = {};
	global.getUrlParams = function() {
		var paramsArray = new Array;
		paramsArray = document.scripts[document.scripts.length-1].src.split("\?");
		if(paramsArray.length == 2) {
			var count = paramsArray[1].split("=");
			if(count.length == 2)
			{
				var src_type_arr = count[1].split("&");
				var src_type = src_type_arr[0];
				if(src_type == '2345ie'){
					G.crateHtmlByNEWIEStyle();
				} else if(src_type == 'ie'){
					G.crateHtmlByIEStyle();
				} else if(src_type == 'chrome'){
					G.crateHtmlByChromeStyle();
				} else if(src_type == 'pic'){
					G.crateHtmlByPicStyle();
				} else if(src_type == 'haozip'){
					G.crateHtmlByHaozipStyle();
				} else if(src_type == 'pinyin'){
					G.crateHtmlByPinyinStyle();
				}
			}//
		}
	};
	global.crateHtmlByNEWIEStyle = function() {
		var html = '<div class="inner"><div class="links"><dl class="product"><dt>2345���²�Ʒ</dt><dd><ul class="product-list clearfix">';
        for(var p in G.paraElement){
        	html += '<li><a target="_blank" href="'+ G.paraElement[p]+'">'+ p+'</a></li>';
        }
        html += '</ul></dd></dl><dl><dt>��������</dt><dd><a href="http://ie.2345.cc/about.htm">����2345���������</a></dd><dd><a href="http://union.2345.com/?2345ie">2345����</a></dd><dd><a href="http://ie.2345.cc/declare.htm">ʹ��Э��</a></dd><dd><a href="http://ie.2345.cc/link.htm" target="_blank">��������</a></dd></dl>';
        html += '<dl class="lastItem" style="width:220px"><dt>��ϵ����</dt><dd><a href="http://bbs.2345.cn/forumdisplay.php?fid=2">2345�����������̳</a></dd>';
        html += '<dd>����QQ ��2035958454</dd>';
        html += '<dd>��Ȩ���� <span style="font-family:Arial">&copy;</span> 2345&nbsp;<a href="http://www.miitbeian.gov.cn" target="_blank" >��ICP��15036234��-1</a></dd>';
        html += '<dd><div style="width:300px; _width:210px;margin:0 auto; padding:5px 0;"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502005439" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="http://ie.2345.cc/img/beian.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;">���������� 31011502005439��</p></a></div></dd>'

    	var ieClass = G.getAllElementsByClassName("footer");
    	ieClass[ieClass.length-1].innerHTML = html;
		
	}
	
	global.crateHtmlByIEStyle = function() {
		var html = '<div class="inner"><div class="foot-product"><h3>2345���²�Ʒ</h3><ul class="product-list clearfix">';
        for(var p in G.paraElement){
        	html += '<li><a target="_blank" href="'+ G.paraElement[p]+'">'+ p+'</a></li>';
        }
		html += '</ul></div><div class="foot-us"><p><a href="about.htm">����2345���������</a>&nbsp;&nbsp;<a href="declare.htm">ʹ��Э��</a>&nbsp;&nbsp;<a target="_blank"  rel="nofollow" href="http://union.2345.com/?2345ie">2345����</a>&nbsp;&nbsp;<a rel="nofollow" href="mailto:ie@2345.com">��ϵ����</a></p><p>2345.com ��Ȩ���� Copyright&copy;2015 &nbsp;&nbsp;<a rel="nofollow" target="_blank" href="http://www.2345.com/icp.jpg"> ICP֤��B2-20120099 </a></p></div></div>';

		var ieClass = G.getAllElementsByClassName("footer");
    	ieClass[ieClass.length-1].innerHTML = html;
		
	}
	global.crateHtmlByChromeStyle = function() {
		var html = '<div class="inner"><div class="links"><dl class="product"><dt>2345���²�Ʒ</dt><dd><ul class="product-list clearfix">';
        for(var p in G.paraElement){
        	html += '<li><a target="_blank" href="'+ G.paraElement[p]+'">'+ p+'</a></li>';
        }
		html += '</ul></dd></dl><dl><dt>��������</dt><dd><a href="http://chrome.2345.com/dianhua/about.htm">����2345���������</a></dd><dd><a href="http://chrome.2345.com/dianhua/news.htm">ý�屨��</a></dd></dl>';
        html += '<dl class="lastItem"><dt>��ϵ����</dt><dd><a href="http://bbs.2345.cn/forumdisplay.php?fid=16">2345�����������̳</a></dd>';
        html += '<dd>�������QQ ��1840982642</dd></dl></div>';
        html += '<p class="copyright">��Ȩ���� &copy; 2345  &nbsp;&nbsp;&nbsp;&nbsp; <a href="http://chrome.2345.com/about/terms.htm" target="_blank">ʹ��Э��</a> &nbsp;&nbsp;&nbsp;&nbsp; <a  rel="nofollow" href="http://chrome.2345.com/link.htm" target="_blank">��������</a> &nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.miitbeian.gov.cn" target="_blank" rel="nofollow">��ICP��12023051��-1 </a></p></div>';

    	var coClass = G.getAllElementsByClassName("footer");
    	coClass[coClass.length-1].innerHTML = html;
	};
	global.crateHtmlByPicStyle = function() {
		var html = '<div class="index_footer" id="footer"><div class="inner"><div class="foot-product"><h3>2345���²�Ʒ</h3><ul class="product-list clearfix">';
        for(var p in G.paraElement){
        	html += '<li><a target="_blank" href="'+ G.paraElement[p]+'">'+ p+'</a></li>';
        }
        html += '</ul></div><div class="copyright" style="font-family:Arial"> ��Ȩ���� &copy; 2345 <a class="record" rel="��nofollow��" href="http://www.miitbeian.gov.cn/" target="_blank">��ICP��12023051��-1</a></div><p align="center"> <img src="2345pic/img/police.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="2345pic/img/zx110.png"></p><!-- #footer END --> </div></div>';

		document.getElementById("footer").innerHTML = html;
	}
	global.crateHtmlByHaozipStyle = function() {
		var html = '<div class="footer"><div class="txt"><div class="foot-product"><h3>2345���²�Ʒ</h3><ul class="product-list clearfix">';
        for(var p in G.paraElement){
        	html += '<li><a target="_blank" href="'+ G.paraElement[p]+'">'+ p+'</a></li>';
        }
		html += '</ul></div><div class="footerCon clearfix">';
        html += '<p class="left"><a href="http://haozip.2345.com/about.htm" rel="��nofollow��">��������</a>|<a href="http://haozip.2345.com/declare.htm" rel="��nofollow��">ʹ��Э��</a>|<a  rel="nofollow" href="http://haozip.2345.com/link.htm" rel="��nofollow��">��������</a>|<a href="http://union.2345.com" rel="��nofollow��">2345����</a>|<a href="mailto:haozip@gmail.com" rel="��nofollow��">������ϵ </a>|<a href="http://bbs.2345.cn/forumdisplay.php?fid=5" rel="��nofollow��">�������</a>|<a href="http://2345.net/join_us/" rel="��nofollow��">��ƸӢ��</a></p>';
		html += '<p class="right">2345.com ��Ȩ����&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.miitbeian.gov.cn" target="_blank" >��ICP��12023051��-1</a></p>';
        html += '</div></div><div class="pic"><div class="footerCon">';
        html += '<img src="http://haozip.2345.com/img/2013/bottomPic1.jpg" width="400" height="52"><img src="http://haozip.2345.com/img/2013/bottomPic2.jpg" width="150" height="52"><img src="http://haozip.2345.com/img/2013/bottomPic3.jpg" width="115" height="52"></div>';
		
		var hzClass = G.getAllElementsByClassName("footer");
    	hzClass[hzClass.length-1].innerHTML = html;
	}

	global.crateHtmlByPinyinStyle = function() {
		var html = '<div class="footer"><div class="inner"><div class="foot-product"><h3>2345���²�Ʒ</h3><ul class="product-list clearfix">';
        for(var p in G.paraElement){
        	html += '<li><a target="_blank" href="'+ G.paraElement[p]+'">'+ p+'</a></li>';
        }
		html += '</ul></div><div class="foot-us">';
        html += '<p><a target="_blank" href="about.htm">����2345�������뷨</a>&nbsp;&nbsp;<a target="_blank" href="declare.htm">��������</a>&nbsp;&nbsp;��ϵ���� : 2486255157��QQ��</a></p>';
      	html += '<p>��Ȩ���� <sapn style="font-family:Arial">&copy;</sapn> 2345&nbsp;<a href="http://www.miitbeian.gov.cn" target="_blank" >��ICP��15036234��-1</a>&nbsp<img src="/img/help/beian.png" width="20" height="20"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502005439" style="text-decoration:none;" title="ȫ����������" target="_blank"><i class="renzheng_5"></i>���������� 31011502005439��</a></p>';
    	html += '</div></div></div>';
    	var pyClass = G.getAllElementsByClassName("footer");
    	pyClass[pyClass.length-1].innerHTML = html;
	}

	global.getAllElementsByClassName = function(classes, pa) {
		if(!pa) pa= document;
    	var C= [], D;
    	if(pa.getElementsByClassName){
        	D= pa.getElementsByClassName(classes);
        	for(var i= 0, L= D.length; i<L; i++){
            	C[i]= D[i];
        	}
    	}
    	else {
        	classes= classes.split(/\s+/);
        	var who, cL= classes.length,
        	cn, D= pa.getElementsByTagName('*'), L= D.length;
        	for(var i= 0; i<cL; i++) {
            	classes[i]= RegExp('\\b'+classes[i]+'\\b');
        	}
        	classnameLoop:
       		while(L){
           		who= D[--L];
            	cn= who.className;
            	if(cn){
                	for(var i= 0; i<cL; i++){
                    	if(classes[i].test(cn)== false) {
                        	continue classnameLoop;
                    	}
                	}
                	C.push(who);
            	}
        	}
   		}
    	return C;
	}
	window["G"] = global;
}) ();
G.paraElement = {
				 "2345��ַ����" : "http://www.2345.com/",
				 "2345���������" : "http://ie.2345.cc/",
				 "2345������" : "http://tianqi.2345.com/tianqiapp/",
				 "2345���������" : "http://desk.2345.com/",
				 "2345�����ֻ������" : "http://app.2345.com/",
				 "2345��ѹ" : "http://haozip.2345.com/",
				 "2345��ַ����APP" : "http://m.2345.com/pages/down.html",
				 "2345��ȫ��ʿ" : "http://safe.2345.com/",
				 "2345��ͼ��" : "http://pic.2345.com/",
				 "2345��������" : "https://www.2345.org/",
				 "2345�����ȫ" : "http://www.duote.com/",
				 "2345�������뷨" : "http://pinyin.2345.com/",
				 "2345Ӱ�Ӵ�ȫ�����" : "http://dianying.2345.com/desk/",
				 "2345�����ֻ�����" : "http://zs.2345.com/",
				 "2345������" : "https://daikuan.2345.com/"
				};
G.getUrlParams();


