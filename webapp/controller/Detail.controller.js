sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"nsNWPC_prjNWProdCatalog/util/formatter"
], function(Controller,formatter) {
	"use strict";
	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Detail", {
		formatter : formatter,
		handleNavButtonPress: function(evt) {
				this._oView = this.getView();
				var oXMLDetail = this._oView.getParent();
				var oSplitApp = oXMLDetail.getParent();
				var oMainView = oSplitApp.getParent();
				var mynav = oMainView.getController();
				mynav.back("Master");
			}
	});
});