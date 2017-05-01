sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {
		/** Device model details help
		 * setup certain xml tags accordingly;
		 * behavior of screen can be customized also
		 * accordingly
		 */
		createDeviceModel: function() {
			var oDevModel = new JSONModel(Device);
			oDevModel.setData({
				isPhone: sap.ui.Device.system.phone,
				listMode: (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
				listItemType: (sap.ui.Device.system.phone) ? "Active" : "Inactive"
			}, true);
			oDevModel.setDefaultBindingMode("OneWay");
			return oDevModel;
		}
	};
});