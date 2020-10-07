// |straight-up| Javascript Library


// ‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹
// Global Functions
// ‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹


function CSScriptInit() {
idxArray = new Array;
for(var i=0;i<CSInit.length;i++)
	idxArray[i] = i;
CSAction2(CSInit, idxArray);


}

function CSScriptExit() {
idxArray = new Array;
for(var i=0;i<CSExit.length;i++)
	idxArray[i] = i;
CSAction2(CSExit, idxArray);


}
CSStopExecution = false;
CSInit = new Array;

CSExit = new Array;

CSStopExecution = false;

function CSAction(array) { 
	return CSAction2(CSAct, array);
}
function CSAction2(fct, array) { 
	var result;
	for (var i=0;i<array.length;i++) {
		if(CSStopExecution) return false; 
		var actArray = fct[array[i]];
		var tempArray = new Array;
		for(var j=1;j<actArray.length;j++) {
			if((actArray[j] != null) && (typeof(actArray[j]) == "object") && (actArray[j].length == 2)) {
				if(actArray[j][0] == "VAR") {
					tempArray[j] = CSStateArray[actArray[j][1]];
				}
				else {
					if(actArray[j][0] == "ACT") {
						tempArray[j] = CSAction(new Array(new String(actArray[j][1])));
					}
				else
					tempArray[j] = actArray[j];
				}
			}
			else
				tempArray[j] = actArray[j];
		}			
		result = actArray[0](tempArray);
	}
	return result;
}
CSAct = new Object;

CSIm = new Object();
function CSIShow(n,i) {
	if (document.images) {
		if (CSIm[n]) {
			var img = (!IsIE()) ? CSFindElement(n,0) : document[n];
			if (img && typeof(CSIm[n][i].src) != "undefined") {img.src = CSIm[n][i].src;}
			if(i != 0)
				self.status = CSIm[n][3];
			else
				self.status = " ";
			return true;
		}
	}
	return false;
}
function CSILoad(action) {
	im = action[1];
	if (document.images) {
		CSIm[im] = new Object();
		for (var i=2;i<5;i++) {
			if (action[i] != '') { CSIm[im][i-2] = new Image(); CSIm[im][i-2].src = action[i]; }
			else CSIm[im][i-2] = 0;
		}
		CSIm[im][3] = action[5];
	}
}

function CSSetImageURL(action) {
	var img = null;
	if (document.images) {
		if (!IsIE()) img = CSFindElement(action[1],0);
		else img = document.images[action[1]];
		if (img) img.src = action[2];
	}
}
CSAg = window.navigator.userAgent; CSBVers = parseInt(CSAg.charAt(CSAg.indexOf("/")+1),10);
function IsIE() { return CSAg.indexOf("MSIE") > 0;}
function CSIEStyl(s) { return document.all.tags("div")[s].style; }
function CSNSStyl(s) { return CSFindElement(s,0); }
function CSFindElement(n,ly) { if (CSBVers < 4) return document[n];
	var curDoc = ly ? ly.document : document; var elem = curDoc[n];
	if (!elem) { for (var i=0;i<curDoc.layers.length;i++) {
		elem = CSFindElement(n,curDoc.layers[i]); if (elem) return elem; }}
	return elem;
}


// ‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹
// Action Functions
// ‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹


function CSFixFct() {
	var d = document; var w = window;
	if (d.cs.csFix.w != w.innerWidth || d.cs.csFix.h != w.innerHeight) {
		d.location = d.location; }
}
function CSNSFix(action) { 
	var d = document; var w = window;
	if ((navigator.appName == 'Netscape') && (parseInt(navigator.appVersion) == 4)) {
		if (typeof d.cs == 'undefined') { 
			d.cs = new Object;
			d.cs.csFix = new Object; 
		} else if (CSIsFrame (w) == true) CSFixFct();
		d.cs.csFix.w = w.innerWidth;
		d.cs.csFix.h = w.innerHeight; 
		window.onresize = CSFixFct;
	  }
}
function CSIsFrame (window) {
	var rootWindow = window.parent;
	if (rootWindow == 'undefined') return false;
	for (i = 0; i < rootWindow.frames.length; i++)
		if (window == rootWindow.frames[i]) return true;
	return false;
}
function CSOpenWindow(action) {
	var wf = "";	
	wf = wf + "width=" + action[3];
	wf = wf + ",height=" + action[4];
	wf = wf + ",resizable=" + (action[5] ? "yes" : "no");
	wf = wf + ",scrollbars=" + (action[6] ? "yes" : "no");
	wf = wf + ",menubar=" + (action[7] ? "yes" : "no");
	wf = wf + ",toolbar=" + (action[8] ? "yes" : "no");
	wf = wf + ",directories=" + (action[9] ? "yes" : "no");
	wf = wf + ",location=" + (action[10] ? "yes" : "no");
	wf = wf + ",status=" + (action[11] ? "yes" : "no");		
	window.open(action[1],action[2],wf);
}
// -->


// Michael Hoffmann
