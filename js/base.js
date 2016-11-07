$(function(){
	var $audio=$("#audio");
	var audio=$("#audio")[0];
	var play=$(".play")
	var duration=$(".duration");
	var current=$(".current-time");
	var jdt=$(".jdt");
	var yuan=$(".yuan");
	var green=$(".green");
	var progress=$(".pragress");
	var rg=$(".rg");
	var vivo=$(".vivo");
	var touming=$(".hei-tou");
	var quxiao=$(".quxiao");
	var volume=$(".volume");
	var yuanY=$(".y-yuan");
	var hei=$(".hei");
	var jingyin=$(".laba");
	var list=$(".many-ge");
	var shang=$(".shang");
	var xia=$(".xia");
	var lis=$(".bt-lis-caidan");
	var currentIndex=0;
	var database=[
		{	name:"红玫瑰",
            author:"陈奕迅",
            src:"music/红玫瑰.mp3",
            img:"img/54.png",
            bg:"url(img/e.png)",
            geci:[
                {time:"00:00",lrc:"红玫瑰 - 陈奕迅"},
                {time:"00:03",lrc:"词:李焯雄"},
                {time:"00:06",lrc:"曲：梁翘柏"},
                {time:"00:08",lrc:"编：梁翘柏"},
                {time:"00:16",lrc:"梦里梦到醒不来的梦"},
                {time:"00:18",lrc:"红线里被软禁的红"},
                {time:"00:23",lrc:"所有刺激剩下疲乏的痛"},
                {time:"00:26",lrc:"再无动于衷"},
                {time:"00:30",lrc:"从背后抱你的时候"},
                {time:"00:33",lrc:"期待的却是她的面容"},
                {time:"00:37",lrc:"说来实在嘲讽 我不太懂"},
                {time:"00:41",lrc:"偏渴望你懂"},
                {time:"00:44",lrc:"是否幸福轻得太沉重"},
                {time:"00:48",lrc:"过度使用不痒不痛"},
                {time:"00:52",lrc:"烂熟透红空洞了的瞳孔"},
                {time:"00:56",lrc:"终于掏空 终于有始无终"},
                {time:"00:59",lrc:"得不到的永远在骚动"},
                {time:"01:03",lrc:"被偏爱的 都有恃无恐"},
                {time:"01:06",lrc:"玫瑰的红 容易受伤的梦"},
                {time:"01:11",lrc:"握在手中却流失于指缝"},
                {time:"01:14",lrc:"又落空"},
                {time:"01:16",lrc:""},
                {time:"01:31",lrc:"红是朱砂痣烙印心口"},
                {time:"01:33",lrc:"红是蚊子血般平庸"},
                {time:"01:38",lrc:"时间美化那仅有的悸动"},
                {time:"01:41",lrc:"也磨平激动"},
                {time:"01:45",lrc:"从背后抱你的时候"},
                {time:"01:48",lrc:"期待的却是她的面容"},
                {time:"01:52",lrc:"说来实在嘲讽"},
                {time:"01:55",lrc:"我不太懂 偏渴望你懂"},
                {time:"01:59",lrc:"是否幸福轻得太沉重"},
                {time:"02:03",lrc:"过度使用 不痒不痛"},
                {time:"02:07",lrc:"烂熟透红空洞了的瞳孔"},
                {time:"02:11",lrc:"终于掏空 终于有始无终"},
                {time:"02:14",lrc:"得不到的永远在骚动"},
                {time:"02:18",lrc:"被偏爱的都有恃无恐"},
                {time:"02:22",lrc:"玫瑰的红 容易受伤的梦"},
                {time:"02:26",lrc:"握在手中却流失于指缝"},
                {time:"02:29",lrc:"又落空"},
                {time:"02:31",lrc:""},
                {time:"02:44",lrc:"是否说爱都太过沉重"},
                {time:"02:48",lrc:"过度使用不痒不痛"},
                {time:"02:52",lrc:"烧得火红 蛇行缠绕心中"},
                {time:"02:56",lrc:"终于冷冻终于有始无终"},
                {time:"02:59",lrc:"得不到的永远在骚动"},
                {time:"03:03",lrc:"被偏爱的都有恃无恐"},
                {time:"03:06",lrc:"玫瑰的红 容易受伤的梦"},
                {time:"03:11",lrc:"握在手中却流失于指缝"},
                {time:"03:15",lrc:"得不到的永远在骚动"},
                {time:"03:18",lrc:"被偏爱的 都有恃无恐"},
                {time:"03:21",lrc:"玫瑰的红 伤口绽放的梦"},
                {time:"03:26",lrc:"握在手中却流失于指缝"},
                {time:"03:29",lrc:"再落空"}
                ]
        },
		 {name:"青春的颜色",
            author:"曾子岚",
            src:"music/青春的颜色.mp3",
            img:"img/00.png",
            bg:"url(img/004.png)",
            geci:[
                {time:"00:00",lrc:"青春的颜色"},
                {time:"00:02",lrc:"作词：曾子岚"},
                {time:"00:04",lrc:"作曲：曾子岚"},
                {time:"00:06",lrc:"编曲：乐方舟"},
                {time:"00:08",lrc:"演唱：曾子岚"},
                {time:"00:10",lrc:""},
                {time:"00:11",lrc:"LRC编辑：紫色忧郁"},
                {time:"00:13",lrc:"QQ：25025025250"},
                {time:"00:20",lrc:""},
                {time:"00:21",lrc:"花儿流着泪 会枯萎 虽然美"},
                {time:"00:25",lrc:"时光飞逝悄然抹去了香味"},
                {time:"00:30",lrc:"我们不再追 追着谁 拖着谁"},
                {time:"00:34",lrc:"只是年少轻狂留下的疲惫"},
                {time:"00:40",lrc:"风儿伴着月 冷的夜 白的雪"},
                {time:"00:44",lrc:"饮着曾今沧海岁月酿的醉"},
                {time:"00:49",lrc:"你的那个谁 我的谁 靠着谁"},
                {time:"00:53",lrc:"如今天涯海角成了谁的谁"},
                {time:"00:58",lrc:"一睁眼 一眨眼 转身过了多少年"},
                {time:"01:03",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"01:08",lrc:"睁眼 眨眼 过了多少年"},
                {time:"01:12",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"01:17",lrc:""},
                {time:"01:20",lrc:"青春的颜色 那是真情的颜色"},
                {time:"01:24",lrc:"风吹雨打仍旧灿烂着"},
                {time:"01:29",lrc:"离散总是太多 真心总被无情错过"},
                {time:"01:36",lrc:""},
                {time:"01:38",lrc:"别问为什么 只是岁月太蹉跎"},
                {time:"01:43",lrc:"难为爱情总是太苦涩"},
                {time:"01:48",lrc:"眼泪中去诉说 沉默中去体会失落"},
                {time:"01:55",lrc:""},
                {time:"02:16",lrc:"花儿流着泪 会枯萎 虽然美"},
                {time:"02:20",lrc:"时光飞逝悄然抹去了香味"},
                {time:"02:26",lrc:"我们不再追 追着谁 拖着谁"},
                {time:"02:30",lrc:"只是年少轻狂留下的疲惫"},
                {time:"02:35",lrc:"风儿伴着月 冷的夜 白的雪"},
                {time:"02:39",lrc:"饮着曾今沧海岁月酿的醉"},
                {time:"02:44",lrc:"你的那个谁 我的谁 靠着谁"},
                {time:"02:48",lrc:"如今天涯海角成了谁的谁"},
                {time:"02:53",lrc:"一睁眼 一眨眼 转身过了多少年"},
                {time:"02:58",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"03:03",lrc:"睁眼 眨眼 过了多少年"},
                {time:"03:07",lrc:"一段缘 残的缘 缠绕无边的思念"},
                {time:"03:12",lrc:""},
                {time:"03:14",lrc:"青春的颜色 那是真情的颜色"},
                {time:"03:18",lrc:"风吹雨打仍旧灿烂着"},
                {time:"03:23",lrc:"离散总是太多 真心总被无情错过"},
                {time:"03:29",lrc:""},
                {time:"03:32",lrc:"别问为什么 只是岁月太蹉跎"},
                {time:"03:37",lrc:"难为爱情总是太苦涩"},
                {time:"03:42",lrc:"眼泪中去诉说 沉默中去体会失落"},
                {time:"03:48",lrc:""},
                {time:"03:51",lrc:"青春的颜色 那是真情的颜色"},
                {time:"03:55",lrc:"风吹雨打仍旧灿烂着"},
                {time:"04:01",lrc:"离散总是太多 真心总被无情错过"},
                {time:"04:06",lrc:""},
                {time:"04:10",lrc:"别问为什么 只是岁月太蹉跎"},
                {time:"04:14",lrc:"难为爱情总是太苦涩"},
                {time:"04:20",lrc:"眼泪中去诉说 沉默中去体会失落"},
                {time:"04:25",lrc:""}
     ]
        },
        {
			name:"一次就好",
			author:"王凯",
			src:"music/王凯.mp3",
			img:"img/01.png",
			bg:"url(img/5646567.png)",
		},
		{
			name:"演员",
			author:"林俊杰",
			src:"music/薛之谦.mp3",
			img:"img/09.png",
			bg:"url(img/76766.png)",
			geci:[
                {time:"00:00",lrc:"演员 - 薛之谦"},
                {time:"00:08",lrc:"词曲：薛之谦"},
                {time:"00:21",lrc:"简单点说话的方式简单点"},
                {time:"00:30",lrc:"递进的情绪请省略"},
                {time:"00:33",lrc:"你又不是个演员"},
                {time:"00:36",lrc:"别设计那些情节"},
                {time:"00:41",lrc:"没意见我只想看看你怎么圆"},
                {time:"00:51",lrc:"你难过的太表面 像没天赋的演员"},
                {time:"00:57",lrc:"观众一眼能看见"},
                {time:"01:02",lrc:"该配合你演出的我演视而不见"},
                {time:"01:07",lrc:"在逼一个最爱你的人即兴表演"},
                {time:"01:12",lrc:"什么时候我们开始收起了底线"},
                {time:"01:18",lrc:"顺应时代的改变看那些拙劣的表演"},
                {time:"01:23",lrc:"可你曾经那么爱我干嘛演出细节"},
                {time:"01:28",lrc:"我该变成什么样子才能延缓厌倦"},
                {time:"01:33",lrc:"原来当爱放下防备后的这些那些"},
                {time:"01:39",lrc:"才是考验"},
                {time:"01:44",lrc:"没意见你想怎样我都随便"},
                {time:"01:54",lrc:"你演技也有限"},
                {time:"01:57",lrc:"又不用说感言"},
                {time:"02:00",lrc:"分开就平淡些"},
                {time:"02:05",lrc:"该配合你演出的我演视而不见"},
                {time:"02:10",lrc:"别逼一个最爱你的人即兴表演"},
                {time:"02:15",lrc:"什么时候我们开始没有了底线"},
                {time:"02:21",lrc:"顺着别人的谎言被动就不显得可怜"},
                {time:"02:26",lrc:"可你曾经那么爱我干嘛演出细节"},
                {time:"02:31",lrc:"我该变成什么样子才能配合出演"},
                {time:"02:36",lrc:"原来当爱放下防备后的这些那些"},
                {time:"02:41",lrc:"都有个期限"},
                {time:"02:47",lrc:"其实台下的观众就我一个"},
                {time:"02:53",lrc:"其实我也看出你有点不舍"},
                {time:"02:58",lrc:"场景也习惯我们来回拉扯"},
                {time:"03:02",lrc:"还计较着什么"},
                {time:"03:08",lrc:"其实说分不开的也不见得"},
                {time:"03:14",lrc:"其实感情最怕的就是拖着"},
                {time:"03:19",lrc:"越演到重场戏越哭不出了"},
                {time:"03:24",lrc:"是否还值得"},
                {time:"03:29",lrc:"该配合你演出的我尽力在表演"},
                {time:"03:34",lrc:"像情感节目里的嘉宾任人挑选"},
                {time:"03:39",lrc:"如果还能看出我有爱你的那面"},
                {time:"03:44",lrc:"请剪掉那些情节让我看上去体面"},
                {time:"03:50",lrc:"可你曾经那么爱我干嘛演出细节"},
                {time:"03:55",lrc:"不在意的样子是我最后的表演"},
                {time:"04:01",lrc:"是因为爱你我才选择表演这种成全"},
            ]
		},
		{
			name:"片羽时光",
			author:"周笔畅",
			src:"music/周笔畅.mp3",
			img:"img/ww.png",
			bg:"url(img/bg.png)",
		},
		{
			name:"国王与乞丐",
			singer:"华晨宇",
			src:"music/国王与乞丐.mp3",
			img:"img/435.png",
			bg:"url(img/4r.png)",
            geci:[
                {time:'00:00',lrc:'华晨宇、杨宗纬 - 国王与乞丐'},
                {time:'00:03',lrc:'作词：代岳东'},
                {time:'00:04',lrc:'作曲：Mike Chan/Faizal Tahir'},
                {time:'00:05',lrc:'编曲：郑楠'},
                {time:'00:14',lrc:'怎么了 怎么了'},
                {time:'00:17',lrc:'一份爱失去了光泽'},
                {time:'00:20',lrc:'面对面 背对背'},
                {time:'00:23',lrc:'反复挣扎怎么都痛'},
                {time:'00:27',lrc:'以为爱坚固像石头'},
                {time:'00:30',lrc:'谁知一秒钟就碎落'},
                {time:'00:33',lrc:'难道心痛都要不断打磨'},
                {time:'00:39',lrc:'抱紧你的我比国王富有'},
                {time:'00:46',lrc:'曾多么快乐'},
                {time:'00:52',lrc:'失去你的我比乞丐落魄'},
                {time:'00:59',lrc:'痛多么深刻'},
                {time:'01:06',lrc:'噢 喔 噢 喔'},
                {time:'01:13',lrc:'噢 喔 噢 喔'},
                {time:'01:18',lrc:'谁哭着谁笑着'},
                {time:'01:21',lrc:'一人分饰两个角色'},
                {time:'01:25',lrc:'越执迷越折磨'},
                {time:'01:28',lrc:'回忆还在煽风点火'},
                {time:'01:32',lrc:'明知往前就会坠落'},
                {time:'01:35',lrc:'抱着遗憾重返寂寞'},
                {time:'01:38',lrc:'爱到最后究竟还剩什么'},
                {time:'01:44',lrc:'抱紧你的我比国王富有'},
                {time:'01:51',lrc:'曾多么快乐'},
                {time:'01:57',lrc:'失去你的我比乞丐落魄'},
                {time:'02:04',lrc:'痛多么深刻'},
                {time:'02:11',lrc:'当一切 结束了 安静了 过去了'},
                {time:'02:18',lrc:'为什么 还拥有 一万个 舍不得'},
                {time:'02:26',lrc:'喔 喔'},
                {time:'02:36',lrc:'谁又能感受'},
                {time:'02:43',lrc:'回忆里的我比国王富有'},
                {time:'02:49',lrc:'奢侈的快乐'},
                {time:'02:55',lrc:'失去你以后比乞丐落魄'},
                {time:'03:06',lrc:'心痛如刀割'},
                {time:'03:13',lrc:'怀念那时你安静陪着我'},
                {time:'03:17',lrc:'噢 噢'},
                {time:'03:20',lrc:'柔软时光里最美的挥霍'},
                {time:'03:26',lrc:'喔 喔'},
                {time:'03:29',lrc:'爱有多快乐'},
                {time:'03:34',lrc:'痛有多深刻'},
                {time:'03:40',lrc:'痛有多深刻'}
            ]

        },
		
	];
	
	
	function minitues(shuzhi){
        var fenzhong=Math.floor(shuzhi/60);//把传进来的数字变成00：00的形式，现在得到的是前边的00
        if(fenzhong<10){
            fenzhong="0"+fenzhong;
        }
        var miao=Math.floor(shuzhi%60)
        if(miao<10){
            miao="0"+miao;
        }
        return fenzhong +":"+ miao;
    }
	
	function makeGeci() {
         var lrc=database[currentIndex].geci;
         if(!lrc){
             $('.ct').html("")
             $('<span>').text("暂无歌词").appendTo('.ct')
         }else{
             $(lrc).each(function(i,v){
                 if(lrc[i].time==minitues(audio.currentTime)){
                 	$('.ct').html("")
                     for(var a=i;a<lrc.length;a++){
                         $('<span>').text(lrc[a].lrc).appendTo('.ct')
                     }
                 }
             })
         }
     }
	makeGeci();
	function geci() {
         var lrc=database[currentIndex].geci;
         if(!lrc){
             $('.rightb-box').html("")
             $('<li>').text("暂无歌词").appendTo('.rightb-box')
         }else{
             $(lrc).each(function(i,v){
                 if(lrc[i].time==minitues(audio.currentTime)){
                 	$('.rightb-box').html("")
                 	if(i<=3){
                 		 for(var a=0;a<lrc.length;a++){
	                        $('<li>').text(lrc[a].lrc).appendTo('.rightb-box');
							$(".rightb-box").find("li").eq(i).css("color","#31c27c")
	                     }
                 	}
                 	if(i>3){
                 		 for(var a=i-3;a<lrc.length;a++){
	                        $('<li>').text(lrc[a].lrc).appendTo('.rightb-box');
							$(".rightb-box").find("li").eq(3).css("color","#31c27c")
	                     }
                 	}
                    
                 }
             })
         }
     }
	geci();
	
	
//	自动轮播
	var index=1;
	var pre;
	var next;
//	var t=setInterval(move,15000);
	function move(){
		pre=index+1;
		if(pre>2){
			pre=0;
		}
		$("#big-box").find(".link").eq(index).removeClass("chuxian");
		$("#big-box").find(".link").eq(pre).addClass("chuxian");
		index=pre;
	}
//	滑动进入左右页面
	$("#big-box").on("touchstart",function(e){
		pos=e.originalEvent.changedTouches[0].clientX;
	})
	$("#big-box").on("touchend",function(e){
		var p=e.originalEvent.changedTouches[0].clientX;
		if(p-pos>=30){
			pre=index+1;
			if(pre>2){
				return;
			}
			$("#big-box").find(".link").removeClass("chuxian");
			$("#big-box").find(".link").eq(pre).addClass("chuxian");
			$("#big-box").find(".link").eq(pre).find("span").addClass("action").end().siblings().find("span").removeClass("action");
			index=pre;
		}
		if(p-pos<-30){
			next=index-1;
			if(pre<0){
				return;
			}
			$("#big-box").find(".link").removeClass("chuxian");
			$("#big-box").find(".link").eq(next).addClass("chuxian");
			$("#big-box").find(".link").eq(next).find("span").addClass("action").end().siblings().find("span").removeClass("action");
			index=next;
		}
	})
	
	
	
	
	$(".anniu-ct").on("touchend",".div",function(){
//		clearInterval(t)
		var index=$(this).index();
		$(this).find("span").addClass("action").end().siblings().find("span").removeClass("action");
		$(".link").eq(index).addClass("chuxian").siblings().removeClass("chuxian");
	})


	
	$(".bt-lis2").on("touchend",function(){
	})



////	console.table()
////JSON格式中，键值必须都加引号
////return false;
////阻止冒泡

	function render(){
		list.empty();
		$.each(database,function(i,v){
			var c=(i===currentIndex)? "current" : "";
			$("<li class='ge-lins "+c+"'><div class='name'><span class='ge-name'>"+v.name+"</span><span class='ge-author'> - "+v.author+"</span><span class='yinfu iconfont'>&#xe604;</span></div><div class='caozuo'><span class='like iconfont'>&#xe60d;</span><span class='del iconfont'>&#xe7c5;</span></div></li>").appendTo(".many-ge");
		})
	}
//	
	render();
	
	
	lis.on("touchend",function(){
		$(".gequ-lis").addClass("show");
	})
	$(".close").on("touchend",function(){
		$(".gequ-lis").removeClass("show");
	})
	
	
	
//	添加喜欢的歌曲；
    $(".like").on("click",function(e){
    	e.stopPropagation(); 
    	$(this).toggleClass("red");
    })
    
    
    $(".bt-lis-like").on("touchend",function(){
    	$(this).toggleClass("red");
    })
	
	//	删除列表歌曲
    list.on("touchend",".del",function(){
    	var li=$(this).closest("li");
    	var index=li.index();
    	database.splice(index,1);
    	if(index==currentIndex){
    		if(database[currentIndex]){
    			audio.src=database[currentIndex].src;
    		}else{
    			audio.src="";
    		}
    	}
    	if(index>currentIndex){
    		
    	}
    	if(index<currentIndex){
    		currentIndex-=1;
    	}
    	render();
    })
    
    
    
//	点击那首歌播放哪首歌
	list.on("click","li",function(){
		list.find('li').removeClass('current');
		$(this).addClass('current');
		currentIndex=$(this).index();
		audio.src=database[currentIndex].src;
		audio.play();
	})
	
	
//	上一首
	function shangs(){
		currentIndex-=1;
		if(currentIndex<0){
			currentIndex=database.length-1;
		}
		list.find("li").removeClass('current');
		list.find('li').eq(currentIndex).addClass('current');
		audio.src=database[currentIndex].src;
		audio.play();
	}
	
	shang.on("touchend",function(){
		shangs();
	})
	
	
//	下一首
	function xiag(){
		currentIndex+=1;
		if(currentIndex==database.length){
			currentIndex=0;
		}
		list.find("li").removeClass('current');
		list.find('li').eq(currentIndex).addClass('current');
		audio.src=database[currentIndex].src;
		audio.play();
	}
	
	xia.on("touchend",function(){
		xiag();
	})
	

//			列表新增页
//			选中状态添加类名
			$(".quan").on("touchend",function(){
				$(this).find(".font").toggleClass("fontClass");
			})
//			全选
			$(".quanxuan").on("touchend",function(){
				$(".song").find(".font").toggleClass("fontClass");
			})
//			关闭增加页面
			$(".guanbi").on("touchend",function(){
				$(".song-list").removeClass("yichu");
			})
//			进入到添加页面
			$(".tianjiab").on("touchend",function(){
				$(".song-list").addClass("yichu");
			})
//			可选定的个数
			$(".all2").html("可选定"+$(".song").length+"首")

//	列表新增歌
	$(".add").on("touchend",function(){
		var d=$(".fontClass").closest(".song").attr("data");
		database.push(JSON.parse(d));
		render();
	})
	
	
//	进入歌词页面
	
	
	
			
			

//			将秒数转换为分钟数
			function format(v){
				v=Math.floor(v);
				var s=v%60;
				s=(s<10)? ("0"+s):s;
				var m=Math.floor(v/60);
				return m +":" +s;
			}


//			让play按钮同时实现播放与暂停						
			play.on("touchend",function(){
				if(audio.paused){
					audio.play();
					$(this).html("&#xe6b8;");
					$(".img").removeClass("zhuandong");
				}else {
					audio.pause();
					$(this).html("&#xe6c8;");
					$(".img").addClass("zhuandong");
				}
			})
			
			
//			实现进度条与显示当前时间
			$audio.on("canplay",function(){
				duration.html(minitues(audio.duration))	
			})
					
			$audio.on("timeupdate",function(){
				current.html(minitues(audio.currentTime));
				var left=jdt.width()*audio.currentTime/audio.duration-yuan.width()/2;
				yuan.css("left",left);
				green.css("width",left);
			})
			
			
			
//			单击设置歌曲的进度
			yuan.on("touchend",false);
			progress.on("touchend",function(e){	
				var s=e.originalEvent.changedTouches[0].clientX-$(this).offset().left;
				audio.currentTime=s/$(this).width()*audio.duration;
				yuan.css("left",s/$(this).width()-yuan.width()/2);
				green.css("width",s/$(this).width()-yuan.width()/2);
			})
			
			
//			通过进度条的拖拽来实现快进功能
			yuan.on("touchstart",function(e){
				var r=$(this).width()/2;
				var offsetX=e.originalEvent.changedTouches[0].clientX-yuan.offset().left;
				var start=r-e.offsetX;
				$(document).on("touchmove",function(e){
					var left=e.originalEvent.changedTouches[0].clientX-progress.position().left+start;
					var c=left/progress.width();
					if(c>=1||c<=0){
						return;
					}
					$audio.currentTime=c;
					yuan.css("left",left-r);
					green.css("width",left-r)
				})
			})
			$(document).on("touchend",function(){
				$(document).off("touchmove")
			})			
			
//			手指接触...出现音量条
			$(".weituo").on("touchend",function(){
				console.log(1)
				rg.find(".vivo").addClass("active");
					touming.addClass("toum");
			})
			$(".quxiao").on("touchend",function(){
				$(this).closest(".vivo").removeClass("active");
					touming.removeClass("toum");
			})
			
			
//			单击音量条来设置音量
			volume.on('touchend',function(e){
				var length=e.originalEvent.changedTouches[0].clientX-$(this).offset().left;
			    audio.volume = length / $(this).width();
			    jingyin.removeAttr('data-v');
				var left=length-yuanY.width()/2;
			    yuanY.css("left",left);
			    hei.css("width",left);
			  })
			
			
//			单击静音，音量变为0，再次单击，回复原来的位置	
			jingyin.on("touchend",function(){
				if($(this).attr("data-v")){
					audio.volume=$(this).attr("data-v");
					var left=volume.width()*audio.volume-yuanY.width()/2;
					hei.css("width",left);
					yuanY.css("left",left);
					$(this).removeAttr('data-v');
				}else{
					$(this).attr("data-v",audio.volume);
					audio.volume=0;
					yuanY.css("left",-yuanY.width()/2);
					hei.css("width",0);
				}
			})
			
						
//			yuanY的拖拽
			yuanY.on("touchend",false);
			yuanY.on("touchstart",function(e){
				var r=yuanY.width()/2;
				var offsetX=e.originalEvent.changedTouches[0].clientX-$(this).offset().left;
				var start=r-offsetX;
				$(document).on("touchmove",function(e){
					var clientX=e.originalEvent.changedTouches[0].clientX;
					var left=clientX-volume.position().left+start;
					var v=left/volume.width();
					if(v>=1||v<=0){
						return;
					}
					audio.volume=v;
					yuanY.css("left",left-r);
					hei.css("width",left-r);
				})
			})
			$(document).on("touchend",function(){
				$(document).off("touchmove");
			})
			

			
////	列表切换歌曲
	$audio.on("touchend",function(){
//		audio.src=""
	})
//	所有audio上面的事件
	$audio.on("loadstart",function(){
		$(".title").html(database[currentIndex].name);
		$(".author").html("-- "+database[currentIndex].author+" --");
		$(".all").css("background-image",database[currentIndex].bg)
		$(".img")[0].src=database[currentIndex].img;
		$(".author-shu").html(database[currentIndex].author);
		$(".name-shu").html(database[currentIndex].name);
		$(".geshou").find("img")[0].src=database[currentIndex].img;
	})
	$audio.on("canplay",function(){
		
	})
	$audio.on("progress",function(){
		
	})
	$audio.on("play",function(){
		makeGeci();
		$(".img").addClass("zhuandong");
	})
	$audio.on("pause",function(){
		$(".img").removeClass("zhuandong");
	})
	$audio.on("ended",function(){
		
	})
	$audio.on("seek",function(){
		
	})
	$audio.on("timeupdate",function(){
		
	geci();
	makeGeci();
	
	})
})
