/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

  if (nameValue.trim() === "") {
    return {};
  }

  return { nameValue, dateValue, priorityValue, projectValue };
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

    tasksDOMRef.appendChild(div);
  }
};
const renderTasks = (tasksArray, filter) => {
  while (tasksDOMRef.hasChildNodes()) {
    tasksDOMRef.removeChild(tasksDOMRef.lastChild);
  }

  if (!filter) {
    tasksArray.forEach((task) => {
      console.log(`rendering: ${task}`);
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





const addTodoBtn = document.getElementById("add-todo-btn");
const newProjectName = document.getElementById("new-project-name");
const todos = [];
const projects = [];
const filter = "";

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = (0,_newTask__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (Object.keys(task).length !== 0) {
    todos.push(task);
    (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos);
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
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7QUNsQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUN0RDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNPO0FBQ1E7QUFDRjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFPO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLHdEQUFXO0FBQ2Y7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVc7QUFDakIsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0QnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXJUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBjb25zdCB2aWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlld3NcIik7XHJcbiAgY29uc3QgcHJvamVjdHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJvamVjdFwiKTtcclxuICBpZiAocHJvamVjdE5hbWUudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgIHZpZXdzLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3ROYW1lKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdHNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0TmFtZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0O1xyXG4iLCJjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idG5cIik7XHJcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1uYW1lXCIpO1xyXG5cclxubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG5ld1Byb2plY3ROYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn0pO1xyXG4iLCJjb25zdCBuZXdUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLW5hbWVcIik7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tZGF0ZVwiKTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJpb3JpdHlcIik7XHJcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJvamVjdFwiKTtcclxuXHJcbiAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZTtcclxuICBjb25zdCBkYXRlVmFsdWUgPSBkYXRlLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eS52YWx1ZTtcclxuICBjb25zdCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0LnZhbHVlO1xyXG5cclxuICBpZiAobmFtZVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbmFtZVZhbHVlLCBkYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIHByb2plY3RWYWx1ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3VGFzaztcclxuIiwiY29uc3QgdGFza3NET01SZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpO1xyXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xyXG4gIGlmICh0YXNrLm5hbWVWYWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRhc2submFtZVZhbHVlKTtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblxyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lVmFsdWU7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGVWYWx1ZTtcclxuICAgIGlmICh0YXNrLmRhdGVWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgfVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEdWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eVZhbHVlO1xyXG4gICAgaWYgKHRhc2sucHJpb3JpdHlWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICB9XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuXHJcbiAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3RWYWx1ZTtcclxuICAgIGlmICh0YXNrLnByb2plY3RWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSBcIi1cIjtcclxuICAgIH1cclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdCk7XHJcblxyXG4gICAgdGFza3NET01SZWYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9XHJcbn07XHJcbmNvbnN0IHJlbmRlclRhc2tzID0gKHRhc2tzQXJyYXksIGZpbHRlcikgPT4ge1xyXG4gIHdoaWxlICh0YXNrc0RPTVJlZi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIHRhc2tzRE9NUmVmLnJlbW92ZUNoaWxkKHRhc2tzRE9NUmVmLmxhc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWZpbHRlcikge1xyXG4gICAgdGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGByZW5kZXJpbmc6ICR7dGFza31gKTtcclxuICAgICAgcmVuZGVyKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAodGFzay5wcm9qZWN0VmFsdWUgPT09IGZpbHRlcikge1xyXG4gICAgICAgIHJlbmRlcih0YXNrKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGFza3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL25ld1Byb2plY3RCdG5cIjtcclxuaW1wb3J0IG5ld1Rhc2sgZnJvbSBcIi4vbmV3VGFza1wiO1xyXG5pbXBvcnQgcmVuZGVyVGFza3MgZnJvbSBcIi4vcmVuZGVyVGFza3NcIjtcclxuaW1wb3J0IG5ld1Byb2plY3QgZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xyXG5cclxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcclxuY29uc3QgdG9kb3MgPSBbXTtcclxuY29uc3QgcHJvamVjdHMgPSBbXTtcclxuY29uc3QgZmlsdGVyID0gXCJcIjtcclxuXHJcbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRhc2sgPSBuZXdUYXNrKCk7XHJcbiAgaWYgKE9iamVjdC5rZXlzKHRhc2spLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgdG9kb3MucHVzaCh0YXNrKTtcclxuICAgIHJlbmRlclRhc2tzKHRvZG9zKTtcclxuICB9XHJcbn0pO1xyXG5cclxubmV3UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgbmV3UHJvamVjdE5hbWUudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZS50cmltKCkpO1xyXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICByZW5kZXJUYXNrcyh0b2RvcywgcHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=