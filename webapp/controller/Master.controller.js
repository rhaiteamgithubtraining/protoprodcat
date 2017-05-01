sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Master", {
		onInit: function() {
			this._oView = this.getView();
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
			var oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
			var oModel = this._oComponent.getModel("appdata");
			var sdataSource = this._oComponent.getManifestEntry("/sap.ui5/models/appdata/dataSource");
			if (sdataSource === "onlinedata") {
				oModel.read("/Products/$count", {
					async: false,
					success: jQuery.proxy(function(oData) {
						var oPage = this._oView.byId("idMasterPage");
						var sTitle = oResourceBundle.getText("onlinemastertitle", [oData]);
						oPage.setTitle(sTitle);
						if (oData === "0") {
							var oList = this._oView.byId("idList");
							var sNoDataTxt = oResourceBundle.getText("errornodata");
							oList.setNoDataText("Zero Data: " + sNoDataTxt);
						}
					}, this),
					error: jQuery.proxy(function(oError) {
						var oPage = this._oView.byId("idMasterPage");
						var sTitle = oResourceBundle.getText("onlinemastertitle", "0");
						oPage.setTitle(sTitle);
						var oList = this._oView.byId("idList");
						var sNoDataTxt = oResourceBundle.getText("errornodata");
						oList.setNoDataText(sNoDataTxt);
						
					}, this)
				});
			} else {
				var oPage = this._oView.byId("idMasterPage");
				var sTitle = oResourceBundle.getText("offlinemastertitle");
				oPage.setTitle(sTitle);
			}
		},
		messageme:function(){ sap.m.messageToast("error");},
		handleobjlistitemPress: function(evt) {
			this.displayDetail(evt, 2);
		},

		handleidSearchFieldSearch: function(evt) {
			// create model filter
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filters = new sap.ui.model.Filter([
						new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, query),
						new sap.ui.model.Filter("Supplier/CompanyName", sap.ui.model.FilterOperator.Contains, query),
						new sap.ui.model.Filter("Category/CategoryName", sap.ui.model.FilterOperator.Contains, query)
					],
					false);
			}

			// update list binding
			var list = this.getView().byId("idList");
			var binding = list.getBinding("items");
			binding.filter(filters);
		},

		handleidlistselectionChange: function(evt) {
			this.displayDetail(evt, 1);
		},
		displayDetail: function(evt, mode) {
			if (mode === 1)
				var context = evt.getParameter("listItem").getBindingContext("appdata");
			if (mode === 2)
				context = evt.getSource().getBindingContext("appdata");
			this._oView = this.getView();
			var oXMLMaster = this._oView.getParent();
			var oSplitApp = oXMLMaster.getParent();
			var oMainView = oSplitApp.getParent();
			var app = oMainView.getController();
			app.navtoDetail("Detail", context);
		}

	});
});