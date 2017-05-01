sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Main", {
		onInit: function() {

		},
		navtoDetail: function(viewName, context) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
			var sDestPageId = this.getView().byId(idDestPage).getId();
			var page = app.getDetailPage(sDestPageId);
			if (context)
				page.setBindingContext(context, "appdata");
			app.to(sDestPageId);
			var sDestPageId = page.getId();
			console.log(sDestPageId);
			if (context) page.setBindingContext(context);
            app.to(sDestPageId);
            console.log("navtodetail");
			var sDestPageId = page.getId();
			console.log(sDestPageId);
			if (context) page.setBindingContext(context);
            app.to(sDestPageId);
            console.log("navtodetail");
		},

		back: function(viewName) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
			var sDestPageId = this.getView().byId(idDestPage).getId();
			app.backToPage(sDestPageId);
            var sDestPageId = this.getView().byId(idDestPage).getId();
            app.backToPage(sDestPageId);
		}
	});
});