function setDarkMode(isDark){
    if(isDark){
        document.body.setAttribute('class', 'calculator.dark')
        localStorage.setItem('theme', 'dark')
    }else{
        document.body.setAttribute('class', '')
        localStorage.setItem('theme')
    }
}