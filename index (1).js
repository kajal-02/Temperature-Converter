const calculateTemp= () =>
{
    const numberinput = document.getElementById('value1').value;
   
    const tempinput = document.getElementById('temp');
    
    const valueEnetred = tempinput.options[tempinput.selectedIndex].value;

    const celtofah = (cel) =>
    {
           let f = Math.round((cel*9/5)+32);
           return f;
    }

    const fahtocel = (far) =>
    {
           let c = Math.round((far-32)*5/9);
           return c;
    }

    let result;

    if(valueEnetred == 'celsius')
    {
           result = celtofah(numberinput);
           document.getElementById('Finalresult').innerHTML = `= ${result} °Farenheit`;

    }else{
        result = fahtocel(numberinput);
        document.getElementById('Finalresult').innerHTML = `= ${result} °Celsius`;
    }
}