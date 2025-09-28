// add click animation to triangle

const triangleSpin = [
  { backgroundPosition: "0px 0px" },
  { backgroundPosition: "0px -96px" },
]

const triangleSpinTiming = {
  duration: 400,
  iterations: 2,
  easing: "steps(4, jump-none)",
}

let triangles = document.querySelectorAll("section .triangle")

triangles.forEach((tri) => {
  let spin_count = 0 // something something closure
  tri.addEventListener("click", (event) => {
    tri.animate(triangleSpin, triangleSpinTiming)

    setTimeout(() => {
      spin_count--;
    }, 1000)

    if (++spin_count >= 4) {
      tri.style.backgroundImage = "url(\"img/triangledizzy.png\")"
    }
  })
})
