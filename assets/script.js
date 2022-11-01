var currentHour;
var today = moment().format("dddd, MMMM Do");
var nineAMSaveBtn = $("#nine-am-save-btn");
var tenAMSaveBtn = $("#ten-am-save-btn");
var elevenAMSaveBtn = $("#eleven-am-save-btn");
var twelvePMSaveBtn = $("#twelve-pm-save-btn");
var onePMSaveBtn = $("#one-pm-save-btn");
var twoPMSaveBtn = $("#two-pm-save-btn");
var threePMSaveBtn = $("#three-pm-save-btn");
var fourPMSaveBtn = $("#four-pm-save-btn");
var fivePMSaveBtn = $("#five-pm-save-btn");

$("#currentDay").text(today);

function checkLocalStorage() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        for (time in parsedValue){
            var id = "#" + time;
            $(id).html(parsedValue[time]);
        }
    }
}

setInterval(function () {
    currentHour = moment().hour();
    if (currentHour < 9) {
        $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").each(function () {
            $(this).addClass("future")
        });
    }
    if (currentHour > 17) {
        $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").each(function () {
            $(this).addClass("past")
        });
    }
    if (currentHour <= 12 && currentHour >= 9) {
        $("#1pm, #2pm, #3pm, #4pm, #5pm").each(function () {
            $(this).addClass("future")
        });
        if (currentHour == 9) {
            $("#9am").addClass("present");
            $("#10am, #11am, #12pm").each(function () {
                $(this).addClass("future")
            });
        }
        if (currentHour == 10) {
            $("#10am").addClass("present");
            $("#9am").addClass("past");
            $("#11am, #12pm").each(function () {
                $(this).addClass("future")
            });
        }
        if (currentHour == 11) {
            $("#11am").addClass("present");
            $("#12pm").addClass("future");
            $("#9am, #10am").each(function () {
                $(this).addClass("past")
            });
        }
        if (currentHour == 12) {
            $("#12pm").addClass("present");
            $("#9am, #10am, #11am").each(function () {
                $(this).addClass("past")
            });
        }
    }
    if (currentHour >= 12 && currentHour <= 17) {
        $("#9am, #10am, #11am, #12pm").each(function () {
            $(this).addClass("past")
        });
        if (currentHour == 13) {
            $("#1pm").addClass("present");
            $("#2pm, #3pm, #4pm, #5pm").each(function () {
                $(this).addClass("future")
            });
        }
        if (currentHour == 14) {
            $("#2pm").addClass("present");
            $("#1pm").addClass("past");
            $("#3pm, #4pm, #5pm").each(function () {
                $(this).addClass("future")
            });
        }
        if (currentHour == 15) {
            $("#3pm").addClass("present");
            $("#1pm, #2pm").each(function () {
                $(this).addClass("past")
            });
            $("#4pm, #5pm").each(function () {
                $(this).addClass("future")
            });
        }
        if (currentHour == 16) {
            $("#4pm").addClass("present");
            $("#5pm").addClass("future");
            $("#1pm, #2pm, #3pm").each(function () {
                $(this).addClass("past")
            });
        }
        if (currentHour == 17) {
            $("#5pm").addClass("present");
            $("#1pm, #2pm, #3pm, #4pm").each(function () {
                $(this).addClass("past")
            });
        }
    }
}, 1000);

function alertLocalSave() {
    var saveAlert = $("#save-alert");
    saveAlert.css("display", "flex");
    setTimeout(() => {
        saveAlert.css("display", "none")
    }, 2000);
};

function nineAMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var nineAMValue = $("#9am").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["9am"] = nineAMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"9am": nineAMValue}));
    }
    alertLocalSave();
};

function tenAMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var tenAMValue = $("#10am").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["10am"] = tenAMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"10am": tenAMValue}));
    }
    alertLocalSave();
};

function elevenAMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var elevenAMValue = $("#11am").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["11am"] = elevenAMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"11am": elevenAMValue}));
    }
    alertLocalSave();
};

function twelvePMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var twelvePMValue = $("#12pm").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["12pm"] = twelvePMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"12pm": twelvePMValue}));
    }
    alertLocalSave();
};

function onePMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var onePMValue = $("#1pm").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["1pm"] = onePMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"1pm": onePMValue}));
    }
    alertLocalSave();
};

function twoPMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var twoPMValue = $("#2pm").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["2pm"] = twoPMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"2pm": twoPMValue}));
    }
    alertLocalSave();
};

function threePMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var threePMValue = $("#3pm").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["3pm"] = threePMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"3pm": threePMValue}));
    }
    alertLocalSave();
};

function fourPMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var fourPMValue = $("#4pm").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["4pm"] = fourPMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"4pm": fourPMValue}));
    }
    alertLocalSave();
};

function fivePMSave() {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var nineAMValue = $("#5pm").val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue["5pm"] = nineAMValue;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({"5pm": fivePMValue}));
    }
    alertLocalSave();
};

checkLocalStorage();
nineAMSaveBtn.click(nineAMSave);
tenAMSaveBtn.click(tenAMSave);
elevenAMSaveBtn.click(elevenAMSave);
twelvePMSaveBtn.click(twelvePMSave);
onePMSaveBtn.click(onePMSave);
twoPMSaveBtn.click(twoPMSave);
threePMSaveBtn.click(threePMSave);
fourPMSaveBtn.click(fourPMSave);
fivePMSaveBtn.click(fivePMSave);