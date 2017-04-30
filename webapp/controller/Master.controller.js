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
/*
			oModel.read("/Products/$count", {
				async: false,
				success: jQuery.proxy(function(oData) {
					var oPage = this._oView.byId("idMasterPage");
					var sTitle = oResourceBundle.getText("mastertitle", [oData]);
					oPage.setTitle(sTitle);
				}, this),
				error: jQuery.proxy(function() {
					//logic for error handling
				}, this)
			});
*/
/*
		var sMsgToastText = oResourceBundle.getText("datafound");
		sMsgToastText = oResourceBundle.getText("errornodata");
		sap.m.MessageToast.show(sMsgToastText);
*/
		},
		handleobjlistitemPress: function(evt) {
			var context = evt.getSource().getBindingContext("appdata");
			//this._oComponent.nav.to("Detail", context);
		},

		handleidSearchFieldSearch: function(evt) {
			// create model filter
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("idList");
			var binding = list.getBinding("items");
			binding.filter(filters);
		},

		handleidlistselectionChange: function(evt) {
			var context = evt.getParameter("listItem").getBindingContext("appdata");
			this._oView = this.getView();
			var oXMLMaster = this._oView.getParent();
			var oSplitApp = oXMLMaster.getParent();
			var oMainView = oSplitApp.getParent();
			var mynav = oMainView.getController();
			mynav.to("Detail", context);
		},
		handleidlistitemPress:function(evt){
			//console.log("handleidlistitemPress");
		},
		handleobjlistitemdetailPress:function(evt){
			//console.log("handleobjlistitemdetailPress");
		}
		

	});
});