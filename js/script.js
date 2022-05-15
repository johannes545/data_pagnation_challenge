const itemsPerPage = 9;


function createElement(ele, attribute, value) {
   const element = document.createElement(ele);
   element[attribute] = value;
   return element;
};
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const name = list[i].name;
         const picture = list[i].picture;
         const registered = list[i].registered;
         const email = list[i].email;

         const li = createElement('li', 'className', 'student-item cf');
         const div1 = createElement('div', 'className', 'student-details');
         const img = createElement('img', 'className', 'avatar');
         img.src = picture.thumbnail;
         const h3 = createElement('h3')
         h3.textContent = `${name.first} ${name.last}`;
         const span1 = createElement('span', 'className', 'email');
         span1.textContent = email;
         const div2 = createElement('div', 'className', 'joined-details');
         const span2 = createElement('span', 'className', 'date');
         span2.textContent = `joined ${registered.date}`;

         div1.appendChild(img)
         div1.appendChild(h3)
         div1.appendChild(span1);

         div2.appendChild(span2);

         li.appendChild(div1)
         li.appendChild(div2)

         ul.appendChild(li)
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


function addPagination(list) {
   const numberOfPages = Math.ceil(list.length / itemsPerPage);
   const ul = document.querySelector('.link-list');
   ul.innerHTML = "";
   for (let i = 1; i <= numberOfPages; i++) {
      const button = document.createElement('button');
      const li = document.createElement('li')
      button.type = 'button'
      button.textContent = i;
      li.appendChild(button);

      ul.appendChild(li);
   }
   ul.firstChild.firstChild.className = 'active';

   ul.addEventListener('click', () => {
      const button = event.target;
      const listItems = ul.children;

      if (button.tagName === 'BUTTON') {
         for (let i = 0; i < listItems.length; i++) {
            let li = listItems[i].firstChild;
            if (li.className === 'active') {
               li.classList.remove('active');
            }
         }
         button.className = 'active'
         const page = parseInt(button.textContent)
         showPage(list, page)
      }
   })

}



// Call functions
showPage(data, 1);
addPagination(data);