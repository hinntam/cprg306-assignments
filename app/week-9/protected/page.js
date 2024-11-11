"use client";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function ProtectedPage() {
  const { user } = useUserAuth();
  return (
    <main className="bg-slate-950">
      <header>
        <h1 className="font-bold m-2 text-cyan-50 text-2xl p-4">
          Protected Page
        </h1>
      </header>
      {user ? (
        <div className="text-cyan-50">
          hello,{user.displayName}, your user ID is:{user.uid}
        </div>
      ) : (
        <div className="text-cyan-50">
          <p>You must be logged in to view this page</p>
          <Link href="/week-9/">Click here to return the sign in page</Link>
        </div>
      )}
    </main>
  );
}
