import Model from "../model/Model.js";
import View from "../view/View.js";
class Controller {
  constructor() {
    this.Model = new Model();
    this.View = new View($(".container"));
    $(window).on("beleIr", (event) => {
      event.detail.setErtek(this.Model.getErtek());
    });
  }
}
export default Controller;
