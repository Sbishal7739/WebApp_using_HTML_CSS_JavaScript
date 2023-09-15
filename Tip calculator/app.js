document.getElementById('btn').addEventListener('click', function() {
    const amount = Number(document.getElementById('bil-amount').value);
    const percent = Number(document.getElementById('tip-percentage').value)

    const tipAmount = Math.floor(amount * (percent / 100))
    const total = amount + tipAmount

    console.log(tipAmount);

    document.getElementById('tip-amonunt').value = tipAmount
    document.getElementById('total-biled').value = total
  });
  


