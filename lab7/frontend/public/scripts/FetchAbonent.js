async function Load() {
  let res = await fetch("http://localhost:3000/abonents");
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
}

async function Remove(id) {
  let res = await fetch(`http://localhost:3000/abonents/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
}

async function Add(car) {
  let res = await fetch("http://localhost:3000/abonents", {
    method: "POST",
    body: JSON.stringify(abonent),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
} 