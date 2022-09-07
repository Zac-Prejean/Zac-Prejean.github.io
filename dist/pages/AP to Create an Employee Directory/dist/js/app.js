

const radGen = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`;
const gridCon = document.querySelector(".grid-con");
const overlay = document.querySelector(".overlay");
const popUpCon = document.querySelector(".popUp-con");
const Xbtn = document.querySelector(".Xbtn");

//--FETCH INFO

fetch(radGen)
    .then(res => res.json())
    .then(res =>  res.results)
    .then((data) => employeeInfo (data))
    .catch(err => console.log(err))

//--DISPLAY EMPLOYEE'S INFO

let employees = [];
function employeeInfo (employeeData){
    employees = employeeData;
    let employeeHTML ='';
    employees.forEach((employee,index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

        employeeHTML +=
        `<div class="card" data-index = "${index}">
        <img src="${picture.large}" alt="" class="member-img">
        <div class="txt-con">
            <h3 class="name">${name.first} ${name.last}</h3 >
            <p class="email">${email}</p>
            <p class="address">${city}</p>
        </div>
      </div>`
    });
    gridCon.innerHTML = employeeHTML;
}

 //--DISPLAY OVERLAY

 function displayPopUp(index){
    let {name,dob,phone,email,location: 
        {city, street, state, postcode}, picture } = employees[index];

    let date = new Date(dob.date);
    const popUpHTML = 
            `<div class="popUp-con">
            <img src="${picture.large}" alt="" class="member-img">
            <div>
                <div class="PU-info">
                    <h3 class="name">${name.first} ${name.last}</h3>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                </div>
                <hr />
                <div class="PU-info">
                    <p>${phone}</p>
                    <p class="address">${street.number} ${street.name}, ${state} ${postcode}</p>
                    <p>Birthday: ${date.getMonth() } / ${date.getDate()} / ${date.getFullYear()}</p>
                </div>
            </div>`;
            overlay.classList.remove("hidden");
            popUpCon.innerHTML = popUpHTML;
}

//--CARD EVENTLISTENER

gridCon.addEventListener('click',(e) =>{
    if(e.target !== gridCon)
    {
        const card = e.target.closest(".card");
        const index = card.getAttribute("data-index");
        displayPopUp(index);
    }
});

//--X BTN

Xbtn.addEventListener('click', () =>{
    overlay.classList.add("hidden");
});