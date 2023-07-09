//Задача № 1
function cachingDecoratorNew(func) {
	let cache = new Map();
	let arr = [];

	return function(...args) {
		const hash = [...args];
		if (hash in cache) {
			const index = arr.indexOf(hash);
			arr.splice(index, 1);
			arr.push(hash);
			return `Из кэша: ${cache[hash]}`;
		}

		let result = func(...args);
		cache[hash] = result;
		arr.push(hash);
		if (arr.length > 5) {
			let oldHash = arr.shift();
			delete cache[oldHash];
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timerId;

	function wrapper(...args) {
		if (!timerId) {
			func(...args);
			wrapper.count++;
		}
		wrapper.allCount++;

		clearTimeout(timerId);
		timerId = setTimeout(() => {
			func(...args);
			wrapper.count++;
		}, delay);
	}
	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
}