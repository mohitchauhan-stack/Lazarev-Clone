
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
            };
        }
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}





function loadingAnimation(){
    var tl = gsap.timeline()

    tl.from(".page1", {
        opacity: 0,
        duration: .3,
        delay: .2
    })
    tl.from(".page1", {
        transform: " scaleX(.7) scaleY(0) translateY(80%)",
        borrderRadius: "100px",
        duration: 1,
        ease: "expo.in",
    })
    tl.from("nav", {
        opacity: 0,
        delay: -.1
    })
    tl.from(".page1 h1, .page1 h3, .page1 p, .page1 div", {
        opacity: 0,
        duration: .3,
        stagger: .2
    })

}






function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to( ".nav-bottom", {
        height: "20vh",
        backdropFilter: "blur(10px)",
    })
    tl.to( ".nav-part2 h5", {
        display: "block"
    })
    tl.to( ".nav-part2 h5 span", {
        y: 0,
        // duration: .07,
        stagger: {
            amount: 0
        }
    })
})

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to( ".nav-part2 h5 span", {
            y: 25,
            // duration: .07,
            stagger: {
                amount: .1
            }
        })
        tl.to( ".nav-part2 h5", {
            display: "none",
            // overflow: "hidden",
            duration: .1
        })
        tl.to( ".nav-bottom", {
            height: "0",
            duration: .1
        })
    })
}






function page2Animation () {
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach( function (elem) {
        elem.addEventListener( "mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
            })
        })
    elem.addEventListener( "mouseleave", function () {
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })
    elem.addEventListener( "mousemove", function (dets) {
        console.log(elem.getBoundingClientRect().y)
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 50,
            y: dets.y - elem.getBoundingClientRect().y - 150
        })
    })
})
}






function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center");
    var video = document.querySelector(".page3 video");


    page3Center.addEventListener( "click", function () {
        video.play();
        gsap.to( video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borrderRadius: 0
        })
    })

    video.addEventListener( "click", function () {
        video.pause();
        gsap.to( video, {
            transform: "scaleX(0) scaleY(0)",
            opacity: 0,
            borrderRadius: "20px"
        })
    })
}






function page7VideoAnimation(){

    var sections = document.querySelectorAll(".sec-right");

    sections.forEach( function (elem) {
        // console.log(elem.childNodes[5].childNodes[1]);
    })

    sections.forEach( function (elem) {
        elem.addEventListener( "mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
                gsap.to(elem.childNodes[5].childNodes[1], {
                    opacity: 1,
                    scale: 1
                })
        })
        elem.addEventListener( "mouseleave", function () {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load();
                gsap.to(elem.childNodes[5].childNodes[1], {
                    opacity: 0,
                    scale: 1
                })
        })
        elem.addEventListener( "mousemove", function (dets) {
            // console.log(elem.getBoundingClientRect().x);
            gsap.to( elem.childNodes[5].childNodes[1], {
                x: dets.x - elem.getBoundingClientRect().x - 38,
                y: dets.y - elem.getBoundingClientRect().y - 670
            })
        })
    })
}







function page8VideoAnimation(){
    var contElem = document.querySelectorAll(".pg8-cont-elem");
        contElem.forEach( function (elem) {
            // console.log(elem);
            // console.log(elem.childNodes[5].childNodes[3]);

            const heading = elem.querySelector("h1");
            const para = elem.querySelector("p");
            const img = elem.querySelector(".pg8-elem-vdo img");
            const video = elem.querySelector(".pg8-elem-vdo video");

            elem.addEventListener("mouseenter", function () {
                // hide text with gsap
                gsap.to([para, img], {
                    opacity: 0,
                    duration: 0.5
                });
                // show and play video
                gsap.to(video, {
                    opacity: 1,
                    // scale: 1,
                    height: "85%",
                    duration: 0.3,
                    onStart: () => video.play()
                });
                // show border top
                gsap.to(elem, {
                    borderTopWidth: "4px",
                    duration: 0.2
                });
            });
            elem.addEventListener("mouseleave", function () {
                // bring text & image back
                gsap.to([para, img], {
                    opacity: 1,
                    duration: 0.5
                });
                gsap.to([img], {
                    opacity: 0,
                    duration: 0.5
                });

                // hide and pause video
                gsap.to(video, {
                    opacity: 1,
                    duration: 0.5,
                    // scale: 1,
                    height: "60%",
                    onComplete: () => video.load()
                });
                gsap.to(elem, {
                    borderTopWidth: "0px",
                    duration: 0.2
                });
            });
            // elem.addEventListener( "mouseenter", function () {
            //     elem.style.borderTopWidth = "2px",
            //     elem.childNodes[3].style.opacity = 0,
            //     elem.childNodes[5].childNodes[3].style.opacity = 1,
            //     elem.childNodes[5].childNodes[3].play()
            // })
        })
}






function page11Animations(){
    gsap.from(".btm11-part2 h4", {
        x:0,
        duration: 1,
        stagger:{
            amount: 0
        },
        scrollTrigger:{
            trigger: ".btm11-part2",
            scroller: ".main",
            // marker: true,
            start: "top 80%",
            end: "top -30%",
            scrub: true
        }
    })
    gsap.from(".btm11-part3 h4", {
        x:0,
        duration: 1,
        stagger:{
            amount: 0
        },
        scrollTrigger:{
            trigger: ".btm11-part3",
            scroller: ".main",
            // marker: true,
            start: "top 80%",
            end: "top -30",
            scrub: true
        }
    })
    gsap.from(".btm11-part4 h4", {
        x:0,
        duration: 1,
        stagger:{
            amount: 0
        },
        scrollTrigger:{
            trigger: ".btm11-part4",
            scroller: ".main",
            // marker: true,
            start: "top 80%",
            end: "top -30",
            scrub: true
        }
    })
}





locomotiveAnimation()
loadingAnimation()
navAnimation();
page2Animation ();
page3VideoAnimation();
page7VideoAnimation();
page8VideoAnimation()
page11Animations()

































