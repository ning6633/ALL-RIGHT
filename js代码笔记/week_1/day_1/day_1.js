<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		html,body{
			height:100%;
		}
	</style>
	<script type="text/javascript">
	
		function assign(_target,_css){
			for(var _k in _css){
				_target.style[_k]=_css[_k];
			}
		}
		
		function create(){//不间断的创建小苹果
			var _apple=null,_char='',_body=document.getElementsByTagName("body")[0];
			var _width=document.documentElement.clientWidth||document.body.clientWidth;
			var _timer=window.setInterval(function(){
				_apple=document.createElement("div");
				_char=String.fromCharCode(65+Math.floor(Math.random()*26));//65-90之间（ASCII表，表示字母A-Z）
				_apple.innerText=_char;
				_body.appendChild(_apple);//只是把apple放入body中，但位置还不是随机的，还要随机出apple的位置
				
				
				//_apple.style.position="absolute";
				//_apple.style.width="50px";
				//_apple.style.height="50px";
				//_apple.style.backgroundColor="orange";
				
				assign(_apple,{
					position:"absolute",
					backgroundColor:"#5fceea",
					width:"50px",
					height:"50px",
					lineHeight:"50px",
					border:"solid 2px #000",
					fontSize:"18px",
					textAlign:"center",
					borderRadius:"5px",
					top:"0",
					left:Math.floor((_width-52)*Math.random())+"px",//-52是为了将水平方向的位置控制在屏幕范围之内
				});
			},800);
		}
		
		
		function drop(){//每个苹果往下落
			var _height=document.documentElement.offsetHeight||document.body.offsetHeight;
			var _apples=document.getElementsByTagName("body")[0].children;
			var _timer=window.setInterval(function(){
				for(var i=0;i<_apples.length;i++){
					_apples[i].style.top=_apples[i].offsetTop+50+"px";
					if(_apples[i].offsetTop>=_height-50){
						//document.getElementsByTagName("body")[0].removeChild(_apples[i]);
						_apples[i].style.top=_height-50;
				}
				}
			},300);
			
		}
		
		function events(){//输入相同的字母apple消失
			document.onkeydown=function(e){
				var _code,char;
				var _body=document.getElementsByTagName("body")[0];
				var _apples=_body.children;
				e=e||window.event;
				_code=e.keyCode||e.which;//解决键码值兼容问题
				_char=String.fromCharCode(_code);
				for(var i=0;i<_apples.length;i++){
					if(_apples[i].innerText===_char){
						_body.removeChild(_apples[i]);
						break;//阻止继续删除相同的字符
					}
				}
			};
		}
		
		
		function main(){
			create();
			drop();
			events();
		}
		window.onload=main;
		
		
		


	</script>
</head>
<body></body>
</html>
