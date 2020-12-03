const navSilde = () => {
    var i;
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const serbar = document.querySelector('.serbar');

    burger.addEventListener('click', () => {
        // toggle link
        
        i++;
        nav.classList.toggle('nav-active');
        serbar.classList.toggle('serbar-active');
        $("nav2").css("opacity","0.3");
         

    //     // animate link
    //     navLinks.forEach((link, index) => {
    //         // console.log(index);
        
    //     // navLinks.forEach((link, index) => {
    //     //     console.log(index)
    //         if(link.style.animation){
    //             link.style.animation = '';
    //         }else{
    //      link.style.animation = 'navLinkFade 0.5s ease forwards ${ index / 7 + 0.3 }s'
    //     //  console.log(index/7);
    //         }
    //    });

    //   burger.classList.toggle('.toggle');

    });
    // if(i==2){
    // $("nav1").css("opacity","1");
    // }
    input.addEventListener('click',()=>{
        $('value').css("opacity","0")
        // var div1=document.createAttribute('div')
        // div1=document.add
    })

};

// function daily2(){
//     document.getElementById('dp1').fadeOut();
// }

navSilde();