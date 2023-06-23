/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteTask = (tasksArray, taskID) => {
  const updatedTasksArray = tasksArray.slice();
  console.log(tasksArray);
  tasksArray.map((task) => {
    if (task.id === taskID) {
      const index = tasksArray.indexOf(task);
      updatedTasksArray.splice(index, 1);
      console.log(`Updated Array: ${updatedTasksArray}`);
    }
  });

  return updatedTasksArray;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);


/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const newProject = (projectName) => {
  const views = document.getElementById("views");
  const projectsInput = document.getElementById("new-todo-project");
  if (projectName.trim() !== "") {
    const li = document.createElement("li");
    li.setAttribute("id", projectName.toLowerCase());
    li.textContent = projectName;
    views.appendChild(li);

    const option = document.createElement("option");
    option.setAttribute("value", projectName);
    option.textContent = projectName;
    projectsInput.appendChild(option);

    return projectName;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProject);


/***/ }),

/***/ "./src/newProjectBtn.js":
/*!******************************!*\
  !*** ./src/newProjectBtn.js ***!
  \******************************/
/***/ (() => {

const newProjectBtn = document.getElementById("new-project-btn");
const newProjectName = document.getElementById("new-project-name");

newProjectBtn.addEventListener("click", () => {
  newProjectName.classList.toggle("hidden");
});


/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const newTask = () => {
  const name = document.getElementById("new-todo-name");
  const date = document.getElementById("new-todo-date");
  const priority = document.getElementById("new-todo-priority");
  const project = document.getElementById("new-todo-project");

  const nameValue = name.value;
  const dateValue = date.value;
  const priorityValue = priority.value;
  const projectValue = project.value;
  const id = Math.floor(Math.random() * 2000);

  if (nameValue.trim() === "") {
    return {};
  }

  return { nameValue, dateValue, priorityValue, projectValue, id };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);


/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask */ "./src/deleteTask.js");


const tasksDOMRef = document.getElementById("tasks");
const render = (task) => {
  if (task.nameValue.trim() !== "") {
    console.log(task.nameValue);
    const div = document.createElement("div");
    div.classList.add("task");

    const taskName = document.createElement("p");
    taskName.textContent = task.nameValue;
    div.appendChild(taskName);

    const taskDue = document.createElement("p");
    taskDue.textContent = task.dateValue;
    if (task.dateValue.trim() === "") {
      taskDue.textContent = "-";
    }
    div.appendChild(taskDue);

    const taskPriority = document.createElement("p");
    taskPriority.textContent = task.priorityValue;
    if (task.priorityValue.trim() === "") {
      taskPriority.textContent = "-";
    }
    div.appendChild(taskPriority);

    const taskProject = document.createElement("p");
    taskProject.textContent = task.projectValue;
    if (task.projectValue.trim() === "") {
      taskProject.textContent = "-";
    }

    div.appendChild(taskProject);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    // set unique identifiers for deleting a task possible use an id
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("id", task.id);
    div.appendChild(deleteBtn);

    div.addEventListener("click", () => {
      div.classList.toggle("completed");
    });

    tasksDOMRef.appendChild(div);
  }
};
const renderTasks = (tasksArray, filter) => {
  while (tasksDOMRef.hasChildNodes()) {
    tasksDOMRef.removeChild(tasksDOMRef.lastChild);
  }

  if (!filter) {
    tasksArray.forEach((task) => {
      render(task);
    });
  } else {
    tasksArray.forEach((task) => {
      if (task.projectValue === filter) {
        render(task);
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTasks);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newProjectBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectBtn */ "./src/newProjectBtn.js");
/* harmony import */ var _newProjectBtn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_newProjectBtn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteTask */ "./src/deleteTask.js");






const addTodoBtn = document.getElementById("add-todo-btn");
const newProjectName = document.getElementById("new-project-name");

let todos = [];
const projects = [];
const filter = "";

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = (0,_newTask__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (Object.keys(task).length !== 0) {
    todos.push(task);
    (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos);

    const deleteBtns = document.getElementsByClassName("delete-btn");

    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", () => {
        todos = (0,_deleteTask__WEBPACK_IMPORTED_MODULE_4__["default"])(todos, deleteBtns[i].id);
        (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos);
      });
    }
  }
});

