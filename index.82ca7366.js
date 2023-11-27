function e(e){return(e.slice(0,1).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()}document.querySelectorAll("input").forEach(function(t){var l=document.createElement("label");l.classList.add("field-label"),l.htmlFor=t.id,l.textContent=e(t.name),t.parentNode.appendChild(l),t.setAttribute("placeholder",e(t.name))});
//# sourceMappingURL=index.82ca7366.js.map
