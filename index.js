

/*function goodbye(jmeno) {
 const rozlouceni = document.querySelector('.email__closing')   
    if (jmeno) {
        rozlouceni.textContent = `S pozdravem ${jmeno}`
      } else {
        rozlouceni.textContent = 'Na shledanou'
      }
    }
    
  
  // Zavoláme funkci s příkladovým jménem
  goodbye('Pavel Ovesný')*/


  function goodbye(name) {
    const closingParagraph = document.querySelector('.email__closing');
    if (name) {
      closingParagraph.textContent = `S pozdravem ${name}`;
    } else {
      closingParagraph.textContent = 'Na shledanou';
    }
  }
  
  function fillSubject(subject) {
    const subjectElement = document.querySelector('.email__subject');
    subjectElement.textContent = subject;
  }
  
  function fillBody(body, name) {
    const bodyElement = document.querySelector('.email__body');
    bodyElement.textContent = body;
    goodbye(name);
  }
  
  // Testování funkcí
  fillSubject('Nová nabídka práce');
  fillBody('Toto je obsah e-mailu.', 'Pavel Ovesný');