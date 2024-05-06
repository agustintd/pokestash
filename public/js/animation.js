if (typeof x === 'undefined') {
    let x;
    const cards = document.querySelectorAll(".spcard");
    const style = document.querySelector(".hover");
    cards.forEach(card => {
        card.addEventListener("mousemove", handleMove);
        card.addEventListener("touchmove", handleMove);
        card.addEventListener("mouseout", handleEnd);
        card.addEventListener("touchend", handleEnd);
        card.addEventListener("touchcancel", handleEnd);
    });

    function handleMove(e) {
        const pos = e.type === "touchmove" ? [e.touches[0].clientX, e.touches[0].clientY] : [e.offsetX, e.offsetY];
        e.preventDefault();
        const card = this;
        const l = pos[0];
        const t = pos[1];
        const h = card.clientHeight;
        const w = card.clientWidth;
        const px = Math.abs(Math.floor(100 / w * l) - 100);
        const py = Math.abs(Math.floor(100 / h * t) - 100);
        const pa = (50 - px) + (50 - py);
        const lp = (50 + (px - 50) / 1.5);
        const tp = (50 + (py - 50) / 1.5);
        const px_spark = (50 + (px - 50) / 7);
        const py_spark = (50 + (py - 50) / 7);
        const p_opc = 20 + (Math.abs(pa) * 1.5);
        const grad_pos = `background-position: ${lp}% ${tp}%;`;
        const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
        const opc = `opacity: ${p_opc / 100};`;
        const styleString = `
    .spcard:hover:before { ${grad_pos} }  /* gradient */
    .spcard:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
  `;
        cards.forEach(c => c.classList.remove("active"));
        card.classList.remove("animated");
        style.innerHTML = styleString;
        if (e.type === "touchmove") {
            return false;
        }
        clearTimeout(x);
    }

    function handleEnd() {
        style.innerHTML = "";
        //this.removeAttribute("style");
        x = setTimeout(() => {
            this.classList.add("animated");
        }, 2500);
    }
}
