export default class Lampa {
    #allapot = false; //false - le van kapcsolva, true - fel van kapcsolva
    #id = 0;
    #divElem;
    #szuloElem;

    constructor(allapot, id, szuloElem) {
        this.#id = id;
        this.#allapot = allapot;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
        this.#divElem = this.#szuloElem.children("div:last-child");
        this.#szinBeallit();
        this.#divElem.on("click", () => {
            this.#trigger("kapcsolas")
            this.setAllapot()
        })
    }
    #trigger(esemenynev){
        const e=new CustomEvent(esemenynev,{detail:this.#id})
        window.dispatchEvent(e)

        }


    #megjelenit(){
        let txt = ` <div></div> `;
        this.#szuloElem.append(txt);

    }
    setAllapot() {
        this.#allapot = !this.#allapot;
        this.#szinBeallit();

    }
    #szinBeallit() {
        if (this.#allapot) {
            //rátesszük a divre a felkapcs osztályt
            this.#divElem.addClass("felkapcs");
        } else {
            //levesszük a divről a felkapcs osztályt
            this.#divElem.removeClass("felkapcs");
        }
    }

}