sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Main", {
<<<<<<< Upstream, based on c407b5757dc29645381f1b7e6c1adfaaf872846b
<<<<<<< Upstream, based on c407b5757dc29645381f1b7e6c1adfaaf872846b
=======
<<<<<<< Upstream, based on 9b6a0fdee99869fa5f36e96ace4c97f9f1c20a79
>>>>>>> 71de320 Sandbox Entries; not working as of 10:30PM 30Apr2017.
		onInit: function() {

		},
		navtoDetail: function(viewName, context) {
=======
		navtoDetail : function(viewName, context) {
>>>>>>> 8292bfe Sandbox Entries; not working as of 10:30PM 30Apr2017.
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
<<<<<<< Upstream, based on c407b5757dc29645381f1b7e6c1adfaaf872846b
<<<<<<< Upstream, based on c407b5757dc29645381f1b7e6c1adfaaf872846b
=======
<<<<<<< Upstream, based on 9b6a0fdee99869fa5f36e96ace4c97f9f1c20a79
>>>>>>> 71de320 Sandbox Entries; not working as of 10:30PM 30Apr2017.
			var sDestPageId = this.getView().byId(idDestPage).getId();
			var page = app.getDetailPage(sDestPageId);
			if (context)
				page.setBindingContext(context, "appdata");
			app.to(sDestPageId);
=======
			var sDestPageId = page.getId();
			console.log(sDestPageId);
			if (context) page.setBindingContext(context);
            app.to(sDestPageId);
            console.log("navtodetail");
>>>>>>> 8292bfe Sandbox Entries; not working as of 10:30PM 30Apr2017.
		},

		back: function(viewName) {
			var app = this.getView().byId("idsplitapp");
			var idDestPage = "idView" + viewName;
<<<<<<< Upstream, based on c407b5757dc29645381f1b7e6c1adfaaf872846b
<<<<<<< Upstream, based on c407b5757dc29645381f1b7e6c1adfaaf872846b
=======
<<<<<<< Upstream, based on 9b6a0fdee99869fa5f36e96ace4c97f9f1c20a79
>>>>>>> 71de320 Sandbox Entries; not working as of 10:30PM 30Apr2017.
			var sDestPageId = this.getView().byId(idDestPage).getId();
			app.backToPage(sDestPageId);
=======
            var sDestPageId = this.getView().byId(idDestPage).getId();
            app.backToPage(sDestPageId);
>>>>>>> 8292bfe Sandbox Entries; not working as of 10:30PM 30Apr2017.
		}
	});
});
