sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Detail", {
	onInit: function() {},
		handleNavButtonPress: function(evt) {
			this._oView = this.getView();
			var oXMLDetail = this._oView.getParent();
			var oSplitApp = oXMLDetail.getParent();
			var oMainView = oSplitApp.getParent();
			var mynav = oMainView.getController();
			mynav.back("Master");
		},
		onBeforeRendering: function() {

			//			this.byId("idPage").bindElement("Products");
			//			this.byId("MaintenanceStatus").bindElement("MaintenanceRec");

		}

	});
});