
let asideLi = document.querySelectorAll('aside ul li')
let asideUl = document.querySelector('aside ul')



const listItems = document.querySelectorAll('#menu-list li');

asideLi.forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent the default anchor behavior (page refresh)
        event.preventDefault();

        // Remove 'active' class from all <li> elements
        asideLi.forEach(li => li.classList.remove('active'));

        // Add 'active' class to the clicked <li>
        this.classList.add('active');
    });
});


let menuBar = document.getElementById('menu-bar')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')

menuBar.addEventListener('click',()=>{
    navigation.classList.toggle('active')
    main.classList.toggle('active')
})





