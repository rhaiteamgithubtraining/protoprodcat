sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Main", {
		navtoDetail : function(viewName, context) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
            var sDestPageId = this.getView().byId(idDestPage).getId();
			console.log(sDestPageId);
			var page = app.getDetailPage(sDestPageId);
			if (context) page.setBindingContext(context);
            app.to(sDestPageId);
		},

		back: function(viewName) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
            var sDestPageId = this.getView().byId(idDestPage).getId();
            app.backToPage(sDestPageId);
		}

	});
});