sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Main", {
		to: function(pageId, context) {

			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + pageId;
            var sDestPageId = this.getView().byId(idDestPage).sId;
			var page= app.getDetailPage(sDestPageId);
/*
			var master = ("Master" === pageId);
			if (app.getPage(pageId, master) === null) {
				console.log(pageId)
				var page = sap.ui.view({
					id: "idViewDetail" + pageId,
					viewName: "nsNWPC_prjNWProdCatalog.view." + pageId,
					type: "XML"
				});
				page.getController().nav = this;
				app.addPage(page, master);
				jQuery.sap.log.info("app controller > loaded page: " + pageId);
			}
*/
            app.to(sDestPageId);
			if (context) {
				page.setBindingContext(context);
			}
            		
		},

		back: function(pageId) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + pageId;
            var sDestPageId = this.getView().byId(idDestPage).sId;
            app.backToPage(sDestPageId);
		}

	});
});