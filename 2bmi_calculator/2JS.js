const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault()


    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        let FinalBmi=result.innerHTML = `<span>${bmi}</span>`;
      }
      if(FinalBmi<18.6){
        let FinalBmi=result.innerHTML = `<span>${bmi} under weight</span>`;
      }if(FinalBmi<18.6 && FinalBmi<24.9){
        let FinalBmi=result.innerHTML = `<span>${bmi} Normal range</span>`;
      }if(FinalBmi>24.9){
        let FinalBmi=result.innerHTML = `<span>${bmi} over weight</span>`;
      }
});