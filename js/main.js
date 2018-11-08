//baguetteBox.run('.gallery');

//$(document).on('click', '[data-toggle="lightbox"]', function(event) {
/*                event.preventDefault();
                $(this).ekkoLightbox();
            });*/


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$("#button1").click(function(){
   $(this).toggleClass("rotate-180");
})

function openModal() {
		if(event.target.id==="view1")
		{
				$('#lightboxImage1')[0].click();
		} else if(event.target.id==="view2"){
				$('#lightboxImage2')[0].click();
		} else if(event.target.id==="view3"){
				$('#lightboxImage3')[0].click();
		} else if(event.target.id==="view4"){
				$('#lightboxImage4')[0].click();
		} else if(event.target.id==="view5"){
				$('#lightboxImage5')[0].click();
		} else if(event.target.id==="view6"){
				$('#lightboxImage6')[0].click();
		}

            
        }

let clicks1 = 0;
let clicks2 = 0;
let clicks3 = 0;
let clicks4 = 0;
let clicks5 = 0;
let clicks6 = 0;

function onClickB1() {
    clicks1 += 1;
    document.getElementById("clicks1").innerHTML = clicks1;
};

function onClickB2() {
    clicks2 += 1;
    document.getElementById("clicks2").innerHTML = clicks2;
};

function onClickB3() {
    clicks3 += 1;
    document.getElementById("clicks3").innerHTML = clicks3;
};

function onClickB4() {
    clicks4 += 1;
    document.getElementById("clicks4").innerHTML = clicks4;
};

function onClickB5() {
    clicks5 += 1;
    document.getElementById("clicks5").innerHTML = clicks5;
};

function onClickB6() {
    clicks6 += 1;
    document.getElementById("clicks6").innerHTML = clicks6;
};
