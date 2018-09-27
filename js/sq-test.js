window.onload = function(){
  // 轮播图
  swiperBanner();
  // 换一换
	toggleList();
	// 呼入呼出
	toggleHot();
	// 加载滚动显示
	// scrollDisplay();
	// 侧边栏
	myOc();
	// hot切换
	hotToggle();
	// 回到顶部
	goTopEffect();
	// 推荐搜索
	searchEffect();
};

// 轮播图
function swiperBanner(){
  var mySwiper = new Swiper('.swiper-container', {
    pagination : '.swiper-pagination',
    paginationElement : 'li',
    autoplay: 2000,
    autoplayDisableOnInteraction : false,
    loop: true
  });
}

// 换一换
function toggleList(){
  var changeindex=1;
	  var clickindex=2;
    var degs = 360;
	  $(".search-details li").each(function(index,element){
		  if(index/3<changeindex){
			  element.className="change"+changeindex;
		  }else{
			  changeindex++;
			  element.className="change"+changeindex;
		  }
	  })
	  $(".change1").siblings().css("display","none");
	  $(".change1").show();
	  $(".header-toggle").click(function(){
      var span=document.querySelector(".header-toggle").querySelector("span");
      span.style.transform="rotate("+ degs +"deg)";
      degs += 360;
		  if(clickindex<=changeindex){
			  $(".change"+clickindex).siblings().css("display","none");
			  $(".change"+clickindex).show();
			  clickindex++;
		  }else{
			  clickindex=1;
			  $(".change"+clickindex).siblings().css("display","none");
			  $(".change"+clickindex).show();
		  }
	  });
}

// 呼入呼出
function toggleHot(){
    $(".dv").click(function(){
      $(".hc").slideToggle();
    });
}

// 加载滚动显示
/* function scrollDisplay(){
	var handpickContainer = document.querySelector(".handpick_container");
	var csFooter = $(".cs_footer");
	var lis = handpickContainer.querySelectorAll(".hrl");
	var liss = handpickContainer.querySelectorAll(".hrl:nth-of-type(n+5)");
	for(var i= 1; i<liss.length; i++){
		liss[i].style.display='none';
	}
	var isTrue = true;
	window.onscroll = function(){
		var offsetTop=document.documentElement.scrollTop;
		if(offsetTop >= 760){
			setTimeout(function(){
				for(var i= 1; i<liss.length; i++){
					liss[i].style.display='block';
				}
			},1000);
		}
		if(offsetTop <= 800 && offsetTop >=750){
			if(isTrue){
				isTrue=false;
				setTimeout(function(){
					for(var i= 0; i < 5; i++){
						var cloneLi = lis[i].cloneNode(true);
						handpickContainer.appendChild(cloneLi);
					}
				},1000);
			}
		}
		if(offsetTop >=1250 && offsetTop <=3040){
			if(isTrue){
				isTrue=false;
				setTimeout(function(){
					for(var i= 0; i < 5; i++){
						var cloneLi = lis[i].cloneNode(true);
						handpickContainer.appendChild(cloneLi);
					}
				},1000);
			}
		}
	}
} */

// 侧边栏
function myOc(){
	var id = '#doc-oc-demo1';
  var $myOc = $(id);
  $('.doc-oc-js').on('click', function() {
    $myOc.offCanvas($(this).data('rel'));
  });
}

// hot切换
function hotToggle(){
	$(".hc>ul>li").click(function(){
		$(this).siblings("li").removeClass("active");
		$(this).addClass("active");
	});
}

// 滚动到顶部
function goTopEffect(){
	$(window).scroll(function(){

		if($(this).scrollTop() > 200){
			$('#goTop').show();
			$('#goTop').fadeIn();
		} else {
			$('#goTop').fadeOut();
		}
	});
}

// 推荐搜索
function searchEffect(){
	$('.search-recommend-items>ul>li').click(function(){
		$(this).siblings('li').removeClass('current');
		$(this).addClass('current');
	});
}