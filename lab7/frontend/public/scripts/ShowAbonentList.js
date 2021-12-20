function BootTemplate(abonent) {
  return `<td> ${abonent.phone} </td>
            <td> ${abonent.address}</td>
            <td> ${abonent.owner}</td>
            <td> ${abonent.duration}</td>
            <td> ${abonent.bill}</td>
            <td> <button onclick="RemoveAbonent(${abonent.id})"> Вилучити </button> </td>`;
}

function RenderAbonentList(list, parent) {
  parent.innerHTML = "";
  for (let abonent of list) {
    let tr = document.createElement("tr");
    tr.innerHTML = BootTemplate(abonent);
    parent.appendChild(tr);
  }
}

async function Render() {
  try {
    let abonents = await Load();
    RenderCarList(abonents, document.getElementById("abonents"));
  } catch (e) {
    alert(e);
  }
}

async function RemoveAbonent(id) {
  try {
    let removedabonent = await Remove(id);
    await Render();
    alert(`Вилучено ${JSON.stringify(removedabonent)}`);
  } catch (e) {
    alert(e);
  }
}

async function NewAbonent(event) {
  try {
    event.preventDefault();//-----------------------------------------------------
    let data = Object.fromEntries (new FormData(document.forms["newAbonentForm"]));
    let newAbonent = await Add(data);
    await Render();
    alert(`Додано ${JSON.stringify(newAbonent)}`);
  } catch (e) {
    alert(e);
  }
}

/*-----*/
document.getElementById("addAbonent").onclick = NewAbonent;
Render();
alert("Render abonent list")
console.log("Render abonent list")