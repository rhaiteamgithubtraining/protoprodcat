sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oDevModel = new JSONModel(Device);
			oDevModel.setDefaultBindingMode("OneWay");
			return oDevModel;
		}
		
/*	    createDataModel: function(usemock) {
	    	if (usemock === true) {
				var oMockModel = new sap.ui.model.json.JSONModel("model/mock01.json");
		        return oMockModel;
	    	}
	    }*/
	};
});