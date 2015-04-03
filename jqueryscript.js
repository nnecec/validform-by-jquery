$(document).ready(function(){
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, left_next,opacity, scale,scale_next; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches
	//next按钮动画
	$('.next').click(function(){
		current_fs=$(this).parent();
		next_fs=$(this).parent().next();
		
		
		next_fs.show();
		
		next_fs.css({'transform':'scale(0.8)'});
		
		current_fs.animate({opacity:0},{
			step:function(now,fx){
				scale=1-(1-now)*0.2;
				left=-30+(now*30)+'%';
				current_fs.css({'left':left,
							   'transform':'scale('+scale+')'});
				
				left_next=30-(30-now*30)+'%';
				opacity=1-now;
				scale_next=0.8+(1-now)*0.2;
				next_fs.css({'left':left_next,
							'opacity':opacity,
							'transform':'scale('+scale_next+')'});
			},
			duration:400,
			complete:function(){
				current_fs.hide();
			}
		});
	});
	//previous按钮动画
	$('.previous').click(function(){
		current_fs=$(this).parent();
		previous_fs=$(this).parent().prev();
		
		previous_fs.show();
		previous_fs.css({'transform':0.8})
		
		current_fs.animate({opacity:0},{
			step:function(now,fx){
				scale=1-(1-now)*0.2;
				left=(1-now)*30+'%';
				
				current_fs.css({'transform':'scale('+scale+')',
							   'left':left})
				
				scale_next=0.8+(1-now)*0.2;
				left_next=-30+(1-now)*30+'%';
				opacity=1-now;
				previous_fs.css({'transform':'scale('+scale_next+')',
								 'left':left_next,
								 'opacity':opacity})
			},
			duration:400,
			complete:function(){
				current_fs.hide();
			}
		});
	});
	//confirm
	$('confirm').click(function(){
		return false;
	})
	
	
	//fieldset1验证
	$('input[name=next]').attr('disabled',true)
						 .css('background','#555');
	
	
	$('#one :input').blur(function(){
		var account=$('input[name=account]');
		var password=$('input[name=password]');
		var cpassword=$('input[name="cpassword"]');
		var button=$('#one input[name="next"]');
		var checkaccount=false;
		var checkpassword=false;
		
		if(account.val().length<6){
			account.addClass('error');
			
		}else{
			account.removeClass('error');
			checkaccount=true;
		};
		
		if(password.val().length<4){
			password.addClass('error');
		}else{
			password.removeClass('error');
		};
		
		if(password.val()!=cpassword.val()||password.val().length<4){
			cpassword.addClass('error');
			checkpassword=false;
		}else{
			cpassword.removeClass('error');
			checkpassword=true;
		};
		
		if(checkaccount==true&&checkpassword==true){
			button.removeAttr('disabled');
			button.css('background','#E27575');
		}else{
			button.attr('disabled',true);
			button.css('background','#555');
		}
	});
	
	
	//fieldset2验证
	$('#two :input').blur(function(){
		var email=$('input[name=email]');
		var age=$('input[name=age]');
		var button=$('#two input[name="next"]');
		var checkemail=false;
		var checkage=false;
		
		if(email.val()==''||!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email.val())){
			email.addClass('error');
		}else{
			email.removeClass('error');
			checkemail=true;
		};
		
		if(age.val()==''||!/^[[1-9]\d{0,1}$/.test(age.val())){
			age.addClass('error');
		}else{
			age.removeClass('error');
			checkage=true;
		};
		
		if(checkemail==true&&checkage==true){
			button.removeAttr('disabled');
			button.css('background','#E27575');
		}else{
			button.attr('disabled',true);
			button.css('background','#555');
		}
	});
	
	$('form :input').keyup(function(){
		$(this).triggerHandler("blur");
	});
	
	$('p.ccc').click(function(){
		$(this).hide();
		$('p.lrc').slideDown(600);
	})
})