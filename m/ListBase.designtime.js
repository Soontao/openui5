/*!
 * ${copyright}
 */

// Provides the Design Time Metadata for the sap.m.ListBase control
sap.ui.define([],
	function() {
		"use strict";

		return {
			aggregations: {
				items: {
					domRef: ":sap-domref > .sapMListUl:not(.sapMGrowingList)",
					actions: {
						move: "moveControls"
					}
				},
				swipeContent: {
					domRef: ":sap-domref > .sapMListSwp",
					ignore: true
				},
				headerToolbar: {
					domRef: ":sap-domref > .sapMListHdrTBar"
				},
				infoToolbar: {
					domRef: ":sap-domref > .sapMListInfoTBar"
				}
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			},
			name: {
				singular: "LIST_BASE_NAME",
				plural: "LIST_BASE_NAME_PLURAL"
			}
		};

	}, /* bExport= */ false);