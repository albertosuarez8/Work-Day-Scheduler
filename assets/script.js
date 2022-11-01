var today = moment().format("dddd, MMMM Do");

$("#currentDay").text(today);

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
        $("1pm, #2pm, #3pm, #4pm, #5pm").each(function () {
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