import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query,deleteDoc,doc } from "firebase/firestore";

export async function getItems(userId,ItemListStateSetter){
    try {
        const allItemsReference=collection(db,"users",userId,"items");
        const allItemsQuery = query(allItemsReference);
        //all snapshot in the specific query
        //await getDocs(allBlogPostQuery);
        const querySnapshotArray = await getDocs(allItemsQuery);
        //TAKE THE DOCSNAP AND EXTRACT ALL DATA
        let ItemsArray=[];
        querySnapshotArray.forEach((docSnap) => {
            let thisPost={
                id:docSnap.id,
                ...docSnap.data()
            }
            console.log(thisPost);
            ItemsArray.push(thisPost);

        });
        //return ItemsArray;
        //
        ItemListStateSetter(ItemsArray);
    } catch (error) {
        console.log(error);
    }
}
export async function addItem(userId,itemObj){
    try {
        const newItemReference=collection(db,"users",userId,"items");
        const newItemPromise=await addDoc(newItemReference,itemObj);
        //console.log(newItemPromise.id);
    } catch (error) {
        console.log(error);
    }

}
export async function deleteItem(userId,itemid){
    try {
    
        const ItemDelRef = doc(db,"users",userId,"items",itemid);
        console.log(`DocumentID:${itemid}`);
        await deleteDoc(ItemDelRef);
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
}