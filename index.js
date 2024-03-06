
const closingParagraph = document.querySelector('.email__closing')
const goodbye=jmeno=> {
    
    if (jmeno) {
        sPozdravem.textContent = `S pozdravem ${jmeno}`;
      } else {
        rozlouceni.textContent = 'Na shledanou';
      }
    }
    
  
  // Zavoláme funkci s příkladovým jménem
  goodbye('Pavel Ovesný')
