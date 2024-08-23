document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  /*时间显示*/
    /*日期*/
    function updateClock() {
    const now = new Date();
    const optionsdate = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',   
    };
    const dateTimeString = now.toLocaleString('zh-CN', optionsdate);
    document.getElementById('date').innerText = dateTimeString;
    /*时间*/
    const optionstime = {
      hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    }
     const timeTimeString = now.toLocaleString('zh-CN',optionstime)
     document.getElementById('time').innerText = timeTimeString;
    
}  
setInterval(updateClock, 1000);
updateClock();