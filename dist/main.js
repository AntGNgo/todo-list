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
    newProjectName.value = "";
    newProjectName.classList.toggle("hidden");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7QUNsQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUN0RDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNPO0FBQ1E7QUFDRjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFPO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLHdEQUFXO0FBQ2Y7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVc7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3UHJvamVjdEJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgY29uc3Qgdmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdzXCIpO1xyXG4gIGNvbnN0IHByb2plY3RzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLXByb2plY3RcIik7XHJcbiAgaWYgKHByb2plY3ROYW1lLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICB2aWV3cy5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0TmFtZSk7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgIHByb2plY3RzSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdE5hbWU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdDtcclxuIiwiY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtYnRuXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcclxuXHJcbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG59KTtcclxuIiwiY29uc3QgbmV3VGFzayA9ICgpID0+IHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kby1uYW1lXCIpO1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLWRhdGVcIik7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLXByaW9yaXR5XCIpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLXByb2plY3RcIik7XHJcblxyXG4gIGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWUudmFsdWU7XHJcbiAgY29uc3QgZGF0ZVZhbHVlID0gZGF0ZS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHkudmFsdWU7XHJcbiAgY29uc3QgcHJvamVjdFZhbHVlID0gcHJvamVjdC52YWx1ZTtcclxuXHJcbiAgaWYgKG5hbWVWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IG5hbWVWYWx1ZSwgZGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0VmFsdWUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld1Rhc2s7XHJcbiIsImNvbnN0IHRhc2tzRE9NUmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc1wiKTtcclxuY29uc3QgcmVuZGVyID0gKHRhc2spID0+IHtcclxuICBpZiAodGFzay5uYW1lVmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrLm5hbWVWYWx1ZSk7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZVZhbHVlO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gdGFzay5kYXRlVmFsdWU7XHJcbiAgICBpZiAodGFzay5kYXRlVmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBcIi1cIjtcclxuICAgIH1cclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcclxuXHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHlWYWx1ZTtcclxuICAgIGlmICh0YXNrLnByaW9yaXR5VmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgfVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0VmFsdWU7XHJcbiAgICBpZiAodGFzay5wcm9qZWN0VmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICB9XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpO1xyXG5cclxuICAgIHRhc2tzRE9NUmVmLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfVxyXG59O1xyXG5jb25zdCByZW5kZXJUYXNrcyA9ICh0YXNrc0FycmF5LCBmaWx0ZXIpID0+IHtcclxuICB3aGlsZSAodGFza3NET01SZWYuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICB0YXNrc0RPTVJlZi5yZW1vdmVDaGlsZCh0YXNrc0RPTVJlZi5sYXN0Q2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFmaWx0ZXIpIHtcclxuICAgIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgcmVuZGVyaW5nOiAke3Rhc2t9YCk7XHJcbiAgICAgIHJlbmRlcih0YXNrKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXNrc0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYgKHRhc2sucHJvamVjdFZhbHVlID09PSBmaWx0ZXIpIHtcclxuICAgICAgICByZW5kZXIodGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhc2tzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9uZXdQcm9qZWN0QnRuXCI7XHJcbmltcG9ydCBuZXdUYXNrIGZyb20gXCIuL25ld1Rhc2tcIjtcclxuaW1wb3J0IHJlbmRlclRhc2tzIGZyb20gXCIuL3JlbmRlclRhc2tzXCI7XHJcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gXCIuL25ld1Byb2plY3RcIjtcclxuXHJcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ0blwiKTtcclxuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LW5hbWVcIik7XHJcbmNvbnN0IHRvZG9zID0gW107XHJcbmNvbnN0IHByb2plY3RzID0gW107XHJcbmNvbnN0IGZpbHRlciA9IFwiXCI7XHJcblxyXG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0YXNrID0gbmV3VGFzaygpO1xyXG4gIGlmIChPYmplY3Qua2V5cyh0YXNrKS5sZW5ndGggIT09IDApIHtcclxuICAgIHRvZG9zLnB1c2godGFzayk7XHJcbiAgICByZW5kZXJUYXNrcyh0b2Rvcyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm5ld1Byb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIG5ld1Byb2plY3ROYW1lLnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUudHJpbSgpKTtcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBuZXdQcm9qZWN0TmFtZS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgcmVuZGVyVGFza3ModG9kb3MsIHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XHJcbiAgICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==