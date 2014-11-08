MakeItRain.js
=======
*The JQuery plugin you've been waiting for your whole life.  **Make it rain cash on any website.***


Preview:

![Example](http://i.imgur.com/MeNXlWS.gif)


####**[Live Demo](http://dboudro.github.io/MakeItRain.js/)**



### Adapting the Current Code

You can easily substitute falling money for the image of your choice.
 [This Site](http://Dylanboudro.com) uses MakeItRain.js to make it snow.  Simply replace 'money.png' (as seen below) with the image of your choice.

How to
=====

1. Create an html element with the id "make-it-rain"

2. put the following code into an your html page

```
<script src="js/MakeItRain.js"></script>
			<script>
			$(document).ready(function(){
			$("#make-it-rain").click(function(){
			$(document).ready(function() {
					$.MakeItRain({images : ['images/money.png'],total : 200});
			});
			});
			});
			</script>
```

3.  use the control points in the MakeItRain.js file to control the behavior of the money.

Sites Using MakeItRain.js
==========
*More Coming Soon*
- [My Portfolio](http://Dylanboudro.com)
- [Your Website]()




