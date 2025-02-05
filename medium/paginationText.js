// Showing X to Y of Z Products.
// A category page displays a set number of products per page, with pagination at the bottom allowing the user to move from page to page.
// Given that you know the page you are on, how many products are in the category in total, and how many products are on any given page, how would you output a simple string showing which products you are viewing..

var paginationText = function (pageNumber, pageSize, totalProducts) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalProducts);

  return `Showing ${
    startIndex + 1
  } to ${endIndex} of ${totalProducts} Products.`;
};