newProjectName.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && newProjectName.value.trim() !== "") {
    const project = (0,_newProject__WEBPACK_IMPORTED_MODULE_3__["default"])(newProjectName.value.trim());
    projects.push(project);

    const projectBtn = document.getElementById(
      newProjectName.value.trim().toLowerCase()
    );
    projectBtn.addEventListener("click", () => {
      (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos, project);
    });
    newProjectName.value = "";
    newProjectName.classList.toggle("hidden");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtCQUFrQjtBQUN0RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2QxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDbkUzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ087QUFDUTtBQUNGO0FBQ0E7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFPO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLHdEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBLGdCQUFnQix1REFBVTtBQUMxQixRQUFRLHdEQUFXO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFXO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3RCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlclRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrc0FycmF5LCB0YXNrSUQpID0+IHtcclxuICBjb25zdCB1cGRhdGVkVGFza3NBcnJheSA9IHRhc2tzQXJyYXkuc2xpY2UoKTtcclxuICBjb25zb2xlLmxvZyh0YXNrc0FycmF5KTtcclxuICB0YXNrc0FycmF5Lm1hcCgodGFzaykgPT4ge1xyXG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tJRCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRhc2tzQXJyYXkuaW5kZXhPZih0YXNrKTtcclxuICAgICAgdXBkYXRlZFRhc2tzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgY29uc29sZS5sb2coYFVwZGF0ZWQgQXJyYXk6ICR7dXBkYXRlZFRhc2tzQXJyYXl9YCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1cGRhdGVkVGFza3NBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2s7XHJcbiIsImNvbnN0IG5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBjb25zdCB2aWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlld3NcIik7XHJcbiAgY29uc3QgcHJvamVjdHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJvamVjdFwiKTtcclxuICBpZiAocHJvamVjdE5hbWUudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgIHZpZXdzLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3ROYW1lKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdHNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0TmFtZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0O1xyXG4iLCJjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idG5cIik7XHJcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1uYW1lXCIpO1xyXG5cclxubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG5ld1Byb2plY3ROYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn0pO1xyXG4iLCJjb25zdCBuZXdUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLW5hbWVcIik7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tZGF0ZVwiKTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJpb3JpdHlcIik7XHJcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJvamVjdFwiKTtcclxuXHJcbiAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZTtcclxuICBjb25zdCBkYXRlVmFsdWUgPSBkYXRlLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eS52YWx1ZTtcclxuICBjb25zdCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0LnZhbHVlO1xyXG4gIGNvbnN0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwMCk7XHJcblxyXG4gIGlmIChuYW1lVmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBuYW1lVmFsdWUsIGRhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgcHJvamVjdFZhbHVlLCBpZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3VGFzaztcclxuIiwiaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4vZGVsZXRlVGFza1wiO1xyXG5cclxuY29uc3QgdGFza3NET01SZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpO1xyXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xyXG4gIGlmICh0YXNrLm5hbWVWYWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRhc2submFtZVZhbHVlKTtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblxyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lVmFsdWU7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGVWYWx1ZTtcclxuICAgIGlmICh0YXNrLmRhdGVWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgfVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEdWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eVZhbHVlO1xyXG4gICAgaWYgKHRhc2sucHJpb3JpdHlWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICB9XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuXHJcbiAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3RWYWx1ZTtcclxuICAgIGlmICh0YXNrLnByb2plY3RWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSBcIi1cIjtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgIC8vIHNldCB1bmlxdWUgaWRlbnRpZmllcnMgZm9yIGRlbGV0aW5nIGEgdGFzayBwb3NzaWJsZSB1c2UgYW4gaWRcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhc2tzRE9NUmVmLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfVxyXG59O1xyXG5jb25zdCByZW5kZXJUYXNrcyA9ICh0YXNrc0FycmF5LCBmaWx0ZXIpID0+IHtcclxuICB3aGlsZSAodGFza3NET01SZWYuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICB0YXNrc0RPTVJlZi5yZW1vdmVDaGlsZCh0YXNrc0RPTVJlZi5sYXN0Q2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFmaWx0ZXIpIHtcclxuICAgIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICByZW5kZXIodGFzayk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmICh0YXNrLnByb2plY3RWYWx1ZSA9PT0gZmlsdGVyKSB7XHJcbiAgICAgICAgcmVuZGVyKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYXNrcztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vbmV3UHJvamVjdEJ0blwiO1xyXG5pbXBvcnQgbmV3VGFzayBmcm9tIFwiLi9uZXdUYXNrXCI7XHJcbmltcG9ydCByZW5kZXJUYXNrcyBmcm9tIFwiLi9yZW5kZXJUYXNrc1wiO1xyXG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XHJcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gXCIuL2RlbGV0ZVRhc2tcIjtcclxuXHJcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ0blwiKTtcclxuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LW5hbWVcIik7XHJcblxyXG5sZXQgdG9kb3MgPSBbXTtcclxuY29uc3QgcHJvamVjdHMgPSBbXTtcclxuY29uc3QgZmlsdGVyID0gXCJcIjtcclxuXHJcbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRhc2sgPSBuZXdUYXNrKCk7XHJcbiAgaWYgKE9iamVjdC5rZXlzKHRhc2spLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgdG9kb3MucHVzaCh0YXNrKTtcclxuICAgIHJlbmRlclRhc2tzKHRvZG9zKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1idG5cIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRlbGV0ZUJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0b2RvcyA9IGRlbGV0ZVRhc2sodG9kb3MsIGRlbGV0ZUJ0bnNbaV0uaWQpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzKHRvZG9zKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbm5ld1Byb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIG5ld1Byb2plY3ROYW1lLnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUudHJpbSgpKTtcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBuZXdQcm9qZWN0TmFtZS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgcmVuZGVyVGFza3ModG9kb3MsIHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XHJcbiAgICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==