function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function canvas() {
  const canvas = document.querySelector("#page1>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-011.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-012.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-013.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-014.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-015.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-016.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-017.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-018.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-019.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-020.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-021.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-022.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-023.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-024.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-025.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-026.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-027.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-028.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-029.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-030.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-031.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-032.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-033.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-034.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-035.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-036.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-037.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-038.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-048.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-049.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-050.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-051.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-052.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-053.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-054.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-055.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-056.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-057.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-058.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-059.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-060.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-061.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-062.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-063.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-064.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-065.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-066.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-078.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-079.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-080.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-081.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-082.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-083.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-084.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-085.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-086.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-087.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-088.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-089.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-090.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-091.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-092.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-093.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-094.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-095.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-096.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-097.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-098.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-099.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-100.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-101.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-102.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-103.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-104.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-105.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-106.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-107.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-108.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-109.jpg
  ./ezgif-3-dd9f4ad5b1-jpg/ezgif-frame-110.jpg
  
      `;
    return data.split("\n")[index];
  }

  const frameCount = 81;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page1 canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page1 canvas",
    pin: true,
    ////markers: true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
}
canvas();

//even-numbers-div
gsap.fromTo(
  "#page2 #right h1, #page2 #right p",
  { opacity: 0,
   },

  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2 #right h1, #page2 #right p",
      scroller: "#main",
      start: "top 80%",
     //markers: true,
      scrub: true,
    },
  }
);
gsap.fromTo(
  "#page4 #right h1, #page4 #right p",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4 #right h1, #page4 #right p",
      scroller: "#main",
      start: "top 80%",
     //markers: true,
      scrub: true,
    },
  }
);
gsap.fromTo(
  "#page6 #left h1, #page6 #left p",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6 #left h1, #page6 #left p",
      scroller: "#main",
      start: "top 80%",
     //markers: true,
      scrub: true,
    },
  }
);

//odd-numbers-div
gsap.fromTo(
  "#page3 #left h1, #page3 #left p",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3 #left h1, #page3 #left p",
      scroller: "#main",
      start: "top 80%",
     //markers: true,
      scrub: true,
    },
  }
);
gsap.fromTo(
  "#page5 #left h1, #page5 #left p",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page5 #left h1, #page5 #left p",
      scroller: "#main",
      start: "top 80%",
     //markers: true,
      scrub: true,
    },
  }
);
gsap.fromTo(
  "#page5 #left h1, #page5 #left p",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page5 #left h1, #page5 #left p",
      scroller: "#main",
      start: "top 80%",
     //markers: true,
      scrub: true,
    },
  }
);