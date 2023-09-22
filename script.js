


const tl = gsap.timeline();
tl.from("#image,#fight",{
    x:("-100%"),
    opacity:0,
    duration:2,
    stagger:2,
})

 gsap.from(".page2 #ready",{
   x:("-100%"),
    duration:2,
    stagger:2,
    delay:5
 });

 gsap.from("#img3",{
    duration: 2.5,
     ease: "bounce.out",
     x: -500,
     delay:6,
     stagger:2,

 })
 gsap.from("#par",{
    x:100,
    opacity:0,
    ease:"bounce.out",
    delay:6,
 })
 gsap.from("#para",{
    x:100,
    opacity:0,
    ease:"bounce.out",
    delay:6,
 })

 gsap.from("#squad ",{
   
   duration:1,
   stagger:2,
   delay:1
});
