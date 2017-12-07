if(data!="1.1.2 beta"){
	swal({
		title:"更新?",
		text:"立即更新\"1.1.2 beta\"版本。",
		icon:"warning",
		dangerMode:true,
		buttons:["取消","確定"]
	}).then((value) => {
		if(value){
			location = "htpps://build.phonegap.com/apps/2911901/install/xb6NoLS3mNwwbMWrMcdT";
		}
	});
}