sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oDevModel = new JSONModel(Device);
			console.log(oDevModel);
/*
			oDevModel
					var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : sap.ui.Device.system.phone,
			listMode : (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
			listItemType : (sap.ui.Device.system.phone) ? "Active" : "Inactive"
*/
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