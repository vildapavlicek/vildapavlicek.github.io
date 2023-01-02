/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/wasm_self_driving_car_bg.wasm": function() {
/******/ 			return {
/******/ 				"./wasm_self_driving_car_bg.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_new_693216e109162396": function() {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_new_693216e109162396"]();
/******/ 					},
/******/ 					"__wbg_stack_0ddaca5d1abfb52f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_stack_0ddaca5d1abfb52f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_09919627ac0992f5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_error_09919627ac0992f5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_localStorage_2409bbdfe5a4d2a7": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_localStorage_2409bbdfe5a4d2a7"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_ad2acb326fc35bdb": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_width_ad2acb326fc35bdb"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_65ee0c47b0a97297": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_height_65ee0c47b0a97297"](p0i32);
/******/ 					},
/******/ 					"__wbg_getItem_9cb4c95f48b3e51b": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_getItem_9cb4c95f48b3e51b"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_04c4ba5c4a9c337f": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setItem_04c4ba5c4a9c337f"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_delete_27f2e31e06970b8b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_delete_27f2e31e06970b8b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_error_e2677af4c7f31a14": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_error_e2677af4c7f31a14"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_7761a8b8a8c1864e": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_log_7761a8b8a8c1864e"](p0i32);
/******/ 					},
/******/ 					"__wbg_canvas_d59c89771f4f2689": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_canvas_d59c89771f4f2689"](p0i32);
/******/ 					},
/******/ 					"__wbg_setglobalAlpha_3b2742cf3ea8149d": function(p0i32,p1f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setglobalAlpha_3b2742cf3ea8149d"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_0ab7348da47291bb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setstrokeStyle_0ab7348da47291bb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_a0bd3a7496c1c5ae": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setfillStyle_a0bd3a7496c1c5ae"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setlineWidth_5d6cf7ef78aab123": function(p0i32,p1f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setlineWidth_5d6cf7ef78aab123"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_setlineDashOffset_596baca640e30088": function(p0i32,p1f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setlineDashOffset_596baca640e30088"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_setfont_82970f5214a91062": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setfont_82970f5214a91062"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_settextAlign_a08da9db0957f267": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_settextAlign_a08da9db0957f267"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_settextBaseline_839228178275498a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_settextBaseline_839228178275498a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_beginPath_996aa2e0e610ea8f": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_beginPath_996aa2e0e610ea8f"](p0i32);
/******/ 					},
/******/ 					"__wbg_fill_86ef462953b4d991": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_fill_86ef462953b4d991"](p0i32);
/******/ 					},
/******/ 					"__wbg_stroke_a8d9584a20f7260f": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_stroke_a8d9584a20f7260f"](p0i32);
/******/ 					},
/******/ 					"__wbg_setLineDash_da82d2c7ba17d0c3": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_setLineDash_da82d2c7ba17d0c3"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_arc_1e4d496206f232b6": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_arc_1e4d496206f232b6"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_lineTo_353b6fb86b5f4517": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_lineTo_353b6fb86b5f4517"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_moveTo_551e83e6728c3a72": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_moveTo_551e83e6728c3a72"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_restore_2eda799771bbdaf3": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_restore_2eda799771bbdaf3"](p0i32);
/******/ 					},
/******/ 					"__wbg_save_88e5b8eebd3f0de5": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_save_88e5b8eebd3f0de5"](p0i32);
/******/ 					},
/******/ 					"__wbg_fillText_a7a551c0e8034440": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_fillText_a7a551c0e8034440"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_strokeText_77eab2cb4242e746": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_strokeText_77eab2cb4242e746"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_translate_3b6341171a005432": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_translate_3b6341171a005432"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_new_2ab697f1555e0dbc": function() {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_new_2ab697f1555e0dbc"]();
/******/ 					},
/******/ 					"__wbg_push_811c8b08bf4ff9d5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_push_811c8b08bf4ff9d5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_buffer_de1150f91b23aa89": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_buffer_de1150f91b23aa89"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_230fad9c7b4a8a81": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_newwithbyteoffsetandlength_230fad9c7b4a8a81"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_8e43cdeedb50d9f6": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_new_8e43cdeedb50d9f6"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_caddd543874f3c9a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_set_caddd543874f3c9a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_55822972945cef2e": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_length_55822972945cef2e"](p0i32);
/******/ 					},
/******/ 					"__wbg_floor_a68aa7c1b572044e": function(p0f64) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_floor_a68aa7c1b572044e"](p0f64);
/******/ 					},
/******/ 					"__wbg_random_9f33d5bdc74069f8": function() {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbg_random_9f33d5bdc74069f8"]();
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/wasm_self_driving_car_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/wasm_self_driving_car_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/wasm_self_driving_car_bg.wasm":"3c7d20e735b0f5e67300"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\r\n// asynchronously. This `bootstrap.js` file does the single async import, so\r\n// that no one else needs to worry about it again.\r\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\r\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });