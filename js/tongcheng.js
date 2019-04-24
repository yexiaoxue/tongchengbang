;(function (){
	
	$(".ke").on("mouseover",function(){
		
		$(".kehu-div").css("display","block")
	})
	
	$(".kehu-div").on("mouseout",function(){
		
		$(".kehu-div").css("display","none")
	})
	
	$(".xianshi").on("mouseover",function(){
	$(".yincang").css("display","block")
	$(".yincang-ul").css("display","block")	
	$(".yincang-ul-one").css("display","none")	
	})
	
	$(".xianshi").on("mouseout",function(){
	$(".yincang").css("display","none")
		
	})
	
	
	
	$(".xianshi-two").on("mouseover",function(){
	$(".yincang").css("display","block")
	$(".yincang-ul").css("display","none")	
	$(".yincang-ul-one").css("display","block")
	})
	
	$(".xianshi-two").on("mouseout",function(){
	$(".yincang").css("display","none")
		
	})
	
	
	
	//////////////////////////////
	var  lii= $(".meiti-ul li").height();
	   $(".meiti-ul").lSlide({nTop:lii});
              
	
})();
