// Callback function

function sayMyName(name){
  console.log('Antes de um callback');
  
  name()

  console.log('Depois de um callback');
}

sayMyName(
  () => {
    console.log('Estou em um callback');
  }
)