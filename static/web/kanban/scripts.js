// DragControl
var dragging

function handleDragStart(e) {
  dragging = e.target
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault()
  }

  e.dataTransfer.dropEffect = "pointer"

  return false
}

function handleDragDrop(e) {
  if (dragging) {
    var content = e.target
    while (content && !content.classList.contains("stage-content")) {
      content = content.parentElement
    }

    if (content) {
      content.appendChild(dragging)
    }

    dragging = null
  }
}

// Stages, Tags and Taks controls
var stages, tags, tasks

function d(id) {
  return document.getElementById(id)
}

function setStages(list) {
  stages = list
  stages.map(function (stage) {
    // Estágios
    var div = document.createElement("div")
    div.style.backgroundColor = stage.color

    div.classList.add("stage-panel")

    div.addEventListener("dragover", handleDragOver, false)
    div.addEventListener("drop", handleDragDrop, false)

    d("app").appendChild(div)

    // Título do Estágio
    var divTitle = document.createElement("h5")
    divTitle.classList.add("header-panel")
    divTitle.classList.add("text-white")
    divTitle.classList.add("m-3")

    div.appendChild(divTitle)

    // Ícone do Estágio
    var icone = document.createElement("i")
    icone.classList.add("mr-2")
    icone.classList.add("fas")
    icone.classList.add("fa-" + stage.icon)

    divTitle.appendChild(icone)

    // Texto do Estágio
    divTitle.innerHTML = divTitle.innerHTML + stage.title

    // Conteúdo do Estágio
    var content = document.createElement("div")
    content.id = "stage_" + stage.id
    content.key = stage.id

    content.classList.add("stage-content")

    div.appendChild(content)
  })
}

function setTags(list) {
  tags = list
}

function setTasks(list) {
  tasks = list
  tasks
    .sort(function (a, b) {
      return a.order - b.order
    })
    .map(function (task) {
      const div = document.createElement("div")
      div.id = "task_" + task.id
      div.key = task.id
      div.draggable = true

      div.classList.add(
        "task",
        "card",
        "p-2",
        "mb-2",
        "bg-white",
        "text-secondary"
      )

      div.addEventListener("dragstart", handleDragStart, false)
      d("stage_" + task.stageId).appendChild(div)

      // Título da Tarefa
      const title = document.createElement("h3")
      title.classList.add("card-title")
      title.innerText = task.title
      div.appendChild(title)

      // Conteúdo da Tarefa
      const conteudo = document.createElement("p")
      title.classList.add("card-text")
      conteudo.innerHTML = task.description.substring(0, 50)
      div.appendChild(conteudo)

      // Criaçãos das Bagdes
      if (task.tags && task.tags.length > 0) {
        var tagsDiv = document.createElement("div")
        tagsDiv.classList.add("tags")

        tags
          .filter(function (tag) {
            return task.tags.includes(tag.id)
          })
          .map(function (tag) {
            var tagDiv = document.createElement("p")

            tagDiv.classList.add("badge", "mr-1", "p-2", "text-white")

            tagDiv.style.backgroundColor = tag.color
            tagDiv.innerText = tag.title

            tagsDiv.appendChild(tagDiv)
          })

        div.appendChild(tagsDiv)
      }
    })
}

window.onload = function () {
  //if (!localStorage.getItem("stages"))
  localStorage.setItem(
    "stages",
    JSON.stringify([
      { id: 1, title: "Backlog", icon: "book", color: "#F6BF26" },
      { id: 2, title: "Waiting", icon: "hourglass-half", color: "#FF9933" },
      { id: 3, title: "Working", icon: "cog", color: "#4285F4" },
      { id: 4, title: "Completed", icon: "check", color: "#33B679" },
      { id: 5, title: "Blocked", icon: "ban", color: "#D50000" },
    ])
  )

  //if (!localStorage.getItem("tags"))
  localStorage.setItem(
    "tags",
    JSON.stringify([
      { id: 1, title: "Action", color: "#F6BF26" },
      { id: 2, title: "Adventure", color: "#FF9933" },
      { id: 3, title: "Sci-Fi", color: "#4285F4" },
      { id: 4, title: "Drama", color: "#33B679" },
      { id: 5, title: "Romance", color: "#D50000" },
      { id: 6, title: "Fantasy", color: "#00D500" },
    ])
  )

  //if (!localStorage.getItem("tasks"))
  localStorage.setItem(
    "tasks",
    JSON.stringify([
      {
        id: 1,
        stageId: 1,
        order: 3,
        tags: [1, 2, 6],
        title: "Avatar",
        description: "<b>Directors:</b> James Cameron<br/>",
      },
      {
        id: 2,
        stageId: 2,
        order: 2,
        tags: [4, 5],
        title: "Titanic",
        description: "<b>Directors:</b> James Cameron<br/>",
      },
      {
        id: 3,
        stageId: 1,
        order: 1,
        tags: [1, 2, 3],
        title: "Avengers: Endgame",
        description: "<b>Directors:</b> Anthony Russo, Joe Russo<br/>",
      },
    ])
  )

  setStages(JSON.parse(localStorage.getItem("stages")))
  setTags(JSON.parse(localStorage.getItem("tags")))
  setTasks(JSON.parse(localStorage.getItem("tasks")))
}
