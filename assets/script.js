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
            $(this).addClass("future");
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

function saveBtn(timeValue) {
    var currentDay = moment().format("MMM Do");
    var localStorageValue = localStorage.getItem(currentDay);
    var value = $("#" + timeValue).val();
    if (localStorageValue) {
        var parsedValue = JSON.parse(localStorageValue);
        parsedValue[timeValue] = value;
        localStorage.setItem(currentDay, JSON.stringify(parsedValue));
    } else {
        localStorage.setItem(currentDay, JSON.stringify({timeValue: value}));
    }
    alertLocalSave();
}

checkLocalStorage();
nineAMSaveBtn.click(function() {
    saveBtn("9am");
});
tenAMSaveBtn.click(function() {
    saveBtn("10am");
});
elevenAMSaveBtn.click(function() {
    saveBtn("11am");
});
twelvePMSaveBtn.click(function() {
    saveBtn("12pm");
});
onePMSaveBtn.click(function() {
    saveBtn("1pm");
});
twoPMSaveBtn.click(function() {
    saveBtn("2pm");
});
threePMSaveBtn.click(function() {
    saveBtn("3pm");
});
fourPMSaveBtn.click(function() {
    saveBtn("4pm");
});
fivePMSaveBtn.click(function() {
    saveBtn("5pm");
});