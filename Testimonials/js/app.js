  let prevBtn        = document.getElementById(' prevBtn ');
  let nextBtn        = document.getElementById(' nextBtn ');
  let cusImg         = document.getElementById(' customer-img ');
  let cusName     = document.getElementById(' customer-name ');
  let cusText        = document.getElementById('customer-text');


 function createCustomer(id, img, name, text) {
    this.id        = id;
    this.img    = img;
    this.name = name;
    this.text     = text;
 }


let cus1 = new    createCustomer(0,  '../img/customer-1.jpg' , 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
let cus2 = new   createCustomer(1,   '../img/customer-2.jpg' , 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
let cus3 = new   createCustomer(2,   '../img/customer-3.jpg' , 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
let cus4 = new     createCustomer(3,   '../img/customer-4.jpg', 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
let cus5 = new    createCustomer(4,   '../img/customer-5.jpg', 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

let cusArr = [ cus1, cus2, cus3, cus4, cus5 ] ;


