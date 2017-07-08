$(document).ready(function(){
var mq = window.matchMedia( "(min-width: 1124px)" );
	console.log(mq.matches);

	
	
		$('.jsSlider_wrap')
			.slick({
				infinite: false,
  				slidesToShow: 5,
			  variableWidth: false,
			  responsive: [
						    {
						      breakpoint: 1124,
						      settings: {
						        slidesToShow: 4,
						        slidesToScroll: 1,
						        variableWidth: false
						        
						      }
						    },
						    {
						      breakpoint: 975,
						      settings: {
						        slidesToShow: 3,
						        slidesToScroll: 1,
						         variableWidth: false
						      }
						    },
						     {
						      breakpoint: 700,
						      settings: {
						        slidesToShow: 2,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    },
						    {
						      breakpoint: 480,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    }
						    // You can unslick at a given breakpoint now by adding:
						    // settings: "unslick"
						    // instead of a settings object
						  ]
			});
		$('.wrap-price')
			.slick({
				infinite: false,
  				slidesToShow: 3,
			  variableWidth: false,
			   responsive: [
						    {
						      breakpoint: 1024,
						      settings: {
						        slidesToShow: 2,
						        slidesToScroll: 1,
						        variableWidth: false
						        
						      }
						    },
						    {
						      breakpoint: 900,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						         variableWidth: false
						      }
						    },
						     {
						      breakpoint: 600,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    }
						   
						    
						    // You can unslick at a given breakpoint now by adding:
						    // settings: "unslick"
						    // instead of a settings object
						  ]
			});	
		$('.slider-reference__wrap')
			.slick({
				autoplay:true,
				autoplaySpeed:7000,
				speed:1000,
				dots:true,
				arrows: true,
				infinite: false,
  				slidesToShow: 1,
  				slidesToScroll: 1,
  				nextArrow: '.nextArrow',
        		prevArrow: '.prevArrow'
			  	
			});		

			$('.sandich').on('click',function() {
				
				if($(this).hasClass('active')) { $(this).removeClass('active'); $('.topHeader__menu .menu').slideUp(400,function(){
					if($(this).attr('style')) $(this).removeAttr('style');
				});   } 
				else { $(this).addClass('active'); $('.topHeader__menu .menu').slideDown(400);  }

			});

  if (!String.prototype.trim) {
  (function() {
    
    String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  })();
}

	
	
	//.One-representation
	var obj1 = {
		textFields: '.top_bg .form__text',
		form: '.top_bg .form',
		classNoSubmit:'form__text--empty',
		buttonSend:'.top_bg .g_btn'
	};
	var obj2 = {
		textFields: '.One-representation .form__text',
		form: '.One-representation .form',
		classNoSubmit:'form__text--empty',
		buttonSend:'.One-representation .g_btn'
	};
	var handSend1 = new hendlerSubmit(obj1);
	var handSend2 = new hendlerSubmit(obj2);
	handSend1.submit(); 
	handSend2.submit(); 

	function objectOne() {
		this.methodObject = function() {
			console.log('Метод объекта objectOne!');
		};
	}
	function objectTwo() {
		this.methodObject = function() {
			console.log('Метод объекта objectTwo');
		};
	}
	function objectThree() {
		this.methodObject = function() {
			console.log('Метод объекта objectThree');
		};
	}
	String.prototype.methodObject = function() {
		console.log(this.toString());
	}
	 function globalObject(func) {
	 	var ctx = this;
	 	this.func = func;
	 	this.methodGlobal = function() {
	 		
	 			if(typeof this.func == "function")  {
	 				
	 					return this.func();
	 				}
	 				else if(typeof this.func == "object"){
	 					return this.func.methodObject();
	 				}
	 				
	 				
	 		};
	 		
	 	}
	 			
	 	
function Sum(x,y) {
	console.log(x+y);
}

var obj1 = new globalObject(function(){
	console.log('Я функция!!!!!');
});
obj1.methodGlobal();
var obj2 = {
	number:'22',
	valueOf: function() {
		return this.number;
	}
	
	// toString: function() {
	// 	return this.number;
	// }
} ;
	

console.log(+obj2);
// 	var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   console.log(i + ": " + item + " (массив:" + arr + ")") ;
// });
function func() {
	
	console.log( [].join.call(arguments,"*"));
}
func(1,2,3);

function Ball(param) {
	this._radius = param.radius;
	this._color = param.color;
}

Ball.prototype = {
	constructor: Ball,
	INCREMENTATION_STEP: 5,
	draw: function(){console.log("ball drawn with radius:" + this._radius + " and color: " + this._color)},
	 inc: function(){ this._radius += this.INCREMENTATION_STEP }
}

function StripedBall(ball) {
this._ball = ball;
};
StripedBall.prototype = {
	constructor: StripedBall,
	draw: function() {
		this._ball.draw();
		console.log("and with stripes!!!");
	},
	inc: function() {
		return this._ball.inc();
	}
}

function SpeckedBall(ball) {
	this._ball = ball;
}
SpeckedBall.prototype = {
	constructor: SpeckedBall,
	draw: function() {
		this._ball.draw();
		console.log('and with dots');

	},
	inc: function() {
		return this._ball.inc();
	}
};
var ball1 = new SpeckedBall( new StripedBall( new Ball({ radius:100, color:"red"})));
 // ball1.draw();
 // ball1.inc();
 // ball1.draw();
 // ball1.inc();
 // ball1.draw();
 // function User(name) {
 // 	this._name = name;
 // }

 var ball = new Ball({radius:50 , color:"green"});
 function MakeStripedBall(ball) {
 	var func_name = "draw";
 	var func_prev = ball[func_name];
 	// console.log(ball[func_name]());
 	 ball[func_name] = function() {
 	 	func_prev.apply(this);
 	 	console.log("and with stripes");
 	 }
 	 return ball;
 }

MakeStripedBall(ball).draw();

var Vanya = function(news) {
	console.log('Новость для Вани!: ' + news);

};
var Petia= function(news) {
	console.log('Новость для Пети!: ' + news);

};

function Company() {
this.users = [];
};
var  Microsoft = new Company();
var  Google = new Company();
var  Apple = new Company();
Company.prototype.addUser = function(user) {
	this.users.push(user);
	return this;
};
Company.prototype.getUsers = function() {
	console.log(this.users);
};
Company.prototype.addNews = function(news) {
	this.users.forEach(function(fn){
		fn(news);

	});
	return this;


}
Microsoft.addUser(Vanya).addUser(Petia);
Google.addUser(Vanya);
Apple.addUser(Petia);

Microsoft.addNews('Привет от Microsoft').addNews('новость №2 от Microsoft');
Google.addNews('Привет от Google').addNews('Привет от Google еще раз!!!!!!!');





				
});


		
		
		
		
		
					
							
				

				
							
							
		
		

	



	


			
		


						 

					



	
		
			 


		