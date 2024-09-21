import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950">
      <div>
        <h1 className="font-bold m-2 text-cyan-50 text-2xl p-4">
          Shopping lists
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
