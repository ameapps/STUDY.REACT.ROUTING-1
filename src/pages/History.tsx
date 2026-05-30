export function History() {
    const elements = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="container">
            <ul>
                {elements.map((row, index) => (<li key={index}>item {index}</li>))}
            </ul>
        </div>
    );
}