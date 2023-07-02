/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/changeHeader.js":
/*!*****************************!*\
  !*** ./src/changeHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeHeader = (headerName) => {
  const header = document.getElementById("header");
  header.textContent = headerName;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeHeader);


/***/ }),

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
  tasksArray.map((task) => {
    if (task.id === parseInt(taskID)) {
      const index = tasksArray.indexOf(task);
      updatedTasksArray.splice(index, 1);
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
/* harmony import */ var _changeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeHeader */ "./src/changeHeader.js");







const addTodoBtn = document.getElementById("add-todo-btn");
const newProjectName = document.getElementById("new-project-name");

let todos = [];
const projects = [];
const filter = "";

// Event Listener for the All Filter
const allFilter = document.getElementById("all");
allFilter.addEventListener("click", () => {
  (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos);
});

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
      (0,_changeHeader__WEBPACK_IMPORTED_MODULE_5__["default"])(project);
      (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos, project);
    });
    newProjectName.value = "";
    newProjectName.classList.toggle("hidden");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0w1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1oxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ2xFM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDTztBQUNRO0FBQ0Y7QUFDQTtBQUNJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQU87QUFDdEI7QUFDQTtBQUNBLElBQUksd0RBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0EsZ0JBQWdCLHVEQUFVO0FBQzFCLFFBQVEsd0RBQVc7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQVk7QUFDbEIsTUFBTSx3REFBVztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jaGFuZ2VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3RCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlclRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hhbmdlSGVhZGVyID0gKGhlYWRlck5hbWUpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlck5hbWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VIZWFkZXI7XG4iLCJjb25zdCBkZWxldGVUYXNrID0gKHRhc2tzQXJyYXksIHRhc2tJRCkgPT4ge1xyXG4gIGNvbnN0IHVwZGF0ZWRUYXNrc0FycmF5ID0gdGFza3NBcnJheS5zbGljZSgpO1xyXG4gIHRhc2tzQXJyYXkubWFwKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAodGFzay5pZCA9PT0gcGFyc2VJbnQodGFza0lEKSkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRhc2tzQXJyYXkuaW5kZXhPZih0YXNrKTtcclxuICAgICAgdXBkYXRlZFRhc2tzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZWRUYXNrc0FycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVGFzaztcclxuIiwiY29uc3QgbmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gIGNvbnN0IHZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3c1wiKTtcclxuICBjb25zdCBwcm9qZWN0c0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kby1wcm9qZWN0XCIpO1xyXG4gIGlmIChwcm9qZWN0TmFtZS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBsaS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgdmlld3MuYXBwZW5kQ2hpbGQobGkpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdE5hbWUpO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICBwcm9qZWN0c0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3ROYW1lO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld1Byb2plY3Q7XHJcbiIsImNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWJ0blwiKTtcclxuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LW5hbWVcIik7XHJcblxyXG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxufSk7XHJcbiIsImNvbnN0IG5ld1Rhc2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tbmFtZVwiKTtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kby1kYXRlXCIpO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kby1wcmlvcml0eVwiKTtcclxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kby1wcm9qZWN0XCIpO1xyXG5cclxuICBjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlO1xyXG4gIGNvbnN0IGRhdGVWYWx1ZSA9IGRhdGUudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5LnZhbHVlO1xyXG4gIGNvbnN0IHByb2plY3RWYWx1ZSA9IHByb2plY3QudmFsdWU7XHJcbiAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDAwKTtcclxuXHJcbiAgaWYgKG5hbWVWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IG5hbWVWYWx1ZSwgZGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0VmFsdWUsIGlkIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdUYXNrO1xyXG4iLCJpbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiLi9kZWxldGVUYXNrXCI7XHJcblxyXG5jb25zdCB0YXNrc0RPTVJlZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NcIik7XHJcbmNvbnN0IHJlbmRlciA9ICh0YXNrKSA9PiB7XHJcbiAgaWYgKHRhc2submFtZVZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWVWYWx1ZTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZVZhbHVlO1xyXG4gICAgaWYgKHRhc2suZGF0ZVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICB9XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XHJcblxyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5VmFsdWU7XHJcbiAgICBpZiAodGFzay5wcmlvcml0eVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIi1cIjtcclxuICAgIH1cclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrUHJvamVjdC50ZXh0Q29udGVudCA9IHRhc2sucHJvamVjdFZhbHVlO1xyXG4gICAgaWYgKHRhc2sucHJvamVjdFZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICB0YXNrUHJvamVjdC50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgLy8gc2V0IHVuaXF1ZSBpZGVudGlmaWVycyBmb3IgZGVsZXRpbmcgYSB0YXNrIHBvc3NpYmxlIHVzZSBhbiBpZFxyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza3NET01SZWYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9XHJcbn07XHJcbmNvbnN0IHJlbmRlclRhc2tzID0gKHRhc2tzQXJyYXksIGZpbHRlcikgPT4ge1xyXG4gIHdoaWxlICh0YXNrc0RPTVJlZi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIHRhc2tzRE9NUmVmLnJlbW92ZUNoaWxkKHRhc2tzRE9NUmVmLmxhc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWZpbHRlcikge1xyXG4gICAgdGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIHJlbmRlcih0YXNrKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXNrc0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYgKHRhc2sucHJvamVjdFZhbHVlID09PSBmaWx0ZXIpIHtcclxuICAgICAgICByZW5kZXIodGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhc2tzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9uZXdQcm9qZWN0QnRuXCI7XHJcbmltcG9ydCBuZXdUYXNrIGZyb20gXCIuL25ld1Rhc2tcIjtcclxuaW1wb3J0IHJlbmRlclRhc2tzIGZyb20gXCIuL3JlbmRlclRhc2tzXCI7XHJcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gXCIuL25ld1Byb2plY3RcIjtcclxuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4vZGVsZXRlVGFza1wiO1xyXG5pbXBvcnQgY2hhbmdlSGVhZGVyIGZyb20gXCIuL2NoYW5nZUhlYWRlclwiO1xyXG5cclxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcclxuXHJcbmxldCB0b2RvcyA9IFtdO1xyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5jb25zdCBmaWx0ZXIgPSBcIlwiO1xyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXIgZm9yIHRoZSBBbGwgRmlsdGVyXHJcbmNvbnN0IGFsbEZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsXCIpO1xyXG5hbGxGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZW5kZXJUYXNrcyh0b2Rvcyk7XHJcbn0pO1xyXG5cclxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGFzayA9IG5ld1Rhc2soKTtcclxuICBpZiAoT2JqZWN0LmtleXModGFzaykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICB0b2Rvcy5wdXNoKHRhc2spO1xyXG4gICAgcmVuZGVyVGFza3ModG9kb3MpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLWJ0blwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGV0ZUJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGVsZXRlQnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRvZG9zID0gZGVsZXRlVGFzayh0b2RvcywgZGVsZXRlQnRuc1tpXS5pZCk7XHJcbiAgICAgICAgcmVuZGVyVGFza3ModG9kb3MpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxubmV3UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgbmV3UHJvamVjdE5hbWUudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZS50cmltKCkpO1xyXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VIZWFkZXIocHJvamVjdCk7XHJcbiAgICAgIHJlbmRlclRhc2tzKHRvZG9zLCBwcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gICAgbmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xyXG4gICAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=