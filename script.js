const validator = (event) => {
    event.preventDefault()
    const kolom_nomor = document.getElementById('user-input')
    const inputNomor = document.getElementById('user-input').value;
    if(inputNomor){
        const nomor = inputNomor.replace(/[^\d+]/g, '')
        const pola = /^(\+1|1)?[\s-]*\(?\d{3}\)?[\s-]*\d{3}[\s-]*\d{4}$/;
        const isValid = (nomor.length === 10 || nomor.length === 11) && pola.test(inputNomor);
        if(isValid){
            const div_result = document.getElementById('results-div');
            const p = document.createElement("p")
            const br = document.createElement("br")
            p.innerHTML = `Valid US number: ${inputNomor}`
            div_result.appendChild(p)
            div_result.appendChild(br)
            p.style.color = "green"
            div_result.style.display = "block"
            kolom_nomor.value = ""
        }else{
            const div_result = document.getElementById('results-div');
            const p = document.createElement("p")
            const br = document.createElement("br")
            p.innerHTML = `Invalid US number: ${inputNomor}`
            div_result.appendChild(p)
            div_result.appendChild(br)
            p.style.color = "red"
            div_result.style.display = "block"
            kolom_nomor.value = ""
        }
    }else{
        alert("Please provide a phone number")
    }
}

const clear_all = (event) => {
    event.preventDefault()
    const div_result = document.getElementById('results-div');
    const inputNomor = document.getElementById('user-input')
    inputNomor.value = ""
    div_result.innerHTML = ""
    div_result.style.display = "none"
}