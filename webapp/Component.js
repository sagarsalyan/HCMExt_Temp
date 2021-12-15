jQuery.sap.declare("hcm.fab.mytimesheet.HCMFAB_MY_TIMEExtension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.fab.mytimesheet",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCMFAB_MY_TIME"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.hcm.fab.mytimesheet.Component.extend("hcm.fab.mytimesheet.HCMFAB_MY_TIMEExtension.Component", {
	metadata: {
		manifest: "json"
	}
});