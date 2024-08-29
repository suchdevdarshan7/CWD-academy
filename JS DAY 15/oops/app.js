// ! template --> class 


class ApiDetail {
    display() {
        console.log(this);
    }
};


let { display } = new ApiDetail(); //! Object creation


display()
