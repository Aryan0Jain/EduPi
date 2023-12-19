// const updateButton = document.getElementById("update-profile-button");
// updateButton.style.display = "none";
function editField(fieldName) {
	const fieldElement = document.getElementById(`${fieldName}-input`);
	const updateButton = document.getElementById("update-profile-button");
	if (fieldElement) {
		const isHidden =
			fieldElement.style.display === "none" ||
			fieldElement.style.display === "";

		fieldElement.style.display = isHidden ? "block" : "none";
		if (fieldElement.style.display === "block") {
			fieldElement.setAttribute("required", "true");
			console.log(fieldElement);
		} else {
			fieldElement.removeAttribute("required");
			console.log(fieldElement);
		}
		// Show the "Update Profile" button only when an input field is displayed
		updateButton.style.display = isHidden ? "block" : "none";
	}
}

const form = document.querySelector(".edit-form");
const detailTitle = document.querySelector(".edit-form .detail-title");
const inputInfo = document.querySelector(".edit-form .input-info");
const input = document.querySelector(".edit-form input");
const formError = document.querySelector(".edit-form .form-error");
const submitBtn = document.querySelector(".edit-form .update-detail");
const cancelBtn = document.querySelector(".edit-form .cancel-detail");
const editObj = {
	form,
	title: detailTitle,
	inputInfo,
	input,
	error: formError,
	submitBtn,
	cancelBtn,
};
cancelBtn.addEventListener("click", () => {
	form.style.display = "none";
});

console.dir(editObj);
function updateProfile(detail) {
	editObj.form.style.display = "flex";
	editObj.title.innerHTML = "Update your " + detail;
	editObj.input.type =
		detail == "Picture" ? "file" : detail == "Number" ? "number" : "text";
	editObj.error.innerHTML = "";

	////////////////////////////////////////////////
	////Write Code here to update database
	///////////////////////////////////////////////
}
