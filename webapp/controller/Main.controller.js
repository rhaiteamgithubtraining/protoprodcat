sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Main", {
<<<<<<< HEAD
<<<<<<< Upstream, based on 9b6a0fdee99869fa5f36e96ace4c97f9f1c20a79
		onInit: function() {

		},
		navtoDetail: function(viewName, context) {
=======
		navtoDetail : function(viewName, context) {
>>>>>>> 8292bfe Sandbox Entries; not working as of 10:30PM 30Apr2017.
=======
		navtoDetail : function(viewName, context) {
>>>>>>> 8292bfe2ddbbe1125c1b3ebbff8717aa9887bf8d
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
<<<<<<< HEAD
<<<<<<< Upstream, based on 9b6a0fdee99869fa5f36e96ace4c97f9f1c20a79
			var sDestPageId = this.getView().byId(idDestPage).getId();
			var page = app.getDetailPage(sDestPageId);
			if (context)
				page.setBindingContext(context, "appdata");
			app.to(sDestPageId);
=======
=======
>>>>>>> 8292bfe2ddbbe1125c1b3ebbff8717aa9887bf8d
			var sDestPageId = page.getId();
			console.log(sDestPageId);
			if (context) page.setBindingContext(context);
            app.to(sDestPageId);
            console.log("navtodetail");
<<<<<<< HEAD
>>>>>>> 8292bfe Sandbox Entries; not working as of 10:30PM 30Apr2017.
=======
>>>>>>> 8292bfe2ddbbe1125c1b3ebbff8717aa9887bf8d
		},

		back: function(viewName) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
<<<<<<< HEAD
<<<<<<< Upstream, based on 9b6a0fdee99869fa5f36e96ace4c97f9f1c20a79
			var sDestPageId = this.getView().byId(idDestPage).getId();
			app.backToPage(sDestPageId);
=======
=======
>>>>>>> 8292bfe2ddbbe1125c1b3ebbff8717aa9887bf8d
            var sDestPageId = this.getView().byId(idDestPage).getId();
            app.backToPage(sDestPageId);
>>>>>>> 8292bfe Sandbox Entries; not working as of 10:30PM 30Apr2017.
		}
	});
});
