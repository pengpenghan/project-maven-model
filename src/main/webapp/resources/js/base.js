/**
 * Created by Administrator on 2017/1/12.
 */
$(document).ready(function(){
    /*高度匹配*/
    var show_height = $(document).height();
    $("nav").height(show_height);
    /*$("nav").height(show_height-show_height*0.1);*/
 
    /*左侧导航*/
    $(".nav1").hover(function(){
        $(this).find("img").attr("src","/resources/images/1.1.png")
    },function(){
        $(this).find("img").attr("src","/resources/images/1.png");
        if($(".nav1").is(".on")){
            $(this).find("img").attr("src","/resources/images/1.1.png")
        }
    });
    $(".nav2").hover(function(){
        $(this).find("img").attr("src","/resources/images/2.2.png")
    },function(){
        $(this).find("img").attr("src","/resources/images/2.png");
        if($(".nav2").is(".on")){
            $(this).find("img").attr("src","/resources/images/2.2.png")
        }
    });
    $(".nav3").hover(function(){
        $(this).find("img").attr("src","/resources/images/3.3.png")
    },function(){
        $(this).find("img").attr("src","/resources/images/3.png");
        if($(".nav3").is(".on")){
            $(this).find("img").attr("src","/resources/images/3.3.png")
        }
    });

    /*main导航*/
    /*$(".navgition li").on("click",function(){
        $(this).addClass("on").siblings("").removeClass("on");
        if($(this).find("ul").is(".nav_select ")){
        	$(this).removeClass("on")
        }
    })*/
    $(".navgition .fold").on("click",function(){
    	$(this).parent().siblings('.nav_select').removeClass("none");
    	event.stopPropagation();
    	$(document).click(function(){
    		$(".navgition .nav_select").addClass("none");
    	})
    })
    
    /*yk-icon*/
    $(".yk_icon img").hover(function(){
    	$(this).attr('src','/resources/images/table2.png')
    },function(){
    	$(this).attr('src','/resources/images/table1.png')
    })
    
});

function openFileIIs(filename){          
    try{   
        var obj=new ActiveXObject("wscript.shell");   
        if(obj){   
            obj.Run("\""+filename+"\"", 1, false );  
            obj=null;   
        }   
    }catch(e){   
        alert("请确定是否存在该盘符或文件");   
    }   
      
} 
 
function logout(){
	$.ajax( {
        url: '/logout',
        type: "POST", 
        data:{},
        success: function(data){
    		if (data.success) {
				art.dialog({
					icon : 'succeed',
					time : 1,
					content : '已成功退出！'
				});
				setTimeout(function(){
				  window.location.reload();
	         	},1000); 
			}else{
				art.dialog({
					icon : 'error',
					time : 1,
					content : data.msg
				});
			}
        }
	});
 	
}

function login(){
	$.ajax( {
        url: '/login',
        type: "POST", 
        data:{},
        success: function(data){
            art.dialog({ title: '',
            	content:data,
            	id:"checkedFile",
            	lock:true,
            	height:400,
            	background:'#000',
            	padding:''
            })
            }
	});
 	
}


function yxConfirm(id,status){
	var msg = "确认这条数据吗？";
	if(status == 2){
		msg = "完全匹配这条数据吗？";
	}
	art.dialog.confirm(msg, function() {
		$.ajax({
			url : "/yaoxin/confirm",
			type : 'post',
			data : {
				id : id,
				status:status
			},
			dataType : "json",
			success : function(data) {
				if (data.success) {
					art.dialog({
						icon : 'succeed',
						time : 1,
						content : '操作成功'
					});
					setTimeout(function(){
					  window.location.reload();
		         	},1000); 
				}else{
					if(data.code == 1006){
						login();
					}else{
						art.dialog({
							icon : 'error',
							time : 1,
							content : data.msg
						});
					}
			
				}
			}
		});

	});
	
}

function ykClear(){
	var msg = "将清空之前的比较结果重新比较，确定？";
	art.dialog.confirm(msg, function() {
		$.ajax({
			url : "/yaokong/clear",
			type : 'post',
			data : {
 
			},
			dataType : "json",
			success : function(data) {
				if (data.success) {
					art.dialog({
						icon : 'succeed',
						time : 1,
						content : '数据已重置，请重新比较！'
					});
					setTimeout(function(){
						  window.location.reload();
			         	},1000); 
				}else{
					if(data.code == 1006){
						login();
					}else{
						art.dialog({
							icon : 'error',
							time : 1,
							content : data.msg
						});
					}
				}
			}
		});

});
}



