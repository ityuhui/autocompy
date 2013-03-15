var autocompy = {
	prefs: null,
	dusername: "",
	dpassword: "",
	
	getPreference: function(){
		this.prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.autocompy.");
		this.prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
		this.prefs.addObserver("", this, false);
		this.dusername = this.prefs.getCharPref("username");
		this.dpassword = this.prefs.getCharPref("password");
	},
	
	disPlay: function(){
		this.getPreference();
		var doc = window.getBrowser().selectedBrowser.contentDocument;
		
		var eleName = doc.getElementsByName('username');
		if(eleName[0]){
			eleName[0].value= this.dusername;
		}
		else{
			eleName = doc.getElementById('username');
			eleName.value= this.dusername;			
		}
		
		var elePass = doc.getElementsByName('password');
		if(elePass[0]){
			elePass[0].value= this.dpassword;
		}
		else{
			elePass = doc.getElementById('password');
			elePass.value= this.dpassword;
		}
	},

	accountSetting: function(){
		var features = "chrome,titlebar,toolbar,centerscreen,modal";
		window.openDialog("chrome://autocompy/content/options.xul", "Preferences", features);
	}

}
