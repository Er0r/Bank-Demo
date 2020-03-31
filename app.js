class Person {
    constructor(_name,_bankId,_amount) {
        this.name = _name;
        this.bankId = _bankId;
        this.amount = _amount;
        this.transList = [];
        
    }
    

    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }
    
    showTransaction(){
        for(const trans of this.transList) {
            console.log(trans);
            console.log(`${this.name}: Your Current Balance \$${this.amount}`);
            this.createDomList(trans);
        }
    }

    createDomList(trans) {
        const transactionList = document.getElementById('transList');
        if(transactionList != null)
            transactionList.appendChild(Person.createListItem(trans));
    }

}

var Fahim = new Person('Fahim',1235442,1231231231);
var Talha = new Person('Talha',1433353,566776755);
var Sadiq = new Person('Sadiq',1234455,231231253);

var transfer = (senderId,receiverId,amount ) => {
    if(senderId === Fahim.bankId) {
        Fahim.amount -= parseInt(amount);
        Fahim.transList.push(`Sending \$${amount} to ${receiverId} Successfully`);
        
    }
    else if(senderId === Talha.bankId) {
        Talha.amount -= parseInt(amount);
        Talha.transList.push(`Sending \$${amount} to ${receiverId} Successfully`); 
    }
    else if(senderId === Sadiq.bankId) {
        Sadiq.amount -= parseInt(amount);
        Sadiq.transList.push(`Sending \$${amount} to ${receiverId} Successfully`); 
    }
    if(receiverId === Fahim.bankId) {
        Fahim.amount += amount;
        Fahim.transList.push(`Receiving \$${amount} from ${senderId} Successfully`); 
    }
    else if(receiverId === Talha.bankId) {
        Talha.amount += amount;
        Talha.transList.push(`Receiving \$${amount} from ${senderId} Successfully`); 
    }
    else if(receiverId === Sadiq.bankId) {
        Sadiq.amount += amount;
        Talha.transList.push(`Receiving \$${amount} from ${senderId} Successfully`); 
    }
}

transfer(1235442,1433353,70000);

Fahim.showTransaction();
Sadiq.showTransaction();
Talha.showTransaction();