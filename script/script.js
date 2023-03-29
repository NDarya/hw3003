const BASE = "https://dummyjson.com"

fetch(BASE + "/users")
    .then(res => res.json())
    .then(res => reload(res.users))

let cont = document.querySelector('.container')

function reload(arr) {


    for (let item of arr) {
        let wrapper = document.createElement('div')
        let under25 = document.createElement('div')
        let under50 = document.createElement('div')
        let others = document.createElement('div')
        let user_box = document.createElement('div')
        let fullName = document.createElement('h3')
        let age = document.createElement('div')
        let p = document.createElement('p')
        let span = document.createElement('span')

        user_box.classList.add("user_box")
        age.classList.add("age")
        others.classList.add('others', 'box')
        under25.classList.add('box')
        under50.classList.add('box')

        p.innerHTML = "Age"
        

        if (item.age <= 25) {
            fullName.innerHTML = `${item.firstName} ${item.lastName}`
            span.innerHTML = item.age
            
            
        } else if (item.age <= 50) {
            fullName.innerHTML = `${item.firstName} ${item.lastName}`
            span.innerHTML = item.age
            
            
        } else {
            fullName.innerHTML = `${item.firstName} ${item.lastName}`
            span.innerHTML = item.age
            
        }
        cont.append(wrapper)
        wrapper.append(under25, under50, others)
        under25.append(user_box)
        under50.append(user_box)
        others.append(user_box)
        user_box.append(fullName, age)
        age.append(p, span)

    }
    }
