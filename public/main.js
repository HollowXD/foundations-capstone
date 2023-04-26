const { text } = require("express")

const fortuneBtn = document.getElementById("eightballBtn")

const getFortune = () => {
    axios
        .get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data= res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)