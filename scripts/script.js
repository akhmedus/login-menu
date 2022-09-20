const forms=document.querySelector(".forms"),
showHide=document.querySelectorAll(".eye-icon"),
links=document.querySelectorAll(".link");

showHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click",()=>{
        let fields=eyeIcon.parentElement.querySelectorAll(".password");

        fields.forEach(password=>{
            if(password.type="password"){
                password.type="text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return; 
            }
            password.type="password";
            eyeIcon.classList.replace("bx-show","bx-hide");
        })
    })
})

links.forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})