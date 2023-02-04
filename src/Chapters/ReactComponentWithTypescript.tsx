const sum = (n: number): number => n + 2;
sum(3);

// const ReactComponentWithTypescript = ({ name }: { name: string }) => {
const ReactComponentWithTypescript = (props: { name: string }): JSX.Element => {
    // if(props.name === "Sanjay") return null;
    if (props.name === "Sanjay") return <h1>hello</h1>;

    return (
        <section className="badge">
            <header className="badge-header">
                <h1 className="text-5xl">HELLO</h1>
                <p>My name is…</p>
            </header>
            <div className="badge-body">
                {/* <p className="badge-name">{name}</p> */}
                <p className="badge-name">{props.name}</p>
            </div>
            <footer className="badge-footer" />
        </section>
    )
}

export default ReactComponentWithTypescript