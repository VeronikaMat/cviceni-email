

const goodbye=jmeno=> {
 const closingParagraph = document.querySelector('.email__closing')   
    if (jmeno) {
        sPozdravem.textContent = `S pozdravem ${jmeno}`
      } else {
        rozlouceni.textContent = 'Na shledanou'
      }
    }
    
  
  // Zavoláme funkci s příkladovým jménem
  goodbye('Pavel Ovesný')
