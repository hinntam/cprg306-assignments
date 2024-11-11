"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"

export default function SignInPage(){
    const{user, gitHubSignIn, firebaseSignOut}= useUserAuth();
    async function handleSignIn(){
        try{
            await gitHubSignIn();
        }
        catch(error){
            console.log(error);

        }
    }
    async function handleSignOut(params) {
        try{
            await firebaseSignOut();
        }
        catch(error){
            console.log(error);
        }
    }

    console.dir(user);



    return(
        <main>
           <h1>Shopping List App</h1>
            <div>
            {user ? (
                <div>
                    <p>Signed in as {user.displayName} {user.email} !</p>
                    <button
                    type="button"
                    className="text-lg text-white bg-blue-500 rounded px-2 py-1 mt-4"
                    onClick={handleSignOut}
                    >Sign out</button>
                    <div>
                        <Link href="/week-9-assignment/shopping-list/">Continue to your Shopping List</Link>
                    </div>
                    
                </div>
            ):(
                <div>
                    <button
                    type="button"
                    className="text-lg text-white bg-blue-500 rounded px-2 py-1 mt-4"
                    onClick={handleSignIn}
                    >Sign in with Github</button>

                </div>
            )}    
            
            </div>
        </main>
    )
}