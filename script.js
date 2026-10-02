/* =====================================================
   RAILNOVA RAILWAY RESERVATION SYSTEM
   FRONTEND DEMO
===================================================== */


/* =====================================================
   TRAIN DATA
   DEMO DATA FOR PROJECT
===================================================== */
const API_URL = "http://localhost:5000";
const trains = [

    {
        no: "12673",
        name: "Cheran Express",
        from: "Chennai",
        to: "Coimbatore",
        dep: "22:10",
        arr: "06:00",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 82, fare: 310 },
            "3A": { seats: 46, fare: 820 },
            "2A": { seats: 18, fare: 1150 }
        }
    },

    {
        no: "12675",
        name: "Kovai Express",
        from: "Chennai",
        to: "Coimbatore",
        dep: "06:10",
        arr: "13:50",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 125, fare: 300 },
            "3A": { seats: 52, fare: 790 },
            "2A": { seats: 21, fare: 1120 }
        }
    },

    {
        no: "12635",
        name: "Vaigai Superfast Express",
        from: "Chennai",
        to: "Madurai",
        dep: "13:50",
        arr: "21:40",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 96, fare: 295 },
            "3A": { seats: 38, fare: 770 },
            "2A": { seats: 14, fare: 1090 }
        }
    },

    {
        no: "12637",
        name: "Pandian Superfast Express",
        from: "Chennai",
        to: "Madurai",
        dep: "21:40",
        arr: "05:20",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 67, fare: 320 },
            "3A": { seats: 31, fare: 810 },
            "2A": { seats: 9, fare: 1160 }
        }
    },

    {
        no: "12653",
        name: "Rockfort Express",
        from: "Chennai",
        to: "Trichy",
        dep: "23:30",
        arr: "05:25",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 72, fare: 270 },
            "3A": { seats: 40, fare: 740 },
            "2A": { seats: 15, fare: 1040 }
        }
    },

    {
        no: "12633",
        name: "Kanyakumari Express",
        from: "Chennai",
        to: "Kanyakumari",
        dep: "20:30",
        arr: "07:00",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 88, fare: 390 },
            "3A": { seats: 44, fare: 910 },
            "2A": { seats: 17, fare: 1300 }
        }
    },

    {
        no: "12631",
        name: "Nellai Superfast Express",
        from: "Chennai",
        to: "Tirunelveli",
        dep: "19:50",
        arr: "07:30",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 73, fare: 370 },
            "3A": { seats: 35, fare: 870 },
            "2A": { seats: 11, fare: 1250 }
        }
    },

    {
        no: "22153",
        name: "Salem Intercity",
        from: "Chennai",
        to: "Salem",
        dep: "05:50",
        arr: "11:15",
        days: "Mon Tue Wed Thu Fri Sat",
        classes: {
            SL: { seats: 110, fare: 240 },
            "3A": { seats: 50, fare: 680 },
            "2A": { seats: 20, fare: 950 }
        }
    },

    {
        no: "12679",
        name: "Coimbatore Intercity",
        from: "Chennai",
        to: "Coimbatore",
        dep: "14:30",
        arr: "21:00",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 94, fare: 280 },
            "3A": { seats: 42, fare: 760 },
            "2A": { seats: 16, fare: 1080 }
        }
    },

    {
        no: "16823",
        name: "Ananthapuri Express",
        from: "Chennai",
        to: "Nagercoil",
        dep: "19:35",
        arr: "08:20",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 61, fare: 410 },
            "3A": { seats: 29, fare: 930 },
            "2A": { seats: 12, fare: 1320 }
        }
    },

    {
        no: "22671",
        name: "Tejas Express",
        from: "Chennai",
        to: "Madurai",
        dep: "06:00",
        arr: "12:30",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 0, fare: 0 },
            "3A": { seats: 18, fare: 1150 },
            "2A": { seats: 8, fare: 1450 }
        }
    },

    {
        no: "16127",
        name: "Chennai Guruvayur Express",
        from: "Chennai",
        to: "Coimbatore",
        dep: "21:15",
        arr: "05:55",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 45, fare: 330 },
            "3A": { seats: 22, fare: 840 },
            "2A": { seats: 6, fare: 1180 }
        }
    },

    {
        no: "22637",
        name: "West Coast Express",
        from: "Chennai",
        to: "Coimbatore",
        dep: "13:15",
        arr: "20:05",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 56, fare: 290 },
            "3A": { seats: 27, fare: 780 },
            "2A": { seats: 10, fare: 1100 }
        }
    },

    {
        no: "16701",
        name: "Rameswaram Express",
        from: "Chennai",
        to: "Rameswaram",
        dep: "20:40",
        arr: "07:35",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 79, fare: 360 },
            "3A": { seats: 36, fare: 850 },
            "2A": { seats: 12, fare: 1240 }
        }
    },

    {
        no: "20627",
        name: "Chennai - Tiruchendur Express",
        from: "Chennai",
        to: "Tiruchendur",
        dep: "16:10",
        arr: "07:10",
        days: "Mon Tue Wed Thu Fri Sat Sun",
        classes: {
            SL: { seats: 52, fare: 380 },
            "3A": { seats: 25, fare: 900 },
            "2A": { seats: 8, fare: 1280 }
        }
    }

];


