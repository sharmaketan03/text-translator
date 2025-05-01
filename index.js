let input=document.querySelector("#inputs")
let source_lang=document.querySelector("#select1")
let target_lang=document.querySelector("#select2")
let button=document.querySelector("button")
let results=document.querySelector("#results")







button.addEventListener("click",async()=>{
if(source_lang.value=="" && target_lang.value=="" && input.value==""){
   alert("hello")
}
else{
    const URL=`https://text-translator2.p.rapidapi.com/translate`
    const data = `?source_language=${source_lang.value}&target_language=${target_lang.value}&text=${input.value}`;

    const headers = {
        'x-rapidapi-key':'fcc2337bc8msh42ed8779cd4654cp181e15jsn3854dedb9b02',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const response = await fetch(URL,{
        method:"POST",
        headers:headers,
        body:data
    })
    let result=await response.json();
    console.log(result.data)
    getdata(result.data)
    input.value=""
    source_lang.value=""
    target_lang.value=""
}
   

    
})
function getdata(obj){
    results.innerHTML=" "
   let value=document.createElement("h1")
   value.classList.add("names")
   value.innerHTML=obj.translatedText
   console.log(value)
   results.append(value)

}

