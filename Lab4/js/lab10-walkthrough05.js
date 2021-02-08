/* put your DOM code here */
$(function	()	{					
    //	create	a	new	DOM	element
    var	img	=	$('<img	src="images/art/thumbs/13030.jpg"	>');				
    //	and	now	add	the	new	element	after	the	panel
    var	panel	=	$('.panel');						
    panel.after(img);				
});
$(function	()	{					
    //	create	a	new	DOM	element
    var	img	=	$('<img	src="images/art/thumbs/13030.jpg"	>');				
    //	and	now	add	the	new	element	after	the	panel
    var	panel	=	$('.panel');						
    panel.before(img);
    img.insertBefore(panel);				
});

