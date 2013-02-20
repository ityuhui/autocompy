var autocompy = {
	prefs: null,
	dusername: "abc",
	dpassword: "abc",
	
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
		eleName[0].value= this.dusername;
		var elePass = doc.getElementsByName('password');
		elePass[0].value= this.dpassword;
	},


}
