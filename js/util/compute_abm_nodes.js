/*
pre-compute abm name/group maps
mtinfo.abm = [];

mtinfo.abm_nodenames[nodename_or_group] = abm
*/

mtinfo.abm_nodenames = {};
mtinfo.abm_labels = {};

function register_abm_label(abm, index){
	const key = (abm.label || "abm") + (index ? ("_" + index) : "");
	if (!mtinfo.abm_labels[key]){
		// create
		mtinfo.abm_labels[key] = abm;
		abm.key = key;

	} else {
		// try another index
		register_abm_label(abm, (index || 0) + 1);
	}
}

mtinfo.abm.forEach(function(abm){
	abm.nodenames.forEach(function(nodename){
		mtinfo.abm_nodenames[nodename] = abm;
	});

	register_abm_label(abm);
});
