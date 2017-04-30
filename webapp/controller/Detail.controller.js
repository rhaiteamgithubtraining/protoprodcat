sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"nsNWPC_prjNWProdCatalog/util/formatter"
], function(Controller,formatter) {
	"use strict";
	return Controller.extend("nsNWPC_prjNWProdCatalog.controller.Detail", {
<<<<<<< Upstream, based on c407b5757dc29645381f1b7e6c1adfaaf872846b
		formatter : formatter,
		handleNavButtonPress: function(evt) {
				this._oView = this.getView();
				var oXMLDetail = this._oView.getParent();
				var oSplitApp = oXMLDetail.getParent();
				var oMainView = oSplitApp.getParent();
				var mynav = oMainView.getController();
				mynav.back("Master");
			}
=======
		onInit: function() {
		},
		onBeforeRendering: function() {
			var mypage = this.getView().byId("idPage");
			var bindingContext = mypage.getBindingContext();
			console.log(bindingContext);
		},
		handleNavButtonPress: function(evt) {
				this._oView = this.getView();
				var oXMLDetail = this._oView.getParent();
				var oSplitApp = oXMLDetail.getParent();
				var oMainView = oSplitApp.getParent();
				var mynav = oMainView.getController();
				mynav.back("Master");
			}
			//		onBeforeRendering: function() {

		//			this.byId("idPage").bindElement("Products");
		//			this.byId("MaintenanceStatus").bindElement("MaintenanceRec");

		//		}

>>>>>>> 8292bfe Sandbox Entries; not working as of 10:30PM 30Apr2017.
	});
});
