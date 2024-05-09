let dashedbtn = document.querySelector(".dashed_btn")
let apptext = document.querySelector(".app_text")
let appnum = document.querySelector(".app_num")



let url = "https://api.adviceslip.com/advice"


async function AdviseGeneratorApi(){
  

        const response = await fetch(url);

        const data = await response.json()

        const Slip = data.slip.advice

        const appId = data.slip.id

        appnum.innerHTML = `ADVICE #${appId}`

        apptext.innerHTML = Slip
    
}

AdviseGeneratorApi()

dashedbtn.addEventListener("click", (event)=>{
    
    location.reload()
    
})

