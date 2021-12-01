//search history javascrip logic
var searchHistory = document.querySelector(".header__search-history");

searchHistory.onmousedown = function (event) {
	event.preventDefault();
}

// select date javascrip logic
var selectDateBtn = document.querySelector(".header__input-select-date");
var selectDateTable = document.querySelector(".header__select-date-wrapper");

selectDateTable.onclick = function (event) {
	event.stopPropagation();
}

selectDateBtn.onclick = function () {
	selectDateTable.classList.toggle("open");
}

//seclect quantity customer

var headerNumberCustomer = document.querySelector(".header__number-customer");
var numberCustomerSelect = document.querySelector(".number-customer__select ");

numberCustomerSelect.onclick = function (event) {
	event.stopPropagation();
}

headerNumberCustomer.onclick = function () {
	numberCustomerSelect.classList.toggle("open");
}


//select currency and languages
var selectLanguageBtn = document.querySelector(".header__navbar-currency");
var selectTable = document.querySelector(".header__currency-wrapper");

selectTable.onclick = function (event) {
	event.stopPropagation();
}


selectLanguageBtn.onclick = function () {
	selectTable.classList.toggle("display-flex");
}

window.addEventListener("click", function (event) {
	if (!selectDateBtn.contains(event.target)) {
		selectDateTable.classList.remove("open");
	 } 

	 if (!headerNumberCustomer.contains(event.target)) {
		numberCustomerSelect.classList.remove("open");
	 }

	 if (!selectLanguageBtn.contains(event.target)) {
	 	selectTable.classList.remove("display-flex");
	 }
});
