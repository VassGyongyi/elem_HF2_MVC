class View {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#htmlOsszeallit();
    this.elem = $(".elem");
    this.pElem = this.elem.children("p")
    this.elem.on("click", () => {
      this.#esemenyKezelo("beleIr");
    });
  }
  #htmlOsszeallit() {
    let txt = "<div class=elem><p class=pelem></p></div>";
    this.szuloElem.html(txt)
  }
  setErtek(jel) {
    this.pElem.html(jel);
  }
  #esemenyKezelo(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default View;
