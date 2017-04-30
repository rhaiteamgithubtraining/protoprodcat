sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Main", {
		navtoDetail : function(viewName, context) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
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
		}

	});
});