import { useFetch } from "../../../../uses/useFetch";
// https://api.loanchienmobile.funzy.vn/uploads

export const ItemDataApi = () => {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    return (
        <div>
            <h1>Item Data API</h1>
            <div className="flex flex-wrap">
                <ul>
                    {error && <li>Error: {error}</li>}
                    {loading && <li>Loading...</li>}
                    {data?.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