/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let currentUser = null;

let pendingRegistration = null;

let generatedOTP = "";

let selectedTrain = null;

let selectedClass = "";

let selectedSeat = "";

let selectedPaymentMethod = "";

let selectedDate = "";


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(function(page) {

        page.classList.remove("active-page");

    });

    const page = document.getElementById(pageId);

    if (!page) {

        console.log("Page not found:", pageId);

        return;

    }

    page.classList.add("active-page");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageId === "dashboard") {

        updateDashboard();

    }


    if (pageId === "trains") {

        displayAllTrains();

    }


    if (pageId === "availability") {

        displayAvailability();

    }


    if (pageId === "booking") {

        prepareBookingPage();

    }


    if (pageId === "adminDashboard") {

        updateAdminDashboard();

    }

}


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", function() {

    setTimeout(function() {

        document.getElementById("loader").style.display = "none";

    }, 1000);


    loadSession();

    document.getElementById("trainCount").innerText = trains.length;

    setDefaultDate();

});


/* =====================================================
   DEFAULT DATE
===================================================== */

function setDefaultDate() {

    const today = new Date();

    const date =
        today.toISOString().split("T")[0];

    const dateInputs =
        document.querySelectorAll('input[type="date"]');

    dateInputs.forEach(function(input) {

        input.min = date;

    });

}


/* =====================================================
   REGISTRATION
===================================================== */

function registerUser() {

    const name =
        document.getElementById("regName").value.trim();

    const mobile =
        document.getElementById("regMobile").value.trim();

    const email =
        document.getElementById("regEmail").value.trim();

    const password =
        document.getElementById("regPassword").value.trim();

    const message =
        document.getElementById("registerMessage");


    if (name === "" ||
        mobile === "" ||
        email === "" ||
        password === "") {

        showMessage(
            message,
            "Please fill all fields.",
            "error"
        );

        return;

    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        showMessage(
            message,
            "Enter a valid 10 digit mobile number.",
            "error"
        );

        return;

    }


    if (password.length < 4) {

        showMessage(
            message,
            "Password must contain at least 4 characters.",
            "error"
        );

        return;

    }


    generatedOTP =
        Math.floor(
            100000 +
            Math.random() * 900000
        ).toString();


    pendingRegistration = {

        name: name,

        mobile: mobile,

        email: email,

        password: password

    };


    document.getElementById("demoOtp")
        .innerText = generatedOTP;


    document.getElementById("otpInput")
        .value = "";


    showMessage(
        message,
        "Demo OTP generated successfully.",
        "success"
    );


    setTimeout(function() {

        showPage("otp");

    }, 500);

}


/* =====================================================
   OTP VERIFICATION
===================================================== */

function verifyOTP() {

    const input =
        document.getElementById("otpInput")
            .value.trim();

    const message =
        document.getElementById("otpMessage");


    if (input !== generatedOTP) {

        showMessage(
            message,
            "Invalid OTP. Please try again.",
            "error"
        );

        return;

    }


    localStorage.setItem(
        "railUser",
        JSON.stringify(pendingRegistration)
    );


    currentUser = pendingRegistration;


    showMessage(
        message,
        "OTP verified successfully!",
        "success"
    );


    setTimeout(function() {

        updateNavbar();

        showPage("dashboard");

    }, 700);

}


