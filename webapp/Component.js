sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"nsNWPC_prjNWProdCatalog/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("nsNWPC_prjNWProdCatalog.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			/*			var usemock = true; 
						this.setModel(models.createDataModel(usemock));*/

			// initialize router and navigate to the first page
			//this.getRouter().initialize();

		},

		exit: function() {
			this._routeMatchedHandler.destroy();
		},

		// This method lets the app can decide if a navigation closes all open dialogs
		setRouterSetCloseDialogs: function(bCloseDialogs) {
			this._bRouterCloseDialogs = bCloseDialogs;
			if (this._routeMatchedHandler) {
				this._routeMatchedHandler.setCloseDialogs(bCloseDialogs);
			}
		},

		// creation and setup of the oData model
		_initODataModel: function(sServiceUrl) {
			//		jQuery.sap.require("ns_prdcatalog.util.messages");
			var oConfig = {
				metadataUrlParams: {},
				json: true,
				// loadMetadataAsync : true,
				defaultBindingMode: "TwoWay",
				defaultCountMode: "Inline",
				useBatch: true
			};
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, oConfig);
			//		oModel.attachRequestFailed(null, ns_prdcatalog.util.messages.showErrorMessage);
			this.setModel(oModel);
		}

	});
});