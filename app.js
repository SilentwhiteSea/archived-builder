const MAX_POINTS=50

function createSkillSlots(){

let box=document.getElementById("skillsSlots")

for(let i=0;i<5;i++){

let select=document.createElement("select")

skills.forEach(skill=>{

let option=document.createElement("option")

option.value=skill.name
option.text=skill.name

select.add(option)

})

box.appendChild(select)
box.appendChild(document.createElement("br"))

}

}

function searchSkill(){

let q=document.getElementById("skillSearch").value.toLowerCase()

let box=document.getElementById("skillSuggestions")

box.innerHTML=""

skills
.filter(s=>s.name.toLowerCase().includes(q))
.forEach(s=>{

let div=document.createElement("div")

div.className="skillSuggestion"

div.innerHTML="<img class='skillIcon' src='"+s.icon+"'>"+s.name

box.appendChild(div)

})

}

document.getElementById("skillSearch").oninput=searchSkill

function addTreeSlot(){

let box=document.getElementById("treeContainer")

let select=document.createElement("select")

skillTrees.forEach(tree=>{

let option=document.createElement("option")

option.value=tree.point
option.text=tree.name+" ("+tree.point+")"

select.add(option)

})

select.onchange=updatePoints

box.appendChild(select)
box.appendChild(document.createElement("br"))

}

function updatePoints(){

let selects=document.querySelectorAll("#treeContainer select")

let total=0

selects.forEach(s=>{

total+=Number(s.value)

})

if(total>MAX_POINTS){

alert("Point limit exceeded")
return

}

document.getElementById("totalPoints").innerText=total

}

function createTraitSlots(){

let box=document.getElementById("traitSlots")

for(let i=0;i<3;i++){

let select=document.createElement("select")

traits.forEach(t=>{

let option=document.createElement("option")
option.text=t

select.add(option)

})

box.appendChild(select)

}

}

function createWeaponSlots(){

let box=document.getElementById("weaponSlots")

for(let i=0;i<3;i++){

let select=document.createElement("select")

weapons.forEach(w=>{

let option=document.createElement("option")
option.text=w

select.add(option)

})

box.appendChild(select)

}

}

function exportBuild(){

let build={

skills:[...document.querySelectorAll("#skillsSlots select")].map(s=>s.value),

traits:[...document.querySelectorAll("#traitSlots select")].map(s=>s.value),

weapons:[...document.querySelectorAll("#weaponSlots select")].map(s=>s.value),

}

let code=btoa(JSON.stringify(build))

document.getElementById("buildCode").value=code

}

function importBuild(){

let code=document.getElementById("importCode").value

let build=JSON.parse(atob(code))

alert("Build Loaded")

}

function openAdmin(){

location="admin.html"

}

createSkillSlots()
createTraitSlots()
createWeaponSlots()