/* =====================================================
   LOGIN
===================================================== */

function loginUser() {

    const mobile =
        document.getElementById("loginMobile")
            .value.trim();

    const password =
        document.getElementById("loginPassword")
            .value.trim();

    const message =
        document.getElementById("loginMessage");


    const saved =
        localStorage.getItem("railUser");


    if (!saved) {

        showMessage(
            message,
            "No registered account found. Please register first.",
            "error"
        );

        return;

    }


    const user =
        JSON.parse(saved);


    if (user.mobile !== mobile ||
        user.password !== password) {

        showMessage(
            message,
            "Invalid mobile number or password.",
            "error"
        );

        return;

    }


    currentUser = user;


    localStorage.setItem(
        "railLoggedIn",
        "true"
    );


    showMessage(
        message,
        "Login successful!",
        "success"
    );


    setTimeout(function() {

        updateNavbar();

        showPage("dashboard");

    }, 600);

}


/* =====================================================
   SESSION
===================================================== */

function loadSession() {

    const savedUser =
        localStorage.getItem("railUser");

    const logged =
        localStorage.getItem("railLoggedIn");


    if (savedUser && logged === "true") {

        currentUser =
            JSON.parse(savedUser);

    }


    updateNavbar();

}


/* =====================================================
   NAVBAR UPDATE
===================================================== */

function updateNavbar() {

    const loginButton =
        document.getElementById("loginNavBtn");

    const logoutButton =
        document.getElementById("logoutNavBtn");


    if (currentUser) {

        loginButton.style.display = "none";

        logoutButton.style.display = "block";

    }

    else {

        loginButton.style.display = "block";

        logoutButton.style.display = "none";

    }

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    localStorage.removeItem("railLoggedIn");

    currentUser = null;

    selectedTrain = null;

    selectedSeat = "";

    selectedClass = "";

    selectedPaymentMethod = "";

    updateNavbar();

    alert(
        "You have been logged out successfully. 👋"
    );

    showPage("home");

}


/* =====================================================
   HOME SEARCH
===================================================== */

function homeSearch() {

    const from =
        document.getElementById("homeFrom")
            .value.trim();

    const to =
        document.getElementById("homeTo")
            .value.trim();

    const date =
        document.getElementById("homeDate")
            .value;


    document.getElementById("searchFrom")
        .value = from;

    document.getElementById("searchTo")
        .value = to;

    document.getElementById("searchDate")
        .value = date;


    showPage("search");

}


/* =====================================================
   QUICK ROUTE
===================================================== */

function quickRoute(from, to) {

    document.getElementById("searchFrom")
        .value = from;

    document.getElementById("searchTo")
        .value = to;


    const today = new Date();

    document.getElementById("searchDate")
        .value =
        today.toISOString().split("T")[0];


    showPage("search");

    setTimeout(function() {

        searchTrains();

    }, 300);

}


/* =====================================================
   SWAP
===================================================== */

function swapStations() {

    const from =
        document.getElementById("searchFrom");

    const to =
        document.getElementById("searchTo");


    const temp = from.value;

    from.value = to.value;

    to.value = temp;

}


/* =====================================================
   SEARCH TRAINS
===================================================== */

function searchTrains() {

    const from =
        document.getElementById("searchFrom")
            .value.trim();

    const to =
        document.getElementById("searchTo")
            .value.trim();

    const date =
        document.getElementById("searchDate")
            .value;


    const message =
        document.getElementById("searchMessage");

    const results =
        document.getElementById("searchResults");


    if (from === "" ||
        to === "" ||
        date === "") {

        showMessage(
            message,
            "Please enter From, To and Travel Date.",
            "error"
        );

        results.innerHTML = "";

        return;

    }


    selectedDate = date;


    const filtered =
        trains.filter(function(train) {

            return (

                train.from.toLowerCase()
                    .includes(from.toLowerCase())

                &&

                train.to.toLowerCase()
                    .includes(to.toLowerCase())

            );

        });


    if (filtered.length === 0) {

        showMessage(
            message,
            "No demo trains found for this route.",
            "error"
        );

        results.innerHTML =

            `<div class="train-card">
                🚆 No train found.
                Try Chennai, Madurai,
                Coimbatore, Salem,
                Trichy, Tirunelveli,
                Rameswaram or Kanyakumari.
            </div>`;

        return;

    }


    showMessage(
        message,
        filtered.length +
        " train(s) found.",
        "success"
    );


    results.innerHTML =
        filtered.map(function(train) {

            return createTrainCard(train);

        }).join("");

}


/* =====================================================
   TRAIN CARD
===================================================== */

function createTrainCard(train) {

    const sl = train.classes.SL.seats;

    const total =
        train.classes.SL.seats +
        train.classes["3A"].seats +
        train.classes["2A"].seats;


    let status = "Available";

    let statusClass = "available";


    if (total < 30) {

        status = "Filling Fast";

        statusClass = "low";

    }


    if (total === 0) {

        status = "Not Available";

        statusClass = "full";

    }


    return `

    <div class="train-card">

        <div class="train-top">

            <div class="train-name">

                <div class="train-icon">
                    🚆
                </div>

                <div>

                    <h3>
                        ${train.name}
                    </h3>

                    <p>
                        Train No. ${train.no}
                    </p>

                </div>

            </div>

            <div class="train-number">
                ${train.no}
            </div>

        </div>


        <div class="train-route">

            <div class="station">

                <strong>
                    ${train.dep}
                </strong>

                <small>
                    ${train.from}
                </small>

            </div>


            <div class="route-line">
                ───── 🚆 ─────
            </div>


            <div class="station">

                <strong>
                    ${train.arr}
                </strong>

                <small>
                    ${train.to}
                </small>

            </div>

        </div>


        <div class="train-info">

            <span class="info-pill">
                🗓️ ${train.days}
            </span>

            <span class="info-pill ${statusClass}">
                💺 ${status}
            </span>

            <span class="info-pill">
                SL ${train.classes.SL.seats}
            </span>

            <span class="info-pill">
                3A ${train.classes["3A"].seats}
            </span>

            <span class="info-pill">
                2A ${train.classes["2A"].seats}
            </span>

        </div>


        <div class="train-actions">

            <button class="avail-small"
                    onclick="viewTrainAvailability('${train.no}')">

                💺 Availability

            </button>


            <button class="book-small"
                    onclick="startBooking('${train.no}')">

                🎫 Book Now

            </button>

        </div>

    </div>

    `;

}


/* =====================================================
   ALL TRAIN LIST
===================================================== */

function displayAllTrains() {

    const container =
        document.getElementById("allTrainList");


    container.innerHTML =
        trains.map(function(train) {

            return createTrainCard(train);

        }).join("");

}


/* =====================================================
   AVAILABILITY
===================================================== */

