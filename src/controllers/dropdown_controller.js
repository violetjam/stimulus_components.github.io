import { Controller } from "stimulus"
import {useClickOutside} from "stimulus-use";
import {enter, leave} from "el-transition";

export default class extends Controller {
    static targets = [ "view" ,"other","input","option"];
    isOpen;
    connect(){
        this.close()
        this.isOpen = false;
        useClickOutside(this, { element: this.viewElement })
    }
    open(){
        this.isOpen = true;
        enter(this.viewTarget);
    }
    close(){
        this.isOpen = false;
        leave(this.viewTarget);
    }

    toggle(){
        if(this.isOpen)
            this.close()
        else
            this.open()
    }
    clickOutside(e){
        e.preventDefault();
        this.close();
    }
    inputOther(){
        console.log(2);
        var value=$(this.otherTarget).text();
        console.log(value);
        $(this.inputTarget).css('display','inline');
        $(this.inputTarget).val(value);
        $(this.otherTarget).css('display','none');
    }
    updateOther(){
        console.log(3);
        var evt=window.event || this.event;
        if(evt.keyCode == 13){
            var value=$(this.inputTarget).val();
            $(this.otherTarget).text(value);
            $(this.inputTarget).css('display','none');
            $(this.otherTarget).css('display','inline');
        }
    }
}