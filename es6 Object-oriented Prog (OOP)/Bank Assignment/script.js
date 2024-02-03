
import {course, Branch} from './script_module.js';
        
class Bank {
    constructor(bank_name, branches) {
        this.bank_name = bank_name
        this.branches = branches
    }

    addbranch(newbranch) {
        for(let i=0; i<=this.branches.length; i++) {
           let codes =  []
           codes.push(this.branches[i]['code']) 
        }                   
        
        if(codes.includes(newbranch['code'])){
            alert('Branch Already Exist')
        }
        else {
            this.branches.push(newbranch)
            alert('Branch Added Successfully!')
        }
        
       
    }

    removebranch(branch_name) {
        if (this.branches.includes(branch_name)) {
            let index = this.branches.indexOf(branch_name)
            this.branches.splice(index, 1)

            alert("Branch Removed")
        }
        else {
            alert('Branch doesnt exist')
        }
    }

    get_branches_name() {
        document.write("Branches <br>")
        for (let i = 0; i <= this.branches.length; i++) {                    
            document.write(`${this.branches[i]['name']} <br>`)
        }
    }

    get_managers_name() {
        document.write("Managers <br>")
        for (let i = 0; i <= this.branches.length; i++) {
            
            document.write(`${this.branches[i]['manager']} <br>`)
        }
    }
    
}


let branch1 = new Branch('Saddar',123,'Peshawar','Munzir','123456',20000000)
let branch2 = new Branch('Hayatabad', 125, 'Peshawar', 'Abdur Rahman', '678901', 9000000)
let branch3 = new Branch('University', 127, 'Peshawar', 'Khan', '678999', 8000000)
let branch4 = new Branch('Resturant', 129, 'Islamabad', 'Ali', '678990', 9900000)

let bank1 = new Bank('ApnaBank',[branch1, branch2, branch3, branch4])



