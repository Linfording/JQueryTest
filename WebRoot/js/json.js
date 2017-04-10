var table={
	name:"疯狂的石头",
	detaile:"一部让人大笑不止的电影",
	supername:"黄渤",
	say:function(){
		alert("hello");
	}
};
$().ready(function(){
	alert(table.name);
	table.say();
})
