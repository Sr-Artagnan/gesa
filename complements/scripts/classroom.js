function redirect() {

const Mod_from_LocStor = localStorage.getItem("Module");
let Points = 0;
const string_mod = Mod_from_LocStor.toString();

window.location.href = "./content/module" + string_mod + ".html"
}