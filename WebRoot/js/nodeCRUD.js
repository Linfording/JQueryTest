	$().ready(function(){
		var $replaceDiv=$("<div/>").text("我是替换的节点");
	
		$("#b1").click(function(){
			//新建节点
			//$("<元素名/>").text("元素innerhtml");
			var $newDiv=$("<div/>").text("我是新加的节点");
			//dadDiv下添加节点
			$("#dadDiv").append($newDiv);
		});
		
		$("#b2").click(function(){
			//dadDiv删除节点
			//删除：	empty() 删除匹配的元素集合中所有的子节点。
			//		remove([expr]) 	从DOM中删除所有匹配的元素。
			//		detach([expr])	从DOM中删除所有匹配的元素。
			if($("#dadDiv div").length>0){
			//eq(index);匹配一个给定索引值的元素
				$("#dadDiv div").eq(0).remove();
			}else{
				alert("dadDiv中没有可删除的div");
			}
		});
		
		$("#b3").click(function(){
			//替换第一个节点
			//获取第一个要被替换的节点
			var $div1=$("body div").eq(0);
			$div1.replaceWith($replaceDiv);
			$replaceDiv=$div1;
		});
		
		$("#b4").click(function(){
			//克隆第二个节点到父p
			$("#dadDiv").append($("body div+#div_2").clone(true));
		});
	});