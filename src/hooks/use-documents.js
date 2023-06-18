import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "../data";
import { useCallback } from "react";
import { useSession } from "../contexts";

const documentsCollection = collection(db, "document_requests");

export function useDocuments() {
  const { userId } = useSession();

  const getDocumentRequests = useCallback(async () => {
    const q = query(documentsCollection, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    const data = [];

    snapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  }, [userId]);

  const createDocumentRequest = useCallback(
    async (document) => {
      const timestamp = serverTimestamp();
      const doc = { ...document, timestamp, userId };
      return addDoc(documentsCollection, doc);
    },
    [userId]
  );

  const deleteDocumentRequest = useCallback(
    async (id) => {
      return deleteDoc(doc(documentsCollection, id));
    },
    [userId]
  );

  return {
    getDocumentRequests,
    createDocumentRequest,
    deleteDocumentRequest,
  };
}
