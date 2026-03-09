function save(){

localStorage.setItem("skills",JSON.stringify(skills))
localStorage.setItem("skillTrees",JSON.stringify(skillTrees))
localStorage.setItem("traits",JSON.stringify(traits))
localStorage.setItem("weapons",JSON.stringify(weapons))
localStorage.setItem("outfits",JSON.stringify(outfits))
localStorage.setItem("singularities",JSON.stringify(singularities))
localStorage.setItem("egos",JSON.stringify(egos))

}

function addSkill(){

let name=document.getElementById("skillName").value
let icon=document.getElementById("skillIcon").value

skills.push({name,icon})

save()
renderSkills()

}

function renderSkills(){

let box=document.getElementById("skillList")
box.innerHTML=""

skills.forEach((s,i)=>{

let div=document.createElement("div")

div.innerText=s.name

let btn=document.createElement("button")

btn.innerText="Delete"

btn.onclick=()=>{

skills.splice(i,1)
save()
renderSkills()

}

div.appendChild(btn)

box.appendChild(div)

})

}

function addTree(){

let name=document.getElementById("treeName").value
let point=document.getElementById("treePoint").value

skillTrees.push({name,point})

save()
renderTrees()

}

function renderTrees(){

let box=document.getElementById("treeList")
box.innerHTML=""

skillTrees.forEach((t,i)=>{

let div=document.createElement("div")

div.innerText=t.name+" ("+t.point+")"

let btn=document.createElement("button")

btn.innerText="Delete"

btn.onclick=()=>{

skillTrees.splice(i,1)
save()
renderTrees()

}

div.appendChild(btn)

box.appendChild(div)

})

}

function addTrait(){

traits.push(document.getElementById("traitName").value)

save()

}

function addWeapon(){

weapons.push(document.getElementById("weaponName").value)

save()

}

function addOutfit(){

outfits.push(document.getElementById("outfitName").value)

save()

}

function addSingularity(){

singularities.push(document.getElementById("singularityName").value)

save()

}

function addEgo(){

egos.push(document.getElementById("egoName").value)

save()

}

renderSkills()
renderTrees()