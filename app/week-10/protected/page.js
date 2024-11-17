"use client"
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function ProtectedPage(){
    const {user} = useUserAuth();
    return(
        <main>
            <header>
                <h1>
                    Protected Page
                </h1>
            </header>
            {
                user?(
                    <div>
                        hello,{user.displayName}, your user ID is:{user.uid}
                    </div>
                ):(<div>
                    <p>You must be logged in to view this page</p>
                    <Link href="/week-9/">Click here to return the sign in page</Link>
                </div>)
            }    
        </main>
    );
}