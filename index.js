

function goodbye(jmeno) {
 const rozlouceni = document.querySelector('.email__closing')   
    if (jmeno) {
        rozlouceni.textContent = `S pozdravem ${jmeno}`
      } else {
        rozlouceni.textContent = 'Na shledanou'
      }
    }
    
  
  // Zavoláme funkci s příkladovým jménem
  goodbye('Pavel Ovesný')
