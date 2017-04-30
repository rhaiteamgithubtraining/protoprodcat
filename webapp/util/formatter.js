sap.ui.define([], function() {
	"use strict";
	return {
		setActiveorNot: function(value) {
			if (value) {
				return "Active";
			} else {
				return "Discontinued";
			}
		},
		showNA : function(value) {
			if (value === null) 
			{
				return "N/A";
			}
			else
			{
				return value;
			}
			 
		}
	};
});