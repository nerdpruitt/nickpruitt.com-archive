// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.getElementById('gridsetoverlaywrap');
					
						if (!gw) gs.show();
						else gs.remove(gw);
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	remove: function (gw) {
	
		document.body.removeChild(gw);
		
		if(window.detachEvent) window.detachEvent('onresize', gs.width);
		else window.removeEventListener('resize', gs.width, false);
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var p = ['d','e','sx'],
			c = [5,8,6],
			w = [1000,990,990],
			b = document.getElementsByTagName('body')[0],
			gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="wrapper">',
		
			k = 0, breaks = '',
			
			styles = '<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block !important;width:100% !important;position:absolute !important;bottom:0 !important;left:0 !important;height:30px !important;border-top:1px solid #7D80DB !important;opacity:0.7 !important;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block !important;width:100% !important;text-align:center !important;font-size:12px !important;line-height:1 !important;padding-top:8px !important;font-family:Helvetica, Arial, sans-serif !important; margin: 0 !important;color:#7D80DB !important;}@media only screen and (max-width:999px) {#gridsetoverlaywrap [class*=e1],#gridsetoverlaywrap [class*=e2],#gridsetoverlaywrap [class*=e3],#gridsetoverlaywrap [class*=e4],#gridsetoverlaywrap [class*=e5],#gridsetoverlaywrap [class*=e6],#gridsetoverlaywrap [class*=e7],#gridsetoverlaywrap [class*=e8],#gridsetoverlaywrap .e-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=e1]{width:10.732323232323232%;margin-left:0%;}#gridsetoverlaywrap [class*=e2]{width:10.732323232323232%;margin-left:12.752525252323%;}#gridsetoverlaywrap [class*=e3]{width:10.732323232323232%;margin-left:25.505050504646%;}#gridsetoverlaywrap [class*=e4]{width:10.732323232323232%;margin-left:38.25757575697%;}#gridsetoverlaywrap [class*=e5]{width:10.732323232323232%;margin-left:51.010101009293%;}#gridsetoverlaywrap [class*=e6]{width:10.732323232323232%;margin-left:63.762626261616%;}#gridsetoverlaywrap [class*=e7]{width:10.732323232323232%;margin-left:76.515151513939%;}#gridsetoverlaywrap [class*=e8]{width:10.7323232325%;margin-left:89.267676766263%;}#gridsetoverlaywrap .e-hide{display:none !important;}#gridsetoverlaywrap [class*=sx1],#gridsetoverlaywrap [class*=sx2],#gridsetoverlaywrap [class*=sx3],#gridsetoverlaywrap [class*=sx4],#gridsetoverlaywrap [class*=sx5],#gridsetoverlaywrap [class*=sx6],#gridsetoverlaywrap .sx-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=sx1]{width:14.983164983164984%;margin-left:0%;}#gridsetoverlaywrap [class*=sx2]{width:14.983164983164984%;margin-left:17.003367003165%;}#gridsetoverlaywrap [class*=sx3]{width:14.983164983164984%;margin-left:34.00673400633%;}#gridsetoverlaywrap [class*=sx4]{width:14.983164983164984%;margin-left:51.010101009495%;}#gridsetoverlaywrap [class*=sx5]{width:14.983164983164984%;margin-left:68.01346801266%;}#gridsetoverlaywrap [class*=sx6]{width:14.983164983333333%;margin-left:85.016835015825%;}#gridsetoverlaywrap .sx-hide{display:none !important;}}@media only screen and (min-width:1000px) {#gridsetoverlaywrap [class*=d1],#gridsetoverlaywrap [class*=d2],#gridsetoverlaywrap [class*=d3],#gridsetoverlaywrap [class*=d4],#gridsetoverlaywrap [class*=d5],#gridsetoverlaywrap .d-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=d1]{width:10%;margin-left:0%;}#gridsetoverlaywrap [class*=d2]{width:56%;margin-left:10%;}#gridsetoverlaywrap [class*=d3]{width:18%;margin-left:66%;}#gridsetoverlaywrap [class*=d4]{width:6%;margin-left:84%;}#gridsetoverlaywrap [class*=d5]{width:10%;margin-left:90%;}#gridsetoverlaywrap .d-hide{display:none !important;}}</style>';
						
		while (p[k]) {
		
			var hides = '', 
				l = 0;
		
			if (w[k] != breaks && k == 0) gw += '<div>';
			else if (w[k] != breaks) gw += '</div><div>';
		
			while (p[l]) {
		
				if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
				l++;			
		
			}
		
			gw += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';
		
			var i = 1;
		
			while (i++ < c[k]) gw += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';
		
			gw += '</div>';
		
			if (k == w.length - 1) gw += '</div>';
		
			breaks = w[k];
		
			k++;
		
		}
		
		gw += '</div></div>';
		
		var newgw = document.createElement('div');
		
		newgw.id = 'gridsetoverlaywrap';
		
		newgw.innerHTML = gw + styles;
		
		b.appendChild(newgw);
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();