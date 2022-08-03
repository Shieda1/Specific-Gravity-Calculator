// https://calculator.swiftutors.com/specific-gravity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const specificGravityRadio = document.getElementById('specificGravityRadio');
const weightoftheSubstanceRadio = document.getElementById('weightoftheSubstanceRadio');
const weightoftheWaterRadio = document.getElementById('weightoftheWaterRadio');

let specificGravity;
let weightoftheSubstance = v1;
let weightoftheWater = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

specificGravityRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight of the Substance';
  variable2.textContent = 'Weight of the Water';
  weightoftheSubstance = v1;
  weightoftheWater = v2;
  result.textContent = '';
});

weightoftheSubstanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Specific Gravity';
  variable2.textContent = 'Weight of the Water';
  specificGravity = v1;
  weightoftheWater = v2;
  result.textContent = '';
});

weightoftheWaterRadio.addEventListener('click', function() {
  variable1.textContent = 'Specific Gravity';
  variable2.textContent = 'Weight of the Substance';
  specificGravity = v1;
  weightoftheSubstance = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(specificGravityRadio.checked)
    result.textContent = `Specific Gravity = ${computeSpecificGravity().toFixed(2)}`;

  else if(weightoftheSubstanceRadio.checked)
    result.textContent = `Weight of the Substance = ${computeWeightoftheSubstance().toFixed(2)}`;

  else if(weightoftheWaterRadio.checked)
    result.textContent = `Weight of the Water = ${computeWeightoftheWater().toFixed(2)}`;
})

// calculation

function computeSpecificGravity() {
  return Number(weightoftheSubstance.value) / Number(weightoftheWater.value);
}

function computeWeightoftheSubstance() {
  return Number(specificGravity.value) * Number(weightoftheWater.value);
}

function computeWeightoftheWater() {
  return Number(weightoftheSubstance.value) / Number(specificGravity.value);
}