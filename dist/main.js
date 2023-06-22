/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
const renderTasks = (tasksArray, filter) => {
  const tasksDOMRef = document.getElementById("tasks");
  // TODO make option for filter
  if (!filter) {
    while (tasksDOMRef.hasChildNodes()) {
      tasksDOMRef.removeChild(tasksDOMRef.lastChild);
    }
    tasksArray.forEach((task) => {
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




const addTodoBtn = document.getElementById("add-todo-btn");
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

  //   If you render tasks here, if you're filtering by projects, it will reset the view to all tasks.
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUM1QzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ087QUFDUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBTztBQUN0QjtBQUNBO0FBQ0EsSUFBSSx3REFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3UHJvamVjdEJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idG5cIik7XHJcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1uYW1lXCIpO1xyXG5cclxubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG5ld1Byb2plY3ROYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn0pO1xyXG4iLCJjb25zdCBuZXdUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLW5hbWVcIik7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tZGF0ZVwiKTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJpb3JpdHlcIik7XHJcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG8tcHJvamVjdFwiKTtcclxuXHJcbiAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZTtcclxuICBjb25zdCBkYXRlVmFsdWUgPSBkYXRlLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eS52YWx1ZTtcclxuICBjb25zdCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0LnZhbHVlO1xyXG5cclxuICBpZiAobmFtZVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbmFtZVZhbHVlLCBkYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIHByb2plY3RWYWx1ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3VGFzaztcclxuIiwiY29uc3QgcmVuZGVyVGFza3MgPSAodGFza3NBcnJheSwgZmlsdGVyKSA9PiB7XHJcbiAgY29uc3QgdGFza3NET01SZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpO1xyXG4gIC8vIFRPRE8gbWFrZSBvcHRpb24gZm9yIGZpbHRlclxyXG4gIGlmICghZmlsdGVyKSB7XHJcbiAgICB3aGlsZSAodGFza3NET01SZWYuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgIHRhc2tzRE9NUmVmLnJlbW92ZUNoaWxkKHRhc2tzRE9NUmVmLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICB0YXNrc0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYgKHRhc2submFtZVZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2submFtZVZhbHVlKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZVZhbHVlO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gdGFzay5kYXRlVmFsdWU7XHJcbiAgICAgICAgaWYgKHRhc2suZGF0ZVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHlWYWx1ZTtcclxuICAgICAgICBpZiAodGFzay5wcmlvcml0eVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0VmFsdWU7XHJcbiAgICAgICAgaWYgKHRhc2sucHJvamVjdFZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgdGFza3NET01SZWYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGFza3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL25ld1Byb2plY3RCdG5cIjtcclxuaW1wb3J0IG5ld1Rhc2sgZnJvbSBcIi4vbmV3VGFza1wiO1xyXG5pbXBvcnQgcmVuZGVyVGFza3MgZnJvbSBcIi4vcmVuZGVyVGFza3NcIjtcclxuXHJcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ0blwiKTtcclxuY29uc3QgdG9kb3MgPSBbXTtcclxuY29uc3QgcHJvamVjdHMgPSBbXTtcclxuY29uc3QgZmlsdGVyID0gXCJcIjtcclxuXHJcbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRhc2sgPSBuZXdUYXNrKCk7XHJcbiAgaWYgKE9iamVjdC5rZXlzKHRhc2spLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgdG9kb3MucHVzaCh0YXNrKTtcclxuICAgIHJlbmRlclRhc2tzKHRvZG9zKTtcclxuICB9XHJcblxyXG4gIC8vICAgSWYgeW91IHJlbmRlciB0YXNrcyBoZXJlLCBpZiB5b3UncmUgZmlsdGVyaW5nIGJ5IHByb2plY3RzLCBpdCB3aWxsIHJlc2V0IHRoZSB2aWV3IHRvIGFsbCB0YXNrcy5cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==