function displayAvailability() {

    const container =
        document.getElementById(
            "availabilityContent"
        );


    container.innerHTML = `

        <div class="train-results">

            ${trains.map(function(train) {

                return `

                <div class="train-card">

                    <div class="train-top">

                        <div class="train-name">

                            <div class="train-icon">
                                🚆
                            </div>

                            <div>

                                <h3>
                                    ${train.name}
                                </h3>

                                <p>
                                    ${train.no}
                                </p>

                            </div>

                        </div>

                    </div>


                    <div class="train-route">

                        <div class="station">

                            <strong>
                                ${train.dep}
                            </strong>

                            <small>
                                ${train.from}
                            </small>

                        </div>

                        <div class="route-line">
                            →
                        </div>

                        <div class="station">

                            <strong>
                                ${train.arr}
                            </strong>

                            <small>
                                ${train.to}
                            </small>

                        </div>

                    </div>


                    <div class="train-info">

                        <span class="info-pill">
                            🛏️ SL:
                            ${train.classes.SL.seats}
                            seats
                        </span>

                        <span class="info-pill">
                            ❄️ 3A:
                            ${train.classes["3A"].seats}
                            seats
                        </span>

                        <span class="info-pill">
                            👑 2A:
                            ${train.classes["2A"].seats}
                            seats
                        </span>

                    </div>

                </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =====================================================
   VIEW SPECIFIC TRAIN AVAILABILITY
===================================================== */

function viewTrainAvailability(trainNo) {

    const train =
        trains.find(function(t) {

            return t.no === trainNo;

        });


    if (!train) return;


    alert(

        train.name +
        "\n\n" +

        "SL: " +
        train.classes.SL.seats +
        " seats\n" +

        "3A: " +
        train.classes["3A"].seats +
        " seats\n" +

        "2A: " +
        train.classes["2A"].seats +
        " seats\n\n" +

        "Departure: " +
        train.dep +
        "\n" +

        "Arrival: " +
        train.arr

    );

}


/* =====================================================
   START BOOKING
===================================================== */

function startBooking(trainNo) {

    if (!currentUser) {

        alert(
            "Please login/register before booking. 🔐"
        );

        showPage("login");

        return;

    }


    const train =
        trains.find(function(t) {

            return t.no === trainNo;

        });


    selectedTrain = train;

    selectedClass = "";

    selectedSeat = "";

    showPage("booking");

}


/* =====================================================
   PREPARE BOOKING PAGE
===================================================== */

function prepareBookingPage() {

    const container =
        document.getElementById(
            "bookingTrainInfo"
        );


    if (!selectedTrain) {

        container.innerHTML = `

            <div class="train-card">

                <h3>
                    No train selected
                </h3>

                <p>
                    Go to search and select a train.
                </p>

                <button class="primary-btn"
                        onclick="showPage('search')">

                    Search Train

                </button>

            </div>

        `;

        return;

    }


    container.innerHTML =
        createTrainCard(selectedTrain);

}


/* =====================================================
   BOOKING TRAIN STEP
===================================================== */

function goSeatStep() {

    if (!selectedTrain) {

        alert("Please select a train first.");

        showPage("search");

        return;

    }


    document.getElementById(
        "bookingTrainStep"
    ).classList.add("hidden");


    document.getElementById(
        "seatStep"
    ).classList.remove("hidden");


    updateSteps(2);

}


/* =====================================================
   SELECT CLASS
===================================================== */

function selectClass(className) {

    selectedClass = className;

    selectedSeat = "";


    const info =
        document.getElementById("classInfo");


    const data =
        selectedTrain.classes[className];


    info.innerHTML =
        `${className} selected • ${data.seats} seats available • Fare ₹${data.fare}`;


    createSeats(data.seats);

}


/* =====================================================
   CREATE SEATS
===================================================== */

function createSeats(availableSeats) {

    const grid =
        document.getElementById("seatGrid");


    grid.innerHTML = "";


    const totalSeats = 32;


    for (let i = 1; i <= totalSeats; i++) {

        const button =
            document.createElement("button");


        button.className = "seat";

        button.innerText =
            "S" + i;


        if (i > availableSeats) {

            button.classList.add("booked");

            button.disabled = true;

        }

        else {

            button.onclick =
                function() {

                    chooseSeat(button);

                };

        }


        grid.appendChild(button);

    }

}


/* =====================================================
   CHOOSE SEAT
===================================================== */

function chooseSeat(button) {

    document.querySelectorAll(
        ".seat"
    ).forEach(function(seat) {

        seat.classList.remove("selected");

    });


    button.classList.add("selected");


    selectedSeat =
        button.innerText;


    document.getElementById(
        "seatMessage"
    ).innerText =
        "Selected Seat: " + selectedSeat;

}


/* =====================================================
   PASSENGER STEP
===================================================== */

function goPassengerStep() {

    if (selectedClass === "") {

        alert(
            "Please select SL, 3A or 2A."
        );

        return;

    }


    if (selectedSeat === "") {

        alert(
            "Please select a seat."
        );

        return;

    }


    document.getElementById(
        "seatStep"
    ).classList.add("hidden");


    document.getElementById(
        "passengerStep"
    ).classList.remove("hidden");


    updateSteps(3);

}


/* =====================================================
   PAYMENT STEP
===================================================== */

function goPaymentStep() {

    const name =
        document.getElementById(
            "passengerName"
        ).value.trim();

    const age =
        document.getElementById(
            "passengerAge"
        ).value;

    const gender =
        document.getElementById(
            "passengerGender"
        ).value;

    const mobile =
        document.getElementById(
            "passengerMobile"
        ).value.trim();


    const message =
        document.getElementById(
            "passengerMessage"
        );


    if (!name ||
        !age ||
        !gender ||
        !mobile) {

        showMessage(
            message,
            "Please fill all passenger details.",
            "error"
        );

        return;

    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        showMessage(
            message,
            "Enter a valid 10 digit mobile number.",
            "error"
        );

        return;

    }


    const fare =
        selectedTrain.classes[selectedClass]
            .fare;


    document.getElementById(
        "totalFare"
    ).innerText =
        "₹" + fare;


    document.getElementById(
        "passengerStep"
    ).classList.add("hidden");


    document.getElementById(
        "paymentStep"
    ).classList.remove("hidden");


    updateSteps(4);

}


/* =====================================================
   PAYMENT METHOD
===================================================== */

function selectPayment(method) {

    selectedPaymentMethod = method;


    document.querySelectorAll(
        ".payment-methods button"
    ).forEach(function(button) {

        button.classList.remove("selected");

    });


    event.currentTarget.classList.add(
        "selected"
    );


    document.getElementById(
        "paymentMethodText"
    ).innerText =
        "Selected: " + method;

}


/* =====================================================
   PAYMENT PROCESS
===================================================== */

function processPayment() {

    const message =
        document.getElementById(
            "paymentMessage"
        );


    if (selectedPaymentMethod === "") {

        showMessage(
            message,
            "Please select a payment method.",
            "error"
        );

        return;

    }


    const processing =
        Math.random();


    showMessage(
        message,
        "Processing payment...",
        "success"
    );


    setTimeout(function() {

        /*
          Demo payment simulation.
          Around 20% decline.
        */

        if (processing < 0.20) {

            showMessage(
                message,
                "❌ Payment Declined. Please try again.",
                "error"
            );

            return;

        }


        showMessage(
            message,
            "✅ Payment Successful!",
            "success"
        );


        setTimeout(function() {

            completeBooking();

        }, 700);


    }, 1200);

}


/* =====================================================
   COMPLETE BOOKING
===================================================== */

function completeBooking() {

    const pnr =
        "RN" +
        Math.floor(
            100000000 +
            Math.random() * 900000000
        );


    const name =
        document.getElementById(
            "passengerName"
        ).value.trim();


    const age =
        document.getElementById(
            "passengerAge"
        ).value;


    const gender =
        document.getElementById(
            "passengerGender"
        ).value;


    const mobile =
        document.getElementById(
            "passengerMobile"
        ).value.trim();


    const fare =
        selectedTrain.classes[selectedClass]
            .fare;


    const booking = {

        pnr: pnr,

        train: selectedTrain.name,

        trainNo: selectedTrain.no,

        from: selectedTrain.from,

        to: selectedTrain.to,

        departure: selectedTrain.dep,

        arrival: selectedTrain.arr,

        date: selectedDate,

        class: selectedClass,

        seat: selectedSeat,

        passenger: name,

        age: age,

        gender: gender,

        mobile: mobile,

        fare: fare,

        payment: selectedPaymentMethod,

        createdAt:
            new Date().toLocaleString()

    };


    let bookings =
        JSON.parse(
            localStorage.getItem(
                "railBookings"
            )
        ) || [];


    bookings.push(booking);


    localStorage.setItem(
        "railBookings",
        JSON.stringify(bookings)
    );


    document.getElementById(
        "pnrNumber"
    ).innerText = pnr;


    document.getElementById(
        "ticketDetails"
    ).innerHTML = `

        <b>🚆 Train:</b>
        ${selectedTrain.name}
        (${selectedTrain.no})
        <br>

        <b>📍 Route:</b>
        ${selectedTrain.from}
        → ${selectedTrain.to}
        <br>

        <b>📅 Date:</b>
        ${selectedDate || "Selected Date"}
        <br>

        <b>⏰ Time:</b>
        ${selectedTrain.dep}
        → ${selectedTrain.arr}
        <br>

        <b>👤 Passenger:</b>
        ${name}
        <br>

        <b>💺 Seat:</b>
        ${selectedClass}
        - ${selectedSeat}
        <br>

        <b>💰 Fare:</b>
        ₹${fare}
        <br>

        <b>💳 Payment:</b>
        ${selectedPaymentMethod}

    `;


    showPage("success");

}


/* =====================================================
   BOOKING NAVIGATION
===================================================== */

function backToTrainStep() {

    document.getElementById(
        "seatStep"
    ).classList.add("hidden");


    document.getElementById(
        "bookingTrainStep"
    ).classList.remove("hidden");


    updateSteps(1);

}


function backToSeatStep() {

    document.getElementById(
        "passengerStep"
    ).classList.add("hidden");


    document.getElementById(
        "seatStep"
    ).classList.remove("hidden");


    updateSteps(2);

}


function backToPassengerStep() {

    document.getElementById(
        "paymentStep"
    ).classList.add("hidden");


    document.getElementById(
        "passengerStep"
    ).classList.remove("hidden");


    updateSteps(3);

}


/* =====================================================
   STEP INDICATOR
===================================================== */

function updateSteps(current) {

    document.querySelectorAll(
        ".step"
    ).forEach(function(step, index) {

        if (index + 1 <= current) {

            step.classList.add("active");

        }

        else {

            step.classList.remove("active");

        }

    });

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    const name =
        currentUser
        ? currentUser.name
        : "Traveller";


    document.getElementById(
        "dashboardName"
    ).innerText = name;


    document.getElementById(
        "trainCount"
    ).innerText =
        trains.length;


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "railBookings"
            )
        ) || [];


    document.getElementById(
        "bookingCount"
    ).innerText =
        bookings.length;

}


