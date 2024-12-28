const { DateTime } = luxon;

document.getElementById('calculate').addEventListener('click', () => {
    let inputDate = document.getElementById('inputDate').value;

    const birthDate = DateTime.fromISO(inputDate);
    const now = DateTime.now();
    const age = now.diff(birthDate, 'years').years.toFixed(0);
    const month = now.diff(birthDate, 'month').months % 12;
    const monthh = month.toFixed(0)

    if (!inputDate) {
        document.getElementById('result').textContent = 'Please select a date!';
        return;
    }

    if(birthDate > DateTime.now()){
        document.getElementById('result').textContent = 'Invalid Date';
        return;
    }

    document.getElementById('result').innerHTML = `You are <b> ${age} years and ${monthh} months </b> old.`;
});