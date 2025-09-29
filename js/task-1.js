const categoriesList = document.querySelectorAll("#categories .item");

// 1. Порахувати кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// 2. Для кожної категорії вивести заголовок і кількість елементів
categoriesList.forEach((category) => {
	const title = category.querySelector(".item-header").textContent;

	const elementsCount = category.querySelectorAll(".item-list li").length;

	console.log(`Category: ${title}`);
	console.log(`Elements: ${elementsCount}`);
});
