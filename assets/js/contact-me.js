function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let massage = document.getElementById("massage").value

    if (!name){
        return alert ("Name Tidak Boleh kosong");
    }

    if (!email){
        return alert ("Email Tidak Boleh Kosong");
    }

    if (!phone){
        return alert ("Phone Number Tidak Boleh Kosong");
    }
    if (!subject){
        return alert ("Subject Tidak Boleh Kosong");
    }
    if (!massage){
        return alert ("Wajib Mengisi Text");
    }
    
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(massage)

    let emailReceiver = "jokowi@gmail.com"

    let a = document.createElement(`a`)
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, My Name ${name}, ${massage}, This Is My Phone Number ${phone}`
    console.log(a);
    a.click()
}