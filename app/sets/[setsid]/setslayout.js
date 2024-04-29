
"use client"
export default function Setslayout({params}) {
   console.log(params.setsid)
    return (
        <main className="flex min-h-screen bg-red flex-col items-center justify-center  mcolor ">
          {params.setsid}
        </main>
    );
}