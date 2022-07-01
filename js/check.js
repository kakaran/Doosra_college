function setUserName()
{
    let myname = prompt('Please enter the name :');
    localStorage.setItem('name',myname);
    myHeading.textContent = 'Mozilla is cool ' + myname;
}