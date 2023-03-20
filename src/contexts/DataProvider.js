import { useState, useEffect, createContext, useContext } from "react";
import { getFirestore, getDoc, getDocs, collection, doc } from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from '@firebase/auth'

export const DataContext = createContext()
export const DataProvider = function (props) {
  const [posts, setPosts] = useState([])
  const db = getFirestore()

  async function getPost(id) {
    const docRef = doc(collection(db, "posts", id))
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  async function getCarData(carId) {
    const response = await fetch(
      `https://my-json-server.typicode.com/Llang8/cars-api/cars/${carId}`
    )
    const data = await response.json()
    return data
  }

  useEffect(() => {
    async function getPosts() {
      const querySnapshot = await getDocs(collection(db, "posts"))
      const loadedPosts = []
      querySnapshot.forEach((doc) => {
        loadedPosts.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setPosts(loadedPosts)
    }
    getPosts()
  }, [])

  const value = {
    posts,
    getPost,
    getCarData,
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}