import { Controller } from "stimulus"

export default class extends Controller {
    static targets=["name","mail","namespan","mailspan"];
    connect() {
    }
    check(){
        event.preventDefault();
        var name=this.nameTarget.value;
        var mail=this.mailTarget.value;
        console.log(name);
        if(name==null||name==""){
            this.namespanTarget.style="color:red;";
            return false;
        }else{
            this.namespanTarget.style="color:red;display:none";
        }
        if(mail.indexOf('@')==-1){
            this.mailspanTarget.style="color:red;";
            return false;
        }else{
            this.mailspanTarget.style="color:red;display:none";
        }
        return true;
    }
}