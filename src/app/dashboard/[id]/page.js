import Link from "next/link";

export default async function Dashboard({params}) {
    const response = await fetch(`https://api.github.com/users/${params.id}`, {
        cache: 'no-store'
    });
    const user = await response.json();
    
    return (
        <>
            <h2>Dashboard</h2>
            <Link href="/">Home - {params.id}</Link>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </>
    )
}