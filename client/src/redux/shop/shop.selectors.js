import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    selectShop,
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    selectCollections,
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        selectCollections,
        collections => collections ? collections[collectionUrlParam] : null
    );

export const selectIsCollectionFetching = createSelector(
    selectShop,
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    selectShop,
    //if the collection is loaded, we get true, otherwise we get false
    shop => !!shop.collections
)

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