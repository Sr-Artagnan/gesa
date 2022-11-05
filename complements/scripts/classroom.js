function redirect() {

const Mod_from_LocStor = localStorage.getItem("Module");

if(Mod_from_LocStor == 0 || Mod_from_LocStor == null || Mod_from_LocStor == undefined) {
    localStorage.setItem("Module", 1);
    window.location.href = "./content/module1.html";
}
else{
    const string_mod = Mod_from_LocStor.toString();
    window.location.href = "./content/module" + string_mod + ".html";
}


}
