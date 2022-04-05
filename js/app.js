let height = document.querySelector('#height'),
    weight = document.querySelector('#weight'),
    button = document.querySelector('button'),
    result = document.querySelector('.result2')
// console.log(height);
// console.log();


class WeightCharacteristic {
    netHeight() {
        let heightValue = Number(height.value)
        let heightpower2 = Math.pow(heightValue, 2)
        // console.log(heightpower2);
        this.BMI(heightpower2)
    }
    BMI(heightpower2) {
        let weightValue = weight.value
        let result
        result = weightValue / heightpower2
        let round = result.toFixed(2)
        this.showMessage(round)

    }
    showMessage(round) {
        let net = round
        switch (true) {
            case (net < 18.5):
                result.innerHTML = `
                     <div class="bmi text-white"><p>BMI شما : ${net} </p></div>
                     <P class="text-white pb-6">کمبود وزن شدید</P>
                `
                break;
            case (net >= 18.5 && net < 24.9):
                result.innerHTML = `
                    <div class="bmi text-white"><p>BMI شما : ${net} </p></div>
                    <P class="text-white pb-6">وزن نرمال</P>
                `
                break;
            case (net >= 24.9 && net < 30):
                result.innerHTML = `
                    <div class="bmi text-white"><p>BMI شما : ${net} </p></div>
                    <P class="text-white pb-6">اضافه وزن</P>
                `
                break;
            case ( net > 30):
                result.innerHTML = `
                    <div class="bmi  text-white"><p>BMI شما : ${net} </p></div>
                    <P class="text-white pb-6">اضافه وزن شدید</P>
                `
                break;

            default:
                break;
        }
    }
}
let weightCharacteristic = new WeightCharacteristic()


button.addEventListener('click', (e) => {
    e.preventDefault()
    weightCharacteristic.netHeight()

})