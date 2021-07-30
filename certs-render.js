// course example
let courses = [
  {
    coursename: "Course example",
    id: "123456789",
    issued: "leko",
    address: "abcxyzdefmno",
    info: "this is an example of a course",
    img: "./image/logo.jpg"
  },
  {
    coursename: "Course example 2",
    id: "987654321",
    issued: "leko",
    address: "xyzabcdefghi",
    info: "this is another example of a course",
    img: "./image/logo.jpg"
  },
  {
    coursename: "Course example 3",
    id: "123456789",
    issued: "leko",
    address: "abcxyzdefmno",
    info: "this is another example of a course",
    img: "./image/logo.jpg"
  },
  {
    coursename: "Course example 4",
    id: "987654321",
    issued: "leko",
    address: "khawijdsandkac",
    info: "this is another example of a course",
    img: "./image/logo.jpg"
  },
  {
    coursename: "BLOCKCHAIN MATHEMATICS AND COMPUTING",
    id: "987654321",
    issued: "leko",
    address: "0x05aAee206A52Ebf6e49C69f267B491BeB094401D",
    info: "https://ipfs.io/ipfs/Qmedp8cmzUWZzPuWxbaYG6w7sEu9BCYhXD498U3GtuFR9F",
    img: "./image/logo.jpg"
  }
]

function add(n){
  for(var i=1;i<=n;i++){
  const course = document.createElement('div')
  course.classList.add('course')
  course.innerHTML =
  `<div class="course__image">
    <img id="image${i}" src="${courses[i-1].img}" alt="course image preview">
  </div>
  <div class="courseinfo">
    <h2 id="name${i}" class="courseinfo__name">${courses[i-1].coursename}</h2>
    <p id="id${i}" class="courseinfo__id">ID: ${courses[i-1].id}</p>
    <p id="issued${i}" class="courseinfo__issued">Issued by: ${courses[i-1].issued}</p>
    <p id="address${i}" class="courseinfo__address">Address: ${courses[i-1].address}</p>
    <p class="courseinfo__info">Info: <a id="info${i}" href="${courses[i-1].info}">${courses[i-1].info}</a></p>
  </div>
  <div class="course__button">
    <button class="gotocert">Add</button>
  </div>`
  $("#courses").append(course)
}}
//example add(n)
add(5)
//
const certbtn = document.querySelectorAll('.gotocert')
certbtn.forEach(el =>{
  el.addEventListener('click',function(){
    $('.certblock').css('left','-50%')
    var i = Array.prototype.indexOf.call(certbtn,el)
    $('.course__add__image__src').attr('src',courses[i].img)
    $('.courseinfo__add__name').text(courses[i].coursename)
    $('.courseinfo__add__id').text('Id: ' + courses[i].id) 
    $('.courseinfo__add__issued').text('Issued by: ' + courses[i].issued)
    $('.courseinfo__add__address').text('Address: ' + courses[i].address)
    $('.courseinfo__add__info__a').text(courses[i].info)
    $('.courseinfo__add__info__a').attr('href',courses[i].info)
    setTimeout(function(){
      const backtv = document.querySelector('.backtocourse')
      backtv.scrollIntoView();
    },1500)
  })
})
document.querySelector('.backtocourse').addEventListener('click',function(){
  $('.certblock').css('left','50%')
})
function addcert(){
  // thêm function add certificate
}
function admin_addcourse(){
  // thêm function add course
}
