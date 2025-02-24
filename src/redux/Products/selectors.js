import { createSelector } from '@reduxjs/toolkit'

export const selectProducts = state => state.products.products
export const selectOneProduct = state => state.products.oneProduct
export const selectReviews = state => state.products.reviews

export const selectIsLoading = state => state.products.isLoading
export const selectError = state => state.products.error
export const selectCategories = state => state.products.categories

export const selectFilteredProducts = state => state.products.filteredProducts
export const selectCurrentPage = state => state.products.page
export const selectTotalPages = state => state.products.totalPages

export const selectVisibleProducts = createSelector(
  [selectProducts, selectFilteredProducts],
  (products, filteredProducts) => {
    return filteredProducts.length > 0 ? filteredProducts : products;
  }
);