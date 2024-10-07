function login(){
    const username = InputUserNAme.value
    console.log(username);
    localStorage.setItem("username",username)
    // redirect to dashboard
    window.location = "index.html"
}