function ycConfirm(id,status){
	var msg = "确认这条数据吗？";
	if(status == 2){
		msg = "完全匹配这条数据吗？";
	}
	art.dialog.confirm(msg, function() {
		$.ajax({
			url : "/yaoce/confirm",
			type : 'post',
			data : {
				id : id,
				status:status
			},
			dataType : "json",
			success : function(data) {
				if (data.success) {
					art.dialog({
						icon : 'succeed',
						time : 1,
						content : '操作成功'
					});
					setTimeout(function(){
						  window.location.reload();
			         	},1000); 
				}else{
					if(data.code == 1006){
						login();
					}else{
						art.dialog({
							icon : 'error',
							time : 1,
							content : data.msg
						});
					}
				}
			}
		});

});
}
function settingDefault(id){
	var msg = "确认要默认这个站点吗？";
	art.dialog.confirm(msg, function() {
		$.ajax({
			url : "/setting/default",
			type : 'post',
			data : {
				id : id 
			},
			dataType : "json",
			success : function(data) {
				if (data.success) {
					art.dialog({
						icon : 'succeed',
						time : 1,
						content : '设定成功！'
					});
					setTimeout(function(){
						  window.location.reload();
			         	},1000); 
				}else{
					if(data.code == 1006){
						login();
					}else{
						art.dialog({
							icon : 'error',
							time : 1,
							content : data.msg
						});
					}
				}
			}
		});

});
}

function ignore(id,type,index){
	var msg = "确认要忽略这条数据吗？";
	art.dialog.confirm(msg, function() {
		$.ajax({
			url : "/yaokong/ignore",
			type : 'post',
			data : {
				id : id,
				type:type,
				index:index
			},
			dataType : "json",
			success : function(data) {
				if (data.success) {
					art.dialog({
						icon : 'succeed',
						time : 1,
						content : '已忽略！'
					});
					setTimeout(function(){
						  window.location.reload();
			         	},1000); 
				}else{
					if(data.code == 1006){
						login();
					}else{
						art.dialog({
							icon : 'error',
							time : 1,
							content : data.msg
						});
					}
				}
			}
		});

});
}
 

function ykConfirm(id,status){
	var msg = "确认这条数据吗？";
	if(status == 2){
		msg = "完全匹配这条数据吗？";
	}
	art.dialog.confirm(msg, function() {
		$.ajax({
			url : "/yaokong/confirm",
			type : 'post',
			data : {
				id : id,
				status:status
			},
			dataType : "json",
			success : function(data) {
				if (data.success) {
					art.dialog({
						icon : 'succeed',
						time : 1,
						content : data.msg
					});
					setTimeout(function(){
						  window.location.reload();
			         	},1000); 
				}else{
					if(data.code == 1006){
						login();
					}else{
						art.dialog({
							icon : 'error',
							time : 1,
							content : data.msg
						});
					}
				}
			}
		});
	

    });
}
//module 模块 type[横纵向]
function exportData(module,type,stationId,mobile){
	var moduleName = "遥信";
	if(module == "yc") moduleName = "遥测";
	else if(module == "yk") moduleName = "遥控仿真";
	
	var msg = "确认导出"+moduleName+"EXCEL和PDF吗？";
	art.dialog.confirm(msg, function() {
		$.ajax({
			url : "/exportData",
			type : 'post',
			data : {
				module:module,
				type:type
			},
			dataType : "json",
			success : function(data) {
				if (data.success) {
					art.dialog({
						icon : 'succeed',
						time : 6,
						content : data.msg,
						ok:function() {
							if(mobile == ''){
								 window.location.href="/show/file?stationId="+stationId;
							}else{
								 window.location.href="/mobile/show/file?stationId="+stationId;
							}
							
//							openFile(data.data);
						},
						cancel:function(){
							
						}
					});
		 
				}else{
					
					if(data.code == 1006){
						login();
					}else{
						art.dialog({
							icon : 'question',
							time : 1,
							content : data.msg
						});
					}
					
				}
			},
			error:function(data){
				art.dialog({
					icon : 'error',
					time : 6,
					content : "另一个程序正在使用此文件，进程无法访问，导出失败！"
				});
			}
		});

});
}
function openFile(path){
	$.ajax({
		url : "/openFile",
		type : 'post',
		data : {
			path:path
		},
		dataType : "json",
		success : function(data) {
			if (data.success) {
			}else{
				if(data.code == 1006){
					login();
				}else{
					art.dialog({
						icon : 'question',
						time : 1,
						content : data.msg
					});
				}
				
			}
		},
		error:function(data){
			art.dialog({
				icon : 'error',
				time : 1,
				content : "文件夹不存在！"
			});
		}
	});
}