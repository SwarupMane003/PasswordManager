const deletePassword = (website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Successfully deleted ${website}'s password`)
    showPasswords()
}



const showPasswords = () => {
    let tb = document.querySelector("table");

    let data = localStorage.getItem("passwords");

    if (data == null || JSON.parse(data).length == 0) {
        tb.innerHTML=`<tr>
        <th scope="col">Website</th>
        <th scope="col">Username</th>
        <th scope="col">Password</th>
        <th scope="col">Action</th>
      </tr>
      <tr> 
      <td >No Data to Show</td>
      <td ></td>
      <td ></td>
      <td ></td>
      </tr>
      `
      ;
    }
    else {
        tb.innerHTML=`<tr>
        <th scope="col">Website</th>
        <th scope="col">Username</th>
        <th scope="col">Password</th>
        <th scope="col">Action</th>
      </tr>`;
        let arr = JSON.parse(data);
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            let str = `
    <tr>
    <td scope="col">${element.website}</td>
    <td scope="col">${element.username}</td>
    <td scope="col">${element.password}</td>
    <td scope="col"> <button type="delete"  class="btn btn-primary" onclick="deletePassword('${element.website}')">Delete</button></td></tr>`
            tb.innerHTML = tb.innerHTML + str;
        }
    }
    website.value="";
    username.value="";
    password.value="";
}


showPasswords();
document.querySelector(".bt1").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked....");
    console.log(username.value, password.value);
    let passwords = localStorage.getItem("passwords");
    console.log(passwords);
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value , username: username.value, password: password.value })
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords();
})