function download() {
    var container = document.getElementById('print-area');
    var element = document.getElementById('page');
    var button = document.getElementsByClassName('btn');

    function addClass() {
        container.classList.add('page');
        button.forEach(element => {
            element.classList.add('hide')
        });
        element.classList.add('over-page');
    }


    var opt = {
      margin:       0,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 4, y: 0, scrollY: 0, removeContainer: false, dpi: 300},
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      //pagebreak: { mode: 'avoid-all' }
    };
    
    // New Promise-based usage:
    function print() {
        html2pdf().set(opt).from(element).save();
    }


    function removeClass() {
        container.classList.remove('page');
        button.forEach(element => {
            element.classList.remove('hide')
        });
        element.classList.remove('over-page');
    }

    addClass();
    setTimeout(print, 2000);
    setTimeout(removeClass, 5000);
}

