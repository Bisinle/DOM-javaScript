let btn = document.querySelector('.btn')

btn.addEventListener(('click'),function(){
  alert('minions Greate the great one')
})


//5 methods to access the nodes/elements in the document
 
//BY ID ( )
const heading = document.getElementById('main-heading')
console.log(heading);


/* BY ClassName ( ), returns an HTML collection of all elements in the document that has the given clasName, 
-in our case, we have  5 LI inside our UL, each LI ha a className, 
 

 */
const listItems1 = document.getElementsByClassName('list-items')
console.log(listItems1)//to see the html collection
console.log(listItems1[1])//showsthe content of specific item
console.log("------------------------")


/* BY TagName ( ), a bit similar to getElementByClassName, 
it accepts a tagName and returns all the elementss that have that tagname as an HTML collection array* */
const listItems2 =  document.getElementsByTagName('li')
console.log(listItems2)//display all the elements with that tagName
console.log(listItems2[2])//display the content of a specicig element with the tagName

/* BY QuerySelector ( ) thi accepts a tagName,ClassName or even Id, adding thier selector signs
   it is used to select one item that matches the given tag/cname/id, it best used with ID's since they are unique
   -incase more than one node share the selectors or tagName, it will only return the firs node/elemetn that marches
   the given specifier 
*/
const container1 = document.querySelector('.container')
console.log(container1)

console.log("------------------------")



/*BY QuerySelectorALL( ), following the container in the above code, this method returns  a collection of all the elements that ar sharing that selector/tagName as an array of NodeLit, for Example- if we have more than one container*/
const container2 = document.querySelectorAll('.container')
console.log(container2)
console.log("------------------------")



//STYLING THE DOCUMENT
const list_Items = document.getElementsByClassName('list-items')
// listItems1[1].style.color = 'yellow'
// console.log(list_Items)
for(let i=0; i<list_Items.length; i++){
  list_Items[i].style.color= 'wheat'
  list_Items[i].style.fontSize= '1.5rem'
  list_Items[i].style.backgroundColor= '#008B8B'
}
console.log("------------------------")

//Creating Elements(li) and adding them to the DOCUMENT
//1. lets grap the ul 
const ul = document.querySelector('ul')
//2.crete a list
const li  = document.createElement ('li') 
//3. add the child li element to our parent UL element
ul.append(li)
console.log(ul)
 //4. add text to our list
 li.innerText = 'One-Piece'
 //5. let's give the same styling as the other lis items
//  li.setAttribute('class', 'list-items')// takes two argument, the Attribute is self and the name of th Attribute
//removeAttribute () to remove it console.log(li.remove Attribute('class'))
//getAttribute to get or display in the console console.log(li.getAttribute('class'))
li.classList.add("list-items") // use classList.remove () to remove it 
// console.log(li.classList.contains("list-items")), to see if an element contains a specific className


/// N A V I G A T I N G        THE        D O M
 