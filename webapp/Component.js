sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"nsNWPC_prjNWProdCatalog/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("nsNWPC_prjNWProdCatalog.Component", {

		metadata: {
			//declaration of the manifest usage
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during 
		 * the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});