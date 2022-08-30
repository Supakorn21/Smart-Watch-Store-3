// input
const inputOwnerName = document.querySelector("#owner-name");
const inputBankName = document.querySelector("#bank-name");
const inputCardNumber = document.querySelector("#card-no");
const inputCardExpire = document.querySelector("#card-expire");
const inputCvcCode = document.querySelector("#cvc-code");

// Card
const ownerNameShow = document.querySelector("#owner-name-show");
const bankNameShow = document.querySelector("#bank-name-show");
const cardNumberShow = document.querySelector("#card-no-show");
const cardExpireShow = document.querySelector("#card-expire-show");
const cvcCodeShow = document.querySelector("#cvc-code-show");

// ชื่อเจ้าของบัตร
inputOwnerName.addEventListener("input", function () {
  ownerNameShow.innerText = inputOwnerName.value;
});

//ชื่อธนาคาร
inputBankName.addEventListener("input", function () {
  bankNameShow.innerText = inputBankName.value;
});

// หมายเลขการ์ด
inputCardNumber.addEventListener("input", function (e) {
  const numberValue = e.target.value;
  const splitNumber = numberValue.split("");
  // console.log(splitNumber);
  const loopNumber = splitNumber.map((item, index) => {
    const numbers = item;
    if (index === 3 || index === 7 || index === 11 || index === 15) {
      return numbers + "  ";
    }
    // console.log(numbers);
    return numbers;
  });

  const changeToString = loopNumber.toString();
  const withoutCommas = changeToString.replace(/,/g, "");

  // console.log(withoutCommas);

  cardNumberShow.innerText = withoutCommas;
});

// วันหมดอายุ
inputCardExpire.addEventListener("input", function (e) {
  const numberValue = e.target.value;

  const splitNumber = numberValue.split("");
  console.log(splitNumber);
  const loopNumber = splitNumber.map((item, index) => {
    const numbers = item;
    if (index === 1) {
      return numbers + "/";
    }

    return numbers;
  });

  const changeToString = loopNumber.toString();
  const withoutCommas = changeToString.replace(/,/g, "");

  console.log(withoutCommas);

  cardExpireShow.innerText = withoutCommas;
});

// เลข CVC
inputCvcCode.addEventListener("input", function () {
  cvcCodeShow.innerText = inputCvcCode.value;
});
