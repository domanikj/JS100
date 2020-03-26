  let prevBtn        = document.getElementById(' prevBtn ');
  let nextBtn        = document.getElementById(' nextBtn ');
  let cusImg         = document.getElementById(' customer-img ');
  let cusName     = document.getElementById(' customer-name ');
  let cusText        = document.getElementById('customer-text');


 
 function createCustomer(id, img, name, text) {
    this.id = id;
    this.name = name;
    this.text = text;
 }




    createCustomer(0,  '../img/customer-1.jpg' , 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1,  '../img/customer-1.jpg' , 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2,   '../img/customer-1.jpg' , 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3,   '../img/customer-1.jpg', 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4,   '../img/customer-1.jpg', 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    
