import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    selectShop,
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    selectCollections,
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        selectCollections,
        collections => collections[collectionUrlParam]
    );


//EXAMPLE
// export const selectCollectionsForPreview = createSelector(
//     selectCollections,
//     (collections) => {
//         console.log(collections);
//         let newCollection = Object.keys(collections).map(key => collections[key]);
//         console.log(newCollection);
//         return newCollection;
//     }
// );