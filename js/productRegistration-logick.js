//Buttons
var btnSave = document.getElementById("btnSave");
var btnClose = document.getElementById("btnClose");
var btnOpen = document.getElementById("btnOpen");

//Alert Success 
const showSuccess = document.getElementById("showSuccess");

//Txts
const txtName = document.getElementById("txtName");
const txtType = document.getElementById("txtType");

//Images
const photoRow = document.getElementById("photo-row");
const photoFirst = document.getElementById("photoFirst");
const photoSecond = document.getElementById("photoSecond");
const photoThird = document.getElementById("photoThird");
const photoFourth = document.getElementById("photoFourth");
let isPhoto = false;

if (txtName) {
    txtName.oninput = function () {
        if (showSuccess.style.display == "none")
            return;
        showSuccess.style.display = "none";
    }
}

if (txtType) {
    txtType.oninput = function () {
        if (showSuccess.style.display == "none")
            return;
        showSuccess.style.display = "none"; 
    }
}

if (btnOpen) {
    btnOpen.onclick = function () {
        clearData();
    }
}

if (btnSave) {
    btnSave.onclick = function () {
        let name = txtName.value;
        let type = txtType.value;
        let isValid = true;

        if (!name) {
            txtName.classList.add("is-invalid");
            isValid = false;
        }

        if (!type) {
            txtType.classList.add("is-invalid")
            isValid = false;
        }

        if (!isValid) {
            if (!isPhoto)
                photoRow.style.border = "solid 1px red";
            else
                photoRow.style.border = "solid 1px green";
            showSuccess.style.display = "none";
            return;
        }

        saveData(`${name}-${type}`);
    }
}

if (btnClose) {
    btnClose.onclick = function () {
        clearData();
    }
}

function saveData(data) {
    isPhoto = false;
    txtName.classList.remove("is-invalid");
    txtType.classList.remove("is-invalid");
    txtName.classList.add("is-valid");
    txtType.classList.add("is-valid");
    photoRow.style.border = "solid 1px green";

    showSuccess.style.display = "block";
    showSuccess.innerHTML = `<span>Product '${data}' is saved</span>`;

}

function clearData() {
    showSuccess.style.display = "none";
    showSuccess.value = "";
    txtName.value = "";
    txtType.value = "";
    txtName.classList = "form-control";
    txtType.classList = "form-control";
    clearPhotoRow();
}

function clearPhotoRow() {
    isPhoto = false;
    photoRow.style.border = "none";
    photoFirst.setAttribute('src', "../images/photo.png");
    photoSecond.setAttribute('src', "../images/photo.png");
    photoThird.setAttribute('src', "../images/photo.png");
    photoFourth.setAttribute('src', "../images/photo.png");
}

photoFirst.addEventListener("click", function handleClick() {
    selectPhoto(photoFirst);
});

photoSecond.addEventListener("click", function handleClick() {
    selectPhoto(photoSecond);
});

photoThird.addEventListener("click", function handleClick() {
    selectPhoto(photoThird);
});
photoFourth.addEventListener("click", function handleClick() {
    selectPhoto(photoFourth);
});

function selectPhoto(photoCard) {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        var file = _.target.files[0]; // getting a hold of the file reference

        if (file) {
            var url = URL.createObjectURL(file); // gets file url
            photoCard.setAttribute("src", url);
            isPhoto = true;
        }
    };
    input.click();
}