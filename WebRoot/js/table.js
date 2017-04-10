var table={
		data:[
				{	name:"变形金刚",
					detaile:"很不错的电影",
					supername:"机器人"},
				{	name:"少林足球",
					detaile:"最厉害的足球电影",
					supername:"周星驰,赵薇"},
				{	name:"赌神",
					detaile:"小马哥演绎赌神",
					supername:"周润发"},
				{	name:"大话西游",
					detaile:"超级搞笑的电影",
					supername:"周星驰"},
				{	name:"疯狂的石头",
					detaile:"一部让人大笑不止的电影",
					supername:"黄渤"}
		      ],
		 //创建一个td元素
		createTD:function(tddata){
			//$("<td/>")就等于document.createElement("td")
			return $("<td/>").text(tddata);
		},
		//创建一个tr元素
		//传入td数组
		createTR:function(tds){
			var $tr=$("<tr/>");
			//tds中有多少td就应该追加多少次
			$.each(tds,function(){
				$tr.append($(this));
			});
			return $tr;
		},
		createTable:function(){
			//1.获取table
			var $table=$("table");
			//2.table追加tr
			for(var i=0;i<table.data.length;i++){
				//获取tddata
				var name=table.data[i].name;
				var detaile=table.data[i].detaile;
				var supername=table.data[i].supername;
				//传入tddata创建td
				var $tdID=table.createTD(name);
				var $tddetaile=table.createTD(detaile);
				var $tdsupername=table.createTD(supername);
				//创建tds
				var tds=[$tdID,$tddetaile,$tdsupername];
				//传入tds创建tr
				var $tr=table.createTR(tds);
				//table追加tr
				$table.append($tr);
			}
		}
};
$().ready(function(){
	table.createTable();
})
