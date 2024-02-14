function convertToFar() {
    //buat input dan ouput
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = document.getElementById("fahrenheit");
    // buat ngecek kalo inputan celcius nya kosong
    if (celsiusInput === "") {
        alert("Tolong masukan angka");
        return;
    }
    // ini rumus buat ngitung nya
    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9/5) + 32;

    // pake toFixed biar angka desimal nya jadi cuma 2 digit
    // nah, ini buat nampilin hasilnya
    fahrenheitOutput.value = parseFloat(fahrenheit.toFixed(2)).toString();
}


function reset() {
    // ini buat ngereset inputan dan outputnya
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    hideElement("formula");
    hideElement("result");
}

// //function reverseConversion() {
//     // ini buat nuker nilai nya
//     var celsiusInput = document.getElementById("celsius");
//     var fahrenheitInput = document.getElementById("fahrenheit");

//     var tempCelsius = celsiusInput.value;
//     var tempFahrenheit = fahrenheitInput.value;

//     celsiusInput.value = tempFahrenheit;
//     fahrenheitInput.value = tempCelsius;
// }

// function showFormula() {
//     // ini nampilin rumus tapi nyembunyiin hasil
//     showElement("formula");
//     hideElement("result");
// }


// ...

// ...

function reverseConversion() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    var tempCelsius = celsiusInput.value;
    var tempFahrenheit = fahrenheitInput.value;

    celsiusInput.value = tempFahrenheit;
    fahrenheitInput.value = tempCelsius;

    // Tambahkan rumus untuk Fahrenheit ke Celsius
    var formulaElement = document.getElementById("formula");
    formulaElement.innerHTML = "suhu dalam °C sama dengan suhu dalam °F <br> yaitu (°F) dikurangi 32 dikali 5/9 <br><br>Suhu °C = (Suhu °F - 32) x 5/9";
}

function showFormula() {
    // Tambahkan pengecekan untuk menentukan rumus mana yang akan ditampilkan
    var isCelsiusToFar = document.getElementById("celsius").value !== "";

    if (isCelsiusToFar) {
        showElement("formula");
        hideElement("result");
    } else {
        reverseConversion();
        showElement("formula");
        hideElement("result");
    }
}

// ...




function showResult() {
    //ini nampilin hasil tapi nyembunyiin rumus
    var fahrenheitValue = document.getElementById("fahrenheit").value;
    var resultValue = document.getElementById("resultValue");

    resultValue.textContent = fahrenheitValue;
    showElement("result");
    hideElement("formula");
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";
}
