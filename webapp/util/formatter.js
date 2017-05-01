sap.ui.define([], function() {
	"use strict";
	return {
		setYesorNo: function(value) {
			var oresourceBundle = this.getView().getModel("i18n").getResourceBundle();
			if (value) return oresourceBundle.getText("yes");
			else return oresourceBundle.getText("no");
		},
		showNA: function(value) {
			var oresourceBundle = this.getView().getModel("i18n").getResourceBundle();
			if (value === null) return oresourceBundle.getText("NA");
			else return value;
		},
		displaystate: function(value) {
			if (value !== null) return true;
			else return false;
		},
		setbase64: function(value) {
			if (value !== null) {
				var imgsrc = "data:image/bmp;base64," + value.substr(104);
				return imgsrc;
			} else
				return value;
		}
	};
});