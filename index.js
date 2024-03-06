function goodbye(jmeno) {
    const closingParagraph = document.querySelector('.email__closing');
    if (jmeno) {
      closingParagraph.textContent = `S pozdravem ${jmeno}`;
    } else {
      closingParagraph.textContent = 'Na shledanou';
    }
  }
  
  // Zavoláme funkci s příkladovým jménem
  goodbye('Pavel Ovesný');
