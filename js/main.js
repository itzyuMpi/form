let submit=window.document.querySelector("button.submit")
submit.addEventListener("click",function(){
  let fullName=document.querySelector("input[name=fullname]").value
  let gender=document.querySelector("select[name=Gender]").value
  let age=document.querySelector("select[name=Age]").value
  let birthMonth=document.querySelector("select[name=Birth-Month]").value
  let degree=document.querySelector("select[name=Degree]").value
  let phoneNumber=Number(document.querySelector("input[name=Phone-Number]").value)
  let idCard=Number(document.querySelector("input[name=Idcard]").value)
  let fatherName=document.querySelector("input[name=Father-name]").value
  let motherName=document.querySelector("input[name=Mother-name]").value
  let email=document.querySelector("input[name=Email]").value
  let password=document.querySelector("input[name=password]").value
  let address=document.querySelector("textarea[name=Address]").value
  let year
  let month
  if (age==="20"){
    year="2003"
  } else if (age==="21"){
    year="2002"
  } else if (age==="22"){
    year="2001"
  } else if (age==="23"){
    year="2000"
  } else if (age==="24"){
    year="1999"
  } else if (age==="25"){
    year="1998"
  } else if (age==="26"){
    year="1997"
  } else if (age==="27"){
    year="1996"
  } else if (age==="28"){
    year="1995"
  } else if (age==="29"){
    year="1994"
  } else if (age==="30"){
    year="1993"
  } else if (age==="31"){
    year="1992"
  } else if (age==="32"){
    year="1991"
  } else if (age==="33"){
    year="1990"
  } else if (age==="34"){
    year="1989"
  } else if (age==="35"){
    year="1988"
  } else if (age==="36"){
    year="1987"
  } else if (age==="37"){
    year="1986"
  } else if (age==="38"){
    year="1985"
  } else if (age==="39"){
    year="1984"
  } else if (age==="40"){
    year="1983"
  } else if (age==="41"){
    year="1982"
  } else if (age==="42"){
    year="1981"
  } else if (age==="43"){
    year="1980"
  } else if (age==="44"){
    year="1979"
  } else if (age==="45"){
    year="1978"
  } else if (age==="46"){
    year="1977"
  } else if (age==="47"){
    year="1976"
  } else if (age==="48"){
    year="1975"
  } else if (age==="49"){
    year="1974"
  } else if (age==="50"){
    year="1973"
  } else{
    year="1972"
  }
  if (birthMonth === "Farvardin") {
    month="April"
  } else if (birthMonth === "Ordibehesht") {
    month="may"
  }else if (birthMonth === "Khordad") {
    month="June"
  }else if (birthMonth === "Tir") {
    month="July"
  }else if (birthMonth === "Mordad") {
    month="August"
  }else if (birthMonth === "Shahrivar") {
    month="September"
  }else if (birthMonth === "Mehr") {
    month="October"
  }else if (birthMonth === "Aban") {
    month="November"
  }else if (birthMonth === "Azar") {
    month="December"
  }else if (birthMonth === "dey") {
    month="January"
  }else if (birthMonth === "Bahman") {
    month="February"
  }else if (birthMonth === "Esfand") {
    month="March"
  }

  let answer=document.querySelector("div.answer")
  answer.innerHTML =`
<div class="p1">
<div>
  <p>Fullname : </p>
  <p class="underline1"> ${fullName} </p>
</div>
<div>
  <p>Gender : </p>
  <p class="underline1 underline2"> ${gender} </p>
</div>
</div>
<div class="p2">
<div>
  <p>Age : </p>
  <p class="underline1 underline3"> ${year} </p>
</div>
<div>
  <p>Birth month : </p>
  <p class="underline1 underline4"> ${month} </p>
</div>
<div>
  <p>Degree : </p>
  <p class="underline1 underline5"> ${degree} </p>
</div>
</div>
<div class="p3">
<div>
  <p>Phone number : </p>
  <p class="underline1 underline6">  ${phoneNumber} </p>
</div>
<div>
  <P>IDcard : </P>
  <P class="underline1 underline6">  ${idCard} </P>
</div>
</div>
<div class="p4">
<div>
  <p>Father name : </p>
  <p class="underline1 underline7">  ${fatherName} </p>
</div>
<div>
  <p>Mother name : </p>
  <p class="underline1 underline7">  ${motherName} </p>
</div>
</div>
<div class="p5">
<div>
  <p>Email : </p>
  <p class="underline1">  ${email} </p>
</div>
<div>
  <p>Password : </p>
  <p class="underline1">  ${password} </p>
</div>
</div>
<div class="p6">
<div>
  <p>Address : </p>
  <p class="underline1 box">  ${address} </p>
</div>
</div>
`
})
