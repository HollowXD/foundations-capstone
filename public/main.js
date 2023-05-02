const fortuneBtn = document.getElementById("eightballBtn")
const input = document.getElementById("inputBox")
const recordings = document.getElementById("recordings")

var count = 0;

input.addEventListener("input", function(e) {
	if (input.value.length === 0) {
  	fortuneBtn.disabled = true
  } else {
  	fortuneBtn.disabled = false
  }
})

const getFortune = () => {
    axios
        .get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data= res.data;
            alert(data);
    });
    axios 
        .post("http://localhost:4000/api/fortune/", body)
        then(res => {
            var results = document.createElement("li");
            results.textContent = data;
            addItem()
        })
};

function addItem() {
    var newItem = document.createElement("li");
    newItem.textContent = input.value;
    input.value = "";
    newItem.addEventListener("click", deleteItem);
    recordings.appendChild(newItem);
    count += 1;
}

function deleteItem(event) {
    event.target.remove();
    count -= 1;
}

fortuneBtn.addEventListener('click', getFortune)
fortuneBtn.addEventListener('click', addItem)