/* =====================================================
   NEW BOOKING
===================================================== */

function newBooking() {

    selectedTrain = null;

    selectedClass = "";

    selectedSeat = "";

    selectedPaymentMethod = "";

    document.getElementById(
        "passengerName"
    ).value = "";

    document.getElementById(
        "passengerAge"
    ).value = "";

    document.getElementById(
        "passengerGender"
    ).value = "";

    document.getElementById(
        "passengerMobile"
    ).value = "";


    showPage("search");

}


/* =====================================================
   ADMIN LOGIN
===================================================== */

function adminLogin() {

    const username =
        document.getElementById(
            "adminUsername"
        ).value.trim();

    const password =
        document.getElementById(
            "adminPassword"
        ).value.trim();


    const message =
        document.getElementById(
            "adminMessage"
        );


    if (username === "admin" &&
        password === "admin123") {

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );


        showMessage(
            message,
            "Admin login successful!",
            "success"
        );


        setTimeout(function() {

            showPage("adminDashboard");

        }, 500);

    }

    else {

        showMessage(
            message,
            "Invalid admin username or password.",
            "error"
        );

    }

}


/* =====================================================
   ADMIN DASHBOARD
===================================================== */

function updateAdminDashboard() {

    document.getElementById(
        "adminTrainCount"
    ).innerText =
        trains.length;


    const users =
        localStorage.getItem("railUser")
        ? 1
        : 0;


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "railBookings"
            )
        ) || [];


    const revenue =
        bookings.reduce(
            function(total, booking) {

                return total +
                    Number(booking.fare || 0);

            },
            0
        );


    document.getElementById(
        "adminUserCount"
    ).innerText =
        users;


    document.getElementById(
        "adminBookingCount"
    ).innerText =
        bookings.length;


    document.getElementById(
        "adminRevenue"
    ).innerText =
        "₹" + revenue;


    const table =
        document.getElementById(
            "adminTrainTable"
        );


    table.innerHTML =
        trains.map(function(train) {

            return `

                <tr>

                    <td>
                        ${train.no}
                    </td>

                    <td>
                        ${train.name}
                    </td>

                    <td>
                        ${train.from}
                        →
                        ${train.to}
                    </td>

                    <td>
                        ${train.dep}
                    </td>

                    <td>
                        ${train.arr}
                    </td>

                    <td>
                        ${train.days}
                    </td>

                </tr>

            `;

        }).join("");

}


/* =====================================================
   ADMIN LOGOUT
===================================================== */

function adminLogout() {

    localStorage.removeItem(
        "adminLoggedIn"
    );

    showPage("home");

}


/* =====================================================
   MESSAGE HELPER
===================================================== */

function showMessage(
    element,
    text,
    type
) {

    element.innerText = text;


    if (type === "success") {

        element.style.color = "#087443";

    }

    else {

        element.style.color = "#c62828";

    }

}